/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { SectionLabel, SectionTitle, Accent, Reveal, ArchNode } from '../ui';
import { systemDesigns } from '../../data';

function SystemCard({ design, index }) {
  return (
    <div
      style={{
        padding: 26, borderRadius: 16,
        border: '1px solid var(--glass-border)',
        background: 'var(--glass)',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.25s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--glass-border)')}
    >
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700,
        color: 'var(--text)', marginBottom: 10,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span>{design.icon}</span>
        {design.title}
      </div>

      <p style={{
        fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 16,
      }}>
        {design.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6 }}>
        {design.flow.map((node, ni) => (
          <ArchNode key={ni} label={node.label} cls={node.cls} />
        ))}
      </div>
    </div>
  );
}

export default function SystemDesign() {
  return (
    <section className="section-wrapper">
      <Reveal>
        <SectionLabel>&#47;&#47; 04. architecture thinking</SectionLabel>
        <SectionTitle>
          Systems I have<br />
          <Accent>designed.</Accent>
        </SectionTitle>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
        {systemDesigns.map((design, i) => (
          <SystemCard key={design.title} design={design} index={i} />
        ))}
      </div>
    </section>
  );
}
