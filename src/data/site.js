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

// Navigation links (anchor ids match the section components)
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Why Kangen Water', href: '#why' },
  { label: 'Products', href: '#products' },
  { label: 'Glen Apostol', href: '#glen' },
  { label: 'Business Opportunity', href: '#business' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
