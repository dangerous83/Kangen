import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { SectionHeading } from './Reveal'
import { Star } from './icons'

// Placeholder testimonials — replace with verified customer quotes when available.
const testimonials = [
  { quote: 'Glen explained the machines clearly and helped me understand my options.', name: 'A. Rahman', role: 'Dubai' },
  { quote: 'The consultation made it easier to choose the right system for my family.', name: 'M. Santos', role: 'Abu Dhabi' },
  { quote: 'Professional, responsive, and very helpful from start to finish.', name: 'L. Haddad', role: 'Sharjah' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  // Auto-advance the carousel
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5500)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[index]

  return (
    <section id="testimonials" className="section-pad bg-slate-50/60">
      <div className="container-px">
        <SectionHeading
          eyebrow="Client Words"
          title="Trusted, professional guidance"
          intro="Customers come to Glen for clear advice and a calm, no-pressure consultation. Here’s what working with him is like."
        />

        <Reveal delay={0.05}>
          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="rounded-3xl border border-slate-100 bg-white p-9 shadow-card sm:p-12">
              <div className="flex justify-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5" />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 text-center"
                >
                  <p className="text-xl font-medium leading-relaxed text-slate-700 sm:text-2xl">
                    “{t.quote}”
                  </p>
                  <footer className="mt-6">
                    <p className="font-bold text-brand-700">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-brand-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
