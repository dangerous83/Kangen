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
// Show it for a fixed 2 seconds (measured from when the app is ready and
// the splash is actually on screen) so the animation always plays fully
// and reads as a polished intro rather than a flash.
const loader = document.getElementById('app-loader')
if (loader) {
  const VISIBLE_MS = 2000
  const hide = () => {
    loader.classList.add('is-hidden')
    loader.addEventListener('transitionend', () => loader.remove(), { once: true })
    // Fallback removal in case the transition event doesn't fire.
    setTimeout(() => loader.remove(), 1000)
  }
  // Wait for first paint, then keep the splash up for the full duration.
  requestAnimationFrame(() => setTimeout(hide, VISIBLE_MS))
}
