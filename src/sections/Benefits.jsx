// ============================================
// NURRA — Benefits Section
// "Everything you need to heal and thrive"
// ============================================

const cards = [
  {
    icon: 'ti ti-heart',
    bg: '#FBF0EE',
    iconBg: '#F2D9D5',
    iconColor: '#9B5E58',
    pillBg: '#F2D9D5',
    pillColor: '#9B5E58',
    pill: 'Mind & mood',
    title: 'Emotional support',
    body: 'Guided check-ins, mood tracking, and gentle prompts to help you process the emotional waves of new motherhood.',
  },
  {
    icon: 'ti ti-activity',
    bg: '#EDF3EC',
    iconBg: '#C8DCC5',
    iconColor: '#4D7149',
    pillBg: '#C8DCC5',
    pillColor: '#3A5237',
    pill: 'Body & healing',
    title: 'Recovery guidance',
    body: 'Expert-backed postpartum recovery plans tailored to your body, your birth, and your pace.',
  },
  {
    icon: 'ti ti-salad',
    bg: '#F5EFE6',
    iconBg: '#EDE5D8',
    iconColor: '#7A6152',
    pillBg: '#EDE5D8',
    pillColor: '#7A6152',
    pill: 'Nourish',
    title: 'Nutrition support',
    body: 'Simple, nourishing meal guidance designed for postpartum healing — no complicated diets, just real food.',
  },
  {
    icon: 'ti ti-users',
    bg: '#FAF7F2',
    iconBg: '#EDE5D8',
    iconColor: '#8C7B72',
    pillBg: '#EDE5D8',
    pillColor: '#8C7B72',
    pill: 'Community',
    title: 'Community support',
    body: 'A warm, private space to connect with Canadian mothers who truly get what you are going through.',
  },
];

const Benefits = () => {
  return (
    <section style={styles.wrap}>
      <p style={styles.label}>What Nurra offers</p>
      <h2 style={styles.title}>Everything you need to heal and thrive</h2>
      <p style={styles.sub}>
        Nurra wraps care around every part of you — because recovery is never just one thing.
      </p>

      <div style={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} style={{ ...styles.card, background: card.bg }}>
            <div style={{ ...styles.icon, background: card.iconBg, color: card.iconColor }}>
              <i className={card.icon} aria-hidden="true" />
            </div>
            <p style={styles.cardTitle}>{card.title}</p>
            <p style={styles.cardBody}>{card.body}</p>
            <span style={{ ...styles.pill, background: card.pillBg, color: card.pillColor }}>
              {card.pill}
            </span>
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
    maxWidth: '400px',
    lineHeight: 1.3,
  },
  sub: {
    fontSize: '14px',
    color: '#8C7B72',
    textAlign: 'center',
    margin: '0 auto 2.5rem',
    maxWidth: '360px',
    lineHeight: 1.7,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '14px',
  },
  card: {
    borderRadius: '16px',
    padding: '1.75rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    border: '0.5px solid #EDE5D8',
  },
  icon: {
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  cardTitle: {
    fontSize: '15px',
    fontWeight: 500,
    color: '#3D2E26',
    margin: 0,
  },
  cardBody: {
    fontSize: '13px',
    color: '#8C7B72',
    lineHeight: 1.7,
    margin: 0,
    flex: 1,
  },
  pill: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: 500,
    padding: '3px 10px',
    borderRadius: '100px',
    marginTop: '4px',
    width: 'fit-content',
  },
};

export default Benefits;
