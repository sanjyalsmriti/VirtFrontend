import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { Note } from '../components/layout/Note'
import { CourseCards } from '../components/task2/CourseCards'

export default function Task2Screen() {
  return (
    <PageLayout>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginBottom: 'var(--space-lg)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-muted)',
        }}
      >
        ← Home
      </Link>
      <Note>Note: Click the cards to view the animation</Note>
      <p
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text)',
          marginBottom: 'var(--space-sm)',
        }}
      >
        Explore our classes and master trending skills!
      </p>
      <h1
        style={{
          fontSize: 'var(--text-2xl)',
          fontWeight: 700,
          marginBottom: 'var(--space-xl)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          flexWrap: 'wrap',
        }}
      >
        <span>Dive Into</span>
        <span style={{ color: 'var(--color-accent-teal)' }}>What&apos;s Hot Right Now!</span>
        <span aria-hidden>🔥</span>
      </h1>
      <CourseCards />
    </PageLayout>
  )
}
