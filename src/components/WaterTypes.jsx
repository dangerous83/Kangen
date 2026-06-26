import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal'
import { useLeadModal } from '../context/LeadModalContext'
import { Drop } from './icons'

// Educational only — compliant wording, no medical claims.
const waterTypes = [
  {
    name: 'Strong Kangen Water',
    ph: 'pH 11.0+',
    color: '#024f9e',
    use: 'A higher-alkaline setting commonly used around the kitchen for everyday cleaning and food-preparation tasks.',
  },
  {
    name: 'Kangen Water',
    ph: 'pH 8.5 – 9.5',
    color: '#1f6bbd',
    use: 'The signature hydrogen-rich alkaline drinking water many customers enjoy for daily hydration.',
  },
  {
    name: 'Clean Water',
    ph: 'pH 7.0',
    color: '#67b622',
    use: 'Filtered, neutral water — a clean everyday choice for general use and for taking with supplements.',
  },
  {
    name: 'Beauty Water',
    ph: 'pH 4.0 – 6.0',
    color: '#d3a637',
    use: 'A gently acidic setting popular as part of a daily skin and beauty routine, and for household freshness.',
  },
  {
    name: 'Strong Acidic Water',
    ph: 'pH 2.7',
    color: '#a8821f',
    use: 'A strong-acidic setting used around the home for cleaning surfaces and everyday kitchen hygiene.',
  },
]

export default function WaterTypes() {
  const { openLead } = useLeadModal()
  const [active, setActive] = useState(1)
  const current = waterTypes[active]

  return (
    <section className="section-pad water-gradient bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="The 5 Water Types"
          title="One machine, multiple purposes"
          intro="Kangen Water machines can produce different water types for different daily tasks. Tap a type to learn how customers use it."
        />

        {/* pH scale tabs */}
        <Reveal delay={0.05}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {waterTypes.map((w, i) => (
              <button
                key={w.name}
                onClick={() => setActive(i)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === i
                    ? 'border-transparent text-white shadow-soft'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300'
                }`}
                style={active === i ? { backgroundColor: w.color } : undefined}
              >
                {w.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active panel */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-card sm:p-10"
              >
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  <div
                    className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: current.color }}
                  >
                    <Drop className="h-9 w-9" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="flex flex-col items-center gap-2 sm:flex-row">
                      <h3 className="text-2xl font-bold text-brand-700">{current.name}</h3>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold text-white"
                        style={{ backgroundColor: current.color }}
                      >
                        {current.ph}
                      </span>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{current.use}</p>
                  </div>
                </div>

                {/* Visual pH gradient bar */}
                <div className="mt-8 h-3 w-full rounded-full bg-gradient-to-r from-[#a8821f] via-[#67b622] to-[#024f9e]" />
                <div className="mt-2 flex justify-between text-xs font-medium text-slate-400">
                  <span>Acidic</span>
                  <span>Neutral</span>
                  <span>Alkaline</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Guidance note */}
            <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-center text-sm text-slate-600">
              <strong className="text-gold-dark">Note:</strong> Water usage depends on the machine
              model and proper instruction.{' '}
              <button onClick={() => openLead()} className="font-semibold text-brand-600 underline-offset-2 hover:underline">
                Glen can guide you through the correct daily use.
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
