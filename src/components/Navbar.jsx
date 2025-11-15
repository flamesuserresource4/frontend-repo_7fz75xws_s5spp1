import { Link, useLocation } from 'react-router-dom'
import { Shield, Bot, Settings, Lock, MessageCircleQuestion, Gauge, Scale, Home, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const link = (to, label, Icon) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
        pathname === to ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-navy/40 bg-navy/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <div className="p-2 rounded-md bg-gradient-to-br from-blue-500/70 to-cyan-400/70 shadow-lg shadow-cyan-500/20">
            <Shield size={18} />
          </div>
          <span className="font-semibold tracking-wide">AFSA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {link('/', 'Home', Home)}
          {link('/timeline', 'Fraud Timeline', Gauge)}
          {link('/legal', 'Legal Automation', Scale)}
          {link('/dashboard', 'Dashboard', Bot)}
          {link('/settings', 'Settings', Settings)}
          {link('/security', 'Security', Lock)}
          {link('/contact', 'Support', MessageCircleQuestion)}
        </nav>

        <button className="md:hidden text-white/90" onClick={() => setOpen(v => !v)}>
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-navy/80">
          <div className="px-4 py-3 flex flex-col gap-1">
            {link('/', 'Home', Home)}
            {link('/timeline', 'Fraud Timeline', Gauge)}
            {link('/legal', 'Legal Automation', Scale)}
            {link('/dashboard', 'Dashboard', Bot)}
            {link('/settings', 'Settings', Settings)}
            {link('/security', 'Security', Lock)}
            {link('/contact', 'Support', MessageCircleQuestion)}
          </div>
        </div>
      )}
    </header>
  )
}
