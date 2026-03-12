import { Link } from 'react-router-dom'
import { PageLayout } from '../components/layout/PageLayout'
import { Note } from '../components/layout/Note'
import { JourneyCard } from '../components/task1/JourneyCard'

const JOURNEY_CARDS = [
  {
    id: 'clarity',
    title: 'Start with Clarity',
    subtitle: 'Step into a better learning path.',
    body: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    bgColor: 'var(--color-card-red)',
  },
  {
    id: 'doing',
    title: 'Learn by Doing',
    subtitle: 'Practical skills, real projects.',
    body: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    bgColor: 'var(--color-card-teal)',
  },
  {
    id: 'mentored',
    title: 'Get Mentored & Supported',
    subtitle: "You're not learning alone.",
    body: "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
    bgColor: 'var(--color-card-purple)',
  },
  {
    id: 'achieve',
    title: 'Achieve & Showcase',
    subtitle: 'Build your portfolio, get job-ready.',
    body: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    bgColor: 'var(--color-card-tan)',
  },
]

export default function Task1Screen() {
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
      <Note>Note: Hover the component to view the animation &amp; Click the arrow icon</Note>
      <p
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-muted)',
          marginBottom: 'var(--space-sm)',
        }}
      >
        Your SkillShikshya Journey
      </p>
      <h1
        style={{
          fontSize: 'var(--text-2xl)',
          fontWeight: 700,
          marginBottom: 'var(--space-md)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ color: 'var(--color-tagline-green)' }}>Step In.</span>
        <span>Skill Up.</span>
        <span style={{ color: 'var(--color-tagline-green)' }}>Stand Out.</span>
        <span aria-hidden>🚀</span>
      </h1>
      <div
        className="journey-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--space-lg)',
        }}
      >
        {JOURNEY_CARDS.map((card) => (
          <JourneyCard key={card.id} {...card} />
        ))}
      </div>
    </PageLayout>
  )
}
