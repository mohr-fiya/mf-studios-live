import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import React from 'react'

export default function TopNav({ onOpenMenu }: { onOpenMenu: () => void }) {
  const navCls = ({ isActive }: { isActive: boolean }) =>
    'navlink ' + (isActive ? 'navlink-active' : '')

  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-graphite-900/80 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onOpenMenu} className="md:hidden btn btn-ghost -ml-2">
            <Menu className="w-5 h-5" />
          </button>
          <Link to="/" className="text-lg font-semibold">MF Studios</Link>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink className={navCls} to="/admin">Admin</NavLink>
          <NavLink className={navCls} to="/user">Colleague</NavLink>
          <NavLink className={navCls} to="/rebates">Rebates</NavLink>
          <NavLink className={navCls} to="/qr">QR Codes</NavLink>
          <NavLink className={navCls} to="/team">Team</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden md:inline text-sm text-zinc-400">⌘K</span>
        </div>
      </div>
    </div>
  )
}