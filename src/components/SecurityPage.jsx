import { Shield, Lock, Database, FileLock2, Cpu, KeyRound } from 'lucide-react'

export default function SecurityPage() {
  const items = [
    { icon: Lock, title: 'AES-256 Encryption', desc: 'All sensitive data encrypted at rest and in transit.' },
    { icon: Shield, title: 'Zero Data Sharing', desc: 'Your data is never sold or shared with third parties.' },
    { icon: Cpu, title: 'On-device scanning', desc: 'Optional client-side parsing for maximum privacy.' },
    { icon: Database, title: 'RBI-compliant Logs', desc: 'Retention and access policies aligned with guidelines.' },
    { icon: FileLock2, title: 'Tamper-proof Evidence', desc: 'Signed bundles for legal-grade integrity.' },
    { icon: KeyRound, title: 'Least-Privilege Access', desc: 'Segregated services with rotating credentials.' },
  ]

  return (
    <div className="min-h-screen bg-navy pt-20 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">Security</h1>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl p-5 border border-white/10 bg-white/5">
              <it.icon className="text-cyan-300" />
              <div className="mt-3 font-medium">{it.title}</div>
              <div className="text-white/70 text-sm">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
