/**
 * components/layout/Layout.jsx — Shell layout wrapper
 *
 * Wrap pages with this component to include Navbar + Footer automatically.
 * Currently a passthrough — add <Navbar /> and <Footer /> here once built.
 *
 * Usage in App.jsx:
 *   <Route path="/" element={<Layout><HomePage /></Layout>} />
 */

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </>
  )
}
