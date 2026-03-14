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
    image: '/assets/person_1.png',
    imagePosition: 'left',
    showWowBubbles: true,
    carouselSlides: [
      {
        layout: 'imageLeft',
        title: 'Clarity unlocked—\nstickers, sips, and skills\nall in one go!',
        image: '/assets/person_3.png',
        titleClassName: 'journey-card__carousel-title--right',
        imageClassName: 'journey-card__carousel-image--overflow-bottom',
      },
    ],
  },
  {
    id: 'doing',
    title: 'Learn by Doing',
    subtitle: 'Practical skills, real projects.',
    body: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    bgColor: 'var(--color-card-teal)',
    image: '/assets/person_2.png',
    imagePosition: 'right',
    carouselSlides: [
      { title: 'Focused faces—\nlearning mode: ON!', image: '/assets/person_2.png' },
      { title: 'Hands-on projects,\nreal skills.', image: '/assets/person_2.png' },
    ],
  },
  {
    id: 'mentored',
    title: 'Get Mentored & Supported',
    subtitle: "You're not learning alone.",
    body: "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
    bgColor: 'var(--color-card-purple)',
    image: '/assets/person_11.png',
    imagePosition: 'left',
    carouselSlides: [
      { title: "Mentors & peers—\nyou're not alone.", image: '/assets/person_11.png' },
      { title: 'Live support\nwhen you need it.', image: '/assets/person_11.png' },
    ],
  },
  {
    id: 'achieve',
    title: 'Achieve & Showcase',
    subtitle: 'Build your portfolio, get job-ready.',
    body: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    bgColor: 'var(--color-card-tan)',
    image: '/assets/person_22.png',
    imagePosition: 'right',
    carouselSlides: [
      { title: 'Build your portfolio,\nget job-ready.', image: '/assets/person_22.png' },
      { title: 'Showcase skills.\nLand the role.', image: '/assets/person_22.png' },
    ],
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
          fontSize: 'var(--text-3xl)',
          fontWeight: 700,
          marginBottom: 'var(--space-lg)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ color: 'var(--color-text)' }}>Step In.</span>
        <span style={{ color: 'var(--color-tagline-green)' }}>Skill Up.</span>
        <span style={{ color: 'var(--color-text)' }}>Stand Out.</span>
        <span aria-hidden>🚀</span>
      </h1>
      <div
        className="journey-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          maxWidth: 960,
          margin: '0 auto',
        }}
      >
        {JOURNEY_CARDS.map((card, index) => (
          <JourneyCard key={card.id} {...card} enableHoverAnimation={index < 2} showWowBubbles={card.showWowBubbles} />
        ))}
      </div>
    </PageLayout>
  )
}
