// ===== NYAYA STAMBHA - MAIN APPLICATION =====

// ===== TRANSLATIONS =====
const translations = {
  en: {
    heroTag: 'AI-Powered Legal Assistance',
    heroTitle1: 'Nyaya Stambha –', heroTitle2: 'A Pillar of Justice', heroTitle3: 'for Every Citizen',
    heroDesc: 'India\'s first AI-driven legal assistance platform. Describe your problem via voice or text, and get connected with verified lawyers instantly.',
    btnHelp: '⚖️ Get Legal Help Now', btnEmergency: '🚨 Emergency Legal Call',
    howTag: 'Simple Process', howTitle: 'How It Works', howDesc: 'Three easy steps to get the legal help you need.',
    step1Title: 'Describe Your Problem', step1Desc: 'Use voice or text to explain your legal situation in your preferred language.',
    step2Title: 'AI Classifies Your Case', step2Desc: 'Our AI analyzes your description and classifies the case type with a confidence score.',
    step3Title: 'Get Matched', step3Desc: 'Connect with a verified lawyer specializing in your case type, near your location.',
    featTag: 'Why Choose Us', featTitle: 'Powerful Features', featDesc: 'Built for the people, powered by cutting-edge AI.',
    helpTag: 'Get Assistance', helpTitle: 'Get Legal Help', helpDesc: 'Describe your legal issue using voice or text.',
    micLabel: 'Tap to speak', langLabel: 'Select Language', descLabel: 'Describe Your Legal Issue', submitBtn: 'Analyze & Find Lawyer',
    faqTag: 'Common Questions', faqTitle: 'Frequently Asked Questions',
    blogTag: 'Legal Awareness', blogTitle: 'Know Your Rights',
    footerDesc: 'Bridging the gap between citizens and justice through AI-powered legal assistance.',
    footerDisclaimer: '© 2026 Nyaya Stambha. All rights reserved. This platform provides legal information, not legal advice.',
    navHome: 'Home', navHow: 'How It Works', navHelp: 'Get Help', navBlog: 'Blog', navFaq: 'FAQ', navLogin: 'Login',
    chatGreeting: 'Hello! I am Nyaya Mitra, your personal AI legal assistant. To better assist you, may I know your name?',
    reviewMsg: '⏳ Human Legal Review in Progress', matchMsg: '✅ Lawyers Matched for You',
    heroTagVoice: 'Voice-First AI Legal Platform',
    heroTitle1Voice: 'Speak Your Truth.', heroTitle2Voice: 'Find Your Justice.',
    heroDescVoice: 'The law shouldn\'t be complicated. Just tap the glowing microphone and explain your situation in your own language. Our AI handles the rest.',
  },
  bn: {
    heroTag: 'AI-চালিত আইনি সহায়তা',
    heroTitle1: 'ন্যায় স্তম্ভ –', heroTitle2: 'প্রতিটি নাগরিকের জন্য', heroTitle3: 'ন্যায়ের স্তম্ভ',
    heroDesc: 'ভারতের প্রথম AI-চালিত আইনি সহায়তা প্ল্যাটফর্ম। ভয়েস বা টেক্সটের মাধ্যমে আপনার সমস্যা বর্ণনা করুন, এবং যাচাইকৃত আইনজীবীদের সাথে সাথে সংযুক্ত হন।',
    btnHelp: '⚖️ এখনই আইনি সাহায্য নিন', btnEmergency: '🚨 জরুরি আইনি কল',
    howTag: 'সহজ প্রক্রিয়া', howTitle: 'কিভাবে কাজ করে', howDesc: 'আপনার প্রয়োজনীয় আইনি সাহায্য পেতে তিনটি সহজ ধাপ।',
    step1Title: 'আপনার সমস্যা বর্ণনা করুন', step1Desc: 'আপনার পছন্দের ভাষায় ভয়েস বা টেক্সট ব্যবহার করে আপনার আইনি পরিস্থিতি ব্যাখ্যা করুন।',
    step2Title: 'AI আপনার মামলা শ্রেণীবদ্ধ করে', step2Desc: 'আমাদের AI আপনার বর্ণনা বিশ্লেষণ করে এবং একটি আত্মবিশ্বাসের স্কোর সহ মামলার ধরন শ্রেণীবদ্ধ করে।',
    step3Title: 'মিলান পান', step3Desc: 'আপনার অবস্থানের কাছে, আপনার মামলার ধরনে বিশেষজ্ঞ একজন যাচাইকৃত আইনজীবীর সাথে সংযুক্ত হন।',
    featTag: 'কেন আমাদের বেছে নেবেন', featTitle: 'শক্তিশালী বৈশিষ্ট্য', featDesc: 'জনগণের জন্য তৈরি, অত্যাধুনিক AI দ্বারা চালিত।',
    helpTag: 'সহায়তা নিন', helpTitle: 'আইনি সাহায্য নিন', helpDesc: 'ভয়েস বা টেক্সট ব্যবহার করে আপনার আইনি সমস্যা বর্ণনা করুন।',
    micLabel: 'বলতে ট্যাপ করুন', langLabel: 'ভাষা নির্বাচন করুন', descLabel: 'আপনার আইনি সমস্যা বর্ণনা করুন', submitBtn: 'বিশ্লেষণ করুন',
    faqTag: 'সাধারণ প্রশ্ন', faqTitle: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    blogTag: 'আইনি সচেতনতা', blogTitle: 'আপনার অধিকার জানুন',
    footerDesc: 'AI-চালিত আইনি সহায়তার মাধ্যমে নাগরিক এবং ন্যায়বিচারের মধ্যে সেতুবন্ধন।',
    footerDisclaimer: '© ২০২৬ ন্যায় স্তম্ভ। সমস্ত অধিকার সংরক্ষিত।',
    navHome: 'হোম', navHow: 'কিভাবে কাজ করে', navHelp: 'সাহায্য', navBlog: 'ব্লগ', navFaq: 'FAQ', navLogin: 'লগইন',
    chatGreeting: 'নমস্কার! আমি ন্যায় মিত্র, আপনার ব্যক্তিগত এআই আইনি সহকারী। আপনাকে আরও ভালোভাবে সাহায্য করতে, আমি কি আপনার নাম জানতে পারি?',
    reviewMsg: '⏳ মানব আইনি পর্যালোচনা চলছে', matchMsg: '✅ আপনার জন্য আইনজীবী মেলানো হয়েছে',
    heroTagVoice: 'ভয়েস-ফার্স্ট এআই আইনি প্ল্যাটফর্ম',
    heroTitle1Voice: 'আপনার সত্য কথা বলুন।', heroTitle2Voice: 'আপনার ন্যায়বিচার পান।',
    heroDescVoice: 'আইন জটিল হওয়া উচিত নয়। শুধু উজ্জ্বল মাইক্রোফোনে আলতো চাপুন এবং আপনার নিজের ভাষায় আপনার পরিস্থিতি ব্যাখ্যা করুন। আমাদের এআই বাকিটা পরিচালনা করে।',
  }
};
let currentLang = 'en';

