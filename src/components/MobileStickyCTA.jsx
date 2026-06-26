import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { WhatsApp } from './icons'

// Sticky bottom CTA bar shown on mobile after the user scrolls past the hero.
export default function MobileStickyCTA() {
  const { openLead } = useLeadModal()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_30px_-12px_rgba(2,79,158,0.3)] backdrop-blur-xl lg:hidden"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <div className="flex items-center gap-3">
            <button onClick={() => openLead()} className="btn-primary flex-1 px-4 py-3">
              Book Consultation
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 flex-none items-center justify-center gap-2 rounded-full bg-wellness px-5 text-sm font-semibold text-white"
              aria-label="Message Glen on WhatsApp"
            >
              <WhatsApp className="h-5 w-5" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
