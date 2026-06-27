// ============================================================
// Product catalogue
// Machine `details` (overview, plates, water types, features,
// specs) are based on Enagic's published product information.
// Always verify pricing & specs against official Enagic
// materials before purchase.
// ============================================================

// The five water types every multi-plate Leveluk produces.
const fiveWaters = [
  { name: 'Strong Kangen Water', ph: 'pH 11.0', use: 'Food prep & tough cleaning' },
  { name: 'Kangen Water', ph: 'pH 8.5–9.5', use: 'Everyday drinking & cooking' },
  { name: 'Clean / Neutral Water', ph: 'pH 7.0', use: 'Taking medication & baby formula' },
  { name: 'Beauty Water', ph: 'pH 4.0–6.0', use: 'Skin toning & gentle cleaning' },
  { name: 'Strong Acidic Water', ph: 'pH 2.5', use: 'Sanitising surfaces & utensils' },
]

// The compact JR IV produces four water types.
const fourWaters = [
  { name: 'Strong Kangen Water', ph: 'pH up to 11.0', use: 'Food prep & cleaning' },
  { name: 'Kangen Water', ph: 'pH 8.5–9.5', use: 'Everyday drinking & cooking' },
  { name: 'Clean / Neutral Water', ph: 'pH 7.0', use: 'Taking medication' },
  { name: 'Beauty Water', ph: 'pH 4.0–6.0', use: 'Skin toning & gentle cleaning' },
]