// ===== MOCK DATA =====
const mockLawyers = [
  { id: 1, name: 'Adv. Priya Sharma', initials: 'PS', specializations: ['Family Law', 'Divorce'], location: 'Kolkata', rating: 4.8, experience: '12 years', available: true },
  { id: 2, name: 'Adv. Rajesh Kumar', initials: 'RK', specializations: ['Criminal Law', 'Bail'], location: 'Delhi', rating: 4.6, experience: '15 years', available: true },
  { id: 3, name: 'Adv. Sunita Das', initials: 'SD', specializations: ['Property Law', 'Land Dispute'], location: 'Kolkata', rating: 4.9, experience: '20 years', available: true },
  { id: 4, name: 'Adv. Amit Ghosh', initials: 'AG', specializations: ['Consumer Rights', 'Fraud'], location: 'Mumbai', rating: 4.5, experience: '8 years', available: true },
  { id: 5, name: 'Adv. Meera Patel', initials: 'MP', specializations: ['Labor Law', 'Employment'], location: 'Bangalore', rating: 4.7, experience: '10 years', available: false },
  { id: 6, name: 'Adv. Arjun Singh', initials: 'AS', specializations: ['Criminal Law', 'Cyber Crime'], location: 'Delhi', rating: 4.4, experience: '6 years', available: true },
];

const mockCases = [
  { id: 'CASE-001', type: 'Family Law', desc: 'Need help with divorce proceedings and child custody.', confidence: 87, status: 'pending', date: '2026-03-01', citizen: 'Rahul M.' },
  { id: 'CASE-002', type: 'Property Law', desc: 'Land dispute with neighbor regarding boundary.', confidence: 72, status: 'accepted', date: '2026-02-28', citizen: 'Sneha B.' },
  { id: 'CASE-003', type: 'Criminal Law', desc: 'False FIR filed, need bail assistance.', confidence: 45, status: 'pending', date: '2026-03-02', citizen: 'Vikram S.' },
  { id: 'CASE-004', type: 'Consumer Rights', desc: 'Online fraud of Rs. 50,000 on shopping site.', confidence: 91, status: 'pending', date: '2026-03-03', citizen: 'Anil K.' },
  { id: 'CASE-005', type: 'Labor Law', desc: 'Wrongful termination from company without notice.', confidence: 68, status: 'rejected', date: '2026-02-27', citizen: 'Pooja R.' },
];

