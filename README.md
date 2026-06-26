# Glen Apostol — Kangen Water & Enagic Consultant

A premium, conversion-focused lead-generation website for **Glen Apostol**, a professional
Enagic / Kangen Water consultant in the UAE. Built as a modern single-page React app with a
clean corporate wellness + water-technology style.

- **Primary CTA:** Book a Free Water Consultation (opens the lead-form modal)
- **Secondary CTA:** Message Glen on WhatsApp → `+971 56 664 4147`

## Tech Stack

- **React + Vite**
- **Tailwind CSS** (brand palette baked into `tailwind.config.js`)
- **Framer Motion** — scroll reveals, hero animation, modal & accordion transitions
- **React Hook Form** — lead-form validation

## Brand Colors

| Token | Hex | Usage |
| --- | --- | --- |
| Primary `brand` | `#024f9e` | Headings, buttons, icons, premium sections |
| Secondary `gold` | `#d3a637` | Highlights, borders, premium badges, CTA details |
| Tertiary `wellness` | `#67b622` | Check marks, water benefits, WhatsApp / green accents |

## Getting Started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Project Structure

```
src/
  components/      # Header, Hero, GlenProfile, WhyKangen, ProductShowcase,
                   # ProductComparison, WaterTypes, BusinessOpportunity,
                   # Testimonials, Process, FAQ, FinalCTA, Footer,
                   # LeadFormModal, MobileStickyCTA, icons, Reveal
  context/         # LeadModalContext — lets any CTA open the lead modal
  data/            # products.js, faqs.js, site.js (contact + nav config)
  App.jsx
  main.jsx
  index.css
public/assets/     # logo, product & Glen images
```

## Customisation Notes

- **Contact details / WhatsApp** — edit `src/data/site.js` in one place.
- **Products & comparison table** — edit `src/data/products.js`.
- **FAQ content** — edit `src/data/faqs.js`.
- **Images** — replace the files in `public/assets/`. Several product cards currently
  reuse shared placeholder images; search the codebase for `TODO` comments marking where
  to drop in dedicated product photos.

## Connecting the Lead Form to a Backend

The form currently validates, shows a loading state, displays a success message and
`console.log`s the payload. To persist leads, open `src/components/LeadFormModal.jsx`
and replace the simulated submission inside `onSubmit` with your provider of choice —
**Formspree, Supabase, Firebase, or a custom API**. Ready-to-use snippets are included
as comments at that exact spot.

## Compliance

Copy throughout the site intentionally avoids medical claims. Enagic® and Kangen Water®
are registered trademarks of Enagic Co., Ltd. This is an **independent consultant landing
page** for Glen Apostol and is not the official Enagic corporate website.
