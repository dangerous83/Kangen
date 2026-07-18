// ============================================================
// AI Assistant knowledge base
// ------------------------------------------------------------
// Aggregates the ENTIRE site's content (contact details, FAQs,
// machines, other products, water types, process, business
// opportunity, Glen's profile) into a single searchable index
// so the on-page assistant can analyse and answer visitor
// questions — and always point them to Glen on WhatsApp.
//
// This runs fully client-side (no backend / API key needed),
// so the widget works anywhere the static site is deployed.
//
// To teach the assistant something new, just add an entry to
// `KNOWLEDGE` below, or extend the source data modules it reads.
// ============================================================

import { faqs } from './faqs'
import { machines, otherProducts } from './products'
import { CONSULTANT } from './site'

// Human-readable WhatsApp number (with spaces) for display in chat.
export const WHATSAPP_DISPLAY = '+971 56 664 4147'

// ---------------- Curated topic entries ----------------
// Each entry: { id, keywords, answer }. `keywords` drive matching;
// `answer` is what the assistant replies with (plain text; the
// widget appends a WhatsApp CTA automatically).
const topics = [
  {
    id: 'contact',
    keywords: [
      'whatsapp', 'contact', 'number', 'phone', 'call', 'reach', 'message',
      'talk', 'speak', 'glen', 'consultant', 'text', 'connect', 'get in touch',
    ],
    answer:
      `You can reach ${CONSULTANT.name}, your dedicated Enagic / Kangen Water consultant, directly on WhatsApp at ${WHATSAPP_DISPLAY}. ` +
      `It's the fastest way to ask a question or start your free consultation at a time that suits you. You can also call the same number.`,
  },
  {
    id: 'consultation',
    keywords: [
      'consultation', 'free', 'book', 'booking', 'appointment', 'advice',
      'consult', 'obligation', 'cost of consultation', 'meeting',
    ],
    answer:
      `Your initial water consultation with ${CONSULTANT.name} is completely free and comes with no obligation. ` +
      `It's simply a chance to get expert, tailored advice on which Kangen Water machine fits your household, lifestyle and budget. ` +
      `You can book it through the "Book a Free Water Consultation" button on the site, or just message Glen on WhatsApp.`,
  },
  {
    id: 'what-is-kangen',
    keywords: [
      'what', 'kangen', 'water', 'alkaline', 'hydrogen', 'ionized', 'ionised',
      'ionizer', 'ph', 'enagic', 'about', 'explain', 'mean',
    ],
    answer:
      'Kangen Water® is hydrogen-rich alkaline water created through Enagic water ionizer technology, engineered and built in Japan. ' +
      'Many customers choose it as part of a daily wellness-focused lifestyle — for hydration, cooking and everyday household use. ' +
      'A single machine can produce several water types at different pH levels for different daily tasks.',
  },
  {
    id: 'water-types',
    keywords: [
      'water types', 'types', 'ph', 'strong', 'beauty', 'acidic', 'neutral',
      'clean', 'five', '5', 'levels', 'settings', 'drinking', 'cleaning',
    ],
    answer:
      'Most multi-plate Kangen machines produce 5 water types for different daily purposes:\n' +
      '• Strong Kangen Water (pH 11.0+) — food prep & tough cleaning\n' +
      '• Kangen Water (pH 8.5–9.5) — everyday hydrogen-rich drinking water\n' +
      '• Clean / Neutral Water (pH 7.0) — general use & taking supplements\n' +
      '• Beauty Water (pH 4.0–6.0) — skin toning & gentle cleaning\n' +
      '• Strong Acidic Water (pH 2.5) — sanitising surfaces & utensils\n' +
      'The compact JR IV produces 4 water types. Glen can explain the correct daily use for each.',
  },
  {
    id: 'which-machine',
    keywords: [
      'which', 'best', 'recommend', 'recommendation', 'choose', 'right',
      'machine', 'model', 'suit', 'suitable', 'household', 'family', 'help me pick',
    ],
    answer:
      'The right machine depends on your household size, lifestyle and budget. The range runs from the compact JR IV starter model ' +
      'up to the 8-plate flagship K8 and the high-capacity Super501. Glen will walk you through the options in plain language and ' +
      'recommend the best fit for your needs — with no pressure. Tell me a bit about your household and I can point you in the right direction.',
  },
  {
    id: 'compare',
    keywords: [
      'compare', 'comparison', 'difference', 'versus', 'vs', 'plates',
      'which is better', 'side by side',
    ],
    answer:
      'Here is a quick comparison of the machines:\n' +
      '• Leveluk K8 — 8 plates, flagship for premium households & heavy daily use\n' +
      '• Leveluk SD501DX — 7 plates + audio guidance, tech-forward homes\n' +
      '• Leveluk SD501 Platinum — 7 plates, elegant design-conscious homes\n' +
      '• Leveluk Super501 — 12 plates, large households & light commercial\n' +
      '• Leveluk JR IV — 3 plates, compact starter for small spaces\n' +
      'Glen can compare any two models side-by-side for your situation.',
  },
  {
    id: 'price',
    keywords: [
      'price', 'pricing', 'cost', 'how much', 'expensive', 'payment',
      'installment', 'instalment', 'finance', 'budget', 'afford', 'money',
    ],
    answer:
      'Pricing depends on the specific model and any current Enagic offers or payment options. For accurate, up-to-date pricing and ' +
      'the best option for your budget, Glen will give you clear figures directly — the fastest way is a quick message on WhatsApp.',
  },
  {
    id: 'process',
    keywords: [
      'process', 'how it works', 'steps', 'start', 'begin', 'journey',
      'buy', 'purchase', 'order', 'setup', 'install', 'installation', 'get started',
    ],
    answer:
      'The journey is simple and pressure-free:\n' +
      '1. Submit an inquiry — via the form or WhatsApp (under a minute)\n' +
      '2. Free consultation with Glen — talk through your needs and budget\n' +
      '3. Choose the right machine — a clear recommendation for your home\n' +
      '4. Purchase guidance & setup support — Glen guides your order and setup\n' +
      'Glen is with you at every step, including after-sales support.',
  },
  {
    id: 'after-sales',
    keywords: [
      'after', 'sales', 'support', 'warranty', 'maintenance', 'filter',
      'filters', 'cleaning', 'service', 'help after', 'ongoing', 'replacement',
    ],
    answer:
      'Yes — Glen provides after-sales guidance including setup support, usage tips, and help with filters and supplies, so you get the ' +
      'most from your machine long after purchase. Genuine Enagic replacement filters keep your machine producing clean, great-tasting water.',
  },
  {
    id: 'business',
    keywords: [
      'business', 'opportunity', 'distributor', 'income', 'earn', 'sell',
      'reseller', 'commission', 'work', 'career', 'partner', 'become',
    ],
    answer:
      'Glen can guide interested individuals who want to learn how Enagic\'s independent distributor model works — including product ' +
      'education, customer support and responsible business growth. Note: business results vary and depend on individual effort, market ' +
      'conditions and compliance with Enagic policies. No income is promised or guaranteed. Message Glen to learn more.',
  },
  {
    id: 'glen',
    keywords: [
      'who is glen', 'about glen', 'glen apostol', 'consultant', 'experience',
      'trust', 'expert', 'professional', 'who are you working with',
    ],
    answer:
      `${CONSULTANT.name} is a professional Enagic / Kangen Water consultant based in the ${CONSULTANT.region}. ` +
      'He helps families, professionals and wellness-focused customers understand Kangen Water machines and choose the right system — ' +
      'offering product consultation, machine recommendations, after-sales guidance and clear, jargon-free support.',
  },
  {
    id: 'location',
    keywords: [
      'location', 'where', 'uae', 'dubai', 'emirates', 'country', 'deliver',
      'delivery', 'shipping', 'area', 'region', 'based',
    ],
    answer:
      `Glen is based in the ${CONSULTANT.region} and serves customers across the UAE. For delivery, setup and availability in your ` +
      'specific area, the quickest way to confirm is a message on WhatsApp.',
  },
  {
    id: 'other-products',
    keywords: [
      'anespa', 'ukon', 'turmeric', 'beaute', 'beauty product', 'wagyu',
      'beef', 'supplement', 'spa', 'shower', 'skincare', 'other products',
    ],
    answer:
      'Beyond the water machines, Enagic\'s range includes: Anespa® DX (a mineral-ion water spa for shower & bath), genuine replacement ' +
      'filters, Kangen Ukon® (Okinawan turmeric supplement), Kangen Beauté® (beauty & skincare) and Kangen Wagyu® (premium Japanese beef). ' +
      'Glen can tell you more about any of these.',
  },
  {
    id: 'medical',
    keywords: [
      'medical', 'cure', 'treat', 'treatment', 'disease', 'health claim',
      'illness', 'doctor', 'condition', 'safe', 'benefits',
    ],
    answer:
      'Enagic machines are not presented as a cure or treatment for medical conditions. Glen can explain product features, daily use and ' +
      'machine options, but for any medical advice you should consult a qualified health professional. Many customers simply enjoy Kangen ' +
      'Water as part of a wellness-focused daily routine.',
  },
]

