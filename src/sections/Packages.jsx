// ============================================
// NURRA — Packages Section
// Weekly / Monthly toggle + First 10 discount
// ============================================

import { useState } from 'react';

const packages = [
  {
    badge: 'Essential',
    badgeBg: '#EDE5D8',
    badgeColor: '#7A6152',
    name: '🌿 Essential Recovery',
    desc: 'Best for moms with some support who need guidance',
    weekly: 59,
    featured: false,
    features: [
      'Emotional check-in / week',
      'Recovery guidance & tips',
      'Breastfeeding & wellness resources',
      'Community resource links',
    ],
    btnStyle: 'outline',
  },
  {
    badge: 'Most popular',
    badgeBg: '#C9918A',
    badgeColor: '#FAF7F2',
    name: '🤍 Recovery Plus',
    desc: 'Best for first-time moms or moms without nearby support',
    weekly: 149,
    featured: true,
    features: [
      'Everything in Essential',
      '1 virtual or in-home session',
      'Baby care guidance',
      'Light postpartum help',
    ],
    btnStyle: 'light',
  },
  {
    badge: 'Premium',
    badgeBg: '#F2D9D5',
    badgeColor: '#9B5E58',
    name: '🌸 Premium Recovery',
    desc: 'Best for immigrant moms, C-section, or no family nearby',
    weekly: 299,
    featured: false,
    features: [
      'Everything in Recovery Plus',
      'Multiple support check-ins',
      'Nutrition & meal guidance',
      'Personalized recovery plan',
    ],
    btnStyle: 'filled',
  },
];

const addons = [
  { label: 'Virtual session', price: '+$20' },
  { label: 'In-home visit', price: '+$45' },
  { label: 'Meal support', price: '+$25' },
  { label: 'Baby care help', price: '+$35' },
  { label: 'Wellness check-in', price: '+$15' },
];

// Pricing logic
const getPrice = (weekly, isMonthly, isFirst10) => {
  let price = isMonthly ? Math.round(weekly * 4 * 0.9) : weekly;
  if (isFirst10) price = Math.round(price * 0.9);
  return price;
};

