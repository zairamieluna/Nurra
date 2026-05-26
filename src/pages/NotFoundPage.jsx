/**
 * pages/NotFoundPage.jsx — 404 page
 */
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-warm-white">
      <div className="text-center p-8">
        <p className="text-terracotta font-display text-8xl font-light mb-4">404</p>
        <h1 className="text-ink text-2xl font-display mb-2">Page not found</h1>
        <p className="text-ink-muted mb-8">This page doesn't exist — but Nurra does. 🌸</p>
        <Link
          to="/"
          className="bg-terracotta text-white px-6 py-3 rounded-full text-sm font-medium
                     hover:bg-terracotta-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
