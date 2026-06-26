import { createContext, useContext } from 'react'

// Shared context so any CTA button across the site can open the lead-form modal.
// `defaultProduct` lets cards pre-select a product in the dropdown (e.g. "Ask Glen about K8").
export const LeadModalContext = createContext({
  openLead: () => {},
})

export const useLeadModal = () => useContext(LeadModalContext)
