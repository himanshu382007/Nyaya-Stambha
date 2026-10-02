const router = require('express').Router();
const Case = require('../models/Case');
const Lawyer = require('../models/Lawyer');
const { protect } = require('../middleware/auth');
const { classifyCase } = require('../services/classifier');

// Submit a new case
router.post('/', protect, async (req, res) => {
    try {
        const { description, language, location, isEmergency } = req.body;
        const classification = classifyCase(description);
        const newCase = await Case.create({
            citizen: req.user._id,
            description,
            language,
            location,
            isEmergency,
            classifiedType: classification.category,
            confidence: classification.confidence,
            status: classification.needsHumanReview ? 'review' : 'classified',
        });

        let matchedLawyers = [];
        if (!classification.needsHumanReview) {
            matchedLawyers = await Lawyer.find({
                specializations: classification.category,
                isAvailable: true,
                isVerified: true,
                ...(location && { location }),
            }).populate('user', 'name email').limit(5);
        }

        res.status(201).json({ case: newCase, classification, matchedLawyers });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get user's cases
router.get('/my-cases', protect, async (req, res) => {
    try {
        const cases = await Case.find({ citizen: req.user._id }).sort('-createdAt');
        res.json(cases);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get single case
router.get('/:id', protect, async (req, res) => {
    try {
        const c = await Case.findById(req.params.id).populate('assignedLawyer');
        if (!c) return res.status(404).json({ error: 'Case not found' });
        res.json(c);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
