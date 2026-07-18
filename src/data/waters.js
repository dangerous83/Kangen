// Shared data for the Compare Waters section and its individual detail pages.
// Comparison copy follows Enagic's "Compare Waters" source material; images are
// Higgsfield (Nano Banana Pro, 1k) generations served from CDN, except the
// Kangen machine shot which is a committed local asset.
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_34SGn9O1DyKx5raXvDSnlxgbueE'

export const waters = [
  {
    slug: 'tap-water',
    name: 'Tap Water',
    tag: 'Everyday supply',
    img: `${CDN}/hf_20260718_121447_a9ca151f-0b87-4c2e-99ca-958917f214d0.png`,
    text: 'Even though tap water is freely available and generally treated to be safe, it can have a negative impact on the environment through water wastage and pollution — and may still carry chlorine, sediment and other residues.',
    points: [
      'Widely available and treated to be safe to drink',
      'May still carry chlorine, sediment and other residues',
      'Environmental cost from water wastage and pollution',
      'Typically close to a neutral pH',
    ],
  },
  {
    slug: 'bottled-water',
    name: 'Bottled Water',
    tag: 'Store-bought',
    img: `${CDN}/hf_20260718_121449_ebf83ba5-3c71-43e8-90d4-a905be08c91f.png`,
    text: 'Bottled water is not necessarily healthier than tap water, yet it costs much more. A four-year study by the Natural Resources Defense Council found that one third of the bottled water tested contained levels of contamination exceeding allowable limits.',
    points: [
      'Convenient, but far more expensive than tap water',
      'Not necessarily healthier than tap water',
      'NRDC study: 1 in 3 samples exceeded contamination limits',
      'Single-use plastic adds to environmental waste',
    ],
  },
  {
    slug: 'distilled-water',
    name: 'Distilled Water',
    tag: 'Reverse osmosis',
    img: `${CDN}/hf_20260718_121451_730ba56b-088e-44f3-8f7b-8cb92de0cac7.png`,
    text: 'Also known as Reverse Osmosis water, distilled water has had all or almost all of its minerals removed. This has raised concern, as waterborne minerals are important to nutrition.',
    points: [
      'Also known as Reverse Osmosis (RO) water',
      'All or almost all minerals are removed',
      'Very pure, but stripped of beneficial minerals',
      'Waterborne minerals are important to nutrition',
    ],
  },
  {
    slug: 'well-water',
    name: 'Well Water',
    tag: 'Natural source',
    img: `${CDN}/hf_20260718_121452_b885e787-0b35-4d48-9b5c-05c21e85a861.png`,
    text: 'Well water is sometimes more alkaline in nature, but it is prone to contamination from its surroundings and should be carefully tested and treated.',
    points: [
      'Natural groundwater source',
      'Sometimes more alkaline in nature',
      'Prone to contamination from its surroundings',
      'Should be tested and treated regularly',
    ],
  },
  {
    slug: 'kangen-water',
    name: 'Kangen Water',
    tag: 'The upgrade',
    highlight: true,
    local: true,
    img: '/assets/kangen-water-machine-a.webp',
    text: 'With an Enagic Kangen Water machine, your tap water not only becomes delicious by filtering out unwanted sediment and residues — it also gains the beneficial property of being rich in molecular hydrogen, a potent antioxidant.',
    points: [
      'Filters unwanted sediment and residues',
      'Rich in molecular hydrogen, a potent antioxidant',
      'Delicious, fresh and light taste',
      'Produced by Enagic water ionizer technology',
    ],
  },
]

export const getWater = (slug) => waters.find((w) => w.slug === slug)
