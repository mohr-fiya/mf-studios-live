import React from 'react'
import StatCard from '../../components/StatCard'

export default function UserDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Available Rebates" value={3} sub="Today" />
        <StatCard title="My Redemptions" value={12} sub="This month" />
        <StatCard title="Pending" value={1} sub="Verification" />
        <StatCard title="Messages" value={4} sub="Unread" />
      </div>
      <div className="card p-6 mt-6">
        <div className="font-semibold">Welcome back 👋</div>
        <p className="text-zinc-400 text-sm mt-1">Follow your suggested itinerary or explore new deals.</p>
      </div>
    </div>
  )
}