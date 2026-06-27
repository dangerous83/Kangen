import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { Menu, Close, WhatsApp, ChevronDown } from './icons'

export default function Header() {
  const { openLead } = useLeadModal()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null) // mobile accordion

  // Sticky navbar gains blur + shadow after scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
    setOpenGroup(null)
  }, [pathname])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const linkBase = 'text-sm font-medium transition-colors'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/85 shadow-soft backdrop-blur-xl'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="container-px flex h-[4.5rem] items-center justify-between" aria-label="Primary">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Glen Apostol — Kangen Water Consultant">
          {/* TODO: replace /assets/logo.png with the official logo if updated */}
          <img src={asset('/assets/logo.png')} alt="Enagic Kangen Water — Glen Apostol" className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) =>
            item.children ? (
              // Dropdown group
              <li key={item.label} className="group relative">
                <button className={`${linkBase} flex items-center gap-1 rounded-lg px-3 py-2 text-slate-600 hover:bg-brand-50 hover:text-brand-600`}>
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                {/* Panel */}
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="w-64 rounded-2xl border border-slate-100 bg-white p-2 shadow-card">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `block rounded-xl px-3 py-2.5 transition-colors ${
                            isActive ? 'bg-brand-50' : 'hover:bg-slate-50'
                          }`
                        }
                      >
                        <span className="block text-sm font-semibold text-brand-700">{child.label}</span>
                        {child.desc && <span className="block text-xs text-slate-400">{child.desc}</span>}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              // Single link
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${linkBase} rounded-lg px-3 py-2 ${
                      isActive ? 'text-brand-600' : 'text-slate-600 hover:bg-brand-50 hover:text-brand-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
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
            className="absolute inset-x-0 top-[4.5rem] max-h-[calc(100vh-4.5rem)] origin-top overflow-y-auto border-b border-slate-200 bg-white/97 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-5">
              {NAV_LINKS.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-brand-700 hover:bg-brand-50"
                        aria-expanded={openGroup === item.label}
                      >
                        {item.label}
                        <ChevronDown className={`h-5 w-5 transition-transform ${openGroup === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {openGroup === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 border-l border-slate-200 pl-3">
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.to}
                                  to={child.to}
                                  className={({ isActive }) =>
                                    `block rounded-lg px-4 py-2.5 text-sm font-medium ${
                                      isActive ? 'text-brand-600' : 'text-slate-600 hover:bg-slate-50'
                                    }`
                                  }
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-medium ${
                          isActive ? 'text-brand-600' : 'text-slate-700 hover:bg-brand-50 hover:text-brand-700'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </motion.li>
              ))}
              <li className="mt-3 flex flex-col gap-3">
                <button onClick={() => { setOpen(false); openLead() }} className="btn-primary w-full">
                  Book Consultation
                </button>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                  <WhatsApp className="h-5 w-5" /> Message Glen on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
