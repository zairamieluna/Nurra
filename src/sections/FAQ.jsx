// ============================================
// NURRA — FAQ Section
// "Frequently asked questions"
// Accordion — one open at a time
// ============================================

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Who is Nurra for?',
    answer:
      'Nurra is designed for new and expecting mothers in Canada who want compassionate, culturally informed postpartum support. Whether you\'re a first-time mom or navigating a new experience, Nurra meets you where you are.',
  },
  {
    id: 2,
    question: 'What is included in postpartum support?',
    answer:
      'Our postpartum support includes emotional wellness check-ins, curated care resources, and a community of mothers who understand your journey. Specific offerings may vary depending on your chosen plan.',
  },
  {
    id: 3,
    question: 'Is Nurra virtual or in-home?',
    answer:
      'Nurra is primarily virtual, making it accessible from the comfort of your home. This means you can receive support at your own pace, on your schedule — no travel required.',
  },
  {
    id: 4,
    question: 'Can I customize my support plan?',
    answer:
      'Yes. Nurra is built around your unique needs. You\'ll be able to personalize your experience based on your preferences, cultural background, and the kind of support that matters most to you.',
  },
  {
    id: 5,
    question: 'How much does Nurra cost?',
    answer:
      'Pricing details will be shared closer to our official launch. Our goal is to keep Nurra accessible and affordable for mothers across Canada. Join the waitlist to be the first to know.',
  },
  {
    id: 6,
    question: 'Is there a launch discount?',
    answer:
      'Yes — the first 10 moms who join Nurra will receive an exclusive launch discount. Spots are limited, so joining the waitlist early is the best way to secure your place.',
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={styles.wrap} aria-label="Frequently Asked Questions">
      <p style={styles.eyebrow}>Got questions?</p>
      <h2 style={styles.heading}>Frequently asked questions</h2>
      <p style={styles.subtext}>
        Everything you need to know about Nurra and how we support new mothers.
      </p>

      {/* Accordion */}
      <div style={styles.list}>
        {faqs.map((faq, index) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              style={{
                ...styles.item,
                borderTop: index === 0 ? '0.5px solid #EDE5D8' : 'none',
              }}
            >
              {/* Question button */}
              <button
                style={styles.question}
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
              >
                <span style={styles.questionText}>{faq.question}</span>
                <span style={{
                  ...styles.iconWrap,
                  background: isOpen ? '#F4C0D1' : '#FBEAF0',
                }}>
                  <i
                    className="ti ti-plus"
                    style={{
                      fontSize: '13px',
                      color: '#D4537E',
                      display: 'block',
                      transition: 'transform 0.25s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  />
                </span>
              </button>

              {/* Answer */}
              {isOpen && (
                <div style={styles.answer}>
                  <p style={styles.answerText}>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div style={styles.footer}>
        <div style={styles.footerText}>
          <strong style={styles.footerStrong}>Still have questions?</strong>
          We're happy to help — reach out anytime.
        </div>
        <button style={styles.contactBtn} onClick={scrollToWaitlist}>
          Contact us
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
    padding: '3rem 1.5rem',
    maxWidth: '640px',
    margin: '0 auto',
    fontFamily: 'var(--font-sans)',
  },
  eyebrow: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#D4537E',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  heading: {
    fontSize: '22px',
    fontWeight: 500,
    color: '#3D2E26',
    margin: '0 0 0.5rem',
  },
  subtext: {
    fontSize: '15px',
    color: '#8C7B72',
    margin: '0 0 2rem',
    lineHeight: 1.6,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  item: {
    borderBottom: '0.5px solid #EDE5D8',
  },
  question: {
    width: '100%',
    background: 'none',
    border: 'none',
    padding: '1.1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    textAlign: 'left',
    gap: '1rem',
  },
  questionText: {
    fontSize: '15px',
    fontWeight: 500,
    color: '#3D2E26',
    lineHeight: 1.5,
    fontFamily: 'var(--font-sans)',
  },
  iconWrap: {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    border: '0.5px solid #F4C0D1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'background 0.2s',
  },
  answer: {
    paddingBottom: '1.1rem',
  },
  answerText: {
    fontSize: '14px',
    color: '#8C7B72',
    lineHeight: 1.75,
    margin: 0,
  },
  footer: {
    marginTop: '2rem',
    padding: '1.25rem 1.5rem',
    background: '#FBEAF0',
    borderRadius: '14px',
    border: '0.5px solid #F4C0D1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  footerText: {
    fontSize: '14px',
    color: '#72243E',
    lineHeight: 1.5,
  },
  footerStrong: {
    display: 'block',
    fontWeight: 500,
    color: '#4B1528',
    marginBottom: '2px',
  },
  contactBtn: {
    padding: '9px 18px',
    background: '#D4537E',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-sans)',
    transition: 'background 0.2s',
  },
};

export default FAQ;
