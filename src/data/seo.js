// ============================================================
// Central SEO configuration + per-route metadata and JSON-LD.
//
// This site is a HashRouter SPA, so there is only one physical
// HTML file. `RouteSeo` (rendered once inside the router) reads
// the current path and rewrites the document <title>, meta tags,
// Open Graph / Twitter tags and a per-page JSON-LD <script> on
// every navigation — giving each "page" its own structured data
// and keyword-rich metadata for search engines and social shares.
//
// Strong target keywords: Kangen Water, alkaline water,
// ionised/ionized water, hydrogen-rich water, Enagic, water
// ionizer machine, Leveluk K8 / SD501, UAE / Dubai.
// ============================================================

import { CONSULTANT } from './site'
import { machines, otherProducts, products } from './products'
import { waters } from './waters'
import { faqs } from './faqs'

// Canonical production origin (custom domain).
export const SITE = {
  url: 'https://kangenwateralife4u.com',
  name: 'Kangen Water UAE — Glen Apostol',
  brand: 'Kangen Water UAE',
  ogImage: 'https://kangenwateralife4u.com/assets/og-image.png',
  logo: 'https://kangenwateralife4u.com/assets/logo.png',
  locale: 'en_US',
}

// Keywords reused across the site. Per-page lists extend this base.
const BASE_KEYWORDS = [
  'Kangen Water',
  'alkaline water',
  'ionized water',
  'ionised water',
  'hydrogen water',
  'hydrogen-rich water',
  'Enagic',
  'water ionizer',
  'alkaline water machine',
  'Kangen Water UAE',
  'alkaline water Dubai',
  'Enagic UAE',
]

const kw = (...extra) => [...BASE_KEYWORDS, ...extra].join(', ')

// Build an absolute URL from a /public asset path.
const abs = (path) => `${SITE.url}/${String(path).replace(/^\/+/, '')}`

// Hash-style canonical so links resolve inside the SPA.
const canonicalFor = (pathname) =>
  pathname === '/' ? `${SITE.url}/` : `${SITE.url}/#${pathname}`

// ---- Reusable schema fragments -------------------------------------------

// The consultant's local business / professional service. Used as the
// publisher across the site and as the primary entity on contact/home.
const organizationSchema = () => ({
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': `${SITE.url}/#business`,
  name: `${CONSULTANT.name} — Kangen Water & Enagic Consultant`,
  image: SITE.ogImage,
  logo: SITE.logo,
  url: `${SITE.url}/`,
  telephone: CONSULTANT.phone,
  areaServed: { '@type': 'Country', name: CONSULTANT.region },
  priceRange: '$$',
  description:
    'Independent Enagic / Kangen Water consultant in the UAE offering expert guidance on alkaline, ionised and hydrogen-rich water, Leveluk water ionizer machines, machine comparison and after-sales support.',
  knowsAbout: [
    'Kangen Water',
    'Alkaline water',
    'Ionised water',
    'Hydrogen-rich water',
    'Enagic water ionizer machines',
    'Leveluk K8',
    'Leveluk SD501',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONSULTANT.phone,
    contactType: 'sales',
    areaServed: 'AE',
    availableLanguage: ['en'],
  },
})

const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.name,
  description:
    'Kangen Water UAE — genuine Enagic alkaline water ionizer machines and expert, no-obligation guidance from consultant Glen Apostol.',
  inLanguage: 'en',
  publisher: { '@id': `${SITE.url}/#business` },
})

const breadcrumb = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: canonicalFor(t.path),
  })),
})

const webPage = (pathname, title, description) => ({
  '@type': 'WebPage',
  '@id': `${canonicalFor(pathname)}#webpage`,
  url: canonicalFor(pathname),
  name: title,
  description,
  isPartOf: { '@id': `${SITE.url}/#website` },
  inLanguage: 'en',
})

