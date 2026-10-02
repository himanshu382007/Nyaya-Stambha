const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { verifyAdvocate } = require('../services/advocateVerifier');

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });

// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role, phone, location, barCouncilId, stateBarCouncil, yearOfEnrollment, governmentId, practiceArea } = req.body;
        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ error: 'Email already registered' });

        let aiVerification = null;
        if (role === 'lawyer') {
            const verificationTarget = {
                "Full Name": name,
                "Bar Council Enrollment Number": barCouncilId,
                "State Bar Council": stateBarCouncil,
                "Year of Enrollment": yearOfEnrollment,
                "Government ID Proof": governmentId,
                "Practice Area": practiceArea,
                "Location": location
            };
            aiVerification = await verifyAdvocate(verificationTarget);

            if (aiVerification["Verification Status"] === "REJECTED") {
                return res.status(400).json({
                    error: 'Advocate Verification Failed',
                    details: aiVerification
                });
            }
        }

        const user = await User.create({
            name, email, password, role, phone, location,
            barCouncilId,
            verificationStatus: aiVerification ? aiVerification["Verification Status"] : "VERIFIED",
            verificationScore: aiVerification ? aiVerification["Confidence Score"] : null
        });

        const token = signToken(user._id);
        res.status(201).json({
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
            verificationDetails: aiVerification
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = signToken(user._id);
        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
