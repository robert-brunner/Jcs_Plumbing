import { useState, useEffect } from 'react'
const mainLogo = '/main_Logo.webp'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = ['Services', 'Why Us', 'Reviews', 'Gallery', 'Contact']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(15,21,32,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '70px',
    }}>
      <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <img src={mainLogo} alt="JC's Plumbing" style={{ width: 48, height: 48, objectFit: 'contain' }} />
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: '#C9A84C', letterSpacing: '0.1em', lineHeight: 1 }}>JC's Plumbing</div>
          <div style={{ fontSize: '0.6rem', color: '#8A9BB0', letterSpacing: '0.18em', textTransform: 'uppercase' }}>High Altitude Durability</div>
        </div>
      </a>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0 }} className="desktop-nav">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase().replace(' ', '-')}`} style={{
              color: '#8A9BB0', textDecoration: 'none', fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.05rem', letterSpacing: '0.1em', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#C9A84C'}
              onMouseLeave={e => e.target.style.color = '#8A9BB0'}
            >{l}</a>
          </li>
        ))}
      </ul>

      <a href="tel:9093339652" style={{
        background: 'linear-gradient(135deg, #C9A84C, #E2C97E)',
        color: '#0F1520', padding: '0.5rem 1.3rem', borderRadius: '3px',
        textDecoration: 'none', fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1rem', letterSpacing: '0.08em',
      }}>
        (909) 333-9652
      </a>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}