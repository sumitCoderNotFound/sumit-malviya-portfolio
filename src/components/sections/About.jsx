/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { SectionLabel, SectionTitle, Accent, Reveal } from '../ui';
import { aboutTags, education } from '../../data';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <Reveal>
        <SectionLabel>&#47;&#47; 01. about</SectionLabel>
        <SectionTitle>
          Not just a developer.<br />
          <Accent>A system thinker.</Accent>
        </SectionTitle>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start' }}>
        {/* Left: Text */}
        <Reveal delay={0.05}>
          <div>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, fontSize: 16, marginBottom: 20 }}>
              With <strong style={{ color: 'var(--text)' }}>4+ years of production software development</strong>, I've built
              scalable systems across MERN, MEAN, Django and Spring Boot — from EdTech platforms
              serving millions to enterprise integration APIs for hospitality chains.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, fontSize: 16, marginBottom: 20 }}>
              My MSc at Northumbria deepens my understanding of{' '}
              <strong style={{ color: 'var(--text)' }}>AI systems, microservice architecture, and cloud computing</strong> —
              culminating in a dissertation integrating YOLOv8 into Newcastle's Urban Digital Twin.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.85, fontSize: 16, marginBottom: 32 }}>
              I think about <strong style={{ color: 'var(--text)' }}>auth separation, scheduler pipelines, data contracts,
              and service boundaries</strong> — not just features.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {aboutTags.map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 6,
                    border: '1px solid var(--glass-border)',
                    background: 'var(--glass)',
                    fontSize: 12,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)',
                    cursor: 'default',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = 'rgba(59,130,246,0.3)';
                    e.target.style.color = 'var(--blue)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = 'var(--glass-border)';
                    e.target.style.color = 'var(--text-dim)';
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: Info cards */}
        <Reveal delay={0.15}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'University', val: 'Northumbria University, Newcastle', accent: 'blue' },
              { label: 'Degree',     val: 'MSc Advanced Computer Science',     accent: 'blue' },
              { label: 'Duration',   val: 'Jan 2025 – Jun 2026',               accent: null  },
              { label: 'Location',   val: 'Newcastle, United Kingdom',         accent: null  },
              { label: 'Status',     val: '● Open to UK Roles',                accent: 'emerald' },
            ].map(item => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '13px 18px',
                  borderRadius: 10,
                  border: '1px solid var(--glass-border)',
                  background: 'var(--glass)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span style={{
                  fontSize: 11,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: item.accent === 'blue'
                    ? 'var(--blue)'
                    : item.accent === 'emerald'
                    ? 'var(--emerald)'
                    : 'var(--text)',
                }}>
                  {item.val}
                </span>
              </div>
            ))}

            {/* MSc Modules */}
            <div style={{
              marginTop: 8,
              padding: '18px',
              borderRadius: 12,
              border: '1px solid rgba(59,130,246,0.15)',
              background: 'rgba(59,130,246,0.04)',
            }}>
              <div style={{
                fontSize: 10, fontFamily: 'var(--font-mono)',
                color: 'var(--blue)', textTransform: 'uppercase',
                letterSpacing: 2, marginBottom: 12,
              }}>
                MSc Modules
              </div>
              {education[0].modules.map(mod => (
                <div key={mod} style={{
                  fontSize: 12, color: 'var(--text-dim)', padding: '4px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  → {mod}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
