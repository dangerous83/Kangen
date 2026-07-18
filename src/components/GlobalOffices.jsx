import Reveal, { SectionHeading } from './Reveal'
import { asset } from '../lib/asset'

// Displays the Enagic "Global Offices" infographic beneath an intro heading.
// The image is self-contained (it carries its own title and legend).
export default function GlobalOffices() {
  return (
    <section className="section-pad bg-brand-50/40">
      <div className="container-px">
        <SectionHeading
          title="Serving Customers Across 29 Countries Worldwide"
          intro="“No matter where you are, I'm (Glen Apostol) here to help you explore Enagic products and guide you every step of the way”."
        />

        <div className="mt-12">
          <Reveal>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
              <img
                src={asset('/assets/global-offices.png')}
                alt="Enagic Global Offices — 29 countries and 44 locations across North America, South America, Europe, the Middle East, Africa, Asia, and Oceania"
                className="block h-auto w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
