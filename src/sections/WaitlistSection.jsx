// ============================================
// NURRA — Waitlist Section
// "Join the Nurra Waitlist"
// 🔜 Supabase integration will be added here
// ============================================

import { useState } from 'react';

const WaitlistSection = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail]         = useState('');
  const [dueDate, setDueDate]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleSubmit = async () => {
    // Basic validation
    if (!firstName.trim() || !email.trim()) {
      setError('Please enter your name and email to join.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // ✅ This will call our Netlify Function later
      // which saves to Supabase AND emails you
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName.trim(),
          email: email.trim(),
          due_date: dueDate || null,
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
    // ⚠️ id="waitlist" — this is what scroll buttons target
    <section id="waitlist" style={styles.wrap}>
      <div style={styles.inner}>
        <p style={styles.label}>Early access</p>
        <h2 style={styles.title}>Join the Nurra Waitlist</h2>
        <p style={styles.sub}>
          Be one of the first moms to receive early access and a special launch discount.
        </p>

        <div style={styles.card}>
          {/* ── Success State ── */}
          {submitted ? (
            <div style={styles.success}>
              <div style={styles.successIcon}>🌸</div>
              <p style={styles.successTitle}>You're on the list!</p>
              <p style={styles.successBody}>
                Welcome to Nurra. We'll reach out soon with your early access
                and something special.
              </p>
            </div>
          ) : (
            /* ── Form State ── */
            <>
              {/* First name */}
              <div style={styles.field}>
                <label style={styles.fieldLabel} htmlFor="wl-name">
                  First name
                </label>
                <input
                  id="wl-name"
                  type="text"
                  placeholder="e.g. Sofia"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={styles.input}
                />
              </div>

              {/* Email */}
              <div style={styles.field}>
                <label style={styles.fieldLabel} htmlFor="wl-email">
                  Email address
                </label>
                <input
                  id="wl-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                />
              </div>

              {/* Due date (optional) */}
              <div style={styles.field}>
                <label style={styles.fieldLabel} htmlFor="wl-due">
                  Due date{' '}
                  <span style={styles.optional}>· optional</span>
                </label>
                <input
                  id="wl-due"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  style={styles.input}
                />
              </div>

              {/* Error message */}
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
                {loading ? 'Joining...' : 'Join Waitlist →'}
              </button>

              <p style={styles.note}>🔒 Free to join. No spam, ever.</p>
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
    maxWidth: '440px',
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
    lineHeight: 1.3,
  },
  sub: {
    fontSize: '14px',
    color: '#7A5E58',
    textAlign: 'center',
    lineHeight: 1.75,
    margin: '0 0 2rem',
  },
  card: {
    background: '#FAF7F2',
    borderRadius: '16px',
    padding: '2rem 1.5rem',
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
    marginLeft: '4px',
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
    padding: '14px',
    borderRadius: '100px',
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: 'var(--font-sans)',
    marginTop: '0.5rem',
    transition: 'opacity 0.2s',
  },
  note: {
    fontSize: '12px',
    color: '#B5C4B1',
    textAlign: 'center',
    marginTop: '1rem',
  },
  success: {
    textAlign: 'center',
    padding: '1.5rem 1rem',
  },
  successIcon: {
    fontSize: '36px',
    marginBottom: '0.75rem',
  },
  successTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '22px',
    color: '#3D2E26',
    margin: '0 0 0.5rem',
  },
  successBody: {
    fontSize: '14px',
    color: '#8C7B72',
    lineHeight: 1.7,
    margin: 0,
  },
};

export default WaitlistSection;
