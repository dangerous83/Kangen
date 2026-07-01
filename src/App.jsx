import { useCallback, useState } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LeadModalContext } from './context/LeadModalContext'
import RouteSeo from './components/RouteSeo'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import LeadFormModal from './components/LeadFormModal'
import MobileStickyCTA from './components/MobileStickyCTA'
import ChatWidget from './components/ChatWidget'

import Home from './pages/Home'
import WhyKangenPage from './pages/WhyKangenPage'
import WaterTypesPage from './pages/WaterTypesPage'
import ProductsPage from './pages/ProductsPage'
import OtherProducts from './pages/OtherProducts'
import ProductDetail from './pages/ProductDetail'
import ComparePage from './pages/ComparePage'
import GlenPage from './pages/GlenPage'
import ProcessPage from './pages/ProcessPage'
import BusinessPage from './pages/BusinessPage'
import TestimonialsPage from './pages/TestimonialsPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'

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
    // HashRouter keeps deep links working on GitHub Pages (no server config needed)
    <HashRouter>
      <LeadModalContext.Provider value={{ openLead }}>
        <RouteSeo />
        <ScrollToTop />
        <Header />

        <main className="min-h-[60vh] pt-[4.5rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-kangen" element={<WhyKangenPage />} />
            <Route path="/water-types" element={<WaterTypesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/other-products" element={<OtherProducts />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/glen-apostol" element={<GlenPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Unknown routes fall back to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <MobileStickyCTA />
        <ChatWidget />
        <LeadFormModal isOpen={modalOpen} onClose={closeLead} defaultProduct={defaultProduct} />
      </LeadModalContext.Provider>
    </HashRouter>
  )
}
