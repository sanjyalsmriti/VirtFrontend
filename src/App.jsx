import { Routes, Route, Link } from 'react-router-dom'
import Task1Screen from './pages/Task1Screen'
import Task2Screen from './pages/Task2Screen'

function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem' }}>Virt</h1>
      <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="/task1">Task 1 — Your SkillShikshya Journey</Link>
        <Link to="/task2">Task 2 — Dive Into What&apos;s Hot</Link>
      </nav>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task1" element={<Task1Screen />} />
      <Route path="/task2" element={<Task2Screen />} />
    </Routes>
  )
}