const caseCategories = ['Family Law', 'Property Law', 'Criminal Law', 'Consumer Rights', 'Labor Law', 'Cyber Crime', 'Tax Law', 'Constitutional'];
const caseKeywords = {
  'Family Law': ['divorce', 'marriage', 'custody', 'alimony', 'domestic', 'family', 'child', 'spouse', 'বিবাহবিচ্ছেদ', 'পরিবার'],
  'Property Law': ['property', 'land', 'boundary', 'eviction', 'rent', 'tenant', 'ownership', 'deed', 'জমি', 'সম্পত্তি'],
  'Criminal Law': ['crime', 'theft', 'assault', 'murder', 'bail', 'fir', 'police', 'arrest', 'fraud', 'অপরাধ'],
  'Consumer Rights': ['consumer', 'product', 'refund', 'defective', 'warranty', 'online', 'shopping', 'ভোক্তা'],
  'Labor Law': ['job', 'fired', 'salary', 'termination', 'employer', 'workplace', 'harassment', 'কাজ', 'বেতন'],
  'Cyber Crime': ['cyber', 'hacking', 'online', 'identity', 'phishing', 'social media', 'সাইবার'],
  'Tax Law': ['tax', 'income', 'gst', 'return', 'evasion', 'কর'],
  'Constitutional': ['rights', 'constitution', 'fundamental', 'freedom', 'discrimination', 'অধিকার', 'সংবিধান'],
};

const chatResponses = {
  'rights': 'Every citizen has fundamental rights under the Indian Constitution (Articles 14-32), including Right to Equality, Right to Freedom, Right against Exploitation, and more.',
  'fir': 'Anyone can file an FIR at a police station. Under Section 154 of CrPC, police are obligated to register your complaint. If they refuse, you can approach the SP or file a complaint in court.',
  'bail': 'Bail is a legal right in bailable offences. For non-bailable offences, you need to apply through the court. A lawyer can help expedite the process.',
  'divorce': 'Divorce in India can be mutual (Section 13B, Hindu Marriage Act) or contested. The process typically takes 6-18 months depending on the type.',
  'property': 'Property disputes can be resolved through civil courts. Important documents include title deed, sale deed, and encumbrance certificate.',
  'consumer': 'Under the Consumer Protection Act 2019, you can file complaints in the Consumer Forum for defective products or deficient services. You can also file online at consumerhelpline.gov.in.',
  'default': 'I can help with basic legal questions. Try asking about your rights, FIR filing, bail, divorce, property disputes, or consumer complaints. For detailed legal advice, please use "Get Legal Help" to connect with a verified lawyer.'
};

// ===== MOCK AI CLASSIFICATION =====
function classifyCase(text) {
  const lower = text.toLowerCase();
  let bestMatch = 'General Legal'; let bestScore = 0;
  for (const [category, keywords] of Object.entries(caseKeywords)) {
    let score = 0;
    keywords.forEach(kw => { if (lower.includes(kw)) score += 15; });
    if (score > bestScore) { bestScore = score; bestMatch = category; }
  }
  const baseConf = bestScore > 0 ? Math.min(55 + bestScore + Math.random() * 20, 98) : 25 + Math.random() * 30;
  return { category: bestMatch, confidence: Math.round(baseConf) };
}

// ===== ROUTER =====
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile nav
  document.querySelector('.nav-links')?.classList.remove('open');
}

// ===== LANGUAGE =====
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelector('.lang-toggle').textContent = lang === 'en' ? 'বাংলা' : 'English';
}

// ===== SPEECH RECOGNITION =====
let recognition = null;
let isRecording = false;

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return null;
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = 'en-IN';
  recognition.onresult = (e) => {
    const transcript = Array.from(e.results).map(r => r[0].transcript).join('');
    document.getElementById('caseDescription').value = transcript;
    const dynText = document.getElementById('heroDynamicText');
    if (dynText) dynText.textContent = transcript;
  };
  recognition.onend = () => {
    if (document.getElementById('heroVoiceOrb')?.classList.contains('recording')) {
      toggleHeroMicUI(false);
      const text = document.getElementById('caseDescription').value.trim();
      if (text) submitHeroCase(text);
    } else {
      toggleMicUI(false);
    }
  };
  recognition.onerror = () => { toggleMicUI(false); toggleHeroMicUI(false); };
  return recognition;
}

function toggleMic() {
  if (!recognition) initSpeechRecognition();
  if (!recognition) { alert('Speech recognition is not supported in this browser.'); return; }
  const langSel = document.getElementById('langSelect');
  recognition.lang = langSel.value === 'bn' ? 'bn-IN' : 'en-IN';
  if (isRecording) {
    recognition.stop(); toggleMicUI(false);
  } else {
    recognition.start(); toggleMicUI(true);
  }
}

