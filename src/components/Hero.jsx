import { motion } from 'framer-motion'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { Check, WhatsApp, Drop, Shield, MapPin, Hand } from './icons'

const trustBadges = [
  { icon: Hand, label: 'Personal Product Guidance' },
  { icon: Drop, label: 'Premium Water Ionizer Machines' },
  { icon: MapPin, label: 'UAE Support' },
  { icon: Shield, label: 'Direct Consultant Assistance' },
]

export default function Hero() {
  const { openLead } = useLeadModal()

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
      {/* Soft animated water gradient accents */}
      <div className="pointer-events-none absolute inset-0 water-gradient" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl animate-water-drift" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-wellness/10 blur-3xl animate-water-drift" style={{ animationDelay: '3s' }} />

      <div className="container-px relative grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        {/* Left — copy */}
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            ★ Trusted Enagic / Kangen Water Consultant
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-700 sm:text-5xl lg:text-[3.4rem]"
          >
            Change Your Water.{' '}
            <span className="relative whitespace-nowrap text-brand-600">
              Change Your
              <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-gold/60" />
            </span>{' '}
            Daily Life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 text-lg leading-relaxed text-slate-600"
          >
            Discover premium Kangen Water machines with personal guidance from{' '}
            <strong className="font-semibold text-brand-700">Glen Apostol</strong>, your dedicated
            Enagic consultant.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-3 text-base text-slate-500"
          >
            Get expert product advice, machine comparison, setup guidance, and direct support before
            you purchase.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button onClick={() => openLead()} className="btn-primary text-base">
              Book a Free Water Consultation
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
              <WhatsApp className="h-5 w-5" />
              Message Glen on WhatsApp
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-wellness/10 text-wellness">
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right — Glen / product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Gold frame accent */}
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-brand-400/20 blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-100 shadow-[0_30px_70px_-30px_rgba(2,79,158,0.45)]">
            {/* TODO: replace /assets/glen-apostol.png with the final hero image */}
            <img
              src="/assets/glen-apostol.png"
              alt="Glen Apostol, professional Enagic Kangen Water consultant, in a modern Dubai office"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Floating credential card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-card backdrop-blur sm:block"
          >
            <p className="text-2xl font-extrabold text-brand-600">Glen Apostol</p>
            <p className="text-xs font-medium text-slate-500">Your dedicated Kangen consultant</p>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-wellness">
              <Check className="h-4 w-4" /> Personal guidance, before you buy
            </div>
          </motion.div>

          {/* Floating "free consultation" pill */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-3 top-8 hidden rounded-full border border-gold/30 bg-white/95 px-4 py-2 text-xs font-semibold text-gold-dark shadow-gold backdrop-blur sm:block"
          >
            Free consultation • No obligation
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
