/**
 * supabase/queries.js — Reusable database query functions
 *
 * Keep all Supabase calls here instead of scattering them across components.
 * This makes it easy to change queries in one place.
 *
 * Usage:
 *   import { joinWaitlist, getWaitlistCount } from '@supabase/queries'
 */

import { supabase } from './client'

// ─── WAITLIST ─────────────────────────────────────────────────────────────

/**
 * Add a new email to the Nurra waitlist.
 * Requires a `waitlist` table in Supabase with columns:
 *   id, email, first_name, last_name, city, journey_stage, created_at
 */
export async function joinWaitlist({ email, firstName, lastName, city, journeyStage }) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{
      email,
      first_name:     firstName,
      last_name:      lastName  || null,
      city:           city      || null,
      journey_stage:  journeyStage || null,
    }])
    .select()
    .single()

  if (error) throw error
  return data
}

/**
 * Get total count of waitlist signups (for social proof display).
 */
export async function getWaitlistCount() {
  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })

  if (error) throw error
  return count ?? 0
}

// ─── AUTH ─────────────────────────────────────────────────────────────────

/**
 * Sign up a new user with email + password.
 */
export async function signUp({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  })
  if (error) throw error
  return data
}

/**
 * Sign in an existing user.
 */
export async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

/**
 * Sign out the current user.
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

/**
 * Get the currently logged-in user (or null).
 */
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}
