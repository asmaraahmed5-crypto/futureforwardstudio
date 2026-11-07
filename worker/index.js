// Redirects www.futureforwardstudio.com to the main domain, and serves the static site for everything else.
// Security headers added to every response. No CSP on purpose: the site relies on inline scripts (GA) and third-party fonts/images.
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
}

async function handle(request, env) {
    const url = new URL(request.url)
    if (url.hostname === 'www.futureforwardstudio.com') {
      url.hostname = 'futureforwardstudio.com'
      return Response.redirect(url.toString(), 301)
    }
    // /services/<slug>: serve the prerendered page (dist/services/<slug>.html) with its own SEO tags.
    // Unknown slugs get the generic template (client-side "not found" view) with a real 404 status.
    if (/^\/services\/[^/]+\/?$/.test(url.pathname)) {
      const slug = url.pathname.replace(/^\/services\//, '').replace(/\/$/, '')
      const pre = await env.ASSETS.fetch(new Request(new URL(`/services/${slug}`, url), request))
      if (pre.status === 200) return pre
      const fallback = await env.ASSETS.fetch(new Request(new URL('/service', url), request))
      const headers = new Headers(fallback.headers)
      headers.set('X-Robots-Tag', 'noindex')
      return new Response(fallback.body, { status: 404, headers })
    }
    // The old stand-alone landing page now lives on the homepage.
    if (url.pathname === '/ai-marketing-agency' || url.pathname === '/ai-marketing-agency/') {
      return Response.redirect(new URL('/', url).toString(), 301)
    }
    // /blog/<slug>: prerendered per post. Unknown slugs get the blog shell with a real 404.
    if (/^\/blog\/[^/]+\/?$/.test(url.pathname)) {
      const res = await env.ASSETS.fetch(request)
      if (res.status !== 404) return res
      const shell = await env.ASSETS.fetch(new Request(new URL('/blog', url), request))
      const headers = new Headers(shell.headers)
      headers.set('X-Robots-Tag', 'noindex')
      return new Response(shell.body, { status: 404, headers })
    }
    if (url.pathname === '/services' || url.pathname === '/services/') {
      return Response.redirect(new URL('/#services', url).toString(), 301)
    }
    return env.ASSETS.fetch(request)
}

export default {
  async fetch(request, env) {
    const res = await handle(request, env)
    const out = new Response(res.body, res)
    for (const [k, v] of Object.entries(SECURITY_HEADERS)) out.headers.set(k, v)
    return out
  },
}
