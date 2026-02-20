/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { SectionLabel, SectionTitle, Accent, Reveal } from '../ui';
import ProjectCard from './ProjectCard';
import { projectCategories } from '../../data';
import { getAccentColor, getAccentBg, getAccentBorder } from '../../utils';

function CategoryHeader({ cat, index }) {
  const accentColor = getAccentColor(cat.accentColor);
  const accentBg    = getAccentBg(cat.accentColor, 0.1);
  const accentBdr   = getAccentBorder(cat.accentColor, 0.2);

  return (
    <Reveal delay={index * 0.06}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, background: accentBg, border: `1px solid ${accentBdr}`,
          flexShrink: 0,
        }}>
          {cat.icon}
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 17, color: 'var(--text)', letterSpacing: '-0.3px',
          }}>
            {cat.label}
          </div>
          <div style={{
            fontSize: 11, fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)', marginTop: 2,
          }}>
            {cat.sublabel}
          </div>
        </div>
        <div style={{
          flex: 1, height: 1,
          background: 'linear-gradient(90deg, var(--glass-border), transparent)',
          marginLeft: 8,
        }} />
        <span style={{
          fontSize: 11, fontFamily: 'var(--font-mono)',
          color: accentColor, opacity: 0.7,
        }}>
          {cat.projects.length} project{cat.projects.length !== 1 ? 's' : ''}
        </span>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper">
      <Reveal>
        <SectionLabel>&#47;&#47; 02. projects</SectionLabel>
        <SectionTitle>
          Shipped. Designed.<br />
          <Accent>Production-grade.</Accent>
        </SectionTitle>
      </Reveal>

      {projectCategories.map((cat, ci) => (
        <div
          key={cat.id}
          style={{ marginBottom: ci < projectCategories.length - 1 ? 72 : 0 }}
        >
          <CategoryHeader cat={cat} index={ci} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 18,
          }}>
            {cat.projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
