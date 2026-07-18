import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { WhatsApp } from './icons'

export default function Hero() {
  const { openLead } = useLeadModal()
  const [showMore, setShowMore] = useState(false)

  return (
    // On desktop the section sits under the fixed navbar so the image is full-bleed.
    <section id="home" className="relative overflow-hidden bg-white md:-mt-[4.5rem]">
      {/* Full, UNCROPPED image of Glen Apostol — the hero background */}
      <img
        src={asset('/assets/glen-apostol-hero.webp')}
        alt="Glen Apostol, professional Enagic Kangen Water consultant, in a modern Dubai office"
        className="block w-full"
        loading="eager"
      />

      {/* Overlay — flows BELOW the image on mobile, layered OVER it on desktop */}
      <div className="md:absolute md:inset-0 md:flex md:items-center">
        {/* Left white fade (desktop only): keeps the blue text legible, clears before Glen */}
        <div className="pointer-events-none absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-white md:from-0% md:via-white/80 md:via-[24%] md:to-transparent md:to-[50%]" />

        <div className="container-px relative w-full py-10 md:py-0">
          {/* Nudge the text block up a little on desktop so it sits higher than dead-centre */}
          <div className="max-w-xl md:-translate-y-6 lg:-translate-y-10">
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
              className="mt-6 font-extrabold leading-[1.1] tracking-tight text-brand-700 text-2xl sm:text-4xl lg:text-5xl xl:text-[3.4rem]"
            >
              {/* Exactly two lines — each stays on one row */}
              <span className="block whitespace-nowrap">Change Your Water.</span>
              <span className="relative mt-1 block w-fit whitespace-nowrap text-brand-600">
                Change Your Daily Life.
                <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full bg-gold/70" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-700 sm:text-xl"
            >
              Premium Kangen Water machines with personal guidance from{' '}
              <strong className="font-semibold text-brand-700">Glen Apostol</strong> — expert advice
              and machine comparison before you buy.
            </motion.p>

            {/* Expandable mission statement — collapsed by default, toggled by the button below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3"
            >
              <button
                type="button"
                onClick={() => setShowMore((v) => !v)}
                aria-expanded={showMore}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
              >
                {showMore ? 'Show less' : 'Read more'}
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {showMore && (
                  <motion.p
                    key="hero-mission"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <span className="mt-3 block max-w-md text-base leading-relaxed text-slate-600">
                      Success isn’t about selling a product—it’s about serving people, improving
                      lives, and building a legacy of health, purpose, and freedom. As an
                      International Kangen Water distributor, my mission is to educate, inspire, and
                      empower families around the world to make better choices for their future.
                    </span>
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

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