// ---------------- Kangen Water machines (ionizers) ----------------
export const machines = [
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
    details: {
      source: 'https://www.enagic.com/en_US/products/leveluk-k8',
      plates: '8 platinum-coated titanium plates',
      overview:
        'The Leveluk K8 is Enagic’s flagship home water ionizer. With eight platinum-coated titanium electrode plates — the most in the standard home series — it delivers strong, stable electrolysis and high water output for busy households. A large full-colour LCD panel and clear multi-language voice guidance make daily operation simple, while the automatic cleaning system keeps the unit performing reliably year after year.',
      waterTypes: fiveWaters,
      features: [
        '8 platinum-coated titanium electrode plates for maximum ionising strength',
        'Produces 5 distinct water types at the touch of a button',
        'Large full-colour LCD display with intuitive controls',
        'Clear multi-language electronic voice guidance',
        'Automatic cleaning system for long-term reliability',
        'Suitable for high daily demand in larger households',
      ],
      specs: [
        { label: 'Electrode plates', value: '8' },
        { label: 'Water types', value: '5' },
        { label: 'Display', value: 'Full-colour LCD' },
        { label: 'Guidance', value: 'Multi-language voice' },
        { label: 'Cleaning', value: 'Automatic' },
        { label: 'Installation', value: 'Countertop' },
      ],
    },
  },
  {
    id: 'sd501dx',
    name: 'Leveluk SD501DX',
    tagline: 'Advanced & Guided',
    image: '/assets/sd501dx.png',
    description:
      'A modern 7-plate machine with advanced features and multilingual audio guidance for an effortless, well-supported daily routine.',
    bestFor: 'Tech-forward homes',
    feature: '7 plates + audio guidance',
    usage: 'Home — daily use',
    details: {
      source: 'https://www.enagic.com/en_US/products/leveluk-sd501dx',
      plates: '7 platinum-coated titanium plates',
      overview:
        'The Leveluk SD501DX pairs the proven 7-plate SD501 engine with a dedicated, separately installed faucet and built-in diverter — giving you a clean, direct water connection and an effortless daily routine. Large LCD readouts and clear voice prompts guide you through each water type, and the automatic cleaning system keeps performance consistent.',
      waterTypes: fiveWaters,
      features: [
        '7 platinum-coated titanium electrode plates',
        'Dedicated, separately installed faucet with built-in diverter',
        'Produces 5 distinct water types',
        'LCD display with clear electronic voice guidance',
        'Automatic cleaning for dependable performance',
      ],
      specs: [
        { label: 'Electrode plates', value: '7' },
        { label: 'Water types', value: '5' },
        { label: 'Display', value: 'LCD + voice guidance' },
        { label: 'Faucet', value: 'Dedicated, installed' },
        { label: 'Cleaning', value: 'Automatic' },
        { label: 'Installation', value: 'Countertop' },
      ],
    },
  },
  {
    id: 'sd501-platinum',
    name: 'Leveluk SD501 Platinum',
    tagline: 'Elegant Home Model',
    image: '/assets/sd501-platinum.png',
    description:
      'A premium home-use model known for strong, dependable performance paired with an elegant design that complements any modern kitchen.',
    bestFor: 'Design-conscious homes',
    feature: 'Refined premium build',
    usage: 'Home — daily use',
    details: {
      source: 'https://www.enagic.com/en_US/products/leveluk-sd501-platinum',
      plates: '7 platinum-coated titanium plates',
      overview:
        'The Leveluk SD501 Platinum delivers the same robust 7-plate performance that made the SD501 a worldwide best-seller, wrapped in an elegant platinum-finish cabinet designed to complement a modern kitchen. A large LCD panel, voice guidance and automatic cleaning make it a refined, dependable choice for everyday home use.',
      waterTypes: fiveWaters,
      features: [
        '7 platinum-coated titanium electrode plates',
        'Elegant platinum-finish cabinet design',
        'Produces 5 distinct water types',
        'LCD display with electronic voice guidance',
        'Automatic cleaning for long-term reliability',
      ],
      specs: [
        { label: 'Electrode plates', value: '7' },
        { label: 'Water types', value: '5' },
        { label: 'Display', value: 'LCD + voice guidance' },
        { label: 'Finish', value: 'Platinum cabinet' },
        { label: 'Cleaning', value: 'Automatic' },
        { label: 'Installation', value: 'Countertop' },
      ],
    },
  },
  {
    id: 'super501',
    name: 'Leveluk Super501',
    tagline: 'Maximum Capacity',
    image: '/assets/super501.png',
    description:
      'Built for heavy use, larger households, or customers who need higher production capacity throughout the day without compromise.',
    bestFor: 'Large households & high demand',
    feature: 'High-capacity output',
    usage: 'Home / commercial',
    details: {
      source: 'https://www.enagic.com/en_US/products/leveluk-super501',
      plates: '12 platinum-coated titanium plates',
      overview:
        'The Leveluk Super501 is Enagic’s high-capacity workhorse. With twelve platinum-coated titanium electrode plates and a robust power supply, it is built for continuous, high-volume operation — ideal for large families, offices, clinics and light commercial settings that need a steady supply throughout the day.',
      waterTypes: fiveWaters,
      features: [
        '12 platinum-coated titanium electrode plates',
        'Built for continuous, high-volume production',
        'Ideal for large households and light commercial use',
        'Produces 5 distinct water types',
        'Durable construction for heavy daily demand',
      ],
      specs: [
        { label: 'Electrode plates', value: '12' },
        { label: 'Water types', value: '5' },
        { label: 'Capacity', value: 'High / continuous' },
        { label: 'Best suited to', value: 'Heavy / commercial' },
        { label: 'Cleaning', value: 'Automatic' },
        { label: 'Installation', value: 'Countertop' },
      ],
    },
  },
  {
    id: 'jr4',
    name: 'Leveluk JR IV',
    tagline: 'Smart Starter',
    image: '/assets/jr-iv.png',
    description:
      'A compact starter model suitable for customers who want a practical, space-friendly entry into the Kangen Water lifestyle.',
    bestFor: 'First-time owners & small spaces',
    feature: 'Compact footprint',
    usage: 'Home — light/daily use',
    details: {
      source: 'https://www.enagic.com/en_US/products/leveluk-jr4',
      plates: '3 platinum-coated titanium plates',
      overview:
        'The Leveluk JR IV is a compact, affordable entry into the Kangen Water lifestyle. Three platinum-coated titanium plates produce multiple water types in a space-friendly footprint — an ideal first machine for smaller households, tighter kitchens and customers who want to start simply.',
      waterTypes: fourWaters,
      features: [
        '3 platinum-coated titanium electrode plates',
        'Compact, space-friendly footprint',
        'Produces 4 water types',
        'Simple LCD display with voice guidance',
        'Practical, budget-friendly starter model',
      ],
      specs: [
        { label: 'Electrode plates', value: '3' },
        { label: 'Water types', value: '4' },
        { label: 'Footprint', value: 'Compact' },
        { label: 'Display', value: 'LCD + voice guidance' },
        { label: 'Cleaning', value: 'Automatic' },
        { label: 'Installation', value: 'Countertop' },
      ],
    },
  },
  {
    id: 'sd501u',
    name: 'Leveluk SD501U',
    tagline: 'Under-Counter',
    image: '/assets/sd501u.png',
    description:
      'An under-counter solution for customers who want more counter space and a clean, minimalist kitchen setup with a dedicated faucet.',
    bestFor: 'Clean kitchen design',
    feature: 'Hidden installation',
    usage: 'Home — built-in',
    details: {
      source: 'https://www.enagic.com/en_US/products/leveluk-sd501u-under-counter',
      plates: '7 platinum-coated titanium plates',
      overview:
        'The Leveluk SD501U installs the proven 7-plate SD501 engine discreetly under the counter, with a dedicated faucet on the countertop. It frees up valuable counter space for a clean, minimalist kitchen while delivering the same dependable 7-plate performance.',
      waterTypes: fiveWaters,
      features: [
        '7 platinum-coated titanium electrode plates',
        'Discreet under-counter installation',
        'Dedicated faucet mounted on the countertop',
        'Frees up counter space for a clean kitchen',
        'Produces 5 distinct water types',
      ],
      specs: [
        { label: 'Electrode plates', value: '7' },
        { label: 'Water types', value: '5' },
        { label: 'Faucet', value: 'Dedicated, countertop' },
        { label: 'Cleaning', value: 'Automatic' },
        { label: 'Installation', value: 'Under-counter / built-in' },
      ],
    },
  },
]

