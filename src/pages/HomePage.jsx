/**
 * pages/HomePage.jsx — The main landing page
 *
 * This is where you'll import and compose all the landing page sections.
 * The actual section components live in src/sections/.
 *
 * Build order (suggested):
 *   1. HeroSection
 *   2. ProblemSection
 *   3. BenefitsSection
 *   4. HowItWorksSection
 *   5. TestimonialsSection
 *   6. WaitlistSection
 *   7. FounderSection
 */

export default function HomePage() {
  return (
    <main>
      {/* Sections will be imported and added here */}
      <div className="flex items-center justify-center min-h-screen bg-warm-white">
        <div className="text-center p-8">
          <h1 className="font-display text-5xl text-ink mb-4">
            Nurra
          </h1>
          <p className="text-ink-muted text-lg">
            ✅ Project setup complete. Ready to build.
          </p>
          <p className="text-ink-muted text-sm mt-2">
            Start adding sections in <code className="bg-linen px-2 py-1 rounded">src/sections/</code>
          </p>
        </div>
      </div>
    </main>
  )
}
