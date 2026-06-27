import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Fade out the fresh-water splash screen once the app has mounted.
// Keep it visible for a brief minimum so it reads as a polished intro
// rather than a flash.
const loader = document.getElementById('app-loader')
if (loader) {
  const MIN_VISIBLE_MS = 2000
  const hide = () => {
    loader.classList.add('is-hidden')
    loader.addEventListener('transitionend', () => loader.remove(), { once: true })
    // Fallback removal in case the transition event doesn't fire.
    setTimeout(() => loader.remove(), 1000)
  }
  requestAnimationFrame(() =>
    setTimeout(hide, Math.max(0, MIN_VISIBLE_MS - performance.now())),
  )
}
