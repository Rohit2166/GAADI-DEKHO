import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import './ImageSlider.css'

const ImageSlider = forwardRef(({ images = [], autoPlay = true, interval = 4000, showArrows = true, showDots = true }, ref) => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return
    resetTimeout()
    timeoutRef.current = setTimeout(() => setIndex((prev) => (prev + 1) % images.length), interval)
    return () => resetTimeout()
  }, [index, autoPlay, interval, images.length])

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)
  const goTo = (i) => setIndex(i % images.length)

  useImperativeHandle(ref, () => ({ next, prev, goTo }), [next, prev, goTo])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }
  const onTouchEnd = () => {
    const dx = touchStartX.current - touchEndX.current
    if (Math.abs(dx) > 50) {
      if (dx > 0) next()
      else prev()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  if (!images || images.length === 0) return null

  return (
    <div
      className="image-slider"
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prev()
        if (e.key === 'ArrowRight') next()
      }}
      tabIndex={0}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="slider-window">
        <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((src, i) => (
            <div className="slide" key={i}>
              <img src={src} alt={`slide-${i}`} draggable={false} />
            </div>
          ))}
        </div>
      </div>

      {showArrows && images.length > 1 && (
        <>
          <button className="arrow prev" onClick={prev} aria-label="Previous slide">‹</button>
          <button className="arrow next" onClick={next} aria-label="Next slide">›</button>
        </>
      )}

      {showDots && images.length > 1 && (
        <div className="dots">
          {images.map((_, i) => (
            <button key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  )
})

export default ImageSlider



