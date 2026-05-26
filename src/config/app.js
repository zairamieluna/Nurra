/**
 * config/app.js — Global app configuration
 *
 * Centralizes app-wide settings so they're easy to find and update.
 * All environment variables are read from .env via import.meta.env.
 */

export const APP_CONFIG = {
  name:        'Nurra',
  tagline:     'Postpartum care, reimagined for Canada.',
  url:         import.meta.env.VITE_APP_URL        || 'https://nurra.ca',
  supportEmail:'hello@nurra.ca',
  instagram:   'https://instagram.com/nurra.ca',
  tiktok:      'https://tiktok.com/@nurra.ca',
}

export const ROUTES = {
  home:      '/',
  about:     '/about',
  dashboard: '/dashboard',
  login:     '/login',
  signup:    '/signup',
}

export const FEATURE_FLAGS = {
  waitlistEnabled:   true,
  blogEnabled:       false,
  dashboardEnabled:  false,
}