function toggleMicUI(recording) {
  isRecording = recording;
  const btn = document.getElementById('micBtn');
  if (btn) {
    btn.classList.toggle('recording', recording);
    btn.querySelector('.mic-icon').textContent = recording ? '⏹️' : '🎤';
  }
}

function toggleHeroMic() {
  if (!recognition) initSpeechRecognition();
  if (!recognition) { alert('Speech recognition is not supported in this browser.'); return; }

  // reset panel
  const panel = document.getElementById('heroResultPanel');
  if (panel) panel.classList.remove('show');

  const langSel = document.getElementById('heroLang');
  if (langSel) recognition.lang = langSel.value === 'bn' ? 'bn-IN' : 'en-IN';

  if (isRecording) {
    recognition.stop();
    toggleHeroMicUI(false);
  } else {
    recognition.start();
    toggleHeroMicUI(true);
    const dynText = document.getElementById('heroDynamicText');
    if (dynText) {
      dynText.textContent = currentLang === 'bn' ? 'শুনছি...' : 'Listening...';
      dynText.style.color = 'var(--danger)';
    }
  }
}

function toggleHeroMicUI(recording) {
  isRecording = recording;
  const orb = document.getElementById('heroVoiceOrb');
  if (orb) orb.classList.toggle('recording', recording);

  const icon = document.getElementById('heroMicBtn')?.querySelector('.mic-icon');
  if (icon) icon.textContent = recording ? '⏹️' : '🎤';

  const dynText = document.getElementById('heroDynamicText');
  if (!recording && dynText) {
    dynText.style.color = 'var(--accent-gold)';
  }
}

function syncLang(val) {
  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = val;
  const heroLang = document.getElementById('heroLang');
  if (heroLang) heroLang.value = val;
  setLanguage(val);
}

function submitHeroCase(desc) {
  const result = classifyCase(desc);
  const panel = document.getElementById('heroResultPanel');
  if (!panel) return;
  const t = translations[currentLang];

  panel.innerHTML = '';
  panel.classList.add('show');

  const isHigh = result.confidence >= 60;
  panel.innerHTML = `
    <div style="text-align:center;margin-bottom:20px;">
      <p style="font-size:0.9rem;color:var(--gray-300);margin-bottom:8px;">AI Classification: <strong style="color:var(--accent-gold)">${result.category}</strong></p>
      <div class="confidence-score ${isHigh ? 'high' : 'low'}">${result.confidence}%</div>
      <p style="font-size:0.85rem;color:var(--gray-300);margin-top:4px;">Confidence Score</p>
    </div>
    <div class="confidence-bar-wrapper">
      <div class="confidence-bar">
        <div class="confidence-fill ${isHigh ? 'high' : 'low'}" style="width:0%;" id="heroConfFill"></div>
      </div>
    </div>
    <div id="heroMatchResult" style="margin-top:24px;"></div>
  `;

  setTimeout(() => {
    const fill = document.getElementById('heroConfFill');
    if (fill) fill.style.width = result.confidence + '%';
  }, 100);

  setTimeout(() => {
    const matchDiv = document.getElementById('heroMatchResult');
    if (!matchDiv) return;
    if (isHigh) {
      const matched = mockLawyers.filter(l => l.available && l.specializations.some(s => s === result.category || result.category === 'General Legal'));
      const lawyers = matched.length > 0 ? matched : mockLawyers.filter(l => l.available).slice(0, 1);
      matchDiv.innerHTML = `
        <h3 style="color:var(--success);font-size:1.1rem;margin-bottom:16px;">${t.matchMsg}</h3>
        <div class="lawyer-grid" style="grid-template-columns: 1fr;">
          ${lawyers.map(l => `
            <div class="lawyer-card" style="padding:16px; background: rgba(255,255,255,0.05);">
              <div class="lawyer-card-header" style="margin-bottom:8px;">
                <div class="lawyer-avatar" style="width:40px;height:40px;font-size:0.9rem;">${l.initials}</div>
                <div><h4 style="color:var(--white)">${l.name}</h4><span>⭐ ${l.rating}</span></div>
              </div>
              <button class="btn-contact" onclick="alert('Request sent to ${l.name}!')">Contact Now</button>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      matchDiv.innerHTML = `
        <div style="text-align:center;padding:24px;background:rgba(243,156,18,0.06);border-radius:var(--radius-md);border:1px solid rgba(243,156,18,0.2);">
          <h3 style="color:var(--warning);font-size:1.1rem;margin-bottom:8px;">${t.reviewMsg}</h3>
          <p style="color:var(--gray-300);font-size:0.9rem;">Our experts will manually review this and connect with you.</p>
        </div>
      `;
    }
  }, 1600);
}

