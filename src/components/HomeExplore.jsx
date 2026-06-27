import { Link } from 'react-router-dom'
import Reveal, { SectionHeading } from './Reveal'
import { Drop, Layers, Hand, Compass, Chat, Doc, ArrowRight } from './icons'

const tiles = [
  { to: '/why-kangen', icon: Drop, title: 'Why Kangen Water', text: 'The wellness-focused upgrade to your daily water.' },
  { to: '/products', icon: Layers, title: 'Explore the Machines', text: 'From compact starters to flagship ionizers.' },
  { to: '/compare', icon: Compass, title: 'Compare Models', text: 'Find the right fit side-by-side.' },
  { to: '/glen-apostol', icon: Hand, title: 'Meet Glen Apostol', text: 'Personal, professional product guidance.' },
  { to: '/business', icon: Doc, title: 'Business Opportunity', text: 'Learn how the Enagic model works.' },
  { to: '/faq', icon: Chat, title: 'Questions Answered', text: 'Everything you need before reaching out.' },
]

export default function HomeExplore() {
  return (
    <section className="section-pad bg-slate-50/60">
      <div className="container-px">
        <SectionHeading
          eyebrow="Explore"
          title="Everything you need to choose with confidence"
          intro="Browse the essentials, then book a free consultation with Glen for personal guidance."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal key={t.to} delay={(i % 3) * 0.08}>
              <Link
                to={t.to}
                className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <t.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-700">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{t.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-wellness-dark">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
