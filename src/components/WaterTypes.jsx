import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal'
import { useLeadModal } from '../context/LeadModalContext'
import { Drop, Sparkle, Hand, Check, Cog } from './icons'

// Educational only — compliant wording, no medical claims.
const waterTypes = [
  {
    name: 'Strong Kangen Water',
    ph: 'pH 11.0+',
    color: '#024f9e',
    use: 'A higher-alkaline setting commonly used around the kitchen for everyday cleaning and food-preparation tasks.',
    // Benefits infographic — wording matches Enagic source material verbatim.
    benefits: {
      badge: { text: 'Not for Drinking', tone: 'danger' },
      summary:
        'Not for drinking. Strong Kangen Water preserves hygiene in your daily life due to its strong cleaning effect. It has dissolving and heat conducting benefits.',
      usage: 'Usage: food preparation and cleaning.',
      items: [
        {
          icon: Drop,
          title: 'Food Prep',
          text: 'Remove rawness from vegetables such as green onions, bamboo, wasabi and flowering fern with Strong Kangen Water.',
        },
        {
          icon: Sparkle,
          title: 'Stain Removal',
          text: 'The extra strength, absorption power, will remove coffee, soy sauce, and oil stains with ease.',
        },
        {
          icon: Hand,
          title: 'Cleaning',
          text: 'Clean cutting boards and dishcloths. Good for cleaning oil and tough grime from vents, as well as for general cleaning in the kitchen.',
        },
        {
          icon: Check,
          title: 'Dishes',
          text: 'Use less detergent when washing your dishes. Save on water bills, as only one-third to one-fourth of the usual amount of water is adequate for rinsing off detergent.',
        },
      ],
    },
  },
  {
    name: 'Kangen Water',
    ph: 'pH 8.5 – 9.5',
    color: '#1f6bbd',
    use: 'The signature hydrogen-rich alkaline drinking water many customers enjoy for daily hydration.',
    // Benefits infographic — wording matches Enagic source material verbatim.
    benefits: {
      badge: { text: 'For Drinking', tone: 'safe' },
      summary:
        'This type of water is perfect for drinking and healthy cooking. This electrolytically-reduced, hydrogen-rich water works to restore your body to a more alkaline state, which is optimal for good health.',
      usage: 'Usage: drinking, food preparation, coffee and tea, soups and stews, and watering plants.',
      items: [
        {
          icon: Drop,
          title: 'Drinking',
          text: 'Drink Kangen Water® throughout the day. Unlike tap water, Kangen Water® has no unpleasant odor, tastes lighter, and has a pleasantly sweet flavor.',
        },
        {
          icon: Sparkle,
          title: 'Coffee & Tea',
          text: 'You’ll be surprised at the wonderful color, taste, and aroma of coffee or tea prepared with Kangen Water®. You can also use less coffee or tea and still achieve a full rich taste due to the water’s extractable ability.',
        },
        {
          icon: Hand,
          title: 'Food Prep',
          text: 'Clean vegetables and fish. Enhance the flavor of broccoli, onions, bamboo etc. by pre-boiling them in Kangen Water®. Use less condiments and salt.',
        },
        {
          icon: Cog,
          title: 'Cooking',
          text: 'Kangen Water® draws out the flavor of ingredients so they get tender and juicy. Therefore, food doesn’t need as much seasoning, and excess salt can be avoided.',
        },
      ],
    },
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

                {/* Benefits infographic — Strong Kangen Water only */}
                {current.benefits && (
                  <div className="mt-8 border-t border-slate-100 pt-8">
                    {/* Summary + usage + drinking-safety callout */}
                    <div className="flex flex-col gap-4 rounded-2xl bg-brand-50/70 p-5 sm:flex-row sm:items-start sm:gap-5">
                      <span
                        className={`inline-flex flex-none items-center gap-1.5 self-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide sm:self-start ${
                          current.benefits.badge.tone === 'safe'
                            ? 'bg-wellness/10 text-wellness-dark'
                            : 'bg-red-50 text-red-600'
                        }`}
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                          {current.benefits.badge.tone === 'safe' ? (
                            <path
                              fillRule="evenodd"
                              d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
                              clipRule="evenodd"
                            />
                          ) : (
                            <path
                              fillRule="evenodd"
                              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.515 2.625H3.72c-1.345 0-2.188-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          )}
                        </svg>
                        {current.benefits.badge.text}
                      </span>
                      <div className="space-y-1.5 text-sm leading-relaxed text-slate-600">
                        <p>{current.benefits.summary}</p>
                        <p className="font-semibold text-brand-700">{current.benefits.usage}</p>
                      </div>
                    </div>

                    {/* Use-case cards */}
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {current.benefits.items.map((b) => {
                        const Icon = b.icon
                        return (
                          <div
                            key={b.title}
                            className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-card"
                          >
                            <div
                              className="flex h-11 w-11 flex-none items-center justify-center rounded-xl text-white"
                              style={{ backgroundColor: current.color }}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-wide text-brand-700">
                                {b.title}
                              </h4>
                              <p className="mt-1 text-sm leading-relaxed text-slate-600">{b.text}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
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
