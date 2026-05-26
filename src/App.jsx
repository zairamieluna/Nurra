import { Routes, Route } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import NotFoundPage from '@pages/NotFoundPage'

/**
 * App.jsx — Root router
 *
 * Add new pages here as you build them out.
 * Each route maps a URL path to a page component.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/"           element={<HomePage />} />
      {/* Add more routes below as you build them: */}
      {/* <Route path="/about"  element={<AboutPage />} /> */}
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      <Route path="*"           element={<NotFoundPage />} />
    </Routes>
  )
}
