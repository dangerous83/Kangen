import { Link } from 'react-router-dom'
import { CONSULTANT, WHATSAPP_LINK, PHONE_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { WhatsApp, Phone } from './icons'

const quickLinks = [
  { label: 'Why Kangen Water', to: '/why-kangen' },
  { label: 'Products', to: '/products' },
  { label: 'Glen Apostol', to: '/glen-apostol' },
  { label: 'Business Opportunity', to: '/business' },
  { label: 'FAQ', to: '/faq' },
]

const productLinks = ['Leveluk K8', 'SD501', 'SD501DX', 'Super501', 'JR IV', 'Anespa DX']

export default function Footer() {
  const { openLead } = useLeadModal()
  const year = 2026 // static to avoid hydration / locale drift

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-px py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand / consultant */}
          <div>
            <img src={asset('/assets/logo.png')} alt="Enagic Kangen Water logo" className="h-9 w-auto" />
            <p className="mt-5 text-lg font-bold text-brand-700">{CONSULTANT.name}</p>
            <p className="text-sm text-slate-500">Enagic / Kangen Water Consultant</p>
            <a href={PHONE_LINK} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
              <Phone className="h-4 w-4" /> {CONSULTANT.phone}
            </a>
            <div className="mt-5 flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-wellness/10 text-wellness transition-colors hover:bg-wellness hover:text-white"
                aria-label="Message Glen on WhatsApp"
              >
                <WhatsApp className="h-5 w-5" />
              </a>
              <a
                href={PHONE_LINK}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
                aria-label="Call Glen Apostol"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-500 transition-colors hover:text-brand-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Products">
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">Products</h3>
            <ul className="mt-5 space-y-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <Link to="/products" className="text-sm text-slate-500 transition-colors hover:text-brand-600">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">Contact</h3>
            <p className="mt-5 text-sm text-slate-500">
              WhatsApp:{' '}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold text-wellness hover:text-wellness-dark">
                {CONSULTANT.phone}
              </a>
            </p>
            <button onClick={() => openLead()} className="btn-primary mt-5 w-full">
              Book Consultation
            </button>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 space-y-3 border-t border-slate-100 pt-8 text-xs leading-relaxed text-slate-400">
          <p>
            Kangen Water® and Enagic® are registered trademarks of Enagic Co., Ltd. This website is
            an independent consultant landing page for {CONSULTANT.name} and is not the official
            Enagic corporate website.
          </p>
          <p>Product information should be verified with official Enagic materials before purchase.</p>
          <p className="pt-2 text-slate-400">
            © {year} {CONSULTANT.name} — Independent Enagic Distributor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
