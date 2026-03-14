import { useState } from 'react'

export function JourneyCard({
  title,
  subtitle,
  body,
  bgColor,
  image,
  imagePosition = 'left',
  carouselSlides = [],
  enableHoverAnimation = false,
  showWowBubbles = false,
  className,
  carouselSlideClassName,
  carouselTitleClassName,
  carouselImageWrapClassName,
  carouselImageClassName,
}) {
  const [isHovered, setIsHovered] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  function handleMouseEnter() {
    setIsHovered(true)
  }
  function handleMouseLeave() {
    setIsHovered(false)
    setCurrentSlide(0)
  }

  const hasCarousel = carouselSlides.length > 0 && enableHoverAnimation
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

  const cardBg = bgColor ?? '#2d3748'

  return (
    <div
      className={['journey-card', className].filter(Boolean).join(' ')}
      style={{
        backgroundColor: hasCarousel ? 'transparent' : cardBg,
        color: '#fff',
        overflow: 'visible',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Layer 1: Carousel – visible after hover, fades in as front vanishes */}
      {hasCarousel && (
        <div
          className="journey-card__carousel"
          style={{
            backgroundColor: cardBg,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
          aria-label="Carousel"
        >
          {showWowBubbles && (
            <>
              <img src="/assets/wow.png" alt="" className="journey-card__carousel-deco journey-card__carousel-deco--top-left" aria-hidden />
              <img src="/assets/wow.png" alt="" className="journey-card__carousel-deco journey-card__carousel-deco--bottom-right" aria-hidden />
            </>
          )}
          <div className="journey-card__carousel-btn-wrap journey-card__carousel-btn-wrap--prev">
            <span className="journey-card__carousel-btn-shape" aria-hidden>
            <div className='journey-card__carousel-btn-shape-svg'></div>
            </span>
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
          </div>
          <div className={['journey-card__carousel-slide', slide?.layout === 'imageLeft' ? 'journey-card__carousel-slide--image-left' : '', slide?.layout === 'rowEqual' ? 'journey-card__carousel-slide--row-equal' : '', slide?.layout === 'titleOverlay' ? 'journey-card__carousel-slide--title-overlay' : '', carouselSlideClassName].filter(Boolean).join(' ')}>
            {slide?.layout === 'imageLeft' ? (
              <>
                {slide?.image && (
                  <div className={['journey-card__carousel-image-wrap', slide.imageWrapClassName ?? carouselImageWrapClassName].filter(Boolean).join(' ')}>
                    <img src={slide.image} alt="" className={['journey-card__carousel-image', slide.imageClassName ?? carouselImageClassName].filter(Boolean).join(' ')} />
                  </div>
                )}
                {slide?.title && (
                  <h3 className={['journey-card__carousel-title', slide.titleClassName ?? carouselTitleClassName].filter(Boolean).join(' ')}>{slide.title}</h3>
                )}
              </>
            ) : slide?.layout === 'titleOverlay' ? (
              <>
                {slide?.title && (
                  <h3 className={['journey-card__carousel-title', slide.titleClassName ?? carouselTitleClassName].filter(Boolean).join(' ')}>{slide.title}</h3>
                )}
                {slide?.image && (
                  <div className={['journey-card__carousel-image-wrap', slide.imageWrapClassName ?? carouselImageWrapClassName].filter(Boolean).join(' ')}>
                    <img src={slide.image} alt="" className={['journey-card__carousel-image', slide.imageClassName ?? carouselImageClassName].filter(Boolean).join(' ')} />
                  </div>
                )}
              </>
            ) : slide?.layout === 'rowEqual' ? (
              <>
                {slide?.title && (
                  <h3 className={['journey-card__carousel-title', slide.titleClassName ?? carouselTitleClassName].filter(Boolean).join(' ')}>{slide.title}</h3>
                )}
                {slide?.image && (
                  <div className={['journey-card__carousel-image-wrap', slide.imageWrapClassName ?? carouselImageWrapClassName].filter(Boolean).join(' ')}>
                    <img src={slide.image} alt="" className={['journey-card__carousel-image', slide.imageClassName ?? carouselImageClassName].filter(Boolean).join(' ')} />
                  </div>
                )}
              </>
            ) : (
              <>
                {slide?.title && (
                  <h3 className={['journey-card__carousel-title', slide.titleClassName ?? carouselTitleClassName].filter(Boolean).join(' ')}>{slide.title}</h3>
                )}
                {slide?.image && (
                  <div className={['journey-card__carousel-image-wrap', slide.imageWrapClassName ?? carouselImageWrapClassName].filter(Boolean).join(' ')}>
                    <img src={slide.image} alt="" className={['journey-card__carousel-image', slide.imageClassName ?? carouselImageClassName].filter(Boolean).join(' ')} />
                  </div>
                )}
              </>
            )}
          </div>
          <div className="journey-card__carousel-btn-wrap journey-card__carousel-btn-wrap--next">
            <span className="journey-card__carousel-btn-shape" aria-hidden>
              <div className='journey-card__carousel-btn-shape-svg'></div>
            </span>
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
        </div>
      )}

      {/* Layer 2: Front card – whole card look; on hover it slides left and fades (container stays put) */}
      <div
        className="journey-card__front"
        style={{
          backgroundColor: cardBg,
          transform: hasCarousel && isHovered ? 'translateX(-100%)' : 'translateX(0)',
          opacity: hasCarousel && isHovered ? 0 : 1,
          transition: 'transform 0.5s ease, opacity 0.5s ease',
          pointerEvents: hasCarousel && isHovered ? 'none' : 'auto',
        }}
      >
        {image && (
          <div
            className={`journey-card__illustration journey-card__illustration--${imagePosition}`}
            aria-hidden
          >
            <img src={image} alt="" className="journey-card__person" />
          </div>
        )}
        <div className="journey-card__content">
          <h2 className="journey-card__title">{title}</h2>
          <p className="journey-card__subtitle">{subtitle}</p>
          <p className="journey-card__body">{body}</p>
        </div>
      </div>
    </div>
  )
}
