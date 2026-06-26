// ============================================================
// Product catalogue
// NOTE: Replace `image` paths with the real product photo for each
// model when available. Several models currently reuse shared
// placeholder images located in /public/assets.
// ============================================================

export const products = [
  {
    id: 'k8',
    name: 'Leveluk K8',
    tagline: 'Flagship Performance',
    // TODO: replace with dedicated K8 product image if a closer shot is available
    image: '/assets/kangen-machine.png',
    description:
      'Powerful 8-plate water ionizer engineered for customers who want premium performance and confident everyday use across a busy household.',
    bestFor: 'Premium households & daily high use',
    feature: '8 platinum-coated plates',
    usage: 'Home — heavy use',
    highlight: true,
  },
  {
    id: 'sd501dx',
    name: 'Leveluk SD501DX',
    tagline: 'Advanced & Guided',
    image: '/assets/kangen-machine.png', // TODO: replace with SD501DX image
    description:
      'A modern 7-plate machine with advanced features and multilingual audio guidance for an effortless, well-supported daily routine.',
    bestFor: 'Tech-forward homes',
    feature: '7 plates + audio guidance',
    usage: 'Home — daily use',
  },
  {
    id: 'sd501-platinum',
    name: 'Leveluk SD501 Platinum',
    tagline: 'Elegant Home Model',
    image: '/assets/kangen-machine.png', // TODO: replace with SD501 Platinum image
    description:
      'A premium home-use model known for strong, dependable performance paired with an elegant design that complements any modern kitchen.',
    bestFor: 'Design-conscious homes',
    feature: 'Refined premium build',
    usage: 'Home — daily use',
  },
  {
    id: 'sd501',
    name: 'Leveluk SD501',
    tagline: 'Trusted Classic',
    image: '/assets/kangen-machine.png', // TODO: replace with SD501 image
    description:
      'A trusted home-use model designed for consistent daily Kangen Water production — a proven choice for families starting their journey.',
    bestFor: 'Everyday family use',
    feature: 'Consistent performance',
    usage: 'Home — daily use',
  },
  {
    id: 'super501',
    name: 'Leveluk Super501',
    tagline: 'Maximum Capacity',
    image: '/assets/kangen-machine.png', // TODO: replace with Super501 image
    description:
      'Built for heavy use, larger households, or customers who need higher production capacity throughout the day without compromise.',
    bestFor: 'Large households & high demand',
    feature: 'High-capacity output',
    usage: 'Home / commercial',
  },
  {
    id: 'jr4',
    name: 'Leveluk JR IV',
    tagline: 'Smart Starter',
    image: '/assets/kangen-machine.png', // TODO: replace with JR IV image
    description:
      'A compact starter model suitable for customers who want a practical, space-friendly entry into the Kangen Water lifestyle.',
    bestFor: 'First-time owners & small spaces',
    feature: 'Compact footprint',
    usage: 'Home — light/daily use',
  },
  {
    id: 'sd501u',
    name: 'Leveluk SD501U',
    tagline: 'Under-Counter',
    image: '/assets/kangen-machine.png', // TODO: replace with SD501U image
    description:
      'An under-counter solution for customers who want more counter space and a clean, minimalist kitchen setup with a dedicated faucet.',
    bestFor: 'Clean kitchen design',
    feature: 'Hidden installation',
    usage: 'Home — built-in',
  },
  {
    id: 'anespa',
    name: 'Anespa DX',
    tagline: 'Home Spa System',
    image: '/assets/beauty-product.png', // TODO: replace with Anespa DX image
    description:
      'A home spa system designed to upgrade your bath and shower water experience for a refreshing, wellness-focused daily routine.',
    bestFor: 'Bath & shower wellness',
    feature: 'Spa-grade shower water',
    usage: 'Bathroom — daily use',
  },
  {
    id: 'emguarde',
    name: 'emGuarde',
    tagline: 'Lifestyle Harmoniser',
    image: '/assets/hydrogen.png', // TODO: replace with emGuarde image
    description:
      'A lifestyle product positioned for customers interested in environmental harmonising support within their living and working spaces.',
    bestFor: 'Modern living & work spaces',
    feature: 'Environmental harmonising',
    usage: 'Home / office',
  },
  {
    id: 'filters',
    name: 'Replacement Filters & Supplies',
    tagline: 'Keep It Running',
    image: '/assets/filter.png',
    description:
      'Genuine replacement filters and supplies to keep your machine performing at its best, day after day, year after year.',
    bestFor: 'Existing machine owners',
    feature: 'Genuine Enagic parts',
    usage: 'Maintenance',
  },
]

// Subset used in the dedicated machine comparison table
export const comparison = [
  {
    name: 'Leveluk K8',
    bestFor: 'Premium households',
    feature: '8 platinum-coated plates',
    usage: 'Heavy daily use',
  },
  {
    name: 'Leveluk SD501DX',
    bestFor: 'Tech-forward homes',
    feature: '7 plates + audio guidance',
    usage: 'Daily home use',
  },
  {
    name: 'Leveluk SD501 Platinum',
    bestFor: 'Design-conscious homes',
    feature: 'Elegant premium build',
    usage: 'Daily home use',
  },
  {
    name: 'Leveluk Super501',
    bestFor: 'Large households',
    feature: 'High-capacity output',
    usage: 'Heavy / commercial',
  },
  {
    name: 'Leveluk JR IV',
    bestFor: 'First-time owners',
    feature: 'Compact footprint',
    usage: 'Light / daily use',
  },
  {
    name: 'Anespa DX',
    bestFor: 'Bath & shower wellness',
    feature: 'Spa-grade shower water',
    usage: 'Bathroom routine',
  },
]

// Dropdown options for the lead form "Interested Product" field
export const productOptions = [
  'Kangen Water Machine',
  'Leveluk K8',
  'SD501',
  'SD501 Platinum',
  'SD501DX',
  'Super501',
  'JR IV',
  'Anespa DX',
  'Replacement Filter',
  'Business Opportunity',
  'Not sure yet',
]
