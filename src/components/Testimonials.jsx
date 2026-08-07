const reviews = [
  {
    name: 'Sandra M.',
    loc: 'Crestline, CA',
    stars: 5,
    text: 'Joe came out during a snowstorm when our pipes froze and burst. Fast, professional, and fairly priced. Exactly what you want in an emergency.',
  },
  {
    name: 'David R.',
    loc: 'Lake Arrowhead, CA',
    stars: 5,
    text: 'Had him replace our water heater and upgrade some old pipes in our cabin. He knew right away what was wrong and fixed it correctly the first time.',
  },
  {
    name: 'Maria L.',
    loc: 'Running Springs, CA',
    stars: 5,
    text: 'Super responsive and honest. Gave us a fair estimate and stuck to it. Our go-to plumber for anything at our mountain home.',
  },
  {
    name: 'Tom K.',
    loc: 'Blue Jay, CA',
    stars: 5,
    text: '25 years of experience shows. He spotted a slow leak under our foundation that two other plumbers missed. Highly recommend.',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" style={{
      background: '#0F1520', padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: "'Source Serif 4', serif" }}>
            What Customers Say
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.05em',
            color: '#F0EDE6',
          }}>
            Mountain Community <span style={{ color: '#C9A84C' }}>Reviews</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: '#8A9BB0', fontSize: '0.9rem' }}>
            Always open · Serving Crestline, Lake Arrowhead, Running Springs, Big Bear & surrounding mountain communities
          </p>
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ name, loc, stars, text }) {
  return (
    <div style={{
      background: '#1C2333',
      border: '1px solid rgba(201,168,76,0.1)',
      padding: '2rem',
      position: 'relative',
    }}>
      {/* Quote mark */}
      <div style={{
        position: 'absolute', top: '1rem', right: '1.5rem',
        fontFamily: 'Georgia, serif', fontSize: '4rem',
        color: 'rgba(201,168,76,0.12)', lineHeight: 1,
        userSelect: 'none',
      }}>"</div>

      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} style={{ color: '#C9A84C', fontSize: '1rem' }}>★</span>
        ))}
      </div>

      <p style={{ color: '#8A9BB0', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
        "{text}"
      </p>

      <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '1rem' }}>
        <div style={{ color: '#F0EDE6', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.06em' }}>{name}</div>
        <div style={{ color: '#C9A84C', fontSize: '0.75rem', letterSpacing: '0.1em' }}>{loc}</div>
      </div>
    </div>
  )
}
