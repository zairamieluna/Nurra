// ============================================
// NURRA — Hero Section
// ============================================

const Hero = () => {
  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={styles.hero}>
      <span style={styles.badge}>Now open for early access · Canada</span>

      <h1 style={styles.h1}>
        You just did something incredible.{' '}
        <em style={styles.italic}>Now let us take care of you.</em>
      </h1>

      <p style={styles.sub}>
        Nurra is a postpartum recovery platform built for Canadian mothers —
        gentle support for your body, mind, and the messy in-between.
      </p>

      <div style={styles.btns}>
        <button style={styles.btnPrimary} onClick={scrollToWaitlist}>
          Join the waitlist
        </button>
        <button style={styles.btnSecondary} onClick={scrollToWaitlist}>
          Get early access
        </button>
      </div>

      <div style={styles.trust}>
        <span style={styles.trustItem}>
          <i className="ti ti-heart" aria-hidden="true" /> Made for Canadian mamas
        </span>
        <span style={styles.trustDot} />
        <span style={styles.trustItem}>
          <i className="ti ti-lock" aria-hidden="true" /> Private &amp; safe
        </span>
        <span style={styles.trustDot} />
        <span style={styles.trustItem}>
          <i className="ti ti-star" aria-hidden="true" /> Free to join
        </span>
      </div>
    </section>
  );
};

// ============================================
// STYLES
// ============================================
const styles = {
  hero: {
    background: '#FAF7F2',
    borderRadius: '20px',
    padding: 'clamp(3rem, 6vw, 5rem) 2rem 3.5rem',
    textAlign: 'center',
    fontFamily: 'var(--font-sans)',
  },
  badge: {
    display: 'inline-block',
    background: '#EDE5D8',
    color: '#7A6152',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.06em',
    padding: '5px 14px',
    borderRadius: '100px',
    marginBottom: '2rem',
  },
  h1: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(28px, 5vw, 44px)',
    fontWeight: 400,
    color: '#3D2E26',
    lineHeight: 1.25,
    margin: '0 auto 1.25rem',
    maxWidth: '560px',
  },
  italic: {
    fontStyle: 'italic',
  },
  sub: {
    fontSize: 'clamp(14px, 2vw, 16px)',
    color: '#8C7B72',
    lineHeight: 1.75,
    maxWidth: '420px',
    margin: '0 auto 2.5rem',
  },
  btns: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    background: '#C9918A',
    color: '#FAF7F2',
    border: 'none',
    padding: '14px 32px',
    borderRadius: '100px',
    fontSize: '15px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'opacity 0.2s',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#7A6152',
    border: '1.5px solid #EDE5D8',
    padding: '13px 32px',
    borderRadius: '100px',
    fontSize: '15px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'opacity 0.2s',
  },
  trust: {
    marginTop: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    color: '#8C7B72',
  },
  trustDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    background: '#EDE5D8',
    display: 'inline-block',
  },
};

export default Hero;
