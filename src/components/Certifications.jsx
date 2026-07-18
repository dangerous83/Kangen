import { motion } from 'framer-motion'
import { SectionHeading } from './Reveal'
import { asset } from '../lib/asset'

// Official Enagic certifications. Images live in /assets and carry their own
// labels, so the badges are shown in clean cards with descriptive alt text.
const certs = [
  { img: '/assets/iso-9001.webp', label: 'ISO 9001' },
  { img: '/assets/iso-14001.webp', label: 'ISO 14001' },
  { img: '/assets/iso-13485.webp', label: 'ISO 13485' },
  { img: '/assets/wqa-gold-seal.webp', label: 'Water Quality Association Gold Seal' },
  { img: '/assets/direct-selling-association.webp', label: 'Direct Selling Association Member' },
]

// Staggered reveal — each badge scales + fades up in sequence on scroll-in.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const badge = {
  hidden: { opacity: 0, y: 32, scale: 0.85 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Certifications() {
  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-white to-brand-50/60">
      {/* Decorative gold glow for a premium feel */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px">
        <SectionHeading
          eyebrow="Trusted & Certified"
          title="Certifications"
          intro="Enagic International is certified to ISO 9001, ISO 14001, and ISO 13485 for quality control and environmental management, the Water Quality Association Gold Seal for product certification, and a member in good standing of the prestigious Direct Selling Association."
        />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {certs.map((c) => (
            <motion.li
              key={c.label}
              variants={badge}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="group flex items-center justify-center rounded-3xl border border-slate-100 bg-white p-5 shadow-card transition-shadow hover:shadow-gold"
            >
              <img
                src={asset(c.img)}
                alt={`${c.label} certification`}
                title={c.label}
                className="h-28 w-28 object-contain sm:h-32 sm:w-32"
                loading="lazy"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
