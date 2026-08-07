import { useEffect, useState } from 'react'
import Carousel from './Carousel'

const CLOUD_NAME = 'dy93rgvt'
const TAG = 'jcs'

export default function Gallery() {
  const [images, setImages] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/${TAG}.json`)
      .then(r => r.json())
      .then(data => {
        const imgs = (data.resources || []).map((r, i) => ({
          id: r.public_id,
          src: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_600,c_fill,q_auto,f_auto/${r.public_id}`,
          full: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_1400,q_auto,f_auto/${r.public_id}`,
          title: `JC's Plumbing work ${i + 1}`,
        }))
        setImages(imgs)
      })
      .catch(() => setImages([]))
  }, [])

  const handleImageClick = (index) => setSelected(images[index])

  return (
    <section id="gallery" style={{ background: '#0F1520', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: "'Source Serif 4', serif" }}>
            Our Work
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '0.05em', color: '#F0EDE6' }}>
            25 Years of <span style={{ color: '#C9A84C' }}>Craftsmanship</span>
          </h2>
        </div>
      </div>

      {images.length > 0 && (
        <Carousel images={images} onImageClick={handleImageClick} />
      )}

      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(0,0,0,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2rem',
        }}>
          <img src={selected.full} alt="JC's Plumbing"
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
          />
          <button onClick={() => setSelected(null)} style={{
            position: 'fixed', top: '1.5rem', right: '1.5rem',
            background: 'none', border: '1px solid rgba(201,168,76,0.4)',
            color: '#C9A84C', fontSize: '1.5rem', cursor: 'pointer',
            width: 44, height: 44, borderRadius: '50%',
          }}>×</button>
        </div>
      )}
    </section>
  )
}