const Packages = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const [isFirst10] = useState(true); // First 10 discount always shown for now

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={styles.wrap}>
      <p style={styles.label}>Care plans</p>
      <h2 style={styles.title}>Choose the support you need</h2>
      <p style={styles.sub}>
        Every mother's journey is different. Pick a plan that feels right —
        you can always adjust later.
      </p>

      {/* First 10 discount banner */}
      <div style={styles.discountBanner}>
        <span style={styles.discountDot} />
        <p style={styles.discountText}>
          <strong>First 10 moms get 10% off</strong> — join the waitlist to lock in your rate.
          Save an extra 10% when you choose monthly billing.
        </p>
      </div>

      {/* Weekly / Monthly toggle */}
      <div style={styles.toggle}>
        <button
          style={{
            ...styles.toggleBtn,
            ...(! isMonthly ? styles.toggleActive : {}),
          }}
          onClick={() => setIsMonthly(false)}
        >
          Weekly
        </button>
        <button
          style={{
            ...styles.toggleBtn,
            ...(isMonthly ? styles.toggleActive : {}),
          }}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
          <span style={styles.saveBadge}>Save 10%</span>
        </button>
      </div>

      {/* Package cards */}
      <div style={styles.grid}>
        {packages.map((pkg) => {
          const price = getPrice(pkg.weekly, isMonthly, isFirst10);
          const originalPrice = isMonthly
            ? Math.round(pkg.weekly * 4)
            : pkg.weekly;

          return (
            <div
              key={pkg.name}
              style={{
                ...styles.card,
                ...(pkg.featured ? styles.cardFeatured : {}),
              }}
            >
              {/* Badge */}
              <span style={{
                ...styles.badge,
                background: pkg.badgeBg,
                color: pkg.badgeColor,
              }}>
                {pkg.badge}
              </span>

              {/* Name */}
              <p style={{
                ...styles.pkgName,
                color: pkg.featured ? '#FAF7F2' : '#3D2E26',
              }}>
                {pkg.name}
              </p>

              {/* Description */}
              <p style={{
                ...styles.pkgDesc,
                color: pkg.featured ? '#C4B5AE' : '#8C7B72',
              }}>
                {pkg.desc}
              </p>

              {/* Price */}
              <div style={styles.priceRow}>
                <span style={{
                  ...styles.price,
                  color: pkg.featured ? '#FAF7F2' : '#3D2E26',
                }}>
                  ${price}
                </span>
                <span style={{
                  ...styles.pricePer,
                  color: pkg.featured ? '#C4B5AE' : '#8C7B72',
                }}>
                  /{isMonthly ? 'mo' : 'wk'}
                </span>
                {isFirst10 && (
                  <span style={styles.originalPrice}>
                    ${originalPrice}
                  </span>
                )}
              </div>

              {isFirst10 && (
                <p style={{
                  ...styles.discountNote,
                  color: pkg.featured ? '#F4C0D1' : '#C9918A',
                }}>
                  🌸 First 10 moms price
                  {isMonthly ? ' (20% total savings!)' : ''}
                </p>
              )}

              {/* Divider */}
              <div style={{
                ...styles.divider,
                background: pkg.featured ? 'rgba(255,255,255,0.12)' : '#EDE5D8',
              }} />

              {/* Features */}
              <ul style={styles.features}>
                {pkg.features.map((f) => (
                  <li key={f} style={styles.featureItem}>
                    <span style={{
                      ...styles.check,
                      background: pkg.featured ? '#C9918A' : '#DDE8DB',
                      color: pkg.featured ? '#FAF7F2' : '#4D7149',
                    }}>✓</span>
                    <span style={{
                      color: pkg.featured ? '#D9C8BF' : '#7A6152',
                      fontSize: '13px',
                      lineHeight: 1.5,
                    }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                style={{
                  ...styles.btn,
                  ...(pkg.btnStyle === 'outline' ? styles.btnOutline : {}),
                  ...(pkg.btnStyle === 'filled' ? styles.btnFilled : {}),
                  ...(pkg.btnStyle === 'light' ? styles.btnLight : {}),
                }}
                onClick={scrollToWaitlist}
              >
                Join waitlist →
              </button>
            </div>
          );
        })}
      </div>

      {/* Add-ons */}
      <div style={styles.addons}>
        <p style={styles.addonsTitle}>+ Available add-ons</p>
        <div style={styles.addonsList}>
          {addons.map((a) => (
            <div key={a.label} style={styles.addonItem}>
              <span style={styles.addonLabel}>{a.label}</span>
              <span style={styles.addonPrice}>{a.price}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={styles.note}>
        🌸 Not sure which plan is right for you?{' '}
        <span style={{ color: '#C9918A', fontWeight: 500 }}>
          Every plan is fully customizable.
        </span>
        <br />
        You can adjust your care plan anytime after joining.
      </p>
    </section>
  );
};

// ============================================
// STYLES
// ============================================
const styles = {
  wrap: {
    fontFamily: 'var(--font-sans)',
    padding: '3.5rem 2rem',
    background: '#FAF7F2',
    borderRadius: '20px',
  },
  label: {
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#B5C4B1',
    textAlign: 'center',
    marginBottom: '0.75rem',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(22px, 4vw, 30px)',
    fontWeight: 400,
    color: '#3D2E26',
    textAlign: 'center',
    margin: '0 auto 0.75rem',
    lineHeight: 1.3,
  },
  sub: {
    fontSize: '14px',
    color: '#8C7B72',
    textAlign: 'center',
    margin: '0 auto 1.5rem',
    maxWidth: '380px',
    lineHeight: 1.7,
  },
  discountBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: '#FBF0EE',
    border: '0.5px solid #F4C0D1',
    borderRadius: '12px',
    padding: '12px 16px',
    maxWidth: '600px',
    margin: '0 auto 1.5rem',
  },
  discountDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#C9918A',
    flexShrink: 0,
  },
  discountText: {
    fontSize: '13px',
    color: '#7A6152',
    margin: 0,
    lineHeight: 1.5,
  },
  toggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    background: '#EDE5D8',
    borderRadius: '100px',
    padding: '4px',
    width: 'fit-content',
    margin: '0 auto 2rem',
  },
  toggleBtn: {
    padding: '8px 20px',
    borderRadius: '100px',
    border: 'none',
    background: 'transparent',
    color: '#8C7B72',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.2s',
  },
  toggleActive: {
    background: '#FAF7F2',
    color: '#3D2E26',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  },
  saveBadge: {
    background: '#DDE8DB',
    color: '#4D7149',
    fontSize: '10px',
    fontWeight: 600,
    padding: '2px 7px',
    borderRadius: '100px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '14px',
    alignItems: 'start',
    marginBottom: '1.5rem',
  },
  card: {
    background: '#fff',
    border: '0.5px solid #EDE5D8',
    borderRadius: '18px',
    padding: '1.75rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  cardFeatured: {
    background: '#3D2E26',
    border: '0.5px solid #3D2E26',
  },
  badge: {
    display: 'inline-block',
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '3px 10px',
    borderRadius: '100px',
    marginBottom: '1rem',
    width: 'fit-content',
  },
  pkgName: {
    fontSize: '16px',
    fontWeight: 500,
    margin: '0 0 4px',
  },
  pkgDesc: {
    fontSize: '12px',
    margin: '0 0 1rem',
    lineHeight: 1.5,
  },
  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '4px',
    marginBottom: '4px',
  },
  price: {
    fontFamily: 'var(--font-serif)',
    fontSize: '32px',
  },
  pricePer: {
    fontSize: '14px',
    flex: 1,
  },
  originalPrice: {
    fontSize: '13px',
    color: '#B5C4B1',
    textDecoration: 'line-through',
  },
  discountNote: {
    fontSize: '11px',
    margin: '0 0 1rem',
    fontWeight: 500,
  },
  divider: {
    height: '0.5px',
    margin: '1rem 0',
  },
  features: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  check: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    flexShrink: 0,
    marginTop: '1px',
  },
  btn: {
    width: '100%',
    padding: '12px',
    borderRadius: '100px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    border: 'none',
    transition: 'opacity 0.2s',
    marginTop: 'auto',
  },
  btnOutline: {
    background: 'transparent',
    border: '1.5px solid #EDE5D8',
    color: '#7A6152',
  },
  btnFilled: {
    background: '#C9918A',
    color: '#FAF7F2',
  },
  btnLight: {
    background: '#FAF7F2',
    color: '#3D2E26',
  },
  addons: {
    background: '#fff',
    border: '0.5px solid #EDE5D8',
    borderRadius: '14px',
    padding: '1.25rem 1.5rem',
    maxWidth: '600px',
    margin: '0 auto 1.5rem',
  },
  addonsTitle: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#3D2E26',
    margin: '0 0 0.75rem',
  },
  addonsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  addonItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: '#FAF7F2',
    border: '0.5px solid #EDE5D8',
    borderRadius: '100px',
    padding: '5px 12px',
  },
  addonLabel: {
    fontSize: '12px',
    color: '#7A6152',
  },
  addonPrice: {
    fontSize: '12px',
    color: '#C9918A',
    fontWeight: 600,
  },
  note: {
    textAlign: 'center',
    fontSize: '13px',
    color: '#8C7B72',
    marginTop: '0.5rem',
    lineHeight: 1.7,
  },
};

export default Packages;
