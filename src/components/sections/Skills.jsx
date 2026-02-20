/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useRef, useEffect } from 'react';
import { SectionLabel, SectionTitle, Accent, Reveal } from '../ui';
import { skills, radarData } from '../../data';
import { getAccentColor } from '../../utils';

// ─── Animated SVG Radar ───────────────────────────────────────────────────────
function RadarChart({ data }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cx = 170, cy = 170, r = 120;
  const n  = data.length;

  const getPoint = (i, val) => {
    const angle  = (Math.PI * 2 * i / n) - Math.PI / 2;
    const radius = (val / 100) * r;
    return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
  };

  const getLabelPoint = (i) => {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    return [cx + (r + 30) * Math.cos(angle), cy + (r + 30) * Math.sin(angle)];
  };

  const gridLevels  = [0.25, 0.5, 0.75, 1];
  const dataPoints  = data.map((d, i) => getPoint(i, animated ? d.value : 0));
  const polygonPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + 'Z';

  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'center' }}>
      <svg width="340" height="340" style={{ overflow: 'visible' }}>
        {/* Grid rings */}
        {gridLevels.map(level => {
          const pts  = data.map((_, i) => getPoint(i, level * 100));
          const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + 'Z';
          return <path key={level} d={path} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />;
        })}

        {/* Spoke lines */}
        {data.map((_, i) => {
          const [x, y] = getPoint(i, 100);
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />;
        })}

        {/* Filled polygon */}
        <path
          d={polygonPath}
          fill="rgba(59,130,246,0.1)"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ transition: 'all 1.1s cubic-bezier(0.16,1,0.3,1)' }}
        />

        {/* Data points */}
        {dataPoints.map(([x, y], i) => (
          <circle
            key={i}
            cx={x} cy={y} r="4"
            fill="#3B82F6"
            style={{
              opacity: animated ? 1 : 0,
              transition: `opacity 0.4s ease ${i * 0.07}s`,
            }}
          />
        ))}

        {/* Labels */}
        {data.map((d, i) => {
          const [x, y] = getLabelPoint(i);
          return (
            <text
              key={i} x={x} y={y}
              textAnchor="middle" dominantBaseline="middle"
              fill="#6B7898" fontSize="11"
              fontFamily="'DM Mono', monospace"
            >
              {d.label}
            </text>
          );
        })}

        {/* Centre dot */}
        <circle cx={cx} cy={cy} r="3" fill="#3B82F6" opacity="0.4" />
      </svg>
    </div>
  );
}

// ─── Skills Category Card ─────────────────────────────────────────────────────
function SkillCard({ category }) {
  const accent = getAccentColor(category.color);

  return (
    <div
      style={{
        padding: 20, borderRadius: 12,
        border: '1px solid var(--glass-border)',
        background: 'var(--glass)',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.25s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = category.color === 'blue' ? 'rgba(59,130,246,0.2)' : 'rgba(16,185,129,0.2)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--glass-border)')}
    >
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 10,
        textTransform: 'uppercase', letterSpacing: 2,
        color: accent, marginBottom: 12,
      }}>
        {category.category}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {category.items.map(item => (
          <span
            key={item}
            style={{
              fontSize: 11, color: 'var(--text-dim)',
              padding: '3px 8px', borderRadius: 4,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <Reveal>
        <SectionLabel>&#47;&#47; 03. skills</SectionLabel>
        <SectionTitle>
          Stack depth.<br />
          <Accent>Proven in production.</Accent>
        </SectionTitle>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        {/* Skills grid */}
        <Reveal delay={0.05}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {skills.map(cat => <SkillCard key={cat.category} category={cat} />)}
          </div>
        </Reveal>

        {/* Radar */}
        <Reveal delay={0.2}>
          <div>
            <div style={{
              textAlign: 'center', marginBottom: 20,
              fontSize: 11, fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 2,
            }}>
              Skill Proficiency Radar
            </div>
            <RadarChart data={radarData} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
