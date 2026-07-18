import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { machines, otherProducts } from '../data/products'
import { Layers, Sparkle, ArrowRight, ChevronDown } from './icons'

// Two quick-access groups. Items link straight to each product page.
const groups = [
  { key: 'machines', label: 'Machines', icon: Layers, items: machines },
  { key: 'other', label: 'Products', icon: Sparkle, items: otherProducts },
]

const panelVariants = {
  hidden: { opacity: 0, x: -14, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -14, scale: 0.96, transition: { duration: 0.2 } },
}

const listVariants = {
  show: { transition: { staggerChildren: 0.045 } },
}
const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
}

export default function ProductDock() {
  const [open, setOpen] = useState(null)
  const close = () => setOpen(null)

  return (
    <>
      {/* Click-away backdrop (transparent) */}
      {open && <div className="fixed inset-0 z-30" onClick={close} aria-hidden="true" />}

      <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {groups.map((g) => {
          const Icon = g.icon
          const isOpen = open === g.key
          return (
            <div key={g.key} className="relative flex items-center">
              {/* Icon tab */}
              <motion.button
                type="button"
                onClick={() => setOpen(isOpen ? null : g.key)}
                aria-expanded={isOpen}
                aria-label={`Show all ${g.label.toLowerCase()}`}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex w-[68px] flex-col items-center gap-1 rounded-r-2xl bg-gradient-to-br from-brand-600 to-brand-700 py-3.5 text-white shadow-soft ring-1 ring-white/10 transition-shadow ${
                  isOpen ? 'shadow-glow' : ''
                }`}
              >
                {/* Pulsing high-tech glow ring */}
                <motion.span
                  className="pointer-events-none absolute inset-0 rounded-r-2xl bg-brand-400/30"
                  animate={{ opacity: [0.35, 0, 0.35], scale: [1, 1.12, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Gently floating icon */}
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <Icon className="h-6 w-6" />
                </motion.span>
                <span className="relative text-[10px] font-bold uppercase tracking-wide">{g.label}</span>
                <motion.span
                  className="relative"
                  animate={{ rotate: isOpen ? -90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-3.5 w-3.5 opacity-80" />
                </motion.span>
              </motion.button>

              {/* Flyout panel */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute left-full ml-3 w-64 origin-left overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-card backdrop-blur-xl"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 bg-gradient-to-r from-brand-600 to-brand-700 px-4 py-3 text-white">
                      <span className="flex items-center gap-2 text-sm font-bold">
                        <Icon className="h-4 w-4" /> All {g.label}
                      </span>
                      <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold">
                        {g.items.length}
                      </span>
                    </div>

                    {/* Items */}
                    <motion.ul
                      variants={listVariants}
                      initial="hidden"
                      animate="show"
                      className="max-h-[60vh] overflow-y-auto p-2"
                    >
                      {g.items.map((p) => (
                        <motion.li key={p.id} variants={rowVariants}>
                          <Link
                            to={`/products/${p.id}`}
                            onClick={close}
                            className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            <span className="flex items-center gap-2.5">
                              <span className="h-1.5 w-1.5 flex-none rounded-full bg-gold transition-transform group-hover:scale-150" />
                              {p.name}
                            </span>
                            <ArrowRight className="h-4 w-4 flex-none opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </>
  )
}
