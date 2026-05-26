import PackagesSection from '@sections/PackagesSection'

export default function HomePage() {
  return (
    <main>
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
    </main>
  )
}
