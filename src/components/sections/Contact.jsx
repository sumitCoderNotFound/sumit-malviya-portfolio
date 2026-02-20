import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel, SectionTitle, Accent, Reveal } from '../ui';
import { personal } from '../../data';

const contactLinks = [
  { label: 'LinkedIn', icon: '💼', href: personal.linkedin },
  { label: 'GitHub',   icon: '⌨️', href: personal.github },
  { label: 'Email',    icon: '✉️', href: `mailto:${personal.email}` },
];

const contactDetails = [
  { label: 'Email',    val: personal.email },
  { label: 'Phone',    val: personal.phone },
  { label: 'Location', val: personal.location },
  { label: 'Status',   val: '● Available Now', emerald: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <Reveal>
        <SectionLabel>// 07. contact</SectionLabel>
        <SectionTitle>
          Open to<br />
          <Accent>the right opportunity.</Accent>
        </SectionTitle>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
        {/* Left */}
        <Reveal delay={0.05}>
          <p style={{
            fontSize: 16, color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: 36,
          }}>
            I'm actively looking for{' '}
            <strong style={{ color: 'var(--text)' }}>
              graduate software engineering roles, backend positions, and full-stack opportunities
            </strong>{' '}
            at UK product-based companies and MNCs.
            <br /><br />
            If you're building something interesting — let's talk.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {contactLinks.map(l => (
              <motion.a
                key={l.label}
                whileHover={{ y: -2, borderColor: 'rgba(59,130,246,0.3)' }}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '13px 22px', borderRadius: 10,
                  border: '1px solid var(--glass-border)',
                  background: 'var(--glass)',
                  color: 'var(--text-dim)', fontSize: 14,
                  textDecoration: 'none', fontWeight: 500,
                  backdropFilter: 'blur(10px)',
                  transition: 'var(--transition)',
                }}
              >
                <span>{l.icon}</span>
                {l.label} ↗
              </motion.a>
            ))}
          </div>
        </Reveal>

        {/* Right: Info card */}
        <Reveal delay={0.15}>
          <div style={{
            padding: 28, borderRadius: 16,
            border: '1px solid var(--glass-border)',
            background: 'var(--glass)',
            backdropFilter: 'blur(20px)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)',
              textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20,
            }}>
              Contact Details
            </div>

            {contactDetails.map(item => (
              <div
                key={item.label}
                style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--glass-border)',
                }}
              >
                <span style={{
                  fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)',
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontSize: 13, fontWeight: 500,
                  color: item.emerald ? 'var(--emerald)' : 'var(--text)',
                }}>
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
