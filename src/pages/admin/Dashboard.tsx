import React from 'react'
import StatCard from '../../components/StatCard'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Rebate Programs" value={5} sub="Active" />
        <StatCard title="Active Colleagues" value={128} sub="Last 24h" />
        <StatCard title="QR Campaigns" value={12} sub="Running" />
        <StatCard title="Redemptions" value="2.1k" sub="MTD" />
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="card p-5">
          <div className="font-semibold">Rebates</div>
          <p className="text-zinc-400 text-sm mt-1">Create, edit, approve rebates.</p>
          <Link to="/rebates" className="btn btn-primary mt-3">Open</Link>
        </div>
        <div className="card p-5">
          <div className="font-semibold">QR Codes</div>
          <p className="text-zinc-400 text-sm mt-1">Generate and manage QR landing pages.</p>
          <Link to="/qr" className="btn btn-primary mt-3">Open</Link>
        </div>
        <div className="card p-5">
          <div className="font-semibold">Team</div>
          <p className="text-zinc-400 text-sm mt-1">Invite and manage teammates.</p>
          <Link to="/team" className="btn btn-primary mt-3">Open</Link>
        </div>
      </div>
    </div>
  )
}