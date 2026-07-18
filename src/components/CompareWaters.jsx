import { motion } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal'
import { useLeadModal } from '../context/LeadModalContext'
import { Check, ArrowRight } from './icons'

// AI-generated imagery (Higgsfield · Nano Banana Pro, 1k) served from CDN.
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_34SGn9O1DyKx5raXvDSnlxgbueE'

// Comparison copy follows Enagic's "Compare Waters" source material.
const otherWaters = [
  {
    name: 'Tap Water',
    tag: 'Everyday supply',
    img: `${CDN}/hf_20260718_121447_a9ca151f-0b87-4c2e-99ca-958917f214d0.png`,
    text: 'Even though tap water is freely available and generally treated to be safe, it can have a negative impact on the environment through water wastage and pollution — and may still carry chlorine, sediment and other residues.',
  },
  {
    name: 'Bottled Water',
    tag: 'Store-bought',
    img: `${CDN}/hf_20260718_121449_ebf83ba5-3c71-43e8-90d4-a905be08c91f.png`,
    text: 'Bottled water is not necessarily healthier than tap water, yet it costs much more. A four-year study by the Natural Resources Defense Council found that one third of the bottled water tested contained levels of contamination exceeding allowable limits.',
  },
  {
    name: 'Distilled Water',
    tag: 'Reverse osmosis',
    img: `${CDN}/hf_20260718_121451_730ba56b-088e-44f3-8f7b-8cb92de0cac7.png`,
    text: 'Also known as Reverse Osmosis water, distilled water has had all or almost all of its minerals removed. This has raised concern, as waterborne minerals are important to nutrition.',
  },
  {
    name: 'Well Water',
    tag: 'Natural source',
    img: `${CDN}/hf_20260718_121452_b885e787-0b35-4d48-9b5c-05c21e85a861.png`,
    text: 'Well water is sometimes more alkaline in nature, but it is prone to contamination from its surroundings and should be carefully tested and treated.',
  },
]

const kangen = {
  name: 'Kangen Water',
  img: `${CDN}/hf_20260718_121453_151dfff5-d069-48f4-a06a-792b5f96ef40.png`,
  text: 'With an Enagic Kangen Water machine, your tap water not only becomes delicious by filtering out unwanted sediment and residues — it also gains the beneficial property of being rich in molecular hydrogen, a potent antioxidant.',
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function CompareWaters() {
  const { openLead } = useLeadModal()

  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Compare Waters"
          title="Not all water is the same"
          intro="See how everyday water sources compare — and why so many customers upgrade to hydrogen-rich Kangen Water."
        />

        {/* Everyday water sources */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {otherWaters.map((w) => (
            <motion.article
              key={w.name}
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={w.img}
                  alt={w.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-brand-700 backdrop-blur">
                  {w.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-brand-700">{w.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Kangen Water — highlighted winner */}
        <Reveal delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-gold/40 bg-gradient-to-br from-brand-600 to-brand-700 shadow-card">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="grid items-center gap-0 lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
                <img
                  src={kangen.img}
                  alt="Kangen Water"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7 sm:p-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-800">
                  ★ The upgrade
                </span>
                <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">{kangen.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-brand-50">{kangen.text}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {['Rich in molecular hydrogen', 'Filters sediment & residues', 'Delicious, fresh taste', 'Hydrogen-rich antioxidant water'].map(
                    (b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-brand-50">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-gold-light" />
                        {b}
                      </li>
                    ),
                  )}
                </ul>
                <button
                  onClick={() => openLead()}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
                >
                  Book a Free Consultation <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-slate-400">
          Comparison based on Enagic’s official “Compare Waters” information. Water quality varies by
          source and location; always verify with official Enagic materials.
        </p>
      </div>
    </section>
  )
}
