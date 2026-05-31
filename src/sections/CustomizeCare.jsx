// ============================================
// NURRA — Customize Care Section
// "Support that's made for you"
// Interactive card selector
// ============================================

import { useState } from 'react';

const careOptions = [
  {
    id: 'emotional',
    icon: 'ti ti-heart',
    colorKey: 'a',
    name: 'Emotional support',
    desc: 'Guided check-ins & mood care',
  },
  {
    id: 'recovery',
    icon: 'ti ti-activity',
    colorKey: 'b',
    name: 'Recovery guidance',
    desc: 'Personalised healing plans',
  },
  {
    id: 'meal',
    icon: 'ti ti-salad',
    colorKey: 'c',
    name: 'Meal support',
    desc: 'Nourishing postpartum nutrition',
  },
  {
    id: 'baby',
    icon: 'ti ti-baby-carriage',
    colorKey: 'd',
    name: 'Baby care assistance',
    desc: 'Newborn feeding & sleep tips',
  },
  {
    id: 'household',
    icon: 'ti ti-home',
    colorKey: 'a',
    name: 'Light household help',
    desc: 'Support around the home',
  },
  {
    id: 'virtual',
    icon: 'ti ti-video',
    colorKey: 'b',
    name: 'Virtual support',
    desc: 'Online sessions from home',
  },
  {
    id: 'inhome',
    icon: 'ti ti-user-check',
    colorKey: 'c',
    name: 'In-home support',
    desc: 'A warm presence in your home',
  },
  {
    id: 'wellness',
    icon: 'ti ti-star',
    colorKey: 'd',
    name: 'Wellness check-ins',
    desc: 'Regular gentle wellness reviews',
  },
];

// Icon colors — normal vs selected
const iconColors = {
  a: { normal: { bg: '#F2D9D5', color: '#9B5E58' }, selected: { bg: '#C9918A', color: '#fff' } },
  b: { normal: { bg: '#DDE8DB', color: '#4D7149' }, selected: { bg: '#6B8F66', color: '#fff' } },
  c: { normal: { bg: '#EDE5D8', color: '#7A6152' }, selected: { bg: '#A08070', color: '#fff' } },
  d: { normal: { bg: '#F5EFE6', color: '#8C7B72' }, selected: { bg: '#B5A090', color: '#fff' } },
};

const CustomizeCare = () => {
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    const names = careOptions
      .filter((o) => selected.includes(o.id))
      .map((o) => o.name);
    alert(
      "Your care plan has been saved!\n\n✓ " +
        names.join('\n✓ ') +
        "\n\nWe'll personalise your Nurra experience around these."
    );
  };

  return (
    <section style={styles.wrap}>
      <p style={styles.label}>Customize your care</p>
      <h2 style={styles.title}>Support that's made for you</h2>
      <p style={styles.sub}>
        Every postpartum journey is different. Choose the support that works
        best for you — mix and match as much as you need.
      </p>

      {/* Cards Grid */}
      <div style={styles.grid}>
        {careOptions.map((option) => {
          const isSelected = selected.includes(option.id);
          const colors = iconColors[option.colorKey];
          const ic = isSelected ? colors.selected : colors.normal;

          return (
            <div
              key={option.id}
              onClick={() => toggle(option.id)}
              style={{
                ...styles.card,
                ...(isSelected ? styles.cardSelected : {}),
              }}
            >
              {/* Top row: icon + checkbox */}
              <div style={styles.cardTop}>
                <div style={{ ...styles.icon, background: ic.bg, color: ic.color }}>
                  <i className={option.icon} aria-hidden="true" />
                </div>
                <div style={{
                  ...styles.check,
                  ...(isSelected ? styles.checkSelected : {}),
                }}>
                  {isSelected ? '✓' : ''}
                </div>
              </div>

              <p style={styles.cardName}>{option.name}</p>
              <p style={styles.cardDesc}>{option.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.countText}>
          {selected.length === 0
            ? 'Select the care that feels right for you'
            : (
              <>
                <span style={{ fontWeight: 600, color: '#C9918A' }}>
                  {selected.length} type{selected.length > 1 ? 's' : ''} of support
                </span>{' '}
                selected
              </>
            )}
        </p>
        <button
          style={{
            ...styles.btn,
            opacity: selected.length === 0 ? 0.4 : 1,
            cursor: selected.length === 0 ? 'default' : 'pointer',
          }}
          disabled={selected.length === 0}
          onClick={handleSave}
        >
          Save my care plan →
        </button>
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
    margin: '0 auto 2.5rem',
    maxWidth: '400px',
    lineHeight: 1.75,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '12px',
    marginBottom: '2rem',
  },
  card: {
    background: '#fff',
    border: '1.5px solid #EDE5D8',
    borderRadius: '14px',
    padding: '1.25rem 1rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    userSelect: 'none',
    transition: 'border-color 0.18s, background 0.18s',
  },
  cardSelected: {
    borderColor: '#C9918A',
    background: '#FBF0EE',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    transition: 'background 0.18s',
  },
  check: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '1.5px solid #EDE5D8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    color: 'transparent',
    flexShrink: 0,
    transition: 'all 0.18s',
  },
  checkSelected: {
    background: '#C9918A',
    borderColor: '#C9918A',
    color: '#fff',
  },
  cardName: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#3D2E26',
    margin: 0,
    lineHeight: 1.4,
  },
  cardDesc: {
    fontSize: '12px',
    color: '#8C7B72',
    margin: 0,
    lineHeight: 1.5,
  },
  footer: {
    background: '#fff',
    border: '0.5px solid #EDE5D8',
    borderRadius: '14px',
    padding: '1.25rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  countText: {
    fontSize: '13px',
    color: '#8C7B72',
    margin: 0,
  },
  btn: {
    background: '#C9918A',
    color: '#FAF7F2',
    border: 'none',
    padding: '11px 26px',
    borderRadius: '100px',
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'var(--font-sans)',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.2s',
  },
};

export default CustomizeCare;
