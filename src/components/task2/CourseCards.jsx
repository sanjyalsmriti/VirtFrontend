import { useState, useEffect } from 'react'

const ALL_COURSES = {
  id: 'all',
  count: 23,
  title: 'All Courses',
  description: "courses you're powering through right now.",
}

const UPCOMING = {
  id: 'upcoming',
  count: 5,
  title: 'Upcoming Courses',
  description: 'exciting new courses waiting to boost your skills.',
}

const ONGOING = {
  id: 'ongoing',
  count: 10,
  title: 'Ongoing Courses',
  description: "currently happening—don't miss out on the action!",
}

const CARDS = [ALL_COURSES, UPCOMING, ONGOING]

export function CourseCards() {
  const [activeCard, setActiveCard] = useState('all')
  const [justActivated, setJustActivated] = useState(null)
  const [justDeactivated, setJustDeactivated] = useState(null)

  useEffect(() => {
    if (justActivated == null && justDeactivated == null) return
    const t = setTimeout(() => {
      setJustActivated(null)
      setJustDeactivated(null)
    }, 500)
    return () => clearTimeout(t)
  }, [justActivated, justDeactivated])

  const handleCardClick = (id) => {
    if (id === activeCard) return
    setJustDeactivated(activeCard)
    setActiveCard(id)
    setJustActivated(id)
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--course-card-inner-gap)',
        alignItems: 'stretch',
      }}
      className="course-cards"
    >
      {CARDS.map((card) => {
        const isActive = activeCard === card.id
        const isJustActivated = justActivated === card.id
        const isJustDeactivated = justDeactivated === card.id
        return (
          <div
            key={card.id}
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick(card.id)}
            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(card.id)}
            className={`course-card ${isActive ? 'course-card--active' : 'course-card--inactive'} ${isJustActivated ? 'course-card--animate-in' : ''} ${isJustDeactivated ? 'course-card--animate-out' : ''}`}
            style={{
              backgroundColor: ((isActive && !isJustActivated) || isJustDeactivated) ? 'var(--Secondary-500)' : 'var(--Secondary-50)',
              color: (isActive || isJustDeactivated) ? '#fff' : 'inherit',
              borderRadius: 'var(--course-card-radius)',
              padding: (isActive || isJustDeactivated) ? 'var(--course-card-padding-block) var(--course-card-padding-inline)' : 'var(--course-card-padding-block) var(--course-card-padding-inline)',
              width: isActive ? 'var(--course-card-active-width)' : 'var(--course-card-passive-width)',
              flexShrink: 0,
              height: 'var(--course-card-passive-height)',
              minWidth: isActive ? 'var(--course-card-active-width)' : 'var(--course-card-passive-width)',
              minHeight: 'var(--course-card-passive-height)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: (isActive || isJustDeactivated) ? 'space-between' : 'flex-end',
              cursor: 'pointer',
              position: 'relative',
              transition: isJustActivated ? 'none' : isActive ? 'color 0.3s ease, width 0.45s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.45s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s ease' : 'color 0.35s ease, width 0.45s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.45s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s ease',
            }}
          >
            {/* Hover on inactive card: "Click me!" text (outside card) + image (between text and card), top middle */}
            {!isActive && !isJustDeactivated && (
              <div className="course-card__hover-prompt" aria-hidden>
                <span className="course-card__hover-prompt-text">Click me!</span>
                <img src="/assets/clickme.png" alt="" className="course-card__hover-prompt-img" />
              </div>
            )}
            {/* When becoming inactive: overlay reveals pink + inactive content (red text) from top-right over red card */}
            {isJustDeactivated && (
              <div className="course-card__inactive-reveal" aria-hidden>
                <div style={{ writingMode: 'vertical-rl', textAlign: 'left', transform: 'rotate(180deg)', marginBottom: 'var(--course-card-inner-gap)' }}>
                  <p style={{ fontFamily: 'Outfit, var(--font-sans)', fontWeight: 700, fontSize: 'var(--course-card-title-size)', lineHeight: '100%', color: 'var(--Secondary-500)', margin: 0 }}>
                    {card.title}
                  </p>
                  <p style={{ fontFamily: 'Outfit, var(--font-sans)', fontWeight: 400, fontSize: 'var(--course-card-desc-size)', lineHeight: '100%', color: 'var(--Secondary-500)', marginTop: 'var(--space-xs)', opacity: 0.9 }}>
                    {card.description}
                  </p>
                </div>
                <p style={{ fontFamily: 'var(--course-card-count-font)', fontWeight: 700, fontSize: '4rem', lineHeight: '120%', color: 'var(--Secondary-500)', textAlign: 'center', margin: 0 }}>
                  {String(card.count).padStart(2, '0')}+
                </p>
              </div>
            )}
            <div className="course-card__content" style={{ display: 'flex', flexDirection: 'column', justifyContent: (isActive || isJustDeactivated) ? 'space-between' : 'flex-end', flex: 1, minHeight: 0 }}>
            {(isActive || isJustDeactivated) ? (
              <>
                <a
                  href="#"
                  className="course-card__link course-card__content-movable"
                  style={{
                    color: '#fff',
                    fontFamily: 'Outfit, var(--font-sans)',
                    fontWeight: 600,
                    fontSize: 'var(--course-card-link-size)',
                    lineHeight: '100%',
                    textAlign: 'right',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View all Courses{' '}
                  <span aria-hidden className="course-cards__arrow-shake">→</span>
                </a>
                <div className="course-card__content-movable" style={{ display: 'flex', gap: 'var(--course-card-inner-gap)', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <img src="/assets/react.png" alt="" aria-hidden style={{ objectFit: 'contain' }} />
                  <img src="/assets/like_love.png" alt="" aria-hidden style={{ objectFit: 'contain' }} />
                  <img src="/assets/vue.js.png" alt="" aria-hidden style={{ objectFit: 'contain' }} />
                  <img src="/assets/pen.png" alt="" aria-hidden style={{ objectFit: 'contain' }} />
                </div>
                <div style={{ display: 'flex', gap: 'var(--course-card-inner-gap)', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                  <span
                    className="course-card__count"
                    style={{
                      fontFamily: 'var(--course-card-count-font)',
                      fontWeight: 700,
                      fontSize: 'var(--course-card-count-size)',
                      lineHeight: 'var(--course-card-count-lh)',
                      textAlign: 'center',
                      letterSpacing: '0%',
                    }}
                  >
                    {card.count}
                    <span style={{ fontSize: '0.22em', fontWeight: 700, verticalAlign: 'super', opacity: 0.95 }}>+</span>
                  </span>
                  <div className="course-card__content-movable">
                    <p
                      style={{
                        fontFamily: 'Outfit, var(--font-sans)',
                        fontWeight: 700,
                        fontSize: 'var(--course-card-title-size)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        textAlign: 'center',
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Outfit, var(--font-sans)',
                        fontWeight: 400,
                        fontSize: 'var(--course-card-desc-size)',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        margin: 0,
                        opacity: (isActive || isJustDeactivated) ? 1 : undefined,
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="course-card__content-movable"
                  style={{
                    writingMode: 'vertical-rl',
                    textAlign: 'left',
                    transform: 'rotate(180deg)',
                    marginBottom: 'var(--course-card-inner-gap)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Outfit, var(--font-sans)',
                      fontWeight: 700,
                      fontSize: 'var(--course-card-title-size)',
                      lineHeight: '100%',
                      color: 'var(--Secondary-500)',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Outfit, var(--font-sans)',
                      fontWeight: 400,
                      fontSize: 'var(--course-card-desc-size)',
                      lineHeight: '100%',
                      color: 'var(--Secondary-500)',
                      marginTop: 'var(--space-xs)',
                      opacity: 0.9,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
                <p
                  className="course-card__count"
                  style={{
                    fontFamily: 'var(--course-card-count-font)',
                    fontWeight: 700,
                    fontSize: '4rem',
                    lineHeight: '120%',
                    color: 'var(--Secondary-500)',
                    textAlign: 'center',
                    margin: 0,
                  }}
                >
                  {String(card.count).padStart(2, '0')}+
                </p>
              </>
            )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
