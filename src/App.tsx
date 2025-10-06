import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import TopNav from './components/TopNav'
import MobileDrawer from './components/MobileDrawer'
import Home from './pages/Home'
import AdminDashboard from './pages/admin/Dashboard'
import UserDashboard from './pages/colleague/Dashboard'
import RebatesPage from './pages/Rebates'
import QRPage from './pages/QR'
import TeamPage from './pages/Team'
import AuthPage from './pages/Auth'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <TopNav onOpenMenu={() => setMenuOpen(true)} />
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/rebates" element={<RebatesPage />} />
        <Route path="/qr" element={<QRPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="max-w-6xl mx-auto px-4 py-8 text-zinc-500 text-xs">
        MF Studios • Graphite/Blue Theme • © {new Date().getFullYear()}
      </footer>
    </div>
  )
}