import { Link } from 'react-router-dom'
import { CONSULTANT, WHATSAPP_LINK, CUSTOMER_SERVICE, CUSTOMER_SERVICE_PHONE_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { asset } from '../lib/asset'
import { WhatsApp, Phone, MapPin, ArrowRight } from './icons'

const exploreLinks = [
  { label: 'Why Kangen Water', to: '/why-kangen' },
  { label: '5 Water Types', to: '/water-types' },
  { label: 'Meet Glen Apostol', to: '/glen-apostol' },
  { label: 'How It Works', to: '/process' },
  { label: 'Business Opportunity', to: '/business' },
  { label: 'FAQ', to: '/faq' },
]

const machineLinks = [
  { label: 'Leveluk K8', to: '/products/k8' },
  { label: 'Leveluk SD501DX', to: '/products/sd501dx' },
  { label: 'Leveluk SD501 Platinum', to: '/products/sd501-platinum' },
  { label: 'Leveluk Super501', to: '/products/super501' },
  { label: 'Leveluk JR IV', to: '/products/jr4' },
  { label: 'Anespa DX', to: '/products/anespa' },
]

export default function Footer() {
  const { openLead } = useLeadModal()
  const year = 2026

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-px pt-14">
        {/* Top CTA band — brand card stands out on the white footer */}
        <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 px-7 py-8 text-center shadow-card md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white">Ready to choose the right machine?</h2>
            <p className="mt-1 text-sm text-brand-50/90">
              Book a free, no-obligation consultation with Glen Apostol.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => openLead()}
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
            >
              Book Consultation
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsApp className="h-5 w-5" /> WhatsApp Glen
            </a>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="container-px grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <img src={asset('/assets/logo.png')} alt="Enagic Kangen Water — Glen Apostol" className="h-9 w-auto" />
          <p className="mt-5 text-lg font-bold text-brand-700">{CONSULTANT.name}</p>
          <p className="text-sm text-slate-500">Independent Enagic / Kangen Water Consultant</p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={CUSTOMER_SERVICE_PHONE_LINK} className="flex items-center gap-2 font-semibold text-brand-600 transition-colors hover:text-brand-700">
              <Phone className="h-4 w-4 text-wellness" /> {CUSTOMER_SERVICE.phone}
            </a>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Customer Service</p>
            <p className="flex items-center gap-2 text-slate-500">
              <MapPin className="h-4 w-4 text-wellness" /> {CONSULTANT.region}
            </p>
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Explore">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">Explore</h3>
          <ul className="mt-5 space-y-3">
            {exploreLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-slate-500 transition-colors hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Machines */}
        <nav aria-label="Machines">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">Machines</h3>
          <ul className="mt-5 space-y-3">
            {machineLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-slate-500 transition-colors hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">Get In Touch</h3>
          <p className="mt-5 text-sm text-slate-500">
            Have a question or ready to start? Glen replies personally — usually within a few hours.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <button onClick={() => openLead()} className="btn-primary">
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-wellness/30 bg-wellness/5 px-6 py-3 text-sm font-semibold text-wellness-dark transition-colors hover:border-wellness hover:bg-wellness/10"
            >
              <WhatsApp className="h-5 w-5" /> {CONSULTANT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-slate-100">
        <div className="container-px space-y-2 py-7 text-xs leading-relaxed text-slate-400">
          <p>
            Kangen Water® and Enagic® are registered trademarks of Enagic Co., Ltd. This website is
            an independent consultant landing page for {CONSULTANT.name} and is not the official
            Enagic corporate website. Product information should be verified with official Enagic
            materials before purchase.
          </p>
          <p className="pt-1">
            © {year} {CONSULTANT.name} — Independent Enagic Distributor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
