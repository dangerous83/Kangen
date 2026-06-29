import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteSeo, SITE } from '../data/seo'

// Imperatively keeps a <meta>/<link> tag in <head> in sync, creating it
// once and updating thereafter. `attr` is the identifying attribute
// (e.g. "name" or "property"), `key` its value (e.g. "description").
function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * RouteSeo — rendered once inside the router. On every navigation it
 * rewrites the document title, description, keywords, canonical link,
 * Open Graph / Twitter tags and a per-page JSON-LD structured-data
 * block so each "page" of this SPA carries its own SEO metadata.
 */
export default function RouteSeo() {
  const { pathname } = useLocation()
  // The gtag.js snippet already sends a page_view for the initial load, so
  // skip the first run here and only track subsequent in-app navigations.
  const firstRun = useRef(true)

  useEffect(() => {
    const seo = getRouteSeo(pathname)

    // Title + primary meta
    document.title = seo.title
    setMeta('name', 'description', seo.description)
    setMeta('name', 'keywords', seo.keywords)
    setLink('canonical', seo.canonical)

    // Open Graph
    setMeta('property', 'og:type', pathname.startsWith('/products/') ? 'product' : 'website')
    setMeta('property', 'og:site_name', SITE.brand)
    setMeta('property', 'og:title', seo.title)
    setMeta('property', 'og:description', seo.description)
    setMeta('property', 'og:url', seo.canonical)
    setMeta('property', 'og:image', SITE.ogImage)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:alt', 'Kangen Water UAE — alkaline ionized water by Enagic')
    setMeta('property', 'og:locale', SITE.locale)

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', seo.title)
    setMeta('name', 'twitter:description', seo.description)
    setMeta('name', 'twitter:image', SITE.ogImage)

    // Per-route JSON-LD — replace any previously injected route block.
    let script = document.getElementById('route-jsonld')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'route-jsonld'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(seo.jsonLd)

    // Google Analytics (GA4) SPA page-view tracking. The initial load is
    // counted by the gtag config in index.html; here we report each
    // subsequent hash-route navigation as a fresh page_view.
    if (firstRun.current) {
      firstRun.current = false
    } else if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: seo.title,
        page_location: window.location.href,
        page_path: `/#${pathname}`,
      })
    }
  }, [pathname])

  return null
}
