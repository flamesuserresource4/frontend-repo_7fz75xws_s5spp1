import { useState } from 'react'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    upi: true,
    cards: true,
    sms: true,
    aa: false,
    autofreeze: 'medium',
    channels: { email: true, sms: false, whatsapp: true },
    trusted: '',
    privacy: true,
  })

  const toggle = (key) => setSettings(s => ({ ...s, [key]: !s[key] }))

  return (
    <div className="min-h-screen bg-navy pt-20 text-white">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">Settings</h1>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-5 border border-white/10 bg-white/5">
            <div className="text-sm text-white/70 mb-3">Enable/Disable</div>
            {[
              ['UPI monitoring', 'upi'],
              ['Card monitoring', 'cards'],
              ['SMS parsing', 'sms'],
              ['AA monitoring', 'aa'],
            ].map(([label, key]) => (
              <label key={key} className="flex items-center justify-between py-2">
                <span>{label}</span>
                <input type="checkbox" checked={settings[key]} onChange={() => toggle(key)} />
              </label>
            ))}
          </div>

          <div className="rounded-xl p-5 border border-white/10 bg-white/5">
            <div className="text-sm text-white/70 mb-3">Auto-freeze</div>
            <select value={settings.autofreeze} onChange={(e) => setSettings(s => ({ ...s, autofreeze: e.target.value }))} className="w-full bg-white/10 border border-white/10 rounded p-2">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="aggressive">Aggressive</option>
            </select>

            <div className="text-sm text-white/70 mt-5 mb-2">Notifications</div>
            {[
              ['Email', 'email'],
              ['SMS', 'sms'],
              ['WhatsApp', 'whatsapp'],
            ].map(([label, key]) => (
              <label key={key} className="flex items-center justify-between py-2">
                <span>{label}</span>
                <input type="checkbox" checked={settings.channels[key]} onChange={() => setSettings(s => ({ ...s, channels: { ...s.channels, [key]: !s.channels[key] } }))} />
              </label>
            ))}
          </div>

          <div className="rounded-xl p-5 border border-white/10 bg-white/5 md:col-span-2">
            <div className="text-sm text-white/70 mb-2">Trusted merchants / beneficiaries</div>
            <textarea value={settings.trusted} onChange={(e) => setSettings(s => ({ ...s, trusted: e.target.value }))} rows={4} className="w-full bg-white/10 border border-white/10 rounded p-3" placeholder="Add one per line" />

            <label className="mt-4 flex items-center gap-2">
              <input type="checkbox" checked={settings.privacy} onChange={() => toggle('privacy')} />
              <span className="text-white/80">Enable enhanced privacy mode</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
