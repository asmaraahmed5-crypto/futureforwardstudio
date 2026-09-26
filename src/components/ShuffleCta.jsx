import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SpotButton } from './SpotButton'
import './ShuffleCta.css'

const UNS = 'https://images.unsplash.com/photo'

const IMAGES = [
  { id: 1,  src: `${UNS}-1496181133206-80ce9b88a853?w=300&h=300&fit=crop&q=80` },
  { id: 2,  src: `${UNS}-1522071820081-009f0129c71c?w=300&h=300&fit=crop&q=80` },
  { id: 3,  src: `${UNS}-1485827404703-89b55fcc595e?w=300&h=300&fit=crop&q=80` },
  { id: 4,  src: `${UNS}-1451187580459-43490279c0fa?w=300&h=300&fit=crop&q=80` },
  { id: 5,  src: `${UNS}-1518770660439-4636190af475?w=300&h=300&fit=crop&q=80` },
  { id: 6,  src: `${UNS}-1553877522-43269d4ea984?w=300&h=300&fit=crop&q=80` },
  { id: 7,  src: `${UNS}-1573164713988-8665fc963095?w=300&h=300&fit=crop&q=80` },
  { id: 8,  src: `${UNS}-1600880292203-757bb62b4baf?w=300&h=300&fit=crop&q=80` },
  { id: 9,  src: `${UNS}-1623282033815-40b05d96c903?w=300&h=300&fit=crop&q=80` },
  { id: 10, src: `${UNS}-1611532736597-de2d4265fba3?w=300&h=300&fit=crop&q=80` },
  { id: 11, src: `${UNS}-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&q=80` },
  { id: 12, src: `${UNS}-1531297484001-80022131f5a1?w=300&h=300&fit=crop&q=80` },
  { id: 13, src: `${UNS}-1545987796-200677ee1011?w=300&h=300&fit=crop&q=80` },
  { id: 14, src: `${UNS}-1620121692029-d088224ddc74?w=300&h=300&fit=crop&q=80` },
  { id: 15, src: `${UNS}-1620712943543-bcc4688e7485?w=300&h=300&fit=crop&q=80` },
  { id: 16, src: `${UNS}-1633356122102-3fe601e05bd2?w=300&h=300&fit=crop&q=80` },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateSquares() {
  return shuffle(IMAGES).map((img) => (
    <motion.div
      key={img.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className="sc-square"
      style={{ backgroundImage: `url(${img.src})` }}
    />
  ))
}

function ShuffleGrid() {
  const timerRef = useRef(null)
  const [squares, setSquares] = useState(generateSquares)

  useEffect(() => {
    function next() {
      setSquares(generateSquares())
      timerRef.current = setTimeout(next, 3000)
    }
    timerRef.current = setTimeout(next, 3000)
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div className="sc-grid">
      {squares}
    </div>
  )
}

export function ShuffleCta() {
  return (
    <div className="sc-wrap">
      <div className="sc-text">
        <span className="label section-eyebrow">The Outcome</span>
        <h2 className="sc-heading">
          AI doesn't replace the marketing strategy.
          <span className="sc-punch"> it supercharges it.</span>
        </h2>
        <p className="sc-desc">
          Every campaign smarter. Every decision faster. Every result bigger — because your marketing is finally backed by both human intelligence and machine power.
        </p>
        <SpotButton href="#contact" className="spot-btn--dark">
          Supercharge My Marketing →
        </SpotButton>
      </div>
      <ShuffleGrid />
    </div>
  )
}
