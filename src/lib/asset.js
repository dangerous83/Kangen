// Resolve a /public asset against Vite's base URL so images load correctly
// whether the site is served from the domain root or a sub-path (PR preview,
// GitHub Pages, etc). Usage: asset('/assets/logo.png')
export const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
