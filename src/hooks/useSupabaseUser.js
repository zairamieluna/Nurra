/**
 * hooks/useSupabaseUser.js — Reactive auth session hook
 *
 * Returns the current Supabase user and loading state.
 * Listens for auth changes (login, logout, token refresh).
 *
 * Usage:
 *   const { user, loading } = useSupabaseUser()
 */

import { useEffect, useState } from 'react'
import { supabase } from '@supabase/client'

export function useSupabaseUser() {
  const [user,    setUser]    = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return { user, loading, isLoggedIn: !!user }
}
