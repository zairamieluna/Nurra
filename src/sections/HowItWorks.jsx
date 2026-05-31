// ============================================
// NURRA — How It Works Section
// "Simple steps to feel supported"
// ============================================

const steps = [
  {
    num: 'STEP 01',
    icon: 'ti ti-mail',
    iconBg: '#F2D9D5',
    iconColor: '#9B5E58',
    title: 'Join the Waitlist',
    body: 'Sign up in seconds. No credit card. No commitment.',
  },
  {
    num: 'STEP 02',
    icon: 'ti ti-adjustments-horizontal',
    iconBg: '#DDE8DB',
    iconColor: '#4D7149',
    title: 'Choose Your Support',
    body: 'Tell us what you need — emotional, physical, or nutritional.',
  },
  {
    num: 'STEP 03',
    icon: 'ti ti-heart',
    iconBg: '#EDE5D8',
    iconColor: '#7A6152',
    title: 'Get Postpartum Support',
    body: 'Receive gentle, expert-backed care tailored just for you.',
  },
];

const HowItWorks = () => {
  return (
    <section style={styles.wrap}>
      <p style={styles.label}>How it works</p>
      <h2 style={styles.title}>Simple steps to feel supported</h2>
      <p style={styles.sub}>
        Getting started with Nurra is easy — no overwhelm, just care.
      </p>

      <div style={styles.steps}>
        {steps.map((step) => (
          <div key={step.num} style={styles.step}>
            <span style={styles.stepNum}>{step.num}</span>
            <div style={{ ...styles.stepIcon, background: step.iconBg, color: step.iconColor }}>
              <i className={step.icon} aria-hidden="true" />
            </div>
            <p style={styles.stepTitle}>{step.title}</p>
            <p style={styles.stepBody}>{step.body}</p>
          </div>
        ))}
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
    margin: '0 auto 2.75rem',
    maxWidth: '340px',
    lineHeight: 1.7,
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '14px',
  },
  step: {
    background: '#fff',
    border: '0.5px solid #EDE5D8',
    borderRadius: '16px',
    padding: '1.75rem 1.25rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  stepNum: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    color: '#C9918A',
  },
  stepIcon: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
  },
  stepTitle: {
    fontSize: '15px',
    fontWeight: 500,
    color: '#3D2E26',
    margin: 0,
  },
  stepBody: {
    fontSize: '13px',
    color: '#8C7B72',
    lineHeight: 1.65,
    margin: 0,
  },
};

export default HowItWorks;