// ===== CASE SUBMISSION =====
function submitCase() {
  const desc = document.getElementById('caseDescription').value.trim();
  if (!desc) { alert('Please describe your legal issue.'); return; }

  const result = classifyCase(desc);
  const panel = document.getElementById('resultPanel');
  const t = translations[currentLang];

  panel.innerHTML = '';
  panel.classList.add('show');

  // Confidence bar
  const isHigh = result.confidence >= 60;
  panel.innerHTML = `
    <div style="text-align:center;margin-bottom:20px;">
      <p style="font-size:0.9rem;color:var(--gray-500);margin-bottom:8px;">AI Classification: <strong style="color:var(--primary)">${result.category}</strong></p>
      <div class="confidence-score ${isHigh ? 'high' : 'low'}">${result.confidence}%</div>
      <p style="font-size:0.85rem;color:var(--gray-500);margin-top:4px;">Confidence Score</p>
    </div>
    <div class="confidence-bar-wrapper">
      <div class="confidence-bar">
        <div class="confidence-fill ${isHigh ? 'high' : 'low'}" style="width:0%;" id="confFill"></div>
      </div>
    </div>
    <div id="matchResult" style="margin-top:24px;"></div>
  `;

  // Animate bar
  setTimeout(() => { document.getElementById('confFill').style.width = result.confidence + '%'; }, 100);

  // Show results
  setTimeout(() => {
    const matchDiv = document.getElementById('matchResult');
    if (isHigh) {
      const matched = mockLawyers.filter(l => l.available && l.specializations.some(s => s === result.category || result.category === 'General Legal'));
      const lawyers = matched.length > 0 ? matched : mockLawyers.filter(l => l.available).slice(0, 3);
      matchDiv.innerHTML = `
        <h3 style="color:var(--success);font-size:1.1rem;margin-bottom:16px;">${t.matchMsg}</h3>
        <div class="lawyer-grid">
          ${lawyers.map(l => `
            <div class="lawyer-card">
              <div class="lawyer-card-header">
                <div class="lawyer-avatar">${l.initials}</div>
                <div><h4>${l.name}</h4><span>⭐ ${l.rating} · ${l.experience}</span></div>
              </div>
              <div class="lawyer-tags">${l.specializations.map(s => `<span class="lawyer-tag">${s}</span>`).join('')}</div>
              <div class="lawyer-location">📍 ${l.location}</div>
              <button class="btn-contact" onclick="alert('Request sent to ${l.name}!')">Contact Lawyer</button>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      matchDiv.innerHTML = `
        <div style="text-align:center;padding:32px;background:rgba(243,156,18,0.06);border-radius:var(--radius-md);border:1px solid rgba(243,156,18,0.2);">
          <p style="font-size:2.5rem;margin-bottom:12px;">👨‍⚖️</p>
          <h3 style="color:var(--warning);font-size:1.1rem;margin-bottom:8px;">${t.reviewMsg}</h3>
          <p style="color:var(--gray-500);font-size:0.9rem;">Our team of legal experts will manually review your case and get back to you within 24 hours.</p>
        </div>
      `;
    }
  }, 1600);
}

// ===== CHATBOT =====
function toggleChatbot() {
  document.querySelector('.chatbot-window').classList.toggle('show');
}

let chatState = { step: 'ask_name', userName: '' };

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  const container = document.getElementById('chatMessages');
  container.innerHTML += `<div class="chat-msg user">${msg}</div>`;

  let response = chatResponses.default;
  
  if (chatState.step === 'ask_name') {
    chatState.userName = msg;
    chatState.step = 'general';
    response = currentLang === 'en' 
      ? `Nice to meet you, ${chatState.userName}! How can I help you today? You can ask me about your rights, FIR, bail, or property disputes.`
      : `আপনার সাথে পরিচিত হয়ে ভালো লাগলো, ${chatState.userName}! আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি? আপনি আপনার অধিকার, এফআইআর, জামিন বা সম্পত্তি বিরোধ সম্পর্কে আমাকে জিজ্ঞাসা করতে পারেন।`;
  } else {
    let found = false;
    for (const [key, val] of Object.entries(chatResponses)) {
      if (key !== 'default' && msg.toLowerCase().includes(key)) { 
        response = currentLang === 'en' 
          ? `${chatState.userName}, ${val.charAt(0).toLowerCase() + val.slice(1)}`
          : `${chatState.userName}, ${val}`;
        found = true; 
        break; 
      }
    }
    if (!found) {
      response = currentLang === 'en'
        ? `${chatState.userName}, I can help with basic legal questions. Try asking about your rights, FIR filing, bail, divorce, property disputes, or consumer complaints.`
        : `${chatState.userName}, আমি সাধারণ আইনি প্রশ্নের সাহায্য করতে পারি। আপনার অধিকার, এফআইআর, জামিন, বিবাহবিচ্ছেদ, সম্পত্তি বিরোধ বা ভোক্তা অভিযোগ সম্পর্কে জিজ্ঞাসা করার চেষ্টা করুন।`;
    }
  }

  setTimeout(() => {
    container.innerHTML += `<div class="chat-msg bot">${response}</div>`;
    container.scrollTop = container.scrollHeight;
  }, 600);

  input.value = '';
  container.scrollTop = container.scrollHeight;
}

