import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { machines, otherProducts } from '../data/products'
import { Layers, Sparkle, ArrowRight } from './icons'

// Two quick-access groups. Items link straight to each product page.
const groups = [
  { key: 'machines', label: 'Machines', icon: Layers, items: machines },
  { key: 'other', label: 'Products', icon: Sparkle, items: otherProducts },
]

const panelVariants = {
  hidden: { opacity: 0, x: -16, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -16, scale: 0.96, transition: { duration: 0.18 } },
}
const listVariants = { show: { transition: { staggerChildren: 0.04 } } }
const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
}

export default function ProductDock() {
  const [open, setOpen] = useState(null)

  return (
    <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex">
      {groups.map((g) => {
        const Icon = g.icon
        const isOpen = open === g.key
        return (
          <div
            key={g.key}
            className="relative flex items-center"
            onMouseEnter={() => setOpen(g.key)}
            onMouseLeave={() => setOpen(null)}
          >
            {/* Icon tab */}
            <motion.button
              type="button"
              onClick={() => setOpen(isOpen ? null : g.key)}
              onFocus={() => setOpen(g.key)}
              aria-expanded={isOpen}
              aria-label={`Show all ${g.label.toLowerCase()}`}
              whileTap={{ scale: 0.95 }}
              className={`group/btn relative flex w-[74px] flex-col items-center gap-2 overflow-hidden rounded-r-2xl border-y border-r border-white/10 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-800 py-4 text-white transition-shadow duration-300 ${
                isOpen ? 'shadow-[0_10px_40px_-8px_rgba(2,79,158,0.75)]' : 'shadow-[0_8px_28px_-10px_rgba(2,79,158,0.6)]'
              }`}
            >
              {/* Glowing left accent bar */}
              <motion.span
                className="absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-gradient-to-b from-gold to-gold-light"
                animate={{ height: isOpen ? 44 : 24, opacity: isOpen ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon in a tile with a rotating conic-gradient ring */}
              <span className="relative grid h-11 w-11 place-items-center">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, rgba(230,200,120,0.9) 90deg, rgba(124,174,226,0.9) 200deg, transparent 320deg)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                />
                <span className="absolute inset-[2px] grid place-items-center rounded-[10px] bg-brand-800/95 backdrop-blur">
                  <motion.span
                    animate={{ y: isOpen ? 0 : [0, -2, 0] }}
                    transition={{ duration: 2.8, repeat: isOpen ? 0 : Infinity, ease: 'easeInOut' }}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </motion.span>
                </span>
              </span>

              <span className="relative text-[10px] font-bold uppercase tracking-[0.18em]">{g.label}</span>

              {/* tiny live status dot */}
              <span className="relative flex h-1.5 w-1.5">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-gold-light"
                  animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
            </motion.button>

            {/* Flyout panel — pl-3 bridges the gap so hover stays contiguous */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={panelVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute left-full top-1/2 origin-left -translate-y-1/2 pl-3"
                >
                  <div className="w-64 overflow-hidden rounded-2xl border border-white/10 bg-brand-900/85 text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                      <span className="flex items-center gap-2 text-sm font-bold">
                        <Icon className="h-4 w-4 text-gold-light" /> All {g.label}
                      </span>
                      <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[11px] font-bold text-gold-light">
                        {g.items.length}
                      </span>
                    </div>

                    {/* Items */}
                    <motion.ul variants={listVariants} initial="hidden" animate="show" className="max-h-[60vh] overflow-y-auto p-2">
                      {g.items.map((p) => (
                        <motion.li key={p.id} variants={rowVariants}>
                          <Link
                            to={`/products/${p.id}`}
                            onClick={() => setOpen(null)}
                            className="group/row flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-brand-50/90 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            <span className="flex items-center gap-2.5">
                              <span className="h-1.5 w-1.5 flex-none rounded-full bg-gold transition-transform group-hover/row:scale-[1.8]" />
                              {p.name}
                            </span>
                            <ArrowRight className="h-4 w-4 flex-none -translate-x-1 opacity-0 transition-all group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
