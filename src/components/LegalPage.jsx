import { FileText, Send, Download, Eye } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function LegalPage() {
  const [docs, setDocs] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/legal-docs`).then(r => r.json()).then(d => setDocs(d.docs || []))
  }, [])

  return (
    <div className="min-h-screen bg-navy pt-20 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">AI Legal Agent</h1>
        <p className="text-white/70 mt-2">Automated documents ready for escalation.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {docs.map((d) => (
            <div key={d.id} className="rounded-xl p-4 border border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <FileText className="text-cyan-300" />
                <div>
                  <div className="font-medium">{d.title}</div>
                  <div className="text-xs text-white/60">{d.purpose}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1.5 rounded-md bg-white/10 border border-white/10 flex items-center gap-1"><Eye size={16}/> Preview</button>
                <button className="px-3 py-1.5 rounded-md bg-white/10 border border-white/10 flex items-center gap-1"><Download size={16}/> Download</button>
                <button className="px-3 py-1.5 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center gap-1"><Send size={16}/> Send</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
