import { motion } from 'framer-motion'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { WhatsApp } from './icons'

export default function Hero() {
  const { openLead } = useLeadModal()

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Soft brand-color wash in the background */}
      <div className="pointer-events-none absolute inset-0 water-gradient" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="container-px relative grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-16">
        {/* Left — copy */}
        <div className="max-w-xl lg:pr-6">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            ★ Trusted Enagic / Kangen Water Consultant
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl font-extrabold leading-[1.07] tracking-tight text-brand-700 sm:text-5xl lg:text-[3.4rem]"
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
            className="mt-6 max-w-md text-lg leading-relaxed text-slate-600"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-wellness/30 bg-wellness/5 px-6 py-3.5 text-sm font-semibold text-wellness-dark transition-all hover:border-wellness hover:bg-wellness/10"
            >
              <WhatsApp className="h-5 w-5" />
              Message Glen on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right — framed image of Glen (head fully visible, padded from edges) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Gold glow accent */}
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/25 via-transparent to-brand-400/20 blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-100 shadow-[0_30px_70px_-30px_rgba(2,79,158,0.4)]">
            {/* Full, uncropped image of Glen Apostol */}
            {/* TODO: replace /assets/glen-apostol.png with the final hero image */}
            <img
              src={asset('/assets/glen-apostol.png')}
              alt="Glen Apostol, professional Enagic Kangen Water consultant, in a modern Dubai office"
              className="block h-auto w-full object-contain"
              loading="eager"
            />
          </div>

          {/* Floating credential chip */}
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-slate-100 bg-white/95 px-5 py-3 shadow-card backdrop-blur">
            <p className="text-base font-extrabold text-brand-600">Glen Apostol</p>
            <p className="text-xs font-medium text-gold-dark">Your dedicated Kangen consultant</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
