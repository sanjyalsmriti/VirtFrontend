import { useState } from 'react'

const ALL_COURSES = {
  count: 23,
  title: 'All Courses',
  description: "courses you're powering through right now.",
  linkText: 'View all Courses →',
}

const UPCOMING = {
  count: 5,
  title: 'Upcoming Courses',
  description: 'exciting new courses waiting to boost your skills.',
}

const ONGOING = {
  count: 10,
  title: 'Ongoing Courses',
  description: "currently happening—don't miss out on the action!",
}

export function CourseCards() {
  const [hovered, setHovered] = useState(null)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto auto',
        gap: 'var(--space-lg)',
        alignItems: 'stretch',
      }}
      className="course-cards"
    >
      {/* Main red card */}
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={() => setHovered('all')}
        onMouseLeave={() => setHovered(null)}
        onKeyDown={(e) => e.key === 'Enter' && setHovered((v) => (v === 'all' ? null : 'all'))}
        style={{
          backgroundColor: 'var(--color-primary-red)',
          color: '#fff',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)',
          minHeight: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: hovered === 'all' ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.2s ease',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-sm)',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <img src="/assets/react.png" alt="" aria-hidden style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <img src="/assets/like_love.png" alt="" aria-hidden style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <img src="/assets/vue.js.png" alt="" aria-hidden style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <img src="/assets/pen.png" alt="" aria-hidden style={{ width: 28, height: 28, objectFit: 'contain' }} />
          </div>
          <a
            href="#"
            style={{ color: '#fff', fontWeight: 600, fontSize: 'var(--text-sm)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {ALL_COURSES.linkText}
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-md)',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>
            {ALL_COURSES.count}
            <span style={{ fontSize: 'var(--text-xl)', fontWeight: 600 }}>+</span>
          </span>
          <div>
            <p style={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}>{ALL_COURSES.title}</p>
            <p style={{ fontSize: 'var(--text-sm)', opacity: 0.9 }}>{ALL_COURSES.description}</p>
          </div>
        </div>
      </div>

      {/* Upcoming - vertical text */}
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={() => setHovered('upcoming')}
        onMouseLeave={() => setHovered(null)}
        style={{
          backgroundColor: 'var(--color-card-light-pink)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-lg)',
          minWidth: 140,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          transform: hovered === 'upcoming' ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.2s ease',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            writingMode: 'vertical-rl',
            textAlign: 'left',
            transform: 'rotate(180deg)',
            marginBottom: 'var(--space-md)',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: 'var(--color-primary-red)',
              fontSize: 'var(--text-base)',
            }}
          >
            {UPCOMING.title}
          </p>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
              marginTop: 'var(--space-xs)',
            }}
          >
            {UPCOMING.description}
          </p>
        </div>
        <p
          style={{
            fontWeight: 700,
            color: 'var(--color-primary-red)',
            fontSize: 'var(--text-2xl)',
          }}
        >
          {String(UPCOMING.count).padStart(2, '0')}+
        </p>
      </div>

      {/* Ongoing - vertical text */}
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={() => setHovered('ongoing')}
        onMouseLeave={() => setHovered(null)}
        style={{
          backgroundColor: 'var(--color-card-light-pink)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-lg)',
          minWidth: 140,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          transform: hovered === 'ongoing' ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.2s ease',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            writingMode: 'vertical-rl',
            textAlign: 'left',
            transform: 'rotate(180deg)',
            marginBottom: 'var(--space-md)',
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: 'var(--color-primary-red)',
              fontSize: 'var(--text-base)',
            }}
          >
            {ONGOING.title}
          </p>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
              marginTop: 'var(--space-xs)',
            }}
          >
            {ONGOING.description}
          </p>
        </div>
        <p
          style={{
            fontWeight: 700,
            color: 'var(--color-primary-red)',
            fontSize: 'var(--text-2xl)',
          }}
        >
          {String(ONGOING.count).padStart(2, '0')}+
        </p>
      </div>
    </div>
  )
}
