// ============================================
// NURRA — Packages Section
// "Choose the support you need"
// ============================================

const packages = [
  {
    badge: 'Essential',
    badgeBg: '#EDE5D8',
    badgeColor: '#7A6152',
    name: 'Essential Support',
    price: '$29',
    period: 'Perfect for getting started',
    featured: false,
    features: [
      'Emotional check-ins & mood tracking',
      'Basic recovery guidance & tips',
      'Newborn care resources',
      'Access to Nurra community',
    ],
    btnStyle: 'outline',
  },
  {
    badge: 'Most popular',
    badgeBg: '#C9918A',
    badgeColor: '#FAF7F2',
    name: 'Recovery Plus',
    price: '$59',
    period: 'For deeper healing & support',
    featured: true,
    features: [
      'All Essential features',
      'Personalised recovery plan',
      'Nutrition guidance & meal ideas',
      'Weekly emotional support sessions',
      'Flexible 1:1 support options',
    ],
    btnStyle: 'light',
  },
  {
    badge: 'Premium',
    badgeBg: '#F2D9D5',
    badgeColor: '#9B5E58',
    name: 'Premium Recovery',
    price: '$99',
    period: 'Full concierge postpartum care',
    featured: false,
    features: [
      'All Recovery Plus features',
      'Dedicated postpartum coach',
      'Custom nutrition & recovery plan',
      'Baby sleep & feeding support',
      'Priority access & early features',
    ],
    btnStyle: 'filled',
  },
];

const Packages = () => {
  return (
    <section style={styles.wrap}>
      <p style={styles.label}>Care plans</p>
      <h2 style={styles.title}>Choose the support you need</h2>
      <p style={styles.sub}>
        Every mother's journey is different. Pick a plan that feels right —
        you can always adjust later.
      </p>

      <div style={styles.grid}>
        {packages.map((pkg) => (
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

            {/* Price */}
            <p style={{
              ...styles.price,
              color: pkg.featured ? '#FAF7F2' : '#3D2E26',
            }}>
              {pkg.price}
              <span style={styles.priceSub}>/mo</span>
            </p>

            {/* Period */}
            <p style={{
              ...styles.period,
              color: pkg.featured ? '#C4B5AE' : '#8C7B72',
            }}>
              {pkg.period}
            </p>

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
            <button style={{
              ...styles.btn,
              ...(pkg.btnStyle === 'outline' ? styles.btnOutline : {}),
              ...(pkg.btnStyle === 'filled'  ? styles.btnFilled  : {}),
              ...(pkg.btnStyle === 'light'   ? styles.btnLight   : {}),
            }}>
              Join waitlist
            </button>
          </div>
        ))}
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
    margin: '0 auto 2.5rem',
    maxWidth: '380px',
    lineHeight: 1.7,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '14px',
    alignItems: 'start',
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
    marginBottom: '1.25rem',
    width: 'fit-content',
  },
  pkgName: {
    fontSize: '16px',
    fontWeight: 500,
    margin: '0 0 4px',
  },
  price: {
    fontFamily: 'var(--font-serif)',
    fontSize: '28px',
    margin: '0.5rem 0 0.25rem',
  },
  priceSub: {
    fontSize: '16px',
  },
  period: {
    fontSize: '12px',
    margin: '0 0 1.25rem',
  },
  divider: {
    height: '0.5px',
    marginBottom: '1.25rem',
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
  note: {
    textAlign: 'center',
    fontSize: '13px',
    color: '#8C7B72',
    marginTop: '1.75rem',
    lineHeight: 1.7,
  },
};

export default Packages;
