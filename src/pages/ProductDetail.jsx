import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { Check, WhatsApp, ArrowRight } from '../components/icons'

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

  const related = products.filter((p) => p.id !== product.id && p.id !== 'filters').slice(0, 3)

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
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-100 bg-gradient-to-b from-brand-50/50 to-white shadow-card">
              {/* TODO: replace placeholder product images in data/products.js */}
              <img
                src={asset(product.image)}
                alt={`${product.name} water ionizer`}
                className="h-full w-full object-cover"
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
                <div className="aspect-[4/3] overflow-hidden bg-brand-50/40">
                  <img
                    src={asset(p.image)}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
