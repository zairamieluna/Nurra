// ============================================
// NURRA — First 10 Section
// "Special Offer for Our First 10 Moms"
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
          The first 10 moms who join Nurra will receive a launch discount and
          early access — before anyone else.
        </p>

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
          {TAKEN_SPOTS} of {TOTAL_SPOTS} spots taken
        </p>

        {/* CTA */}
        <button style={styles.btn} onClick={scrollToWaitlist}>
          Join Waitlist →
        </button>
        <p style={styles.note}>Free to join · No credit card needed</p>

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
    maxWidth: '520px',
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
    margin: '0 0 1rem',
    lineHeight: 1.3,
    position: 'relative',
    zIndex: 1,
  },
  body: {
    fontSize: '14px',
    color: '#7A6152',
    lineHeight: 1.8,
    margin: '0 auto 1.75rem',
    maxWidth: '360px',
    position: 'relative',
    zIndex: 1,
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
