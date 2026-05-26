/**
 * hooks/useWaitlist.js — Waitlist form logic
 *
 * Encapsulates all state and submission logic for the waitlist form.
 * Import and use in any component that needs a waitlist form.
 *
 * Usage:
 *   const { formData, status, handleChange, handleSubmit } = useWaitlist()
 */

import { useState } from 'react'
import { joinWaitlist } from '@supabase/queries'

const INITIAL_FORM = {
  firstName:    '',
  lastName:     '',
  email:        '',
  city:         '',
  journeyStage: '',
}

export function useWaitlist() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [status, setStatus]   = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [error,  setError]    = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing again
    if (error) setError(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!formData.email || !formData.firstName) {
      setError('Please enter your first name and email address.')
      return
    }

    setStatus('loading')
    setError(null)

    try {
      await joinWaitlist(formData)
      setStatus('success')
      setFormData(INITIAL_FORM)
    } catch (err) {
      console.error('Waitlist submission error:', err)
      // Handle duplicate email gracefully
      if (err.code === '23505') {
        setError('This email is already on the waitlist! 🌸 We\'ll be in touch soon.')
      } else {
        setError('Something went wrong. Please try again in a moment.')
      }
      setStatus('error')
    }
  }

  return { formData, status, error, handleChange, handleSubmit }
}
