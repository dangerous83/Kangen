import { useParams, Navigate, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { asset } from '../lib/asset'
import { useLeadModal } from '../context/LeadModalContext'
import { whyKangenTopics } from '../data/whyKangenTopics'
import { ArrowRight } from '../components/icons'

export default function WhyKangenTopic() {
  const { topic } = useParams()
  const data = whyKangenTopics[topic]
  const { openLead } = useLeadModal()

  // Unknown topic — send back to the overview page.
  if (!data) return <Navigate to="/why-kangen" replace />

  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              to="/why-kangen"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to Why Kangen Water
            </Link>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-700 sm:text-4xl lg:text-5xl">
              {data.title}
            </h1>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100 shadow-card">
              <img
                src={asset(data.img)}
                alt={data.title}
                className="h-64 w-full object-cover sm:h-80"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {data.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => openLead()} className="btn-primary">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/water-types"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                Explore the 5 water types
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
