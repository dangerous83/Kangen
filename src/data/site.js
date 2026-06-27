// ============================================================
// Central site configuration — consultant contact details.
// Update these values in ONE place and they propagate everywhere.
// ============================================================

export const CONSULTANT = {
  name: 'Glen Apostol',
  role: 'Professional Enagic / Kangen Water Consultant',
  phone: '+971566644147',
  // Phone in international format with no symbols (used for tel: and wa.me links)
  phoneRaw: '971566644147',
  region: 'United Arab Emirates',
}

// Pre-filled WhatsApp enquiry message
export const WHATSAPP_MESSAGE =
  "Hi Glen, I'm interested in Kangen Water and would like to know which machine is best for me."

// Properly-encoded WhatsApp deep link
export const WHATSAPP_LINK = `https://wa.me/${CONSULTANT.phoneRaw}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

// Direct dial link
export const PHONE_LINK = `tel:${CONSULTANT.phone}`

// Navigation structure for the multi-page site.
// Items with `children` render as dropdown menus.
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  {
    label: 'Why Kangen',
    children: [
      { label: 'Why Kangen Water', to: '/why-kangen', desc: 'The wellness-focused difference' },
      { label: '5 Water Types', to: '/water-types', desc: 'One machine, many uses' },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'All Machines', to: '/products', desc: 'Browse the full Enagic range' },
      { label: 'Compare Machines', to: '/compare', desc: 'Side-by-side comparison' },
    ],
  },
  {
    label: 'Glen Apostol',
    children: [
      { label: 'Meet Glen', to: '/glen-apostol', desc: 'Your dedicated consultant' },
      { label: 'How It Works', to: '/process', desc: 'Your 4-step journey' },
      { label: 'Testimonials', to: '/testimonials', desc: 'What clients say' },
    ],
  },
  { label: 'Business', to: '/business' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

// Flat list of all routes (used for the footer + sitemap)
export const ALL_PAGES = [
  { label: 'Home', to: '/' },
  { label: 'Why Kangen Water', to: '/why-kangen' },
  { label: '5 Water Types', to: '/water-types' },
  { label: 'All Machines', to: '/products' },
  { label: 'Compare Machines', to: '/compare' },
  { label: 'Meet Glen', to: '/glen-apostol' },
  { label: 'How It Works', to: '/process' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Business Opportunity', to: '/business' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]
