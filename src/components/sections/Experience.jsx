/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef, useEffect, useState } from 'react';
import { SectionLabel, SectionTitle, Accent, Reveal, Tag } from '../ui';
import { experiences } from '../../data';
import { getAccentColor } from '../../utils';

function TimelineDot({ color, index }) {
  const isFirst = index === 0;
  const c = getAccentColor(color || 'blue');
  return (
    <div style={{
      position: 'absolute', left: -38, top: 6,
      width: 12, height: 12, borderRadius: '50%',
      background: c,
      border: '2px solid var(--bg)',
      boxShadow: `0 0 ${isFirst ? 16 : 12}px ${c}${isFirst ? '80' : '50'}`,
    }} />
  );
}

function ExperienceItem({ exp, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative', marginBottom: 48,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-16px)',
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
      }}
    >
      <TimelineDot color={exp.tagColor} index={index} />

      {/* Date + Tag row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--blue)',
        }}>
          {exp.date}
        </span>
        {exp.tag && <Tag color={exp.tagColor || 'blue'}>{exp.tag}</Tag>}
      </div>

      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700,
        color: 'var(--text)', marginBottom: 3,
      }}>
        {exp.role}
      </div>
      <div style={{
        fontSize: 13, color: 'var(--emerald)', marginBottom: 10, fontWeight: 500,
      }}>
        {exp.company}
      </div>
      <p style={{
        fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 10,
      }}>
        {exp.desc}
      </p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {exp.bullets.map(b => (
          <li key={b} style={{
            fontSize: 13, color: 'var(--text-muted)',
            padding: '4px 0 4px 16px', position: 'relative', lineHeight: 1.6,
          }}>
            <span style={{
              position: 'absolute', left: 0, color: 'var(--blue)',
            }}>→</span>
            {b}
          </li>
        ))}
      </ul>

      {/* Links */}
      {(exp.link || exp.links) && (
        <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {exp.link && (
            <a
              href={exp.link.href}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '5px 12px', borderRadius: 6, fontSize: 11,
                fontFamily: 'var(--font-mono)',
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.2)',
                color: 'var(--blue)', textDecoration: 'none',
                transition: 'var(--transition)',
              }}
            >
              {exp.link.label}
            </a>
          )}
          {exp.links?.map(l => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '5px 12px', borderRadius: 6, fontSize: 11,
                fontFamily: 'var(--font-mono)',
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.2)',
                color: 'var(--blue)', textDecoration: 'none',
                transition: 'var(--transition)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// Achievements right panel
function AchievementsPanel() {
  return (
    <Reveal delay={0.2}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Hackathons */}
        <div style={{
          padding: '20px 22px', borderRadius: 14,
          border: '1px solid rgba(59,130,246,0.22)',
          background: 'rgba(59,130,246,0.04)',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--blue)',
            textTransform: 'uppercase', letterSpacing: 2, marginBottom: 14,
          }}>
            3 UK Hackathons
          </div>
          {[
            { place: '2nd', name: 'Stream Open Data Day 2025', loc: 'Newcastle', gold: true },
            { place: '—',   name: 'CS50 × Meta Hackathon',    loc: 'London',    gold: false },
            { place: '—',   name: 'International Biohackathon', loc: 'Newcastle', gold: false },
          ].map((h, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '9px 0',
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20,
                color: h.gold ? 'var(--blue)' : 'var(--text-muted)',
                minWidth: 30, textAlign: 'center',
              }}>
                {h.place}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: h.gold ? 600 : 400, color: h.gold ? 'var(--text)' : 'var(--text-dim)' }}>
                  {h.name}
                </div>
                <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {h.loc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Best Performer */}
        <div style={{
          padding: '22px', borderRadius: 14,
          border: '1px solid rgba(16,185,129,0.2)',
          background: 'rgba(16,185,129,0.04)',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--emerald)',
            textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10,
          }}>
            Recognition
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700,
            color: 'var(--text)', marginBottom: 8,
          }}>
            Best Performer & Team Lead
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6 }}>
            Awarded by CEO Mahesh Nayani at SmartGig Technologies — Q2 2023. Recognised for
            outstanding delivery and team leadership.
          </p>
        </div>

        {/* Hotelogix */}
        <div style={{
          padding: '22px', borderRadius: 14,
          border: '1px solid var(--glass-border)',
          background: 'var(--glass)',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)',
            textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10,
          }}>
            Freelance · Current
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700,
            color: 'var(--text)', marginBottom: 8,
          }}>
            Hotelogix Integration
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6 }}>
            Backend APIs for hotel key card integrations. Client-facing calls with hotels
            for onboarding. Deep PMS domain knowledge.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <Reveal>
        <SectionLabel>&#47;&#47; 06. experience</SectionLabel>
        <SectionTitle>
          Built for<br />
          <Accent>production environments.</Accent>
        </SectionTitle>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        {/* Timeline */}
        <div>
          <div style={{
            position: 'relative',
            paddingLeft: 32,
          }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: 0, top: 8, bottom: 0,
              width: 1,
              background: 'linear-gradient(180deg, var(--blue) 0%, rgba(59,130,246,0.1) 80%, transparent 100%)',
            }} />
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        <AchievementsPanel />
      </div>
    </section>
  );
}
