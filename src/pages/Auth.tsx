import React from 'react'
import { supabase } from '../supabaseClient'

export default function AuthPage() {
  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    })
  }
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="card p-6 max-w-sm w-full text-center">
        <div className="text-xl font-semibold">Sign in</div>
        <p className="text-sm text-zinc-400 mt-1">Use your Google account</p>
        <button className="btn btn-primary mt-4 w-full" onClick={signIn}>Continue with Google</button>
      </div>
    </div>
  )
}