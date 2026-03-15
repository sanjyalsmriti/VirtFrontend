import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { Note } from '../components/layout/Note'
import { CourseCards } from '../components/task2/CourseCards'

export default function Task2Screen() {
  return (
    <PageLayout>
      <Link to="/" className="page-back-link">← Home</Link>
      <Note>Note: Click the cards to view the animation</Note>
      <p className="page-subtitle page-subtitle--dark">Explore our classes and master trending skills!</p>
      <h1 className="page-title">
        <span>Dive Into</span>
        <span style={{ color: 'var(--color-accent-teal)' }}>What&apos;s Hot Right Now!</span>
        <span aria-hidden>🔥</span>
      </h1>
      <CourseCards />
    </PageLayout>
  )
}