// ===== LAWYER DASHBOARD =====
function renderLawyerDashboard() {
  const caseList = document.getElementById('lawyerCases');
  if (!caseList) return;
  caseList.innerHTML = mockCases.map(c => `
    <div class="dash-card">
      <div class="case-header">
        <div>
          <span class="case-type-badge">${c.type}</span>
          <span style="margin-left:8px;font-size:0.8rem;color:var(--gray-500)">${c.id}</span>
        </div>
        <span class="case-status ${c.status}">${c.status.charAt(0).toUpperCase() + c.status.slice(1)}</span>
      </div>
      <p style="color:var(--gray-700);font-size:0.9rem;margin-bottom:8px;">${c.desc}</p>
      <p style="font-size:0.8rem;color:var(--gray-500);">Client: ${c.citizen} · Confidence: ${c.confidence}% · ${c.date}</p>
      ${c.status === 'pending' ? `
        <div class="case-actions">
          <button class="btn-accept" onclick="updateCaseStatus('${c.id}','accepted')">✓ Accept</button>
          <button class="btn-reject" onclick="updateCaseStatus('${c.id}','rejected')">✕ Reject</button>
        </div>
      ` : ''}
    </div>
  `).join('');
}

function updateCaseStatus(id, status) {
  const c = mockCases.find(x => x.id === id);
  if (c) { c.status = status; renderLawyerDashboard(); renderAdminDashboard(); }
}

function toggleAvailability() {
  const toggle = document.getElementById('availToggle');
  toggle.classList.toggle('active');
  const label = document.getElementById('availLabel');
  label.textContent = toggle.classList.contains('active') ? 'Available' : 'Unavailable';
}

// ===== ADMIN DASHBOARD =====
function renderAdminDashboard() {
  // Stats
  const total = mockCases.length;
  const high = mockCases.filter(c => c.confidence >= 60).length;
  const pending = mockCases.filter(c => c.status === 'pending').length;
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statHigh').textContent = high;
  document.getElementById('statPending').textContent = pending;
  document.getElementById('statLawyers').textContent = mockLawyers.length;

  // Table
  const tbody = document.getElementById('adminCaseTable');
  if (!tbody) return;
  tbody.innerHTML = mockCases.map(c => `
    <tr>
      <td><strong>${c.id}</strong></td>
      <td>${c.citizen}</td>
      <td><span class="case-type-badge">${c.type}</span></td>
      <td><span class="confidence-score ${c.confidence >= 60 ? 'high' : 'low'}" style="font-size:1rem;">${c.confidence}%</span></td>
      <td><span class="case-status ${c.status}">${c.status}</span></td>
      <td>
        <select class="override-select" onchange="overrideCase('${c.id}', this.value)" style="padding:6px;border-radius:6px;border:1px solid var(--gray-200);font-size:0.8rem;">
          <option value="">Override...</option>
          ${caseCategories.map(cat => `<option value="${cat}" ${cat === c.type ? 'selected' : ''}>${cat}</option>`).join('')}
        </select>
      </td>
    </tr>
  `).join('');

  // Chart
  renderChart();
}

function overrideCase(id, newType) {
  if (!newType) return;
  const c = mockCases.find(x => x.id === id);
  if (c) { c.type = newType; c.confidence = 95; renderAdminDashboard(); }
}

function renderChart() {
  const counts = {};
  mockCases.forEach(c => { counts[c.type] = (counts[c.type] || 0) + 1; });
  const maxVal = Math.max(...Object.values(counts), 1);
  const chartArea = document.getElementById('chartBars');
  if (!chartArea) return;
  chartArea.innerHTML = Object.entries(counts).map(([type, count]) => `
    <div class="chart-bar-item">
      <div class="chart-bar-value">${count}</div>
      <div class="chart-bar" style="height:${(count / maxVal) * 160}px;"></div>
      <div class="chart-bar-label">${type}</div>
    </div>
  `).join('');
}

// ===== LOGIN =====
function showLogin(role) {
  document.getElementById('loginRole').value = role;
  document.getElementById('loginModal').classList.add('show');
  document.getElementById('loginTitle').textContent = role === 'lawyer' ? 'Lawyer Login' : 'Admin Login';
}

