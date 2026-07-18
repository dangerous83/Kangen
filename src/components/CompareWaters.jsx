import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { waters } from '../data/waters'
import { Check, ArrowRight } from './icons'

const otherWaters = waters.filter((w) => !w.highlight)
const kangen = waters.find((w) => w.highlight)

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
              key={w.slug}
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-shadow hover:shadow-soft"
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
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{w.text}</p>
                <Link
                  to={`/compare-waters/${w.slug}`}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-brand-100 bg-white px-5 py-2.5 text-sm font-semibold text-brand-600 transition-all hover:border-brand-300 hover:bg-brand-50"
                >
                  Preview <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Kangen Water — highlighted winner */}
        <Reveal delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-gold/40 bg-gradient-to-br from-brand-600 to-brand-700 shadow-card">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="grid items-center gap-0 lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
                <img
                  src={kangen.local ? asset(kangen.img) : kangen.img}
                  alt={kangen.name}
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
                  {kangen.points.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-brand-50">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-gold-light" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => openLead()}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
                  >
                    Book a Free Consultation <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    to={`/compare-waters/${kangen.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Preview
                  </Link>
                </div>
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
