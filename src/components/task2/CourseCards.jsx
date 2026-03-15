import { useState, useEffect } from 'react'

const ALL_COURSES = {
  id: 'all',
  count: 23,
  title: 'All Courses',
  description: "courses you're powering \n through right now.",
}

const UPCOMING = {
  id: 'upcoming',
  count: "05",
  title: "Upcoming \n Courses",
  description: "exciting new courses \n waiting to boost your skills.",
}

const ONGOING = {
  id: 'ongoing',
  count: 10,
  title: 'Ongoing \n Courses',
  description: "currently happening—don't \n miss out on the action!",
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
              backgroundColor: isActive ? 'var(--Secondary-500)' : 'var(--Secondary-50)',
              color: isActive ? '#fff' : 'inherit',
              borderRadius: 'var(--course-card-radius)',
              padding: 'var(--course-card-padding-block) var(--course-card-padding-inline)',
              width: isActive ? 'var(--course-card-active-width)' : 'var(--course-card-passive-width)',
              flexShrink: 0,
              height: 'var(--course-card-passive-height)',
              minWidth: isActive ? 'var(--course-card-active-width)' : 'var(--course-card-passive-width)',
              minHeight: 'var(--course-card-passive-height)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: isActive ? 'space-between' : 'flex-end',
              cursor: 'pointer',
              position: 'relative',
              transition: isJustActivated ? 'none' : isActive ? 'color 0.3s ease, width 0.45s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.45s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s ease' : 'none',
            }}
          >
            {!isActive && (
              <div className="course-card__hover-prompt" aria-hidden>
                <span className="course-card__hover-prompt-text">Click me!</span>
                <img src="/assets/clickme.png" alt="" className="course-card__hover-prompt-img" />
              </div>
            )}
            <div className="course-card__content" style={{ display: 'flex', flexDirection: 'column', justifyContent: isActive ? 'space-between' : undefined, alignItems: isActive ? 'stretch' : undefined, flex: 1, minHeight: 0 }}>
            {isActive ? (
              <>
                <a
                  href="#"
                  className="course-card__link course-card__content-movable"
                  onClick={(e) => e.stopPropagation()}
                >
                  View all Courses{' '}
                  <span className="course-card__arrow" aria-hidden>→</span>
                </a>
                <div className="course-card__icons course-card__content-movable">
                  <img src="/assets/react.png" alt="" aria-hidden />
                  <img src="/assets/like_love.png" alt="" aria-hidden />
                  <img src="/assets/vue.js.png" alt="" aria-hidden />
                  <img src="/assets/pen.png" alt="" aria-hidden />
                </div>
                <div className="course-card__bottom" style={{ display: 'flex',alignItems: 'center' }}>
                  <span className="course-card__count-wrap" style={{ color: 'var(--course-card-active-text)' }}>
                    <span className="course-card__count">{card.count}</span>
                    <span className="course-card__count-plus">+</span>
                  </span>
                  {isActive && (
                    <div className="course-card__title-desc course-card__content-movable">
                      <p className="course-card__title-text">{card.title}</p>
                      <p>{card.description}</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="course-card__inactive-vertical-wrap">
                  <div className="course-card__inactive-vertical-text">
                    <p className="course-card__inactive-title">{card.title}</p>
                    <p className="course-card__inactive-desc">{card.description}</p>
                  </div>
                </div>
                <span className="course-card__count-wrap" style={{ color: 'var(--Secondary-500)' }}>
                  <span className="course-card__count">{String(card.count).padStart(2, '0')}</span>
                  <span className="course-card__count-plus">+</span>
                </span>
              </>
            )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
