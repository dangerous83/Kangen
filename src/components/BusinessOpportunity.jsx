import Reveal, { SectionHeading } from './Reveal'
import { useLeadModal } from '../context/LeadModalContext'
import { Doc, Layers, Users, Rocket, Mail } from './icons'
import { BUSINESS_EMAIL, BUSINESS_EMAIL_LINK } from '../data/site'

const cards = [
  { icon: Doc, title: 'Learn the Product', text: 'Understand the machines, water types and daily use inside out.' },
  { icon: Layers, title: 'Understand the Distributor Model', text: 'See how Enagic’s independent distributor model actually works.' },
  { icon: Users, title: 'Build With Guidance', text: 'Grow responsibly with mentoring and ongoing support from Glen.' },
  { icon: Rocket, title: 'Start Professionally', text: 'Begin on the right foot with clear, compliant expectations.' },
]

export default function BusinessOpportunity() {
  const { openLead } = useLeadModal()

  return (
    <section id="business" className="section-pad bg-brand-700 text-white">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                ★ Business Opportunity
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Interested in the Enagic Business Opportunity?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-brand-50">
                Glen can also guide interested individuals who want to learn how Enagic’s independent
                distributor model works, including product education, customer support, and
                responsible business growth.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <button
                onClick={() => openLead('Business Opportunity')}
                className="mt-8 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-white shadow-gold transition-transform hover:-translate-y-0.5"
              >
                Ask Glen About the Business Opportunity
              </button>
            </Reveal>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={0.1 + i * 0.07}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wellness/20 text-wellness-light">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* How to become a business partner */}
        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-3xl border-2 border-gold/40 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 backdrop-blur sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                  ★ Become a Partner
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  How to Make a Business Partner?
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brand-50">
                  Becoming an Enagic business partner is straightforward. Send us your details by
                  email and we will guide you through the four steps — a short discovery call to
                  understand your goals, product and distributor-model orientation, official
                  registration with Enagic, and ongoing mentoring from Glen so you start
                  professionally and grow responsibly. There are no shortcuts and no pressure — just
                  a clear, compliant path to building your own Kangen Water business.
                </p>
              </div>
              <div className="flex-none">
                <a
                  href={`${BUSINESS_EMAIL_LINK}?subject=${encodeURIComponent(
                    'I want to become a Kangen business partner',
                  )}&body=${encodeURIComponent(
                    'Hi Glen,\n\nI would like to learn how to become an Enagic / Kangen Water business partner. Please share the next steps.\n\nThank you.',
                  )}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-white shadow-gold transition-transform hover:-translate-y-0.5"
                  aria-label={`Email ${BUSINESS_EMAIL} about becoming a partner`}
                >
                  <Mail className="h-5 w-5" />
                  Email Us to Become a Partner
                </a>
                <p className="mt-3 text-center text-xs text-brand-100">
                  or write directly to{' '}
                  <a
                    href={BUSINESS_EMAIL_LINK}
                    className="font-semibold text-gold-light underline-offset-2 hover:underline"
                  >
                    {BUSINESS_EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Disclaimer */}
        <Reveal delay={0.2}>
          <p className="mt-12 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-xs leading-relaxed text-brand-100">
            <strong className="text-gold-light">Disclaimer:</strong> Business results vary and depend
            on individual effort, market conditions, and compliance with Enagic policies. No income
            is promised or guaranteed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
