import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { waters, getWater } from '../data/waters'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { Check, ArrowRight } from '../components/icons'

export default function CompareWaterDetail() {
  const { slug } = useParams()
  const water = getWater(slug)
  const { openLead } = useLeadModal()

  if (!water) return <Navigate to="/compare-waters" replace />

  const src = water.local ? asset(water.img) : water.img
  const others = waters.filter((w) => w.slug !== water.slug)
  const kangen = waters.find((w) => w.highlight)
  const isKangen = !!water.highlight

  return (
    <article className="section-pad bg-white">
      <div className="container-px">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
          <Link to="/compare-waters" className="font-medium text-brand-600 hover:text-brand-700">
            Compare Waters
          </Link>
          <span>/</span>
          <span className="text-slate-500">{water.name}</span>
        </nav>

        {/* Hero */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-400/15 to-gold/20 blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-100 shadow-card">
              <img src={src} alt={water.name} className="aspect-[4/3] w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow">{water.tag}</span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-700 sm:text-4xl lg:text-5xl">
              {water.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{water.text}</p>

            <h2 className="mt-8 text-lg font-bold text-brand-700">Key points</h2>
            <ul className="mt-4 grid gap-2.5">
              {water.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-wellness" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => openLead()} className="btn-primary">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/compare-waters"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                Back to Compare Waters
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Kangen upsell (shown on non-Kangen pages) */}
        {!isKangen && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative mt-16 overflow-hidden rounded-[1.75rem] border border-gold/40 bg-gradient-to-br from-brand-600 to-brand-700 p-8 shadow-card sm:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-800">
                ★ The upgrade
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                How it compares to Kangen Water
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-50">{kangen.text}</p>
              <button
                onClick={() => openLead()}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
              >
                Talk to Glen about Kangen Water <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Explore other waters */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-brand-700">Compare other waters</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((w) => (
              <Link
                key={w.slug}
                to={`/compare-waters/${w.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <img
                  src={w.local ? asset(w.img) : w.img}
                  alt={w.name}
                  loading="lazy"
                  className="h-14 w-14 flex-none rounded-xl object-cover"
                />
                <span className="flex items-center gap-1 text-sm font-semibold text-brand-700">
                  {w.name}
                  <ArrowRight className="h-4 w-4 text-brand-400 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
