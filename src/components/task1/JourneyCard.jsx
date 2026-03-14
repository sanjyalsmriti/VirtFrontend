import { useState } from 'react'

export function JourneyCard({
  title,
  subtitle,
  body,
  bgColor,
  image,
  imagePosition = 'left',
  carouselSlides = [],
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  function handleMouseEnter(e) {
    e.currentTarget.style.transform = 'translateY(-4px)'
    setIsHovered(true)
  }
  function handleMouseLeave(e) {
    e.currentTarget.style.transform = 'translateY(0)'
    setIsHovered(false)
    setCurrentSlide(0)
  }

  const hasCarousel = carouselSlides.length > 0
  const showCarousel = hasCarousel && isHovered
  const slide = carouselSlides[currentSlide]
  const canGoPrev = currentSlide > 0
  const canGoNext = currentSlide < carouselSlides.length - 1

  function goPrev(e) {
    e.stopPropagation()
    setCurrentSlide((i) => Math.max(0, i - 1))
  }
  function goNext(e) {
    e.stopPropagation()
    setCurrentSlide((i) => Math.min(carouselSlides.length - 1, i + 1))
  }

  return (
    <div
      className="journey-card"
      style={{
        backgroundColor: bgColor,
        color: '#fff',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!showCarousel && image && (
        <div
          className={`journey-card__illustration journey-card__illustration--${imagePosition}`}
          aria-hidden
        >
          <img src={image} alt="" className="journey-card__person" />
        </div>
      )}
      {!showCarousel && (
        <div className="journey-card__content">
          <h2 className="journey-card__title">{title}</h2>
          <p className="journey-card__subtitle">{subtitle}</p>
          <p className="journey-card__body">{body}</p>
        </div>
      )}

      {showCarousel && (
        <div
          className="journey-card__carousel"
          style={{ backgroundColor: bgColor }}
          aria-label="Carousel"
        >
          <button
            type="button"
            className="journey-card__carousel-btn journey-card__carousel-btn--prev"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="journey-card__carousel-slide">
            {slide?.title && (
              <h3 className="journey-card__carousel-title">{slide.title}</h3>
            )}
            {slide?.image && (
              <div className="journey-card__carousel-image-wrap">
                <img src={slide.image} alt="" className="journey-card__carousel-image" />
              </div>
            )}
          </div>
          <button
            type="button"
            className="journey-card__carousel-btn journey-card__carousel-btn--next"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
