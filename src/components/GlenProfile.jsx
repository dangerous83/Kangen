import Reveal from './Reveal'
import { CONSULTANT, WHATSAPP_LINK, PHONE_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { Phone, WhatsApp, Check, Hand, Layers, Shield, Sparkle } from './icons'

const highlights = [
  { icon: Hand, title: 'Product Consultation', text: 'Clear, jargon-free advice on every model.' },
  { icon: Layers, title: 'Machine Recommendation', text: 'The right system for your lifestyle and budget.' },
  { icon: Shield, title: 'After-Sales Guidance', text: 'Setup help, usage tips and ongoing support.' },
  { icon: Sparkle, title: 'Wellness-Focused Support', text: 'Guidance for your daily water routine.' },
]

export default function GlenProfile() {
  const { openLead } = useLeadModal()

  return (
    <section id="glen" className="section-pad bg-slate-50/60">
      <div className="container-px grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Image / profile card */}
        <Reveal className="lg:col-span-5" y={32}>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-400/20 to-gold/25 blur-2xl" />
            <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border-2 border-gold/30 bg-white shadow-card">
              <img
                src={asset('/assets/glen-apostol-portrait.webp')}
                alt="Portrait of Glen Apostol, Enagic Kangen Water consultant"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            {/* Contact chip */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-slate-100 bg-white px-5 py-3 text-center shadow-card">
              <p className="text-xs font-medium text-slate-500">Direct line</p>
              <a href={PHONE_LINK} className="text-lg font-bold text-brand-600 hover:text-brand-700">
                {CONSULTANT.phone}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">★ Your Consultant</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet {CONSULTANT.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Glen Apostol helps families, professionals, and wellness-focused customers understand
              Kangen Water machines and choose the right system for their lifestyle. From product
              comparison to purchase guidance, Glen provides clear, direct, and professional support.
            </p>
          </Reveal>

          {/* Highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.12 + i * 0.06}>
                <div className="card flex items-start gap-4 p-5 hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <h.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-700">{h.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTAs */}
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => openLead()} className="btn-primary">
                <Phone className="h-5 w-5" />
                Speak With Glen Today
              </button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsApp className="h-5 w-5" />
                Message Glen on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