// A single Enagic product as schema.org/Product.
const productSchema = (p, pathname) => ({
  '@type': 'Product',
  '@id': `${canonicalFor(pathname)}#product`,
  name: p.name,
  image: abs(p.image),
  description: p.description,
  category: machines.some((m) => m.id === p.id)
    ? 'Alkaline Water Ionizer Machine'
    : 'Enagic Wellness Product',
  brand: { '@type': 'Brand', name: 'Enagic' },
  url: canonicalFor(pathname),
})

// ---- Per-route metadata --------------------------------------------------
// Each entry: { title, description, keywords }. JSON-LD is composed
// separately so it can pull in live product / FAQ data.

const ROUTES = {
  '/': {
    title: 'Kangen Water UAE | Alkaline Ionized Water Machines — Glen Apostol',
    description:
      'Discover Kangen Water in the UAE — genuine Enagic alkaline, ionised and hydrogen-rich water ionizer machines. Get free, expert guidance from consultant Glen Apostol.',
    keywords: kw('buy Kangen Water UAE', 'Enagic Leveluk', 'best alkaline water machine'),
  },
  '/why-kangen': {
    title: 'Why Kangen Water? Alkaline & Hydrogen-Rich Water Benefits | UAE',
    description:
      'Learn why Kangen Water is different — alkaline, ionised, hydrogen-rich water from Enagic water ionizer technology for a daily wellness-focused lifestyle in the UAE.',
    keywords: kw('why Kangen Water', 'benefits of alkaline water', 'hydrogen-rich water benefits'),
  },
  '/why-kangen/hydrogen-rich': {
    title: 'Hydrogen Rich Water | Molecular Hydrogen & Kangen Water | UAE',
    description:
      'Learn how hydrogen-rich Kangen Water carries a high concentration of molecular hydrogen (H2) — an efficient antioxidant produced through Enagic electrolysis.',
    keywords: kw('hydrogen rich water', 'molecular hydrogen H2', 'Kangen Water electrolysis'),
  },
  '/why-kangen/antioxidant': {
    title: 'Antioxidant Water | Kangen Water & Oxidative Stress | UAE',
    description:
      'Understand how antioxidants help terminate free-radical reactions and why the quality of the water you drink matters for reducing oxidative stress.',
    keywords: kw('antioxidant water', 'free radicals', 'oxidative stress', 'Kangen Water antioxidant'),
  },
  '/why-kangen/alkaline': {
    title: 'Alkaline Water & pH Balance | Kangen Water Explained | UAE',
    description:
      'Learn about pH balance and alkaline water — the body maintains a slightly alkaline pH of 7.365, and the pH scale shows what is acidic, neutral or alkaline.',
    keywords: kw('alkaline water', 'pH balance', 'pH scale', 'alkaline vs acidic water'),
  },
  '/water-types': {
    title: '5 Water Types from One Kangen Machine | Alkaline to Acidic',
    description:
      'One Enagic Kangen Water ionizer produces 5 water types — from Strong Kangen (pH 11) and alkaline drinking water to Beauty Water and Strong Acidic Water.',
    keywords: kw('5 water types', 'pH levels', 'Strong Kangen Water', 'beauty water', 'acidic water'),
  },
  '/products': {
    title: 'Kangen Water Machines | Enagic Leveluk K8, SD501 & More | UAE',
    description:
      'Browse the full range of Enagic Kangen Water ionizer machines — Leveluk K8, SD501DX, SD501 Platinum, Super501 and JR IV. Compare alkaline water machines with Glen.',
    keywords: kw('Kangen Water machines', 'Enagic Leveluk K8', 'SD501', 'water ionizer price UAE'),
  },
  '/other-products': {
    title: 'Anespa DX, Filters, Ukon, Beauté & Wagyu | Enagic Products UAE',
    description:
      'Explore other genuine Enagic products — Anespa DX mineral ion water spa, replacement filters, Kangen Ukon turmeric, Kangen Beauté skincare and Kangen Wagyu beef.',
    keywords: kw('Anespa DX', 'Enagic filters', 'Kangen Ukon', 'Kangen Beauté', 'Kangen Wagyu'),
  },
  '/compare': {
    title: 'Compare Kangen Water Machines | Enagic Leveluk Models Side-by-Side',
    description:
      'Compare Enagic Kangen Water ionizer machines side by side — plates, capacity and best use — and find the right alkaline water machine for your UAE home with Glen.',
    keywords: kw('compare Kangen machines', 'K8 vs SD501', 'best Enagic machine'),
  },
  '/compare-waters': {
    title: 'Compare Waters | Tap, Bottled, Distilled, Well & Kangen Water',
    description:
      'Compare tap, bottled, distilled and well water with hydrogen-rich Kangen Water — see the differences in quality, minerals and antioxidant properties.',
    keywords: kw('compare waters', 'tap vs Kangen water', 'bottled water', 'distilled water', 'well water'),
  },
  '/glen-apostol': {
    title: 'Glen Apostol | Independent Enagic & Kangen Water Consultant — UAE',
    description:
      'Meet Glen Apostol, your dedicated independent Enagic / Kangen Water consultant in the UAE — personal guidance on alkaline water machines and ongoing after-sales support.',
    keywords: kw('Glen Apostol', 'Kangen Water consultant UAE', 'Enagic distributor UAE'),
  },
  '/process': {
    title: 'How It Works | Your 4-Step Kangen Water Consultation — UAE',
    description:
      'Your simple 4-step journey to Kangen Water in the UAE: free consultation, choose your Enagic machine, easy purchase and ongoing after-sales support from Glen Apostol.',
    keywords: kw('Kangen Water consultation', 'how to buy Enagic UAE', 'Kangen Water process'),
  },
  '/business': {
    title: 'Enagic Business Opportunity | Kangen Water Income — UAE',
    description:
      'Explore the Enagic business opportunity in the UAE — share Kangen Water and build an income with a globally established alkaline water company. Talk to Glen Apostol.',
    keywords: kw('Enagic business opportunity', 'Kangen Water business UAE', 'Enagic distributor'),
  },
  '/testimonials': {
    title: 'Testimonials | Kangen Water Clients in the UAE — Glen Apostol',
    description:
      'Hear from clients across the UAE about their Kangen Water experience and the personal guidance they received from Enagic consultant Glen Apostol.',
    keywords: kw('Kangen Water testimonials', 'Enagic reviews UAE', 'Glen Apostol reviews'),
  },
  '/faq': {
    title: 'Kangen Water FAQ | Enagic Machines & Alkaline Water Questions',
    description:
      'Answers to common questions about Kangen Water, alkaline and hydrogen-rich water, Enagic Leveluk machines, consultations and after-sales support in the UAE.',
    keywords: kw('Kangen Water FAQ', 'alkaline water questions', 'Enagic FAQ'),
  },
  '/contact': {
    title: 'Contact Glen Apostol | Free Kangen Water Consultation — UAE',
    description:
      'Contact Glen Apostol for a free, no-obligation Kangen Water consultation in the UAE. Call or WhatsApp +971 56 664 4147 for expert Enagic alkaline water guidance.',
    keywords: kw('contact Kangen Water UAE', 'free water consultation', 'WhatsApp Enagic UAE'),
  },
}

