// Redirects www.futureforwardstudio.com to the main domain, and serves the static site for everything else.
export default {
  async fetch(request, env) {
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
    if (url.pathname === '/services' || url.pathname === '/services/') {
      return Response.redirect(new URL('/#services', url).toString(), 301)
    }
    return env.ASSETS.fetch(request)
  },
}
