import Reveal, { SectionHeading } from './Reveal'
import { comparison } from '../data/products'
import { useLeadModal } from '../context/LeadModalContext'
import { Check } from './icons'

export default function ProductComparison() {
  const { openLead } = useLeadModal()

  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="Compare Models"
          title="See how the machines compare"
          intro="A quick side-by-side of popular models. Still unsure? Glen will translate the specs into a clear recommendation for you."
        />

        {/* Desktop table */}
        <Reveal delay={0.05}>
          <div className="mt-12 hidden overflow-hidden rounded-3xl border border-slate-100 shadow-card lg:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-brand-600 text-white">
                  <th className="px-6 py-4 text-sm font-semibold">Product</th>
                  <th className="px-6 py-4 text-sm font-semibold">Best For</th>
                  <th className="px-6 py-4 text-sm font-semibold">Feature Highlight</th>
                  <th className="px-6 py-4 text-sm font-semibold">Usage Type</th>
                  <th className="px-6 py-4 text-sm font-semibold text-right">Ask Glen</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-t border-slate-100 transition-colors hover:bg-brand-50/50 ${
                      i % 2 ? 'bg-slate-50/50' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-5 font-bold text-brand-700">{row.name}</td>
                    <td className="px-6 py-5 text-sm text-slate-600">{row.bestFor}</td>
                    <td className="px-6 py-5 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4 text-wellness" />
                        {row.feature}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600">{row.usage}</td>
                    <td className="px-6 py-5 text-right">
                      <button
                        onClick={() => openLead(row.name)}
                        className="rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-600 hover:text-white"
                      >
                        Ask Glen
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile stacked cards */}
        <div className="mt-10 grid gap-4 lg:hidden">
          {comparison.map((row, i) => (
            <Reveal key={row.name} delay={i * 0.05}>
              <div className="card p-5">
                <h3 className="text-lg font-bold text-brand-700">{row.name}</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium text-slate-400">Best for</dt>
                    <dd className="text-right text-slate-700">{row.bestFor}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium text-slate-400">Feature</dt>
                    <dd className="text-right text-slate-700">{row.feature}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium text-slate-400">Usage</dt>
                    <dd className="text-right text-slate-700">{row.usage}</dd>
                  </div>
                </dl>
                <button
                  onClick={() => openLead(row.name)}
                  className="mt-4 w-full rounded-full bg-brand-50 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  Ask Glen About {row.name}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 px-7 py-8 text-center shadow-card sm:flex-row sm:text-left">
            <p className="text-lg font-semibold text-white">
              Not sure which machine fits you?{' '}
              <span className="text-gold-light">Ask Glen for a recommendation.</span>
            </p>
            <button
              onClick={() => openLead()}
              className="flex-none rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Get My Recommendation
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