// The six machine ids, in display order, for any consumer that needs them.
export const machineIds = machines.map((m) => m.id)

// ---------------- Other Enagic products (non-machine) ----------------
// Details summarised from official Enagic product pages. Verify current
// specs & pricing with Glen / official Enagic materials before purchase.
export const otherProducts = [
  {
    id: 'anespa',
    name: 'Anespa® DX',
    tagline: 'Mineral Ion Water Spa',
    image: '/assets/anespa.png',
    description:
      'A home spa system that turns your shower and bath into a soothing, mineral-rich experience — softer water for softer skin and hair.',
    bestFor: 'Bath & shower wellness',
    feature: 'Mineral ion spa water',
    usage: 'Bathroom — daily use',
    details: {
      source: 'https://www.enagic.com/en_US/products/anespadx-mineral-ion-water-spa',
      overview:
        'The Anespa® DX transforms your everyday shower and bath into a relaxing home spa. It removes chlorine and other impurities while infusing your water with natural minerals from its mineral-ion cartridge, leaving skin and hair feeling soft, hydrated and refreshed. It installs easily onto most standard bath and shower fittings.',
      features: [
        'Removes chlorine and other impurities',
        'Infuses water with natural minerals',
        'Leaves skin and hair feeling soft and hydrated',
        'For both shower and bath use',
        'Easy installation on standard fittings',
      ],
      specs: [
        { label: 'Type', value: 'Mineral ion water spa' },
        { label: 'Function', value: 'Dechlorination + mineralising' },
        { label: 'Use', value: 'Shower & bath' },
        { label: 'Installation', value: 'Standard fittings' },
      ],
    },
  },
  {
    id: 'filters',
    name: 'Replacement Filters',
    tagline: 'Keep It Running',
    image: '/assets/filter.png',
    description:
      'Genuine Enagic replacement filters keep your machine producing clean, great-tasting water at peak performance, year after year.',
    bestFor: 'Existing machine owners',
    feature: 'Genuine Enagic parts',
    usage: 'Maintenance',
    details: {
      source: 'https://www.enagic.com/en_US/products/replacement-filters',
      overview:
        'Genuine Enagic replacement filters keep your LeveLuk machine producing clean, great-tasting water at peak performance. The high-grade internal filter removes chlorine, sediment and impurities from your tap water. Replacing the filter on schedule protects your machine and ensures consistent water quality and taste.',
      features: [
        'Genuine Enagic replacement parts',
        'Removes chlorine, sediment and impurities',
        'Maintains water quality and taste',
        'Protects your machine and prolongs its life',
        'Quick and easy to replace',
      ],
      specs: [
        { label: 'Type', value: 'Replacement filter' },
        { label: 'Compatibility', value: 'LeveLuk machines' },
        { label: 'Replace', value: 'Based on usage / volume' },
      ],
    },
  },
  {
    id: 'ukon',
    name: 'Kangen Ukon®',
    tagline: 'Turmeric Supplement',
    image: '/assets/ukon.png',
    description:
      'A premium turmeric (ukon) supplement made from carefully cultivated Okinawan turmeric, naturally rich in curcumin.',
    bestFor: 'Everyday wellness',
    feature: 'Okinawan turmeric',
    usage: 'Daily supplement',
    details: {
      source: 'https://www.enagic.com/en_US/products/ukon-sigma-turmeric-supplement',
      overview:
        'Kangen Ukon® is a premium turmeric (ukon) supplement made from carefully cultivated Okinawan spring turmeric, naturally rich in curcumin and essential oils. Presented in convenient softgel capsules, it is part of Enagic’s wellness range, created to support a balanced, health-focused lifestyle.',
      features: [
        'Made from premium Okinawan spring turmeric',
        'Naturally rich in curcumin',
        'Convenient softgel capsules',
        'Carefully cultivated and processed',
        'Part of Enagic’s wellness range',
      ],
      specs: [
        { label: 'Type', value: 'Dietary supplement' },
        { label: 'Source', value: 'Okinawan turmeric' },
        { label: 'Form', value: 'Softgel capsules' },
      ],
    },
  },
  {
    id: 'beaute',
    name: 'Kangen Beauté®',
    tagline: 'Beauty & Skincare',
    image: '/assets/beaute.png',
    description:
      'Enagic’s premium beauty line, thoughtfully formulated to complement a Kangen Water lifestyle and nourish your natural beauty.',
    bestFor: 'Skincare & beauty',
    feature: 'Premium beauty line',
    usage: 'Daily beauty routine',
    details: {
      source: 'https://www.enagic.com/en_US/product-kangen-beaute',
      overview:
        'Kangen Beauté® is Enagic’s premium beauty line, thoughtfully created to complement a Kangen Water lifestyle. The collection brings together skincare and cosmetics formulated with carefully selected ingredients, designed to nourish and enhance your natural beauty.',
      features: [
        'Premium beauty and skincare collection',
        'Complements the Kangen Water lifestyle',
        'Carefully selected ingredients',
        'Designed to nourish and enhance skin',
        'Part of Enagic’s wellness range',
      ],
      specs: [
        { label: 'Type', value: 'Cosmetics / skincare' },
        { label: 'Range', value: 'Beauty collection' },
      ],
    },
  },
  {
    id: 'wagyu',
    name: 'Kangen Wagyu®',
    tagline: 'Premium Wagyu Beef',
    image: '/assets/wagyu.png',
    description:
      'Premium Japanese Wagyu beef from cattle raised with Kangen Water — exceptional marbling, tenderness and flavour.',
    bestFor: 'Fine dining',
    feature: 'Premium Wagyu beef',
    usage: 'Gourmet',
    details: {
      source: 'https://www.enagic.com/en_US/products/kangen-wagyu',
      overview:
        'Kangen Wagyu® is premium Japanese Wagyu beef from cattle raised with Kangen Water. Renowned for its exceptional marbling, tenderness and rich, refined flavour, it reflects Enagic’s commitment to quality — extending from water all the way to the dining table.',
      features: [
        'Premium Japanese Wagyu beef',
        'Cattle raised with Kangen Water',
        'Exceptional marbling and tenderness',
        'Rich, refined flavour',
        'Enagic quality from water to table',
      ],
      specs: [
        { label: 'Type', value: 'Premium Wagyu beef' },
        { label: 'Origin', value: 'Japan' },
      ],
    },
  },
]

// Combined catalogue — used for product-page lookups by id.
export const products = [...machines, ...otherProducts]

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
  'Kangen Ukon',
  'Kangen Beauté',
  'Kangen Wagyu',
  'Business Opportunity',
  'Not sure yet',
]
