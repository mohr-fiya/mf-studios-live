import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

type Member = { id: string; email: string; role: string }

export default function TeamPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('member')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase.from('team_members').select('id,email,role').limit(100)
        if (error) throw error
        setMembers(data || [])
      } catch (e:any) {
        setError('Using demo data (connect Supabase to load real members).')
        setMembers([
          { id: '1', email: 'owner@mfstudios.com', role: 'owner' },
          { id: '2', email: 'admin@mfstudios.com', role: 'admin' },
        ])
      }
    })()
  }, [])

  const invite = async () => {
    // In a real app, call your serverless function to send invite emails via Supabase/SendGrid
    alert(`Invite sent to ${email} as ${role}`)
    setEmail('')
    setRole('member')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="text-xl font-semibold">Team</div>
      {error && <div className="text-sm text-zinc-400 mt-2">{error}</div>}
      <div className="card p-5 mt-4">
        <div className="font-medium">Invite Member</div>
        <div className="mt-3 grid md:grid-cols-3 gap-2">
          <input className="input w-full" placeholder="email@domain.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <select className="input w-full" value={role} onChange={(e)=>setRole(e.target.value)}>
            <option value="member">Member</option>
            <option value="admin">Admin</option>
            <option value="owner">Owner</option>
          </select>
          <button className="btn btn-primary" onClick={invite}>Send Invite</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3 mt-4">
        {members.map(m => (
          <div key={m.id} className="card p-4 flex items-center justify-between">
            <div>
              <div className="font-medium">{m.email}</div>
              <div className="text-xs text-zinc-500 mt-1">Role: {m.role}</div>
            </div>
            <button className="btn btn-ghost">Manage</button>
          </div>
        ))}
      </div>
    </div>
  )
}