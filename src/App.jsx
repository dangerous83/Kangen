import { useCallback, useState } from 'react'
import { LeadModalContext } from './context/LeadModalContext'
import Header from './components/Header'
import Hero from './components/Hero'
import GlenProfile from './components/GlenProfile'
import WhyKangen from './components/WhyKangen'
import ProductShowcase from './components/ProductShowcase'
import ProductComparison from './components/ProductComparison'
import WaterTypes from './components/WaterTypes'
import BusinessOpportunity from './components/BusinessOpportunity'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import LeadFormModal from './components/LeadFormModal'
import MobileStickyCTA from './components/MobileStickyCTA'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [defaultProduct, setDefaultProduct] = useState(null)

  // Any CTA across the site calls openLead(); an optional product name
  // pre-selects the dropdown (e.g. "Ask Glen About K8").
  const openLead = useCallback((product = null) => {
    setDefaultProduct(product)
    setModalOpen(true)
  }, [])

  const closeLead = useCallback(() => setModalOpen(false), [])

  return (
    <LeadModalContext.Provider value={{ openLead }}>
      <Header />

      <main>
        <Hero />
        <GlenProfile />
        <WhyKangen />
        <ProductShowcase />
        <ProductComparison />
        <WaterTypes />
        <BusinessOpportunity />
        <Testimonials />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <MobileStickyCTA />
      <LeadFormModal isOpen={modalOpen} onClose={closeLead} defaultProduct={defaultProduct} />
    </LeadModalContext.Provider>
  )
}
