import Reveal, { SectionHeading } from './Reveal'
import { useLeadModal } from '../context/LeadModalContext'
import { Chat, Hand, Layers, Cog } from './icons'

const steps = [
  { icon: Chat, title: 'Submit Inquiry', text: 'Share a few details through the form or WhatsApp — it takes under a minute.' },
  { icon: Hand, title: 'Free Consultation With Glen', text: 'Talk through your needs, lifestyle and budget with zero pressure.' },
  { icon: Layers, title: 'Choose the Right Machine', text: 'Get a clear recommendation matched to your household and goals.' },
  { icon: Cog, title: 'Purchase Guidance & Setup Support', text: 'Glen guides your order and helps you get set up with confidence.' },
]

export default function Process() {
  const { openLead } = useLeadModal()

  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="How It Works"
          title="Your journey to better water"
          intro="A simple, professional process — from first question to confident setup. Glen is with you at every step."
        />

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card">
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-white shadow-gold">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-700">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <button onClick={() => openLead()} className="btn-primary text-base">
              Start With a Free Consultation
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
