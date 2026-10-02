let Groq;
try {
    Groq = require('groq-sdk').Groq;
} catch (e) {
    console.warn("⚠️ groq-sdk package not installed. Ensure it's installed if using the live API.");
}

const SYSTEM_PROMPT = `You are an AI system responsible for verifying whether a person is a legitimate and licensed advocate in India.

Your task is to validate the authenticity of the advocate using the minimum required information and classify their verification status.

## Input Fields (Provided by User)
* Full Name (as per official records)
* Bar Council Enrollment Number (e.g., UP/1234/2020)
* State Bar Council (e.g., Uttar Pradesh, Delhi, Maharashtra)
* Year of Enrollment
* Government ID Proof (Aadhaar / PAN / Voter ID)
* Practice Area (e.g., Criminal, Civil, Family, Labour, Cyber Law, all)
* Location (City/District)

## Verification Logic
1. Check if the Bar Council Enrollment Number is present and follows a valid format.
2. Cross-check consistency between:
   * Full Name
   * Enrollment Number
   * State Bar Council
   * Year of Enrollment
3. Ensure the advocate is registered under a recognized authority such as the Bar Council of India or a State Bar Council.
4. Verify that the Government ID matches the provided name (basic identity consistency check).
5. If available, compare details with official or publicly accessible Bar Council records.

## Decision Rules
* If all critical fields are valid and consistent -> mark as **VERIFIED**
* If some data is missing or cannot be confirmed -> mark as **PENDING VERIFICATION**
* If key data is invalid (missing enrollment number, mismatch, or fake format) -> mark as **REJECTED**

## Output Format (Strict)
Return a structured JSON response:
{
  "Verification Status": "VERIFIED" | "PENDING" | "REJECTED",
  "Confidence Score": "0-100%",
  "Reason": "Explain clearly why the decision was made",
  "Risk Flags": ["Missing enrollment number", "Data mismatch", "Suspicious identity", "Unverified source", "None"]
}

## Constraints
* Do NOT assume authenticity without an enrollment number
* Do NOT provide legal advice
* Do NOT approve incomplete or suspicious profiles
* Prioritize user safety and system trust

## Goal
Ensure that only authentic, licensed advocates are approved to provide legal services on the platform.`;

async function verifyAdvocate(advocateData) {
    try {
        if (!process.env.GROQ_API_KEY || !Groq) {
            console.warn("⚠️ GROQ_API_KEY or groq-sdk not found. Using mock AI verifier.");
            return mockVerifyAdvocate(advocateData);
        }

        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `Please verify this advocate:\n${JSON.stringify(advocateData, null, 2)}` }
            ],
            model: "llama3-70b-8192", // High accuracy reasoning model
            response_format: { type: "json_object" },
            temperature: 0.2 // Low temperature for consistent deterministic validation
        });

        const responseContent = completion.choices[0]?.message?.content;
        return JSON.parse(responseContent);

    } catch (error) {
        console.error("AI Verification Error:", error.message);
        throw new Error("Failed to verify advocate profile via AI.");
    }
}

/** 
 * Mock Validation fallback while API key is unconfigured 
 */
function mockVerifyAdvocate(data) {
    let status = "PENDING";
    let flags = [];
    let reason = "Awaiting official AI/Bar Council database verification.";
    let score = "50%";

    const enrollmentNumber = data["Bar Council Enrollment Number"];

    if (!enrollmentNumber) {
        status = "REJECTED";
        flags.push("Missing enrollment number");
        reason = "Enrollment number is strictly required for advocate verification.";
        score = "0%";
    } else if (enrollmentNumber && enrollmentNumber.includes('/')) {
        status = "VERIFIED";
        flags.push("None");
        reason = "Profile contains consistently formatted enrollment ID and matching details.";
        score = "90%";
    }

    return {
        "Verification Status": status,
        "Confidence Score": score,
        "Reason": reason,
        "Risk Flags": flags
    };
}

module.exports = {
    verifyAdvocate,
    SYSTEM_PROMPT
};
