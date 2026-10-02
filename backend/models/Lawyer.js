const mongoose = require('mongoose');

const lawyerSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    barCouncilId: { type: String, required: true },
    specializations: [{ type: String }],
    experience: { type: Number, required: true },
    location: { type: String, required: true },
    rating: { type: Number, default: 0 },
    totalCases: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    bio: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lawyer', lawyerSchema);
