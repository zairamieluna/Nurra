// ============================================
// NURRA — Problem Section
// "Why postpartum recovery matters"
// ============================================

const cards = [
  {
    icon: 'ti ti-moon',
    colorClass: 'blush',
    title: 'Exhaustion',
    body: 'Broken sleep, a healing body, and a newborn to care for — all at once. Rest feels impossible.',
  },
  {
    icon: 'ti ti-users',
    colorClass: 'sage',
    title: 'Isolation',
    body: 'Friends go back to their lives. The house gets quiet. Many mothers feel completely alone.',
  },
  {
    icon: 'ti ti-heart',
    colorClass: 'beige',
    title: 'Emotional stress',
    body: 'Mood swings, anxiety, and the pressure to feel joyful — even when it does not come easily.',
  },
  {
    icon: 'ti ti-activity',
    colorClass: 'cream',
    title: 'Recovery struggles',
    body: 'Physical healing takes time, yet guidance on postpartum recovery is often vague or hard to find.',
  },
];

const iconColors = {
  blush: { background: '#F2D9D5', color: '#9B5E58' },
  sage:  { background: '#DDE8DB', color: '#4D7149' },
  beige: { background: '#EDE5D8', color: '#7A6152' },
  cream: { background: '#F5EFE6', color: '#8C7B72' },
};

const Problem = () => {
  return (
    <section style={styles.wrap}>
      <p style={styles.label}>The reality</p>
      <h2 style={styles.title}>Why postpartum recovery matters</h2>
      <p style={styles.sub}>
        Most mothers are sent home with very little support. The fourth trimester
        is real — and it's hard.
      </p>

      <div style={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} style={styles.card}>
            <div style={{ ...styles.icon, ...iconColors[card.colorClass] }}>
              <i className={card.icon} aria-hidden="true" />
            </div>
            <p style={styles.cardTitle}>{card.title}</p>
            <p style={styles.cardBody}>{card.body}</p>
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
    fontSize: 'clamp(22px, 4vw, 32px)',
    fontWeight: 400,
    color: '#3D2E26',
    textAlign: 'center',
    margin: '0 auto 0.75rem',
    maxWidth: '420px',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
    gap: '14px',
  },
  card: {
    background: '#FFFFFF',
    border: '0.5px solid #EDE5D8',
    borderRadius: '16px',
    padding: '1.5rem 1.25rem',
  },
  icon: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '15px',
    fontWeight: 500,
    color: '#3D2E26',
    margin: '0 0 6px',
  },
  cardBody: {
    fontSize: '13px',
    color: '#8C7B72',
    lineHeight: 1.65,
    margin: 0,
  },
};

export default Problem;