// ---------------- Derive entries from live site data ----------------
// Product entries (machines + other products) so the assistant can
// answer model-specific questions using the same source of truth as
// the product pages.
const productTopics = [...machines, ...otherProducts].map((p) => {
  const specText = p.details?.specs
    ? p.details.specs.map((s) => `${s.label}: ${s.value}`).join(', ')
    : ''
  return {
    id: `product-${p.id}`,
    keywords: [
      ...p.name.toLowerCase().split(/\s+/),
      p.id.toLowerCase(),
      p.tagline?.toLowerCase() || '',
      'machine', 'model', 'leveluk',
    ].filter(Boolean),
    answer:
      `${p.name} — ${p.tagline}. ${p.details?.overview || p.description}` +
      (specText ? `\nKey specs: ${specText}.` : '') +
      `\nBest for: ${p.bestFor}.`,
  }
})

// FAQ entries — reuse the site's exact compliant wording.
const faqTopics = faqs.map((f, i) => ({
  id: `faq-${i}`,
  keywords: f.q.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean),
  answer: f.a,
}))

export const KNOWLEDGE = [...topics, ...productTopics, ...faqTopics]

// ---------------- Retrieval ----------------
const STOP = new Set([
  'the', 'a', 'an', 'is', 'are', 'do', 'does', 'can', 'i', 'me', 'my', 'you',
  'your', 'to', 'of', 'for', 'and', 'or', 'in', 'on', 'at', 'it', 'this', 'that',
  'with', 'about', 'how', 'what', 'which', 'was', 'be', 'have', 'has', 'get',
  'want', 'would', 'like', 'please', 'tell', 'know', 'need', 'am', 'we',
])

