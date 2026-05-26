/**
 * lib/utils.js — General utility functions
 *
 * Small, reusable helpers used across the app.
 */

/**
 * Combine class names conditionally (lightweight cn() utility).
 * Similar to the popular `clsx` library.
 *
 * Usage:
 *   cn('base-class', isActive && 'active', variant === 'primary' && 'text-white')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Delay execution for a given number of milliseconds.
 * Useful for simulating async operations in development.
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Format a date into a human-readable string.
 */
export function formatDate(date, locale = 'en-CA') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'long', day: 'numeric',
  }).format(new Date(date))
}

/**
 * Truncate a string to a max length, adding ellipsis if needed.
 */
export function truncate(str, maxLength = 100) {
  if (!str || str.length <= maxLength) return str
  return str.slice(0, maxLength).trimEnd() + '…'
}

/**
 * Simple email format validator.
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
