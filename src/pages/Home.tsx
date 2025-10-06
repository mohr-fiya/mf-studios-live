import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="text-xl font-semibold">Admin</div>
          <p className="text-zinc-400 mt-2">Manage rebates, users, and QR campaigns.</p>
          <Link to="/admin" className="btn btn-primary mt-4">Go to Admin</Link>
        </div>
        <div className="card p-6">
          <div className="text-xl font-semibold">Colleague</div>
          <p className="text-zinc-400 mt-2">View available rebates and track redemptions.</p>
          <Link to="/user" className="btn btn-primary mt-4">Go to Colleague</Link>
        </div>
      </div>
    </div>
  )
}