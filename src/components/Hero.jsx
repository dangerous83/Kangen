import { motion } from 'framer-motion'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { WhatsApp } from './icons'

export default function Hero() {
  const { openLead } = useLeadModal()

  return (
    // Full-viewport hero. Negative top margin pulls it under the fixed navbar
    // so the background image fills the entire screen.
    <section
      id="home"
      className="relative -mt-[4.5rem] flex min-h-screen items-end overflow-hidden md:items-center"
    >
      {/* Full-bleed background image of Glen Apostol — kept clean (no wash on his face) */}
      <div className="absolute inset-0 -z-10">
        {/* TODO: replace /assets/glen-apostol.png with the final hero image */}
        <img
          src={asset('/assets/glen-apostol.png')}
          alt="Glen Apostol, professional Enagic Kangen Water consultant, in a modern Dubai office"
          className="h-full w-full object-cover object-[72%_22%] md:object-[74%_center]"
          loading="eager"
        />
        {/* MOBILE: gentle white fade from the bottom only — keeps his face (top) crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent md:hidden" />
        {/* DESKTOP: white fade on the left only, fully transparent before it reaches Glen */}
        <div className="absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-white md:from-0% md:via-white/60 md:via-[26%] md:to-transparent md:to-[52%]" />
      </div>

      {/* Content */}
      <div className="container-px relative w-full pb-14 pt-[6rem] md:py-0">
        <div className="max-w-lg">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow bg-white/70 backdrop-blur"
          >
            ★ Trusted Enagic / Kangen Water Consultant
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold leading-[1.07] tracking-tight text-brand-700 sm:text-5xl lg:text-[3.5rem]"
          >
            Change Your Water.
            <span className="mt-1 block text-brand-600">
              Change Your{' '}
              <span className="relative whitespace-nowrap">
                Daily Life.
                <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-gold/70" />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-slate-700"
          >
            Premium Kangen Water machines with personal guidance from{' '}
            <strong className="font-semibold text-brand-700">Glen Apostol</strong> — expert advice
            and machine comparison before you buy.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button onClick={() => openLead()} className="btn-primary">
              Book a Free Consultation
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-wellness-dark transition-colors hover:text-wellness"
            >
              <WhatsApp className="h-5 w-5" />
              Message Glen on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