function closeLogin() { document.getElementById('loginModal').classList.remove('show'); }

function doLogin() {
  const role = document.getElementById('loginRole').value;
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;
  if (!email || !pass) { alert('Please fill in all fields.'); return; }
  closeLogin();
  localStorage.setItem('auth_token', 'demo-token');
  if (role === 'lawyer') {
    navigateTo('lawyer-dashboard');
    renderLawyerDashboard();
  } else {
    navigateTo('admin-dashboard');
    renderAdminDashboard();
  }
}

// ===== FAQ =====
function toggleFaq(el) {
  el.closest('.faq-item').classList.toggle('open');
}

// ===== SCROLL ANIMATIONS =====
function handleScrollAnimations() {
  const els = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
}

// ===== NAVBAR SCROLL =====
function handleNavbarScroll() {
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== HAMBURGER =====
function toggleMobileNav() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// ===== EMERGENCY =====
function emergencyCall() {
  alert('🚨 Emergency Legal Helpline\n\nNational Legal Services Authority (NALSA)\nCall: 15100\n\nWomen Helpline: 181\nPolice: 100\nCyber Crime: 1930');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  navigateTo('home');
  handleScrollAnimations();
  handleNavbarScroll();
  initSpeechRecognition();

  // Nav click handlers
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const page = a.dataset.page;
      if (page === 'lawyer-login') { showLogin('lawyer'); return; }
      navigateTo(page);
      if (page === 'lawyer-dashboard') renderLawyerDashboard();
      if (page === 'admin-dashboard') renderAdminDashboard();
    });
  });

  // Chat enter key
  document.getElementById('chatInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });
});

// ===== FILE UPLOAD =====
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const dynText = document.getElementById('heroDynamicText');
  if (dynText) {
    dynText.textContent = `Reading ${file.name}...`;
    dynText.style.color = 'var(--accent-gold)';
  }

  // reset panel
  const panel = document.getElementById('heroResultPanel');
  if (panel) panel.classList.remove('show');

  // Simulate analyzing file
  setTimeout(() => {
    const t = translations[currentLang];
    // Send a mock description that includes property/family to simulate classification
    submitHeroCase("Reviewing uploaded legal document regarding property dispute and civil rights");
    if (dynText) dynText.textContent = currentLang === 'bn' ? "নথি বিশ্লেষণ করা হয়েছে" : "Document Analyzed Successfully";
  }, 1500);
}

