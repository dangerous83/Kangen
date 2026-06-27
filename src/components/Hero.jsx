import { motion } from 'framer-motion'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { WhatsApp, Drop, Shield, MapPin, Hand } from './icons'

const trustBadges = [
  { icon: Hand, label: 'Personal Product Guidance' },
  { icon: Drop, label: 'Premium Water Ionizers' },
  { icon: MapPin, label: 'UAE Support' },
  { icon: Shield, label: 'Direct Consultant Assistance' },
]

export default function Hero() {
  const { openLead } = useLeadModal()

  return (
    // Full-viewport hero. Negative top margin pulls it under the fixed navbar
    // so the background image fills the entire screen.
    <section
      id="home"
      className="relative -mt-[4.5rem] flex min-h-screen items-center overflow-hidden"
    >
      {/* Full-bleed background image of Glen Apostol */}
      <div className="absolute inset-0">
        {/* TODO: replace /assets/glen-apostol.png with the final hero image */}
        <img
          src={asset('/assets/glen-apostol.png')}
          alt="Glen Apostol, professional Enagic Kangen Water consultant, in a modern Dubai office"
          className="h-full w-full object-cover object-[72%_center]"
          loading="eager"
        />
        {/* White scrim on the left so the brand-blue text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/75 md:to-transparent" />
        {/* Soft vertical fade for extra contrast on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30 md:from-transparent md:to-transparent" />
        {/* Subtle brand-color wash */}
        <div className="pointer-events-none absolute inset-0 water-gradient opacity-60" />
      </div>

      {/* Content */}
      <div className="container-px relative w-full pb-16 pt-[6rem] sm:pt-[7rem]">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow bg-white/80 backdrop-blur"
          >
            ★ Trusted Enagic / Kangen Water Consultant
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-700 drop-shadow-sm sm:text-5xl lg:text-[3.4rem]"
          >
            Change Your Water.{' '}
            <span className="relative whitespace-nowrap text-brand-600">
              Change Your
              <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-gold/70" />
            </span>{' '}
            Daily Life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-slate-700"
          >
            Discover premium Kangen Water machines with personal guidance from{' '}
            <strong className="font-bold text-brand-700">Glen Apostol</strong>, your dedicated Enagic
            consultant.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-3 max-w-md text-base text-slate-600"
          >
            Expert product advice, machine comparison, setup guidance, and direct support before you
            purchase.
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
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-wellness/15 text-wellness-dark">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Floating "free consultation" pill, bottom-right */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-8 right-6 hidden rounded-full border border-gold/30 bg-white/90 px-5 py-2.5 text-sm font-semibold text-gold-dark shadow-gold backdrop-blur lg:block"
      >
        Free consultation • No obligation
      </motion.div>
    </section>
  )
}
