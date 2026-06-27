import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal, { SectionHeading } from './Reveal'
import { products } from '../data/products'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { Check, ArrowRight } from './icons'

export default function ProductShowcase() {
  const { openLead } = useLeadModal()

  return (
    <section id="products" className="section-pad bg-slate-50/60">
      <div className="container-px">
        <SectionHeading
          eyebrow="Premium Machines"
          title="Find the right Kangen Water machine"
          intro="From compact starters to flagship performers — explore the Enagic range, then ask Glen which model fits your home, lifestyle and budget."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-white shadow-card transition-shadow hover:shadow-soft ${
                  p.highlight ? 'border-gold/50 ring-1 ring-gold/30' : 'border-slate-100'
                }`}
              >
                {/* Image (links to the product's own page) */}
                <Link to={`/products/${p.id}`} className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
                  {/* TODO: replace placeholder product images in data/products.js with real photos */}
                  <img
                    src={asset(p.image)}
                    alt={`${p.name} water ionizer`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {p.highlight && (
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-white shadow-gold">
                      Flagship
                    </span>
                  )}
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold text-brand-600 backdrop-blur">
                    {p.tagline}
                  </span>
                </Link>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-brand-700">
                    <Link to={`/products/${p.id}`} className="hover:text-brand-600">{p.name}</Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>

                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-wellness/8 px-3 py-2 text-xs font-semibold text-wellness-dark">
                    <Check className="h-4 w-4 flex-none text-wellness" />
                    Best for: {p.bestFor}
                  </div>

                  <span className="mt-5 mb-4 block h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

                  {/* Primary: own page · Secondary: ask Glen */}
                  <div className="flex flex-col gap-2.5 sm:flex-row">
                    <Link
                      to={`/products/${p.id}`}
                      className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-700"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                    <button
                      onClick={() => openLead(p.name)}
                      className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-brand-600/15 px-5 py-2.5 text-sm font-semibold text-brand-700 transition-all hover:border-brand-600 hover:bg-brand-50"
                    >
                      Ask Glen
                    </button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
