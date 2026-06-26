import Reveal from './Reveal'
import { CONSULTANT, WHATSAPP_LINK, PHONE_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { WhatsApp, Phone } from './icons'

export default function FinalCTA() {
  const { openLead } = useLeadModal()

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 py-24 text-white sm:py-28">
      {/* Decorative water glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-wellness/20 blur-3xl animate-water-drift" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl animate-water-drift" style={{ animationDelay: '4s' }} />

      <div className="container-px relative text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
            ★ Let’s Talk Water
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Upgrade Your Water Routine?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-50">
            Speak with {CONSULTANT.name} today and get clear guidance before choosing your Kangen
            Water machine.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => openLead()}
              className="rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Book a Free Consultation
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
              <WhatsApp className="h-5 w-5" /> WhatsApp Glen Now
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <a
            href={PHONE_LINK}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-100 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" /> Or call directly: {CONSULTANT.phone}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
