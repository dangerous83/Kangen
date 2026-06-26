import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal'
import { faqs } from '../data/faqs'
import { WHATSAPP_LINK } from '../data/site'
import { useLeadModal } from '../context/LeadModalContext'
import { ChevronDown, WhatsApp } from './icons'

export default function FAQ() {
  const { openLead } = useLeadModal()
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-pad bg-slate-50/60">
      <div className="container-px">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          intro="Everything you might want to know before reaching out. Still curious? Glen is one message away."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                    isOpen ? 'border-brand-200 shadow-soft' : 'border-slate-100'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-brand-700">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 flex-none items-center justify-center rounded-full ${
                        isOpen ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Still have questions */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-soft sm:flex-row sm:text-left">
            <p className="text-base font-medium text-slate-600">
              Still have a question? Ask Glen directly.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button onClick={() => openLead()} className="btn-primary">
                Book Consultation
              </button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsApp className="h-5 w-5" /> WhatsApp Glen
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
