import { motion } from 'framer-motion'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { WhatsApp } from './icons'

export default function Hero() {
  const { openLead } = useLeadModal()

  return (
    // On desktop the section sits under the fixed navbar so the image is full-bleed.
    <section id="home" className="relative overflow-hidden bg-white md:-mt-[4.5rem]">
      {/* Full, UNCROPPED image of Glen Apostol — the hero background */}
      {/* TODO: replace /assets/glen-apostol.png with the final hero image */}
      <img
        src={asset('/assets/glen-apostol.png')}
        alt="Glen Apostol, professional Enagic Kangen Water consultant, in a modern Dubai office"
        className="block w-full"
        loading="eager"
      />

      {/* Overlay — flows BELOW the image on mobile, layered OVER it on desktop */}
      <div className="md:absolute md:inset-0 md:flex md:items-center">
        {/* Left white fade (desktop only): keeps the blue text legible, clears before Glen */}
        <div className="pointer-events-none absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-white md:from-0% md:via-white/80 md:via-[24%] md:to-transparent md:to-[50%]" />

        <div className="container-px relative w-full py-10 md:py-0">
          <div className="max-w-lg">
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
              className="mt-6 max-w-md text-lg leading-relaxed text-slate-700"
            >
              Premium Kangen Water machines with personal guidance from{' '}
              <strong className="font-semibold text-brand-700">Glen Apostol</strong> — expert advice
              and machine comparison before you buy.
            </motion.p>

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
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-wellness/30 bg-white/80 px-6 py-3.5 text-sm font-semibold text-wellness-dark backdrop-blur transition-all hover:border-wellness hover:bg-white"
              >
                <WhatsApp className="h-5 w-5" />
                Message Glen on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