function tokenize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t))
}

// Greetings / thanks get a friendly canned reply (no CTA spam).
const GREETING = /^(hi|hey|hello|yo|salam|marhaba|good\s?(morning|afternoon|evening)|how are you)/i
const THANKS = /(thank|thanks|thx|appreciate|great|awesome|cheers)/i

/**
 * Analyse a visitor question against the whole-site knowledge base.
 * @returns {{ text: string, showWhatsApp: boolean, type: string }}
 */
export function getAnswer(query) {
  const clean = (query || '').trim()
  if (!clean) {
    return {
      type: 'empty',
      showWhatsApp: false,
      text: 'Ask me anything about Kangen Water, the Enagic machines, pricing, or booking a consultation with Glen.',
    }
  }

  if (GREETING.test(clean) && clean.length < 30) {
    return {
      type: 'greeting',
      showWhatsApp: false,
      text: `Hi there! 👋 I'm Glen's assistant. I can answer questions about Kangen Water, the Enagic machines, the 5 water types, pricing, the business opportunity — or connect you with ${CONSULTANT.name} on WhatsApp. What would you like to know?`,
    }
  }

  const queryTokens = tokenize(clean)

  // Score every knowledge entry.
  let best = null
  let bestScore = 0
  for (const entry of KNOWLEDGE) {
    const kw = entry.keywords.map((k) => k.toLowerCase())
    const answerTokens = new Set(tokenize(entry.answer))
    let score = 0
    for (const t of queryTokens) {
      // Strong signal: token is a declared keyword (allow partial for phrases).
      if (kw.some((k) => k === t || k.includes(t) || t.includes(k))) score += 3
      // Weak signal: token appears in the answer body.
      else if (answerTokens.has(t)) score += 1
    }
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }

  // Confident match.
  if (best && bestScore >= 3) {
    return {
      type: best.id,
      showWhatsApp: true,
      text: best.answer,
    }
  }

  // Weak / no match → be helpful and hand off to Glen.
  const thanks = THANKS.test(clean)
  return {
    type: 'fallback',
    showWhatsApp: true,
    text: thanks
      ? "You're welcome! 😊 For anything more specific, Glen is happy to help you directly."
      : `That's a great question — for a precise answer, ${CONSULTANT.name} can help you directly. ` +
        `You can reach him on WhatsApp at ${WHATSAPP_DISPLAY}. In the meantime, I can also tell you about the machines, ` +
        'the 5 water types, pricing, the free consultation, or the business opportunity.',
  }
}

// Suggested quick-reply prompts shown when the chat opens.
export const SUGGESTIONS = [
  'Which machine is best for my home?',
  'What is Kangen Water?',
  'What are the 5 water types?',
  'How much does it cost?',
  'Is the consultation free?',
]
