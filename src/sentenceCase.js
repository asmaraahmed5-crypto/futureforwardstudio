// "AI Website Design" -> "AI website design". Keeps acronyms (AI, SEO, B2B) and camel-case words (eCommerce).
export function sentenceCase(str) {
  const out = str.replace(/[A-Za-z0-9]+/g, (w) =>
    (w.length > 1 && w === w.toUpperCase()) || /[a-z][A-Z]/.test(w) ? w : w.toLowerCase(),
  )
  return out.replace(/^[a-z]/, (c) => c.toUpperCase())
}