const DEFAULT_META = ROUTES['/']

// Resolve a product detail route like "/products/k8".
const productIdFromPath = (pathname) => {
  const m = pathname.match(/^\/products\/([^/]+)$/)
  return m ? m[1] : null
}

// ---- Public API ----------------------------------------------------------

// Returns { title, description, keywords, canonical, jsonLd } for a path.
export function getRouteSeo(pathname) {
  // Normalise trailing slash (except root).
  const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/'

  // --- Product detail pages (dynamic) ---
  const productId = productIdFromPath(path)
  if (productId) {
    const p = products.find((x) => x.id === productId)
    if (p) {
      const isMachine = machines.some((m) => m.id === p.id)
      const title = `${p.name} | ${
        isMachine ? 'Enagic Kangen Water Ionizer Machine' : 'Enagic Product'
      } — UAE`
      const description = `${p.description} Get expert guidance and a free consultation on the ${p.name} from Enagic consultant Glen Apostol in the UAE.`
      const keywords = kw(p.name, `buy ${p.name} UAE`, isMachine ? 'water ionizer machine' : 'Enagic product')
      return {
        title,
        description,
        keywords,
        canonical: canonicalFor(path),
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            organizationSchema(),
            websiteSchema(),
            webPage(path, title, description),
            productSchema(p, path),
            breadcrumb([
              { name: 'Home', path: '/' },
              { name: isMachine ? 'Machines' : 'Other Products', path: isMachine ? '/products' : '/other-products' },
              { name: p.name, path },
            ]),
          ],
        },
      }
    }
  }

  // --- Compare Waters detail pages (dynamic) ---
  const waterMatch = path.match(/^\/compare-waters\/([^/]+)$/)
  if (waterMatch) {
    const w = waters.find((x) => x.slug === waterMatch[1])
    if (w) {
      const title = `${w.name} — Compare Waters | Kangen Water UAE`
      const description = w.text.length > 155 ? `${w.text.slice(0, 152)}…` : w.text
      return {
        title,
        description,
        keywords: kw(w.name, 'compare waters', 'Kangen Water', 'water quality'),
        canonical: canonicalFor(path),
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            organizationSchema(),
            websiteSchema(),
            webPage(path, title, description),
            breadcrumb([
              { name: 'Home', path: '/' },
              { name: 'Compare Waters', path: '/compare-waters' },
              { name: w.name, path },
            ]),
          ],
        },
      }
    }
  }

  const meta = ROUTES[path] || DEFAULT_META
  const graph = [organizationSchema(), websiteSchema(), webPage(path, meta.title, meta.description)]

  // Breadcrumb trail (skip on home).
  if (path !== '/') {
    graph.push(
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: meta.title.split('|')[0].trim(), path },
      ]),
    )
  }

  // Route-specific rich schema.
  if (path === '/faq') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalFor('/faq')}#faqpage`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  } else if (path === '/products') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${canonicalFor('/products')}#machines`,
      name: 'Enagic Kangen Water Ionizer Machines',
      itemListElement: machines.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: productSchema(m, `/products/${m.id}`),
      })),
    })
  } else if (path === '/other-products') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${canonicalFor('/other-products')}#products`,
      name: 'Other Enagic Products',
      itemListElement: otherProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: productSchema(p, `/products/${p.id}`),
      })),
    })
  } else if (path === '/glen-apostol') {
    graph.push({
      '@type': 'Person',
      '@id': `${SITE.url}/#glen`,
      name: CONSULTANT.name,
      jobTitle: CONSULTANT.role,
      telephone: CONSULTANT.phone,
      worksFor: { '@id': `${SITE.url}/#business` },
      areaServed: CONSULTANT.region,
      knowsAbout: ['Kangen Water', 'Alkaline water', 'Enagic Leveluk machines', 'Water ionizers'],
    })
  } else if (path === '/process') {
    graph.push({
      '@type': 'HowTo',
      '@id': `${canonicalFor('/process')}#howto`,
      name: 'How to get started with Kangen Water in the UAE',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Free consultation', text: 'Book a free, no-obligation water consultation with Glen Apostol.' },
        { '@type': 'HowToStep', position: 2, name: 'Choose your machine', text: 'Compare Enagic Kangen Water ionizer machines and choose the best fit for your home.' },
        { '@type': 'HowToStep', position: 3, name: 'Easy purchase', text: 'Glen guides you through ordering your genuine Enagic machine and arranging setup.' },
        { '@type': 'HowToStep', position: 4, name: 'After-sales support', text: 'Get ongoing usage tips, filter help and support long after purchase.' },
      ],
    })
  } else if (path === '/contact') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${canonicalFor('/contact')}#contactpage`,
      url: canonicalFor('/contact'),
      name: meta.title,
      about: { '@id': `${SITE.url}/#business` },
    })
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    canonical: canonicalFor(path),
    jsonLd: { '@context': 'https://schema.org', '@graph': graph },
  }
}
