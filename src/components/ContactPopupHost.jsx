import { useEffect, useState } from 'react'
import { ContactPopup } from './ContactPopup'

/* Opens the contact popup for any "contact" link on the page (#contact, /contact or
   [data-contact-popup]). The links keep their real href, so they still work without JS. */
export function ContactPopupHost() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target instanceof Element ? e.target.closest('a') : null
      if (!a) return
      const href = a.getAttribute('href')
      const isContact = href === '#contact' || href === '/contact' || a.hasAttribute('data-contact-popup')
      if (!isContact || a.hasAttribute('data-contact-page') || a.closest('.site-footer li')) return
      e.preventDefault()
      setOpen(true)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return <ContactPopup open={open} onClose={() => setOpen(false)} />
}
