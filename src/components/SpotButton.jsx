import { useRef, useState } from 'react'
import './SpotButton.css'

export function SpotButton({ href, children, className = '', style, ...props }) {
  const ref = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!ref.current || isFocused) return
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      ref={ref}
      href={href}
      className={`spot-btn ${className}`}
      onMouseMove={handleMouseMove}
      onFocus={() => { setIsFocused(true); setOpacity(1) }}
      onBlur={() => { setIsFocused(false); setOpacity(0) }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      style={style}
      {...props}
    >
      <span
        className="spot-btn__glow"
        style={{
          opacity,
          background: `radial-gradient(90px circle at ${pos.x}px ${pos.y}px, var(--spot-color), transparent)`,
        }}
      />
      <span className="spot-btn__label">{children}</span>
    </Tag>
  )
}
