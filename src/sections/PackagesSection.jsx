/**
 * sections/PackagesSection.jsx — Nurra care packages
 *
 * Usage: import PackagesSection from '@sections/PackagesSection'
 * Then add <PackagesSection /> inside HomePage.jsx
 *
 * Fonts used: Add to your index.html <head>:
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
 */

const packages = [
  {
    id: 'essential',
    name: 'Essential Support',
    tagline: 'Gentle guidance for the early days',
    icon: '🌱',
    featured: false,
    features: [
      { icon: '♡', text: 'Emotional check-ins & mood support' },
      { icon: '✦', text: 'Postpartum recovery basics guide' },
      { icon: '◎', text: 'Newborn care FAQs & tips' },
      { icon: '◷', text: 'Flexible self-paced resources' },
      { icon: '◌', text: 'Community access & peer support' },
    ],
  },
  {
    id: 'recovery-plus',
    name: 'Recovery Plus',
    tagline: 'Deeper care for mind, body & baby',
    icon: '🌸',
    featured: true,
    badge: 'Most popular',
    features: [
      { icon: '♡', text: 'Weekly emotional support sessions' },
      { icon: '✦', text: 'Personalised recovery plan & check-ins' },
      { icon: '◎', text: 'Feeding, sleep & development support' },
      { icon: '◁', text: 'Adaptable care as your needs change' },
      { icon: '★', text: 'Priority responses & resource library' },
    ],
  },
  {
    id: 'premium',
    name: 'Premium Recovery',
    tagline: 'Full-circle care, wholly yours',
    icon: '✿',
    featured: false,
    features: [
      { icon: '♡', text: 'Dedicated 1-on-1 emotional coaching' },
      { icon: '✦', text: 'Comprehensive recovery & wellness plan' },
      { icon: '◎', text: 'Full newborn & early parenting guidance' },
      { icon: '◁', text: 'Ongoing flexible support, always' },
      { icon: '◈', text: 'Concierge access & specialist referrals' },
    ],
  },
]

export default function PackagesSection() {
  return (
    <section className="py-24 px-4 bg-stone-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: '#b08a7a', fontFamily: "'DM Sans', sans-serif" }}
          >
            Care packages
          </p>
          <h2
            className="text-4xl md:text-5xl font-light mb-4 text-stone-800 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Support made for you,{' '}
            <em className="italic font-light">mama</em>
          </h2>
          <p
            className="text-stone-500 text-sm md:text-base max-w-md mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Every recovery journey is different. Choose the level of support
            that feels right for where you are.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-white rounded-2xl flex flex-col p-7"
              style={{
                border: pkg.featured
                  ? '2px solid #c9957e'
                  : '1px solid #e7e0d8',
              }}
            >
              {/* Popular badge */}
              {pkg.badge && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-medium tracking-wide px-4 py-1 rounded-full whitespace-nowrap"
                  style={{
                    background: '#c9957e',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.1em',
                  }}
                >
                  {pkg.badge}
                </span>
              )}

              {/* Package header */}
              <div className="mb-5">
                <span className="text-2xl block mb-3">{pkg.icon}</span>
                <h3
                  className="text-xl font-normal text-stone-800 mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-xs italic text-stone-400 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {pkg.tagline}
                </p>
              </div>

              <div className="h-px bg-stone-100 mb-5" />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-6">
                {pkg.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-stone-500 leading-snug"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 text-xs"
                      style={{ color: '#c9957e' }}
                    >
                      {f.icon}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="border-t border-stone-100 pt-5">
                <button
                  className="w-full py-2.5 rounded-xl text-sm font-medium tracking-wide transition-opacity duration-150 hover:opacity-75 active:scale-95"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    border: '1px solid #c9957e',
                    background: pkg.featured ? '#c9957e' : 'transparent',
                    color: pkg.featured ? '#fff' : '#c9957e',
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Customise note */}
        <div
          className="flex items-start gap-3 bg-stone-100 rounded-2xl px-6 py-5"
          style={{ border: '1px solid #e7e0d8' }}
        >
          <span className="text-lg mt-0.5 flex-shrink-0" style={{ color: '#c9957e' }}>✎</span>
          <p
            className="text-sm text-stone-500 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
          >
            <span className="font-medium text-stone-700">Every care plan is customisable.</span>{' '}
            Not sure which package fits? You can mix and match support options to build a plan
            that truly reflects your needs — because no two postpartum journeys look the same.
          </p>
        </div>

      </div>
    </section>
  )
}
