import { useEffect, useRef, useState } from 'react'
import './Carousel.css'
import { useNavigate } from "react-router-dom";

const ITEM_WIDTH = 320
const ITEM_GAP = 20
const ITEM_TOTAL = ITEM_WIDTH + ITEM_GAP
const AUTO_SPEED = 0.6 // px per frame

const Carousel = ({ images, onImageClick }) => {
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const rafRef = useRef(null)
  const pausedRef = useRef(false)
  const boostRef = useRef(0)
  const touchStartX = useRef(null)
  const touchLastX = useRef(null)
  const touchVelRef = useRef(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(null)
  const dragStartOffset = useRef(null)
  const clickBlockedRef = useRef(false)
  const [loaded, setLoaded] = useState({})
  const [glowing, setGlowing] = useState(false)
  const navigate = useNavigate();

  const wrapperRef = useRef(null)
  const items = [...images, ...images, ...images]
  const setLen = images.length * ITEM_TOTAL

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      boostRef.current += e.deltaY * 0.05
      boostRef.current = Math.max(-15, Math.min(25, boostRef.current))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  useEffect(() => {
    offsetRef.current = setLen
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
    }

    const animate = () => {
      if (boostRef.current > 0) {
        boostRef.current = Math.max(0, boostRef.current - 0.15)
      } else if (boostRef.current < 0) {
        boostRef.current = Math.min(0, boostRef.current + 0.15)
      }

      if (!isDragging.current) {
        const speed = AUTO_SPEED + boostRef.current
        offsetRef.current += speed

        if (offsetRef.current >= setLen * 2) offsetRef.current -= setLen
        if (offsetRef.current < 0) offsetRef.current += setLen

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [images, setLen])

  const handleWheel = (e) => {
    e.preventDefault()
    boostRef.current += e.deltaY * 0.05
    boostRef.current = Math.max(-15, Math.min(25, boostRef.current))
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchLastX.current = e.touches[0].clientX
    touchVelRef.current = 0
    pausedRef.current = true
  }

  const handleTouchMove = (e) => {
    const x = e.touches[0].clientX
    const delta = touchLastX.current - x
    touchVelRef.current = delta
    boostRef.current += delta * 0.3
    boostRef.current = Math.max(-20, Math.min(30, boostRef.current))
    touchLastX.current = x
  }

  const handleTouchEnd = () => {
    const totalSwipe = Math.abs(touchStartX.current - touchLastX.current)
    if (totalSwipe < 8) {
      pausedRef.current = false
      return
    }
    boostRef.current = touchVelRef.current * 0.5
    setTimeout(() => { pausedRef.current = false }, 600)
  }

  const handleMouseDown = (e) => {
    isDragging.current = true
    dragStartX.current = e.clientX
    dragStartOffset.current = offsetRef.current
    clickBlockedRef.current = false
    pausedRef.current = true
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    const delta = dragStartX.current - e.clientX
    if (Math.abs(delta) > 4) clickBlockedRef.current = true
    offsetRef.current = dragStartOffset.current + delta
    if (offsetRef.current >= setLen * 2) offsetRef.current -= setLen
    if (offsetRef.current < 0) offsetRef.current += setLen
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
    pausedRef.current = false
  }

  const handleItemClick = (index) => {
    if (clickBlockedRef.current) return
    onImageClick(index)
  }

  const handleImageLoad = (id) => setLoaded(p => ({ ...p, [id]: true }))

  const handleAdminClick = () => {
    setGlowing(true)
    setTimeout(() => navigate("/admin"), 600)
  }

  return (
    <>
      <button
        className={`admin-secret-btn ${glowing ? 'glowing' : ''}`}
        onClick={handleAdminClick}
        aria-hidden="true"
        tabIndex={-1}
      >
        admin
      </button>

      <div
        className="carousel-wrapper"
        ref={wrapperRef}
        onMouseLeave={() => { isDragging.current = false; pausedRef.current = false }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ userSelect: 'none' }}
      >
        <div className="carousel-fade carousel-fade-left" />
        <div className="carousel-fade carousel-fade-right" />
        <div className="carousel-track" ref={trackRef}>
          {items.map((img, i) => (
            <div
              className="carousel-item"
              key={`${img.id}-${i}`}
              onClick={() => handleItemClick(i % images.length)}
            >
              {!loaded[`${img.id}-${i}`] && <div className="carousel-skeleton" />}
              <img
                src={img.src}
                alt={img.title || 'Artwork'}
                draggable={false}
                onLoad={() => handleImageLoad(`${img.id}-${i}`)}
                style={{ opacity: loaded[`${img.id}-${i}`] ? 1 : 0 }}
              />
              <div className="carousel-overlay">
                <span className="carousel-zoom">&#x2197;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel;