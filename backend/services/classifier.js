// NLP-based case classification service (mock)
const caseKeywords = {
    'Family Law': ['divorce', 'marriage', 'custody', 'alimony', 'domestic', 'family', 'child', 'spouse'],
    'Property Law': ['property', 'land', 'boundary', 'eviction', 'rent', 'tenant', 'ownership', 'deed'],
    'Criminal Law': ['crime', 'theft', 'assault', 'murder', 'bail', 'fir', 'police', 'arrest', 'fraud'],
    'Consumer Rights': ['consumer', 'product', 'refund', 'defective', 'warranty', 'online', 'shopping'],
    'Labor Law': ['job', 'fired', 'salary', 'termination', 'employer', 'workplace', 'harassment'],
    'Cyber Crime': ['cyber', 'hacking', 'online fraud', 'identity', 'phishing', 'social media'],
    'Tax Law': ['tax', 'income', 'gst', 'return', 'evasion'],
    'Constitutional': ['rights', 'constitution', 'fundamental', 'freedom', 'discrimination'],
};

function classifyCase(description) {
    const lower = description.toLowerCase();
    let bestMatch = 'General Legal';
    let bestScore = 0;

    for (const [category, keywords] of Object.entries(caseKeywords)) {
        let score = 0;
        keywords.forEach(kw => {
            if (lower.includes(kw)) score += 15;
        });
        if (score > bestScore) {
            bestScore = score;
            bestMatch = category;
        }
    }

    const baseConfidence = bestScore > 0
        ? Math.min(55 + bestScore + Math.random() * 20, 98)
        : 25 + Math.random() * 30;

    return {
        category: bestMatch,
        confidence: Math.round(baseConfidence),
        needsHumanReview: baseConfidence < 60,
    };
}

module.exports = { classifyCase };
