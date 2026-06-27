import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal, { SectionHeading } from './Reveal'
import { otherProducts } from '../data/products'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { Check, ArrowRight } from './icons'

// Falls back to the logo if a product photo hasn't been added yet.
const onImgError = (e) => {
  if (e.currentTarget.dataset.fallback) return
  e.currentTarget.dataset.fallback = '1'
  e.currentTarget.src = asset('/assets/logo.png')
  e.currentTarget.classList.add('opacity-50', 'p-8')
}

// Reusable "Other Products" feature-card grid. Rendered both under the
// machines on the All Machines page and on the dedicated page.
export default function OtherProductsGrid({ className = 'section-pad bg-white' }) {
  const { openLead } = useLeadModal()

  return (
    <section id="other-products" className={className}>
      <div className="container-px">
        <SectionHeading
          eyebrow="Other Products"
          title="Beyond the machines"
          intro="Explore the wider Enagic range — from the Anespa home spa and genuine replacement filters to the Kangen Ukon, Beauté and Wagyu lifestyle products. Tap any card for full details."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProducts.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-shadow hover:shadow-soft"
              >
                {/* Image links to the product's own page */}
                <Link
                  to={`/products/${p.id}`}
                  className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-b from-brand-50/60 to-white p-3"
                >
                  <img
                    src={asset(p.image)}
                    onError={onImgError}
                    alt={p.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold text-brand-600 backdrop-blur">
                    {p.tagline}
                  </span>
                </Link>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-brand-700">
                    <Link to={`/products/${p.id}`} className="hover:text-brand-600">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>

                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-wellness/8 px-3 py-2 text-xs font-semibold text-wellness-dark">
                    <Check className="h-4 w-4 flex-none text-wellness" />
                    Best for: {p.bestFor}
                  </div>

                  <span className="mt-5 mb-4 block h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

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
