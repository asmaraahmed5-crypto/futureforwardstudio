import { useId } from 'react'
import { Check } from 'lucide-react'

// Brand-coloured diagrams used inside blog posts. Everything is real text (SVG <text> / HTML), so it stays crisp,
// accessible and readable by search engines. Colours come from the site palette (purple / violet / lilac on near-black).
const A = '#5b21b6'
const B = '#a855f7'

function Steps({ items }) {
  return (
    <ol className="bf-steps">
      {items.map((it, i) => (
        <li key={it.t}>
          <span className="bf-num">{i + 1}</span>
          <strong>{it.t}</strong>
          {it.d && <span className="bf-d">{it.d}</span>}
        </li>
      ))}
    </ol>
  )
}

function Loop({ items, center }) {
  const id = useId().replace(/:/g, '')
  const cx = 280, cy = 180, r = 105, n = items.length
  const pt = (deg, rad) => [cx + rad * Math.cos((deg * Math.PI) / 180), cy + rad * Math.sin((deg * Math.PI) / 180)]
  const ang = (i) => -90 + (360 / n) * i
  return (
    <svg className="bf-loop" viewBox="0 0 560 360" role="img" aria-label={`${center}: ${items.join(', then ')}`}>
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={A} /><stop offset="1" stopColor={B} /></linearGradient>
        <marker id={`m${id}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#c4b5fd" /></marker>
      </defs>
      {items.map((_, i) => {
        const [x1, y1] = pt(ang(i) + 22, r), [x2, y2] = pt(ang(i + 1) - 22, r)
        return <path key={i} d={`M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}`} fill="none" stroke="#a78bfa" strokeWidth="3" markerEnd={`url(#m${id})`} />
      })}
      <circle cx={cx} cy={cy} r="44" fill={`url(#g${id})`} />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">{center}</text>
      {items.map((label, i) => {
        const [x, y] = pt(ang(i), r)
        const [lx, ly] = pt(ang(i), r + 52)
        const c = Math.cos((ang(i) * Math.PI) / 180)
        return (
          <g key={label}>
            <circle cx={x} cy={y} r="22" fill="#0b0716" stroke={`url(#g${id})`} strokeWidth="3" />
            <text x={x} y={y + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">{i + 1}</text>
            <text x={lx} y={ly + 5} textAnchor={c > 0.3 ? 'start' : c < -0.3 ? 'end' : 'middle'} fontSize="16" fontWeight="500" fill="#fff">{label}</text>
          </g>
        )
      })}
    </svg>
  )
}

function Compare({ left, right }) {
  const col = (c, cls) => (
    <div className={`bf-col ${cls}`}>
      <h4>{c.title}</h4>
      <ul>{c.items.map((x) => <li key={x}><Check size={15} aria-hidden="true" />{x}</li>)}</ul>
    </div>
  )
  return <div className="bf-compare">{col(left, 'bf-col--a')}<span className="bf-vs" aria-hidden="true">vs</span>{col(right, 'bf-col--b')}</div>
}

function Cards({ items }) {
  return (
    <ul className="bf-cards">
      {items.map((it) => <li key={it.t}><strong>{it.t}</strong><span>{it.d}</span></li>)}
    </ul>
  )
}

function Checklist({ items }) {
  return (
    <ul className="bf-check">
      {items.map((it) => (
        <li key={it.t}><span className="bf-tick"><Check size={15} aria-hidden="true" /></span><span><strong>{it.t}</strong>{it.d && <em>{it.d}</em>}</span></li>
      ))}
    </ul>
  )
}

function Nested({ layers }) {
  const id = useId().replace(/:/g, '')
  const R = [150, 106, 62]
  return (
    <div className="bf-nested">
      <svg viewBox="0 0 320 320" role="img" aria-label={layers.map((l) => l.t).join(' contains ')}>
        <defs>
          <linearGradient id={`n${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={A} /><stop offset="1" stopColor={B} /></linearGradient>
        </defs>
        {layers.map((l, i) => (
          <g key={l.t}>
            <circle cx="160" cy={160 + (i * 14)} r={R[i]} fill={`url(#n${id})`} fillOpacity={0.18 + i * 0.28} stroke="#c4b5fd" strokeOpacity={0.6} strokeWidth="2" />
            <text x="160" y={160 + i * 14 - R[i] + 30} textAnchor="middle" fontSize={i === 2 ? 20 : 18} fontWeight="700" fill="#fff">{l.t}</text>
          </g>
        ))}
      </svg>
      <ul>{layers.map((l, i) => <li key={l.t}><span style={{ opacity: 0.35 + i * 0.3 }} /><div><strong>{l.t}</strong>{l.d}</div></li>)}</ul>
    </div>
  )
}

function Table({ head, rows }) {
  return (
    <div className="bf-table">
      <table>
        <thead><tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
        <tbody>{rows.map((r) => <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={c} scope="row">{c}</th> : <td key={c}>{c}</td>))}</tr>)}</tbody>
      </table>
    </div>
  )
}

const KINDS = { steps: Steps, loop: Loop, compare: Compare, cards: Cards, checklist: Checklist, nested: Nested, table: Table }

export function BlogFigure({ spec }) {
  const Kind = KINDS[spec.kind]
  if (!Kind) return null
  return (
    <figure className={`bf bf--${spec.kind}`}>
      <Kind {...spec} />
      {spec.caption && <figcaption>{spec.caption}</figcaption>}
    </figure>
  )
}
