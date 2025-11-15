import { Mail, Phone, MessageCircleQuestion } from 'lucide-react'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-navy pt-20 text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">Contact & Support</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form className="rounded-xl p-5 border border-white/10 bg-white/5 space-y-3">
            <input placeholder="Your name" className="w-full bg-white/10 border border-white/10 rounded p-2" />
            <input placeholder="Email" className="w-full bg-white/10 border border-white/10 rounded p-2" />
            <textarea placeholder="How can we help?" rows={5} className="w-full bg-white/10 border border-white/10 rounded p-2" />
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white">Send</button>
          </form>

          <div className="rounded-xl p-5 border border-white/10 bg-white/5 space-y-3">
            <div className="flex items-center gap-2"><Mail className="text-cyan-300" /> support@afsa.ai</div>
            <div className="flex items-center gap-2"><Phone className="text-cyan-300" /> Emergency Hotline</div>
            <div className="flex items-center gap-2"><MessageCircleQuestion className="text-cyan-300" /> FAQ</div>
          </div>
        </div>
      </div>
    </div>
  )
}
