// ============================================
// NURRA — Waitlist Section (Validation Edition)
// Founding Moms Waitlist with full discovery form
// ============================================

import { useState } from 'react';

const hearAboutOptions = [
  'Facebook Mom Group',
  'Instagram',
  'TikTok',
  'Friend / Family',
  'OB-GYN / Midwife / Clinic',
  'Hospital / Postpartum Program',
  'Google Search',
  'Community Group / Church',
  'Event / School',
  'Other',
];

const stageOptions = [
  { value: 'expecting',  label: '🤰 Expecting' },
  { value: '0-3mo',      label: '👶 0–3 months postpartum' },
  { value: '3-6mo',      label: '🌱 3–6 months postpartum' },
  { value: '6-12mo',     label: '🌸 6–12 months postpartum' },
];

const WaitlistSection = () => {
  const [firstName, setFirstName]     = useState('');
  const [email, setEmail]             = useState('');
  const [dueDate, setDueDate]         = useState('');
  const [stage, setStage]             = useState('');
  const [challenge, setChallenge]     = useState('');
  const [hearAbout, setHearAbout]     = useState('');
  const [hearOther, setHearOther]     = useState('');
  const [submitted, setSubmitted]     = useState(false);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState('');

  const finalHearAbout = hearAbout === 'Other'
    ? `Other: ${hearOther}`
    : hearAbout;

  const handleSubmit = async () => {
    if (!firstName.trim() || !email.trim()) {
      setError('Please enter your name and email to join.');
      return;
    }
    if (!hearAbout) {
      setError('Please tell us how you heard about Nurra.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name:  firstName.trim(),
          email:       email.trim(),
          due_date:    dueDate || null,
          stage:       stage || null,
          concern:     challenge.trim() || null,
          hear_about:  finalHearAbout || null,
        }),
      });

      if (!res.ok) throw new Error('Something went wrong.');
      setSubmitted(true);

    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" style={styles.wrap}>
      <div style={styles.inner}>

        {/* Header */}
        <p style={styles.label}>Founding Moms Waitlist</p>
        <h2 style={styles.title}>You don't have to navigate postpartum alone.</h2>
        <p style={styles.sub}>
          Join our founding moms waitlist — free, limited spots, and your answers
          help us build Nurra around what real mothers actually need.
        </p>

        {/* Trust signals */}
        <div style={styles.trustRow}>
          {['Built with moms, for moms', 'Your story stays private 🔒', 'Free to join'].map((t) => (
            <span key={t} style={styles.trustPill}>{t}</span>
          ))}
        </div>

        <div style={styles.card}>
          {submitted ? (
            /* ── Success ── */
            <div style={styles.success}>
              <div style={styles.successIcon}>🌸</div>
              <p style={styles.successTitle}>Welcome, Founding Mom!</p>
              <p style={styles.successBody}>
                Thank you for trusting Nurra with your story. We'll reach out
                soon with early access and something special just for you.
              </p>
              <p style={styles.successNote}>
                Shaped through conversations with postpartum mothers — just like you.
              </p>
            </div>
          ) : (
            <>
              {/* ── Section 1: Basic info ── */}
              <p style={styles.sectionLabel}>About you</p>

              <div style={styles.field}>
                <label style={styles.fieldLabel} htmlFor="wl-name">First name</label>
                <input
                  id="wl-name"
                  type="text"
                  placeholder="e.g. Sofia"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.fieldLabel} htmlFor="wl-email">Email address</label>
                <input
                  id="wl-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.fieldLabel} htmlFor="wl-due">
                  Due date <span style={styles.optional}>· optional</span>
                </label>
                <input
                  id="wl-due"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  style={styles.input}
                />
              </div>

              {/* ── Section 2: Stage ── */}
              <div style={styles.divider} />
              <p style={styles.sectionLabel}>What stage are you in?</p>

              <div style={styles.stageGrid}>
                {stageOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setStage(opt.value)}
                    style={{
                      ...styles.stageBtn,
                      ...(stage === opt.value ? styles.stageBtnActive : {}),
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* ── Section 3: Challenge ── */}
              <div style={styles.divider} />
              <p style={styles.sectionLabel}>
                What's your biggest postpartum challenge right now?
                <span style={styles.optional}> · optional</span>
              </p>

              <div style={styles.field}>
                <textarea
                  id="wl-challenge"
                  placeholder="e.g. Recovery, loneliness, sleep, anxiety, breastfeeding, housework, lack of support..."
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  rows={3}
                  style={styles.textarea}
                />
              </div>

              {/* ── Section 4: How did you hear ── */}
              <div style={styles.divider} />
              <p style={styles.sectionLabel}>
                How did you hear about Nurra?
                <span style={{ ...styles.optional, color: '#C9918A' }}> · required</span>
              </p>

              <div style={styles.hearGrid}>
                {hearAboutOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setHearAbout(opt)}
                    style={{
                      ...styles.hearBtn,
                      ...(hearAbout === opt ? styles.hearBtnActive : {}),
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {hearAbout === 'Other' && (
                <div style={{ ...styles.field, marginTop: '0.75rem' }}>
                  <input
                    type="text"
                    placeholder="Please tell us how..."
                    value={hearOther}
                    onChange={(e) => setHearOther(e.target.value)}
                    style={styles.input}
                  />
                </div>
              )}

              {/* Error */}
              {error && <p style={styles.errorMsg}>{error}</p>}

              {/* Submit */}
              <button
                style={{
                  ...styles.btnSubmit,
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'default' : 'pointer',
                }}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Joining...' : 'Join Our Founding Moms Waitlist →'}
              </button>

              <p style={styles.note}>
                Because every new mom deserves support, rest, and care. 🌸
              </p>
            </>
          )}
        </div>
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
    background: '#F2D9D5',
  },
  inner: {
    maxWidth: '480px',
    margin: '0 auto',
  },
  label: {
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#9B5E58',
    textAlign: 'center',
    marginBottom: '0.75rem',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(22px, 4vw, 30px)',
    fontWeight: 400,
    color: '#3D2E26',
    textAlign: 'center',
    margin: '0 0 0.75rem',
    lineHeight: 1.35,
  },
  sub: {
    fontSize: '14px',
    color: '#7A5E58',
    textAlign: 'center',
    lineHeight: 1.75,
    margin: '0 0 1.25rem',
  },
  trustRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '1.75rem',
  },
  trustPill: {
    fontSize: '11px',
    fontWeight: 500,
    color: '#7A5E58',
    background: 'rgba(255,255,255,0.55)',
    border: '0.5px solid rgba(201,145,138,0.3)',
    borderRadius: '100px',
    padding: '4px 12px',
  },
  card: {
    background: '#FAF7F2',
    borderRadius: '18px',
    padding: '2rem 1.5rem',
  },
  sectionLabel: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#3D2E26',
    marginBottom: '0.85rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '1rem',
  },
  fieldLabel: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#7A6152',
  },
  optional: {
    fontSize: '11px',
    fontWeight: 400,
    color: '#B5C4B1',
  },
  input: {
    background: '#fff',
    border: '1px solid #EDE5D8',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '14px',
    color: '#3D2E26',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  },
  textarea: {
    background: '#fff',
    border: '1px solid #EDE5D8',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '14px',
    color: '#3D2E26',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    resize: 'vertical',
    lineHeight: 1.6,
    transition: 'border-color 0.2s',
  },
  divider: {
    height: '1px',
    background: '#EDE5D8',
    margin: '1.25rem 0',
  },
  stageGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    marginBottom: '0.5rem',
  },
  stageBtn: {
    background: '#fff',
    border: '1.5px solid #EDE5D8',
    borderRadius: '10px',
    padding: '10px 12px',
    fontSize: '12.5px',
    color: '#7A6152',
    fontFamily: 'var(--font-sans)',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.15s',
  },
  stageBtnActive: {
    background: '#FBF0EE',
    borderColor: '#C9918A',
    color: '#3D2E26',
    fontWeight: 500,
  },
  hearGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  hearBtn: {
    background: '#fff',
    border: '1.5px solid #EDE5D8',
    borderRadius: '100px',
    padding: '7px 14px',
    fontSize: '12px',
    color: '#7A6152',
    fontFamily: 'var(--font-sans)',
    cursor: 'pointer',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap',
  },
  hearBtnActive: {
    background: '#FBF0EE',
    borderColor: '#C9918A',
    color: '#3D2E26',
    fontWeight: 500,
  },
  errorMsg: {
    fontSize: '13px',
    color: '#C9918A',
    marginBottom: '0.75rem',
    textAlign: 'center',
  },
  btnSubmit: {
    width: '100%',
    background: '#C9918A',
    color: '#FAF7F2',
    border: 'none',
    padding: '15px',
    borderRadius: '100px',
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'var(--font-sans)',
    marginTop: '1.25rem',
    transition: 'opacity 0.2s',
    letterSpacing: '0.01em',
  },
  note: {
    fontSize: '12px',
    color: '#9B5E58',
    textAlign: 'center',
    marginTop: '1rem',
    lineHeight: 1.6,
    fontStyle: 'italic',
  },
  success: {
    textAlign: 'center',
    padding: '1.5rem 1rem',
  },
  successIcon: {
    fontSize: '40px',
    marginBottom: '1rem',
  },
  successTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '24px',
    color: '#3D2E26',
    margin: '0 0 0.75rem',
  },
  successBody: {
    fontSize: '14px',
    color: '#7A6152',
    lineHeight: 1.75,
    margin: '0 0 1rem',
  },
  successNote: {
    fontSize: '12px',
    color: '#B5C4B1',
    fontStyle: 'italic',
    margin: 0,
  },
};

export default WaitlistSection;
