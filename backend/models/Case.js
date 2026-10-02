const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    citizen: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    language: { type: String, default: 'en' },
    classifiedType: { type: String },
    confidence: { type: Number, default: 0 },
    status: { type: String, enum: ['pending', 'classified', 'matched', 'accepted', 'rejected', 'review', 'resolved'], default: 'pending' },
    assignedLawyer: { type: mongoose.Schema.Types.ObjectId, ref: 'Lawyer' },
    adminOverride: { type: String },
    adminNotes: { type: String },
    location: { type: String },
    isEmergency: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

caseSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Case', caseSchema);
