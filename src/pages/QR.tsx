import React, { useRef, useState } from 'react'
import QRCode from 'qrcode'

export default function QRPage() {
  const [text, setText] = useState('https://mfstudios.example.com/promo')
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const generate = async () => {
    if (!canvasRef.current) return
    await QRCode.toCanvas(canvasRef.current, text, { width: 220, margin: 1, color: { dark: '#ffffff', light: '#1E1E1E' } })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="text-xl font-semibold">QR Codes</div>
      <div className="card p-5 mt-4">
        <label className="text-sm text-zinc-400">Target URL or Text</label>
        <input className="input mt-2 w-full" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter URL" />
        <button className="btn btn-primary mt-3" onClick={generate}>Generate</button>
        <div className="mt-4">
          <canvas ref={canvasRef} className="bg-graphite-700 rounded-xl p-2"></canvas>
        </div>
      </div>
    </div>
  )
}