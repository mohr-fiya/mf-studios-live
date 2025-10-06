import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

type Rebate = { id: string; title: string; amount: number; status: 'draft'|'active'|'archived' }

export default function RebatesPage() {
  const [rebates, setRebates] = useState<Rebate[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase.from('rebates').select('id,title,amount,status').limit(50)
        if (error) throw error
        setRebates(data || [])
      } catch (e) {
        // Fallback demo data
        setRebates([
          { id: 'rb1', title: 'New Customer Bonus', amount: 25, status: 'active' },
          { id: 'rb2', title: 'Holiday Promo', amount: 15, status: 'draft' },
          { id: 'rb3', title: 'Loyalty Cashback', amount: 10, status: 'active' }
        ])
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">Rebates</div>
        <button className="btn btn-primary">Create Rebate</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {loading ? <div className="text-zinc-400">Loading…</div> : rebates.map(r => (
          <div key={r.id} className="card p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">{r.title}</div>
              <div className="text-sm text-zinc-400">${r.amount}</div>
            </div>
            <div className="text-xs text-zinc-500 mt-1">Status: {r.status}</div>
            <div className="mt-3 flex gap-2">
              <button className="btn btn-ghost">Edit</button>
              <button className="btn btn-primary">Activate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}