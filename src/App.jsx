import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Response15s, FeatureGrid, LiveDemo } from './components/Sections'
import TimelinePage from './components/TimelinePage'
import LegalPage from './components/LegalPage'
import DashboardPage from './components/DashboardPage'
import SettingsPage from './components/SettingsPage'
import SecurityPage from './components/SecurityPage'
import SupportPage from './components/SupportPage'

function Home() {
  const navigate = useNavigate()
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [events, setEvents] = useState([])

  const runSim = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/simulate`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) })
      const data = await res.json()
      setEvents(data)
      navigate('/dashboard')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <Hero onPrimary={() => navigate('/contact')} onSecondary={runSim} />
      <Response15s />
      <FeatureGrid />
      <LiveDemo onRun={runSim} />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/contact" element={<SupportPage />} />
    </Routes>
  )
}
