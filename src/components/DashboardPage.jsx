import { Shield, CreditCard, Wallet, Lock, Activity, AlertTriangle } from 'lucide-react'
import { useEffect, useState } from 'react'

function StatusBox({ label, status }) {
  const color = status === 'Active' || status === 'Monitoring' || status === 'Protected' ? 'emerald' : 'red'
  const bg = color === 'emerald' ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300' : 'bg-red-500/15 border-red-400/30 text-red-300'
  return (
    <div className={`rounded-xl p-4 border ${bg}`}>
      <div className="text-sm text-white/70">{label}</div>
      <div className="text-lg font-medium">{status}</div>
    </div>
  )
}

export default function DashboardPage() {
  const [feed, setFeed] = useState([
    'Incoming SMS received → safe',
    'Unknown merchant detected',
    'Potential phishing attempt detected',
    'Freeze triggered: UPI channel offline temporarily',
    'Complaint drafted',
  ])
  const [risk, setRisk] = useState(22)
  const [saved, setSaved] = useState(34900)

  useEffect(() => {
    const id = setInterval(() => {
      setRisk(r => Math.min(100, Math.max(0, r + (Math.random() * 8 - 4))))
      setSaved(s => s + Math.floor(Math.random() * 120))
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="min-h-screen bg-navy pt-20 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatusBox label="UPI" status="Active" />
            <StatusBox label="Cards" status="Blocked" />
            <StatusBox label="Netbanking" status="Monitoring" />
            <StatusBox label="Wallets" status="Protected" />
          </div>

          <div className="rounded-xl p-4 border border-white/10 bg-white/5 min-h-[220px]">
            <div className="text-sm text-white/70 mb-2">Live Console</div>
            <div className="space-y-2 font-mono text-sm max-h-56 overflow-auto pr-2">
              {feed.map((l, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-1 rounded-full bg-cyan-400" />
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl p-5 border border-white/10 bg-white/5">
            <div className="text-sm text-white/70">Financial Risk Score</div>
            <div className="mt-3 flex items-center justify-center">
              <Gauge value={risk} />
            </div>
            <div className="text-center mt-2 text-white/80">Calculated from transactions, SMS patterns, device signals</div>
          </div>

          <div className="rounded-xl p-5 border border-white/10 bg-white/5">
            <div className="text-sm text-white/70">Money Saved</div>
            <div className="mt-2 text-3xl font-semibold">₹{saved.toLocaleString()}</div>
            <div className="text-white/60 text-sm">from fraud attempts</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Gauge({ value }) {
  const clamp = Math.max(0, Math.min(100, Math.round(value)))
  const color = clamp < 40 ? '#10B981' : clamp < 70 ? '#F59E0B' : '#EF4444'
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const progress = (clamp / 100) * circumference

  return (
    <svg width="180" height="120" viewBox="0 0 180 120">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <path d="M20,100 A80,80 0 0,1 160,100" fill="none" stroke="#0B1220" strokeWidth="16" strokeLinecap="round" />
      <path d="M20,100 A80,80 0 0,1 160,100" fill="none" stroke="#1f2937" strokeWidth="12" strokeLinecap="round" />
      <path d="M20,100 A80,80 0 0,1 160,100" fill="none" stroke={color} strokeWidth="12" strokeDasharray={`${circumference}`} strokeDashoffset={`${circumference - progress}`} strokeLinecap="round" />
      <text x="90" y="95" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="700">{clamp}</text>
      <text x="90" y="112" textAnchor="middle" fill="#9CA3AF" fontSize="12">0–40 Safe • 40–70 Med • 70–100 High</text>
    </svg>
  )
}
