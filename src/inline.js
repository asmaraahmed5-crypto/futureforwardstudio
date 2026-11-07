// Tiny inline-markup parser shared by the React blog and the build-time prerender.
// Supports [link text](url). Returns an array of strings and { text, href, external } tokens.
export function parseInline(text) {
  const out = []
  const re = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    out.push({ text: m[1], href: m[2], external: /^https?:\/\//.test(m[2]) })
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export const plainText = (text) => parseInline(text).map((t) => (typeof t === 'string' ? t : t.text)).join('')
