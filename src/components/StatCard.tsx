import React from 'react'

export default function StatCard({ title, value, sub }: { title: string, value: string | number, sub?: string }) {
  return (
    <div className="card p-4">
      <div className="text-sm text-zinc-400">{title}</div>
      <div className="text-3xl font-semibold mt-1">{value}</div>
      {sub && <div className="text-xs text-zinc-500 mt-1">{sub}</div>}
    </div>
  )
}