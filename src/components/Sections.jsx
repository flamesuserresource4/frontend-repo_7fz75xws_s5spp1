import { Shield, Bot, Lock, Zap, Timeline, FileText, CheckCircle2 } from 'lucide-react'

export function Response15s() {
  const steps = [
    { label: 'Fraud', icon: Zap },
    { label: 'Detected', icon: Bot },
    { label: 'Frozen', icon: Lock },
    { label: 'Complaint Drafted', icon: FileText },
    { label: 'Recovery Started', icon: CheckCircle2 },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-navy/80 to-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl font-semibold">15-Second Autonomous Response</h2>
        <p className="text-white/70 mt-2">AFSA responds faster than any bank or human.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((s, i) => (
            <div key={i} className="relative p-4 rounded-lg border border-white/10 bg-white/5 text-white/90">
              <div className="flex items-center gap-2">
                <s.icon size={18} className="text-cyan-300" />
                <span className="font-medium">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-400/60 to-orange-400/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeatureGrid() {
  const features = [
    { title: 'Monitor', desc: 'Reads SMS alerts, UPI requests, bank messages', icon: Shield },
    { title: 'Detect', desc: 'AI detects suspicious patterns instantly', icon: Bot },
    { title: 'Freeze', desc: 'Temporarily freezes UPI or card when required', icon: Lock },
    { title: 'Investigate', desc: 'Builds a fraud timeline for the user', icon: Timeline },
    { title: 'Recover', desc: 'Prepares complaint + RBI letter automatically', icon: FileText },
    { title: 'Learn', desc: 'Self-improves from user behavior patterns', icon: CheckCircle2 },
  ]

  return (
    <section className="py-16 bg-navy">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl font-semibold">How it Works</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl p-5 border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition">
              <div className="flex items-center gap-2">
                <f.icon className="text-cyan-300" size={20} />
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="text-white/70 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LiveDemo({ onRun }) {
  return (
    <section className="py-16 bg-gradient-to-b from-navy to-navy/95">
      <div className="max-w-7xl mx-auto px-4 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Live Demo</h2>
          <button onClick={onRun} className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:brightness-105 transition">
            Run Simulation
          </button>
        </div>
        <p className="text-white/70 mt-2">Watch AFSA react step-by-step to real-world fraud attempts.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {['UPI scam', 'Phishing OTP attempt', 'Fake loan refund'].map((t,i) => (
            <div key={i} className="rounded-xl p-4 border border-white/10 bg-white/5">
              <p className="font-medium">{t}</p>
              <p className="text-white/70 text-sm">Click Run to simulate AFSA response.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
