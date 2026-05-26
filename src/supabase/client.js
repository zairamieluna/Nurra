/**
 * supabase/client.js — Supabase client singleton
 *
 * Import this wherever you need to talk to Supabase:
 *   import { supabase } from '@supabase/client'
 *
 * Environment variables live in .env.local (never commit that file).
 * See .env.example for the required variable names.
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    '🚨 Missing Supabase credentials.\n' +
    'Copy .env.example → .env.local and fill in your Supabase URL and anon key.\n' +
    'Find them at: https://supabase.com → your project → Settings → API'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Persist login across page refreshes
    persistSession: true,
    // Automatically refresh tokens
    autoRefreshToken: true,
    // Read/write session from localStorage
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
})
