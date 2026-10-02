const router = require('express').Router();
const Lawyer = require('../models/Lawyer');
const Case = require('../models/Case');
const { protect, authorize } = require('../middleware/auth');

// Get cases assigned to lawyer
router.get('/cases', protect, authorize('lawyer'), async (req, res) => {
    try {
        const lawyer = await Lawyer.findOne({ user: req.user._id });
        if (!lawyer) return res.status(404).json({ error: 'Lawyer profile not found' });
        const cases = await Case.find({
            $or: [{ assignedLawyer: lawyer._id }, { classifiedType: { $in: lawyer.specializations }, status: 'classified' }]
        }).populate('citizen', 'name phone location').sort('-createdAt');
        res.json(cases);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Accept / Reject case
router.patch('/cases/:id', protect, authorize('lawyer'), async (req, res) => {
    try {
        const { action } = req.body; // 'accept' or 'reject'
        const lawyer = await Lawyer.findOne({ user: req.user._id });
        const updatedCase = await Case.findByIdAndUpdate(req.params.id, {
            status: action === 'accept' ? 'accepted' : 'rejected',
            ...(action === 'accept' && { assignedLawyer: lawyer._id }),
        }, { new: true });
        if (action === 'accept') {
            lawyer.totalCases += 1;
            await lawyer.save();
        }
        res.json(updatedCase);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Toggle availability
router.patch('/availability', protect, authorize('lawyer'), async (req, res) => {
    try {
        const lawyer = await Lawyer.findOne({ user: req.user._id });
        lawyer.isAvailable = !lawyer.isAvailable;
        await lawyer.save();
        res.json({ isAvailable: lawyer.isAvailable });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get lawyer profile
router.get('/profile', protect, authorize('lawyer'), async (req, res) => {
    try {
        const lawyer = await Lawyer.findOne({ user: req.user._id }).populate('user', 'name email phone');
        res.json(lawyer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
