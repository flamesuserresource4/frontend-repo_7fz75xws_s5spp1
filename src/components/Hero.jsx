import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy/80" />
        <div className="absolute inset-0 opacity-60">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(251,146,60,0.18),transparent_35%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight drop-shadow">
            AFSA — Autonomous Financial Shield Agent
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl">
            AI that detects fraud, freezes risky channels, and files complaints automatically.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onPrimary} className="px-5 py-3 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium shadow-lg shadow-orange-500/30 hover:brightness-105 transition">
              Get Early Access
            </button>
            <button onClick={onSecondary} className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10 transition">
              Run Fraud Simulation
            </button>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <p className="text-sm font-mono text-white/90">Monitoring… no threats detected.</p>
            <p className="text-sm font-mono text-white/90">New SMS analysed.</p>
            <p className="text-sm font-mono text-amber-300">Suspicious UPI intent detected.</p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm text-white/90 min-h-[200px] shadow-2xl shadow-cyan-500/10">
            <ConsoleFeed />
          </div>
        </div>
      </div>
    </section>
  )
}

function ConsoleFeed() {
  const lines = [
    'Initializing AFSA core…',
    'Telemetry online — SMS/UPI/Netbanking',
    'No active threats',
  ]
  return (
    <div className="space-y-2 text-sm font-mono">
      {lines.map((l, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
          <span>{l}</span>
        </div>
      ))}
    </div>
  )
}
