import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products, machines } from '../data/products'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { Check, WhatsApp, ArrowRight, Drop, Layers } from '../components/icons'

const sharedBenefits = [
  'Genuine Enagic build quality',
  'Personal setup guidance from Glen',
  'After-sales support, filters & supplies',
  'Honest advice before you buy — no pressure',
]

export default function ProductDetail() {
  const { id } = useParams()
  const { openLead } = useLeadModal()
  const product = products.find((p) => p.id === id)

  // Unknown id → back to the catalogue
  if (!product) return <Navigate to="/products" replace />

  const specs = [
    { label: 'Best For', value: product.bestFor },
    { label: 'Feature Highlight', value: product.feature },
    { label: 'Usage Type', value: product.usage },
  ]

  const related = machines.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <article className="section-pad bg-white">
      <div className="container-px">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
          <Link to="/products" className="font-medium text-brand-600 hover:text-brand-700">
            All Machines
          </Link>
          <span>/</span>
          <span className="text-slate-500">{product.name}</span>
        </nav>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/20 to-brand-400/15 blur-2xl" />
            <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-100 bg-gradient-to-b from-brand-50/50 to-white p-5 shadow-card">
              <img
                src={asset(product.image)}
                alt={`${product.name} water ionizer`}
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow">{product.tagline}</span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-700 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{product.description}</p>

            {/* Spec chips */}
            <dl className="mt-7 grid gap-3 sm:grid-cols-3">
              {specs.map((s) => (
                <div key={s.label} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{s.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-700">{s.value}</dd>
                </div>
              ))}
            </dl>

            {/* Benefits */}
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {sharedBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-wellness" />
                  {b}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => openLead(product.name)} className="btn-primary">
                Ask Glen About the {product.name}
              </button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsApp className="h-5 w-5" /> WhatsApp Glen
              </a>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-slate-400">
              Pricing and availability are confirmed directly with Glen. Product information should be
              verified with official Enagic materials before purchase.
            </p>
          </motion.div>
        </div>

        {/* Detailed machine information (Enagic-based) */}
        {product.details && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mt-20 border-t border-slate-100 pt-14"
          >
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              {/* Overview + features */}
              <div>
                <span className="eyebrow">Overview</span>
                <h2 className="mt-4 text-2xl font-bold text-brand-700 sm:text-3xl">
                  About the {product.name}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  {product.details.overview}
                </p>

                {product.details.plates && (
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
                    <Layers className="h-4 w-4 text-gold-dark" />
                    {product.details.plates}
                  </div>
                )}

                {product.details.features?.length > 0 && (
                  <>
                    <h3 className="mt-9 text-lg font-bold text-brand-700">Key features</h3>
                    <ul className="mt-4 grid gap-2.5">
                      {product.details.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <Check className="mt-0.5 h-4 w-4 flex-none text-wellness" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Specs + water types */}
              <div className="space-y-8">
                {product.details.specs?.length > 0 && (
                  <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                      Specifications
                    </h3>
                    <dl className="mt-4 divide-y divide-slate-200/70">
                      {product.details.specs.map((s) => (
                        <div key={s.label} className="flex items-center justify-between gap-4 py-2.5">
                          <dt className="text-sm text-slate-500">{s.label}</dt>
                          <dd className="text-sm font-semibold text-brand-700">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {product.details.waterTypes?.length > 0 && (
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-brand-700">
                      <Drop className="h-5 w-5 text-brand-500" />
                      Water types produced
                    </h3>
                    <div className="mt-4 grid gap-3">
                      {product.details.waterTypes.map((w) => (
                        <div
                          key={w.name}
                          className="rounded-2xl border border-slate-100 bg-white p-4 shadow-card"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-bold text-brand-700">{w.name}</span>
                            <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-600">
                              {w.ph}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-slate-500">{w.use}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {product.details.source && (
              <p className="mt-10 text-xs leading-relaxed text-slate-400">
                Product details summarised from official Enagic information.{' '}
                <a
                  href={product.details.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline hover:text-brand-700"
                >
                  View on Enagic.com
                </a>
                . Always confirm current specifications and pricing with Glen before purchase.
              </p>
            )}
          </motion.section>
        )}

        {/* Related machines */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-brand-700">Other machines to consider</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="flex aspect-[16/9] items-center justify-center overflow-hidden bg-brand-50/40 p-3">
                  <img
                    src={asset(p.image)}
                    alt={p.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-brand-700">{p.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{p.bestFor}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-wellness-dark">
                    View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
