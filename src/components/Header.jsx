import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { Menu, Close, WhatsApp } from './icons'

export default function Header() {
  const { openLead } = useLeadModal()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Sticky navbar gains blur + shadow after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/85 shadow-soft backdrop-blur-xl'
          : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <nav className="container-px flex h-[4.5rem] items-center justify-between" aria-label="Primary">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" aria-label="Glen Apostol — Kangen Water Consultant">
          {/* TODO: replace /assets/logo.png with the official logo if updated */}
          <img src={asset('/assets/logo.png')} alt="Enagic Kangen Water logo" className="h-8 w-auto" />
          <span className="hidden text-sm font-semibold leading-tight text-brand-700 sm:block">
            Glen Apostol
            <span className="block text-[0.68rem] font-medium uppercase tracking-wider text-gold-dark">
              Kangen Water Consultant
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-wellness transition-colors hover:text-wellness-dark" aria-label="Message Glen on WhatsApp">
            <WhatsApp className="h-6 w-6" />
          </a>
          <button onClick={() => openLead()} className="btn-primary">
            Book Consultation
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-brand-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-[4.5rem] origin-top border-b border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-5">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-3">
                <button
                  onClick={() => {
                    setOpen(false)
                    openLead()
                  }}
                  className="btn-primary w-full"
                >
                  Book Consultation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
