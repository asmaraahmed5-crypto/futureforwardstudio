// Single place for site-wide CTA settings.
// BOOKING_URL: paste a Calendly / Cal.com link here and every "free AI marketing audit" button will open the
// booking calendar. While it is empty, those buttons open the contact popup instead.
export const BOOKING_URL = ''
export const AUDIT_LABEL = 'Get a free AI marketing audit'
export const AUDIT_LABEL_SHORT = 'Free AI audit'
export const AUDIT_HREF = BOOKING_URL || '#contact'

// Social profile URLs. Leave a value empty to hide its footer icon; fill them in once the profiles exist.
export const SOCIAL = { linkedin: '', instagram: '', x: '' }
// Disclosure shown on every blog post. Edit if your editorial process differs.
export const AI_DISCLOSURE = 'We use AI tools to help research and draft articles. A person edits each piece before it is published.'

// Blog author shown in bylines and structured data. Add `url` (e.g. LinkedIn) later to strengthen the author's profile.
export const AUTHOR = { name: 'Sophia Samuels', url: '' }
