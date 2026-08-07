const mainLogo = '/main_Logo.webp'

const stats = [
  { num: '25+', label: 'Years of Experience' },
  { num: '24/7', label: 'Emergency Response' },
  { num: '$', label: 'Affordable Pricing' },
  { num: '100%', label: 'Local & Community-Focused' },
]

const pillars = [
  {
    title: 'We Know Mountain Plumbing',
    body: "Crestline and the surrounding San Bernardino mountains have unique elevation, freeze-thaw cycles, and pressure dynamics. Joe Cortez has spent 25 years learning exactly what these homes need — and what they don't.",
  },
  {
    title: 'Small Business, Personal Service',
    body: "You call us, you get us. No dispatch center, no rotating crews. Joe handles your job personally and stands behind every repair with the kind of accountability a large company can't offer.",
  },
  {
    title: 'Always Available',
    body: "Pipes don't wait for business hours. Neither do we. Mountain emergencies are a reality of high-altitude living, and we're ready to respond whenever you need us — day, night, or weekend.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: '#1C2333', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 1440 300" preserveAspectRatio="xMidYMax slice"
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', opacity: 0.05, pointerEvents: 'none' }}>
        <polygon points="0,300 200,120 400,200 600,80 800,180 1000,60 1200,160 1440,100 1440,300" fill="#C9A84C"/>
      </svg>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0', marginBottom: '5rem', border: '1px solid rgba(201,168,76,0.15)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '2rem', textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid rgba(201,168,76,0.15)' : 'none',
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#C9A84C', letterSpacing: '0.05em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: '#8A9BB0', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.3rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="why-grid">
          <div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: "'Source Serif 4', serif" }}>
              25 Years in the Mountains
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.05em', color: '#F0EDE6', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Why JC's Is the Right Call
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {pillars.map((p, i) => (
                <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid rgba(201,168,76,0.3)' }}>
                  <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#C9A84C', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{p.title}</h4>
                  <p style={{ color: '#8A9BB0', lineHeight: 1.7, fontSize: '0.95rem' }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={mainLogo} alt="JC's Plumbing" style={{ width: 280, height: 280, objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.2))' }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </section>
  )
}