// ============================================
// NURRA — First 10 Section
// "Special Offer for Our First 10 Moms"
// 10% off for first 10 + extra 10% for monthly
// ============================================

const TOTAL_SPOTS = 10;
const TAKEN_SPOTS = 0; // 🔧 Update this number as spots fill up

const First10 = () => {
  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={styles.wrap}>
      <div style={styles.card}>

        {/* Decorative circles */}
        <div style={styles.circleTop} aria-hidden="true" />
        <div style={styles.circleBottom} aria-hidden="true" />

        {/* Badge */}
        <div style={styles.badge}>
          <span style={styles.dot} />
          Limited spots
        </div>

        {/* Heading */}
        <h2 style={styles.title}>Special Offer for Our First 10 Moms</h2>
        <p style={styles.body}>
          Be one of our founding mothers and unlock exclusive savings —
          because you deserve the best care at the best price.
        </p>

        {/* Discount breakdown */}
        <div style={styles.discountGrid}>
          <div style={styles.discountItem}>
            <span style={styles.discountPercent}>10%</span>
            <span style={styles.discountDesc}>off for being<br />one of the first 10</span>
          </div>
          <div style={styles.discountPlus}>+</div>
          <div style={styles.discountItem}>
            <span style={styles.discountPercent}>10%</span>
            <span style={styles.discountDesc}>extra off when<br />you choose monthly</span>
          </div>
          <div style={styles.discountPlus}>=</div>
          <div style={styles.discountItem}>
            <span style={styles.discountPercentBig}>20%</span>
            <span style={styles.discountDesc}>total savings<br />on monthly plans</span>
          </div>
        </div>

        {/* Example savings */}
        <div style={styles.exampleBox}>
          <p style={styles.exampleLabel}>Example savings</p>
          <div style={styles.exampleRow}>
            <span style={styles.examplePkg}>🤍 Recovery Plus</span>
            <div style={styles.examplePrices}>
              <span style={styles.exampleOriginal}>$149/wk</span>
              <span style={styles.exampleArrow}>→</span>
              <span style={styles.exampleFinal}>$134/wk</span>
            </div>
          </div>
          <div style={styles.exampleRow}>
            <span style={styles.examplePkg}>🤍 Recovery Plus monthly</span>
            <div style={styles.examplePrices}>
              <span style={styles.exampleOriginal}>$536/mo</span>
              <span style={styles.exampleArrow}>→</span>
              <span style={styles.exampleFinal}>$429/mo</span>
            </div>
          </div>
        </div>

        {/* Spots tracker */}
        <div style={styles.spots}>
          {Array.from({ length: TOTAL_SPOTS }).map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.spot,
                opacity: i < TAKEN_SPOTS ? 1 : 0.25,
              }}
            />
          ))}
        </div>
        <p style={styles.spotsLabel}>
          {TAKEN_SPOTS === 0
            ? 'All 10 spots still available — be first!'
            : `${TAKEN_SPOTS} of ${TOTAL_SPOTS} spots taken`}
        </p>

        {/* CTA */}
        <button style={styles.btn} onClick={scrollToWaitlist}>
          Claim my spot →
        </button>
        <p style={styles.note}>Free to join · Lock in your discount now</p>

      </div>
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
    borderRadius: '20px',
    background: '#FAF7F2',
  },
  card: {
    maxWidth: '560px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #F2D9D5 0%, #EDE5D8 60%, #DDE8DB 100%)',
    borderRadius: '20px',
    padding: '3rem 2.5rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  circleTop: {
    position: 'absolute',
    top: '-40px',
    right: '-40px',
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.18)',
    pointerEvents: 'none',
  },
  circleBottom: {
    position: 'absolute',
    bottom: '-50px',
    left: '-30px',
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.12)',
    pointerEvents: 'none',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: '#fff',
    color: '#9B5E58',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '5px 14px',
    borderRadius: '100px',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 1,
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#C9918A',
    display: 'inline-block',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(22px, 4vw, 30px)',
    fontWeight: 400,
    color: '#3D2E26',
    margin: '0 0 0.75rem',
    lineHeight: 1.3,
    position: 'relative',
    zIndex: 1,
  },
  body: {
    fontSize: '14px',
    color: '#7A6152',
    lineHeight: 1.8,
    margin: '0 auto 1.75rem',
    maxWidth: '380px',
    position: 'relative',
    zIndex: 1,
  },
  discountGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 1,
  },
  discountItem: {
    background: '#fff',
    borderRadius: '14px',
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    minWidth: '90px',
  },
  discountPercent: {
    fontFamily: 'var(--font-serif)',
    fontSize: '28px',
    color: '#C9918A',
    lineHeight: 1,
  },
  discountPercentBig: {
    fontFamily: 'var(--font-serif)',
    fontSize: '32px',
    color: '#3D2E26',
    lineHeight: 1,
  },
  discountDesc: {
    fontSize: '11px',
    color: '#8C7B72',
    lineHeight: 1.4,
    textAlign: 'center',
  },
  discountPlus: {
    fontSize: '20px',
    color: '#C9918A',
    fontWeight: 300,
  },
  exampleBox: {
    background: 'rgba(255,255,255,0.6)',
    borderRadius: '12px',
    padding: '12px 16px',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 1,
    textAlign: 'left',
  },
  exampleLabel: {
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#9B5E58',
    margin: '0 0 8px',
  },
  exampleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 0',
    borderTop: '0.5px solid rgba(0,0,0,0.06)',
  },
  examplePkg: {
    fontSize: '12px',
    color: '#7A6152',
  },
  examplePrices: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  exampleOriginal: {
    fontSize: '12px',
    color: '#B5C4B1',
    textDecoration: 'line-through',
  },
  exampleArrow: {
    fontSize: '11px',
    color: '#B5C4B1',
  },
  exampleFinal: {
    fontSize: '13px',
    color: '#C9918A',
    fontWeight: 600,
  },
  spots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    marginBottom: '0.75rem',
    position: 'relative',
    zIndex: 1,
  },
  spot: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    background: '#C9918A',
    border: '1.5px solid #C9918A',
  },
  spotsLabel: {
    fontSize: '12px',
    color: '#9B5E58',
    marginBottom: '1.5rem',
    fontWeight: 500,
    position: 'relative',
    zIndex: 1,
  },
  btn: {
    background: '#3D2E26',
    color: '#FAF7F2',
    border: 'none',
    padding: '13px 32px',
    borderRadius: '100px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'opacity 0.2s',
    position: 'relative',
    zIndex: 1,
  },
  note: {
    fontSize: '12px',
    color: '#9B5E58',
    marginTop: '1rem',
    opacity: 0.7,
    position: 'relative',
    zIndex: 1,
  },
};

export default First10;
