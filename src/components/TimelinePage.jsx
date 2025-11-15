import { Clock8, ShieldCheck, Lock, FileText, PackageCheck } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function TimelinePage() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/timeline`).then(r => r.json()).then(d => setItems(d.items || []))
  }, [])

  const iconFor = (title) => {
    if (title.includes('Fraud request')) return Clock8
    if (title.includes('detected')) return ShieldCheck
    if (title.includes('frozen')) return Lock
    if (title.includes('Complaint')) return FileText
    return PackageCheck
  }

  return (
    <div className="min-h-screen bg-navy pt-20 text-white">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">Fraud Reconstruction Timeline</h1>
        <div className="mt-8 relative border-l border-white/15 pl-6">
          {items.map((it, idx) => {
            const Icon = iconFor(it.title || '')
            return (
              <div key={idx} className="mb-8">
                <div className="absolute -left-3.5 mt-1 w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                  <Icon size={16} className="text-cyan-300" />
                </div>
                <div className="text-sm text-white/60">{it.time}</div>
                <div className="font-medium">{it.title}</div>
                {it.data && (
                  <pre className="mt-2 bg-white/5 border border-white/10 rounded p-3 text-xs text-white/80 overflow-auto">{JSON.stringify(it.data, null, 2)}</pre>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
