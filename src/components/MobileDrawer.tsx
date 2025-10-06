import React from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MobileDrawer({ open, onClose }: { open: boolean, onClose: () => void }) {
  return (
    <div className={"fixed inset-0 z-50 " + (open ? '' : 'pointer-events-none')}>
      <div className={"absolute inset-0 bg-black/50 transition " + (open ? 'opacity-100' : 'opacity-0')} onClick={onClose}></div>
      <div className={"absolute top-0 left-0 h-full w-72 bg-graphite-800 border-r border-zinc-800 p-4 transition-transform " + (open ? 'translate-x-0' : '-translate-x-full')}>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">MF Studios</div>
          <button className="btn btn-ghost" onClick={onClose}><X className="w-5 h-5" /></button>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <Link to="/admin" onClick={onClose} className="navlink">Admin</Link>
          <Link to="/user" onClick={onClose} className="navlink">Colleague</Link>
          <Link to="/rebates" onClick={onClose} className="navlink">Rebates</Link>
          <Link to="/qr" onClick={onClose} className="navlink">QR Codes</Link>
          <Link to="/team" onClick={onClose} className="navlink">Team</Link>
        </div>
      </div>
    </div>
  )
}