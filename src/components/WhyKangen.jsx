import Reveal, { SectionHeading } from './Reveal'
import { Drop, Home, Layers, Japan, Hand, Check } from './icons'

const cards = [
  {
    icon: Drop,
    title: 'Daily Hydration',
    text: 'Hydrogen-rich alkaline water designed for daily hydration and household use — an easy upgrade to your everyday routine.',
    img: '/assets/hydrogen.png',
  },
  {
    icon: Home,
    title: 'Home Wellness',
    text: 'Used by many customers as part of a wellness-focused lifestyle at home, for the whole family.',
    img: '/assets/kangen-family.png',
  },
  {
    icon: Layers,
    title: 'Multiple Water Types',
    text: 'Different water types can be selected for different daily purposes around the home and kitchen.',
    img: '/assets/alkaline.png',
  },
  {
    icon: Japan,
    title: 'Japanese Technology',
    text: 'Kangen Water is created through Enagic water ionizer technology, engineered and built in Japan.',
    img: '/assets/antioxidant.png',
  },
  {
    icon: Hand,
    title: 'Personal Guidance',
    text: 'The right machine depends on household size, lifestyle and budget — Glen helps you choose with confidence.',
    img: null,
  },
]

export default function WhyKangen() {
  return (
    <section id="why" className="section-pad bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Kangen Water"
          title="A premium upgrade to your daily water"
          intro="Kangen Water® is hydrogen-rich alkaline water created through Enagic ionizer technology. Here’s how customers fold it into a wellness-focused lifestyle — with Glen guiding every step."
        />

        {/* Feature image strip */}
        <Reveal delay={0.05}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { img: '/assets/hydrogen.png', label: 'Hydrogen-Rich' },
              { img: '/assets/alkaline.png', label: 'Alkaline Water' },
              { img: '/assets/antioxidant.png', label: 'Antioxidant Lifestyle' },
            ].map((f) => (
              <div key={f.label} className="group relative overflow-hidden rounded-2xl border border-slate-100 shadow-soft">
                {/* TODO: swap these conceptual images for final brand imagery if needed */}
                <img src={f.img} alt={f.label} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Benefit cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <article className="card h-full hover:-translate-y-1.5 hover:shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wellness/10 text-wellness">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-brand-700">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
                <span className="mt-4 inline-block h-1 w-12 rounded-full bg-gold/70" />
              </article>
            </Reveal>
          ))}

          {/* Compliance / wellness note card */}
          <Reveal delay={cards.length * 0.06}>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-brand-600 p-7 text-white shadow-card">
              <h3 className="text-lg font-bold">Honest, wellness-focused advice</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-50">
                {[
                  'Supports a wellness-focused lifestyle',
                  'Helps upgrade your daily water routine',
                  'Designed for daily hydration & household use',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-gold-light" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
