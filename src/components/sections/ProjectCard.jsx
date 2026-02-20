import React, { useRef, useEffect, useState } from 'react';
import { TechBadge, ArchNode } from '../ui';
import { getAccentColor, getAccentBg, getAccentBorder } from '../../utils';

function ArchDiagram({ arch }) {
  return (
    <div style={{
      background: 'rgba(8,12,20,0.6)',
      borderRadius: 10,
      padding: '12px 16px',
      border: '1px solid rgba(255,255,255,0.05)',
    }}>
      {arch.map((row, ri) => (
        <div key={ri} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          margin: '4px 0',
          flexWrap: 'wrap',
        }}>
          {row.map((item, ii) => (
            <ArchNode
              key={ii}
              label={item}
              cls={item === '→' || item === '←' ? 'arrow' : ii === 0 ? 'slate' : ii === 2 ? 'blue' : 'emerald'}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const color       = project.color || 'blue';
  const accentColor = getAccentColor(color);
  const accentBg    = getAccentBg(color, 0.1);
  const accentBdr   = getAccentBorder(color, 0.2);
  const ref         = useRef(null);
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
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s`,
        borderRadius: 16,
        border: '1px solid var(--glass-border)',
        background: 'var(--glass)',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.25s',
        cursor: 'default',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = accentBdr)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--glass-border)')}
    >
      {/* Header */}
      <div style={{ padding: '26px 26px 0' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22, marginBottom: 18,
          background: accentBg,
          border: `1px solid ${accentBdr}`,
        }}>
          {project.icon}
        </div>

        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 17, fontWeight: 700,
          color: 'var(--text)', marginBottom: 4,
        }}>
          {project.title}
        </div>

        <div style={{
          fontSize: 11, fontFamily: 'var(--font-mono)',
          color: accentColor, marginBottom: 10,
        }}>
          {project.subtitle}
        </div>

        <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.65, marginBottom: 0 }}>
          {project.desc}
        </p>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 26px 24px', marginTop: 'auto' }}>
        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {project.tech.map(t => <TechBadge key={t}>{t}</TechBadge>)}
        </div>

        {/* Architecture */}
        <ArchDiagram arch={project.arch} />

        {/* Footer row */}
        <div style={{
          marginTop: 12, display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 8,
        }}>
          <span style={{
            fontSize: 11, fontFamily: 'var(--font-mono)', color: accentColor,
          }}>
            ◆ {project.impact}
          </span>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 11, fontFamily: 'var(--font-mono)',
                padding: '4px 10px', borderRadius: 5,
                border: `1px solid ${accentBdr}`,
                background: 'transparent',
                color: accentColor, textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = accentBg)}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              Visit Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}