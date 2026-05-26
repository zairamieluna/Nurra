import PackagesSection from '@sections/PackagesSection'

/**
 * pages/HomePage.jsx — The main landing page
 *
 * Build order (suggested):
 *   1. HeroSection
 *   2. ProblemSection
 *   3. BenefitsSection
 *   4. HowItWorksSection
 *   5. TestimonialsSection
 *   6. PackagesSection  ✅ done
 *   7. WaitlistSection
 *   8. FounderSection
 */
export default function HomePage() {
  return (
    <main>
      {/* Placeholder until HeroSection is built */}
      <div className="flex items-center justify-center min-h-screen bg-stone-50">
        <div className="text-center p-8">
          <h1 className="text-5xl font-light text-stone-800 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Nurra
          </h1>
          <p className="text-stone-400 text-lg">
            Your postpartum care platform
          </p>
        </div>
      </div>

      <PackagesSection />

      {/* Add more sections here as you build them */}
    </main>
  )
}
