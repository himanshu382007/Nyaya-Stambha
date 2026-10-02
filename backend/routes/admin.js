const router = require('express').Router();
const Case = require('../models/Case');
const Lawyer = require('../models/Lawyer');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');

// Get all cases (admin)
router.get('/cases', protect, authorize('admin'), async (req, res) => {
    try {
        const cases = await Case.find().populate('citizen', 'name email').populate('assignedLawyer').sort('-createdAt');
        res.json(cases);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Override case classification
router.patch('/cases/:id/override', protect, authorize('admin'), async (req, res) => {
    try {
        const { classifiedType, adminNotes } = req.body;
        const c = await Case.findByIdAndUpdate(req.params.id, {
            classifiedType,
            adminOverride: classifiedType,
            adminNotes,
            confidence: 95,
            status: 'classified',
        }, { new: true });
        res.json(c);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all lawyers
router.get('/lawyers', protect, authorize('admin'), async (req, res) => {
    try {
        const lawyers = await Lawyer.find().populate('user', 'name email phone');
        res.json(lawyers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Verify / manage lawyer
router.patch('/lawyers/:id', protect, authorize('admin'), async (req, res) => {
    try {
        const lawyer = await Lawyer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(lawyer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Analytics
router.get('/analytics', protect, authorize('admin'), async (req, res) => {
    try {
        const totalCases = await Case.countDocuments();
        const byType = await Case.aggregate([{ $group: { _id: '$classifiedType', count: { $sum: 1 } } }]);
        const byStatus = await Case.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]);
        const avgConfidence = await Case.aggregate([{ $group: { _id: null, avg: { $avg: '$confidence' } } }]);
        const totalLawyers = await Lawyer.countDocuments();
        const verifiedLawyers = await Lawyer.countDocuments({ isVerified: true });
        res.json({ totalCases, byType, byStatus, avgConfidence: avgConfidence[0]?.avg || 0, totalLawyers, verifiedLawyers });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