// ===== TYPE PROBLEM =====
function typeProblem() {
  // Navigate to Get Help page where the text area resides
  navigateTo('get-help');
  // Allow UI transition to occur then focus the description text area
  setTimeout(() => {
    const descInput = document.getElementById('caseDescription');
    if (descInput) {
      descInput.focus();
      descInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 100);
}

// ===== PORTAL ROLE ACTIONS & MODALS =====
function handlePortalClick(portalType) {
  // Check credential details provided via sign up or sign in
  const token = localStorage.getItem('auth_token');
  if (!token) {
    // Elegant credential check prompt redirecting to full authentication flow
    const proceed = confirm("Authentication Required\n\nPlease Sign In or Sign Up to verify your credentials before accessing the secure " + (portalType === 'citizen' ? 'Citizen' : 'Advocate') + " Portal.");
    if (proceed) {
      window.location.href = 'login.html';
    }
    return;
  }

  // If credentials are valid, navigate directly to requested portal view
  if (portalType === 'citizen') {
    navigateTo('citizen-portal');
  } else {
    navigateTo('advocate-portal');
  }
}

function openAdvocateModal(feature) {
  const modal = document.getElementById('advocateFeatureModal');
  const title = document.getElementById('advFeatureTitle');
  const content = document.getElementById('advFeatureContent');
  if (!modal || !title || !content) return;

  if (feature === 'library') {
    title.textContent = "📚 Legal Library & Precedents";
    content.innerHTML = `
      <div style="margin-bottom:16px;">
        <input type="text" placeholder="Search Bare Acts, IPC/BNS Sections, Past Case Precedents..." style="width:100%; padding:12px; border:1px solid var(--gray-200); border-radius:var(--radius-sm); font-size:0.95rem;" onkeyup="filterMockLibrary(this.value)" />
      </div>
      <div style="max-height:300px; overflow-y:auto; border:1px solid var(--gray-100); border-radius:var(--radius-sm);">
        <div class="lib-item" style="padding:12px 16px; border-bottom:1px solid var(--gray-50);">
          <strong style="color:var(--primary); display:block;">Bharatiya Nyaya Sanhita (BNS) 2023</strong>
          <span style="font-size:0.85rem; color:var(--gray-500);">Complete cross-reference implementation with older IPC equivalents.</span>
        </div>
        <div class="lib-item" style="padding:12px 16px; border-bottom:1px solid var(--gray-50);">
          <strong style="color:var(--primary); display:block;">Supreme Court Guidelines on e-FIR Filing</strong>
          <span style="font-size:0.85rem; color:var(--gray-500);">Mandatory directives for electronic registration of complaints.</span>
        </div>
        <div class="lib-item" style="padding:12px 16px; border-bottom:1px solid var(--gray-50);">
          <strong style="color:var(--primary); display:block;">Land Acquisition & Property Rights Precedents</strong>
          <span style="font-size:0.85rem; color:var(--gray-500);">Civil dispute resolution histories and title deed verification logs.</span>
        </div>
        <div class="lib-item" style="padding:12px 16px;">
          <strong style="color:var(--primary); display:block;">Consumer Protection Act 2019 Bare Act</strong>
          <span style="font-size:0.85rem; color:var(--gray-500);">E-commerce regulations, unfair contracts, and jurisdiction bounds.</span>
        </div>
      </div>
      <p style="font-size:0.8rem; color:var(--gray-400); margin-top:12px; text-align:right;">Connected to Central Law Registry</p>
    `;
  } else if (feature === 'summarize') {
    title.textContent = "✨ AI Case Summarization";
    content.innerHTML = `
      <p style="font-size:0.9rem; color:var(--gray-500); margin-bottom:12px;">Paste case text, client affidavits, or evidence details to extract a concise argument outline using AI.</p>
      <textarea id="aiSummaryInput" placeholder="Paste comprehensive case facts here..." style="width:100%; height:120px; padding:12px; border:1px solid var(--gray-200); border-radius:var(--radius-sm); font-size:0.95rem; margin-bottom:12px; resize:vertical;"></textarea>
      <button class="btn-primary" onclick="generateMockSummary()" style="padding:10px 20px; font-size:0.9rem;">Generate AI Outline</button>
      <div id="aiSummaryResult" style="margin-top:16px; display:none; padding:16px; background:rgba(201,168,76,0.06); border-left:4px solid var(--accent-gold); border-radius:var(--radius-sm);">
        <h4 style="color:var(--primary); margin-bottom:8px; font-size:0.95rem;">Generated Outline & Recommended Strategy</h4>
        <p style="font-size:0.85rem; color:var(--gray-700); line-height:1.5;"><strong>Key Issues:</strong> Contractual mismatch and procedural non-compliance.<br/><strong>Applicable Sections:</strong> Specific Relief Act & relevant BNS clauses.<br/><strong>Strategy:</strong> Request immediate document disclosure and file an interim injunction application.</p>
      </div>
    `;
  } else if (feature === 'updates') {
    title.textContent = "🔔 Real-Time Case Updates";
    content.innerHTML = `
      <p style="font-size:0.9rem; color:var(--gray-500); margin-bottom:12px;">Automated synchronization with high courts and judicial tracking servers.</p>
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div style="padding:12px; border-left:3px solid var(--success); background:var(--gray-50); border-radius:var(--radius-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--gray-400); margin-bottom:4px;"><span>CASE-001</span><span>Today, 10:30 AM</span></div>
          <strong style="font-size:0.9rem; color:var(--gray-900); display:block;">Hearing scheduled successfully</strong>
          <span style="font-size:0.85rem; color:var(--gray-500);">Court Room No. 4, Division Bench. Client notified via automated SMS.</span>
        </div>
        <div style="padding:12px; border-left:3px solid var(--info); background:var(--gray-50); border-radius:var(--radius-sm);">
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--gray-400); margin-bottom:4px;"><span>CASE-002</span><span>Yesterday</span></div>
          <strong style="font-size:0.9rem; color:var(--gray-900); display:block;">Evidence Registry Verified</strong>
          <span style="font-size:0.85rem; color:var(--gray-500);">Uploaded physical documents validated by regional registry node.</span>
        </div>
      </div>
      <button class="btn-outline" onclick="alert('Update notification broadcasted to active clients.')" style="width:100%; margin-top:16px; padding:10px; font-size:0.85rem; border-color:var(--gray-200); color:var(--primary);">Broadcast Alert to Active Clients</button>
    `;
  }

  modal.classList.add('show');
}

function closeAdvocateModal() {
  const modal = document.getElementById('advocateFeatureModal');
  if (modal) modal.classList.remove('show');
}

function filterMockLibrary(query) {
  const items = document.querySelectorAll('.lib-item');
  const q = query.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(q) ? 'block' : 'none';
  });
}

function generateMockSummary() {
  const input = document.getElementById('aiSummaryInput');
  const result = document.getElementById('aiSummaryResult');
  if (!input || !result) return;
  if (!input.value.trim()) {
    alert("Please enter some case text or facts to summarize.");
    return;
  }
  result.style.display = 'block';
}
