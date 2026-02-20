import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel, SectionTitle, Accent, Reveal, Tag } from '../ui';
import { hackathons } from '../../data';
import { getAccentColor, getAccentBg, getAccentBorder } from '../../utils';

// Certificate images (copy to public folder at build time)
const CERT_HACKATHON = process.env.PUBLIC_URL + '/certificates/hackathon.png';
const CERT_SMARTGIG  = process.env.PUBLIC_URL + '/certificates/smartgig.png';

function HackathonCard({ hack, index }) {
  const accentColor = getAccentColor(hack.color);
  const accentBg    = getAccentBg(hack.color, 0.05);
  const accentBdr   = getAccentBorder(hack.color, 0.2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: 16, overflow: 'hidden',
        border: `1px solid ${accentBdr}`,
        background: accentBg,
        backdropFilter: 'blur(20px)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Certificate image */}
      {hack.certImg && (
        <div style={{ height: 160, position: 'relative', overflow: 'hidden' }}>
          <img
            src={CERT_HACKATHON}
            alt="Certificate"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
            onError={e => { e.target.parentElement.style.display = 'none'; }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(8,12,20,0.95))',
          }} />
          <div style={{
            position: 'absolute', top: 12, right: 12,
            padding: '4px 10px', borderRadius: 6,
            background: 'rgba(59,130,246,0.85)', color: 'white',
            fontSize: 10, fontFamily: 'var(--font-mono)',
          }}>
            Certificate Verified
          </div>
        </div>
      )}

      {/* No cert placeholder */}
      {!hack.certImg && (
        <div style={{
          height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(255,255,255,0.02)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <span style={{ fontSize: 32 }}>🏆</span>
        </div>
      )}

      <div style={{ padding: 22, flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 800,
            lineHeight: 1, color: accentColor,
          }}>
            {hack.place}
          </div>
          <Tag color={hack.color}>{hack.tag}</Tag>
        </div>

        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700,
          color: 'var(--text)', marginBottom: 4,
        }}>
          {hack.name}
        </div>
        <div style={{
          fontSize: 11, fontFamily: 'var(--font-mono)', marginBottom: 12,
          color: 'var(--text-muted)',
        }}>
          <span style={{ color: accentColor }}>{hack.org}</span> · {hack.date}
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.65 }}>
          {hack.desc}
        </p>
      </div>
    </motion.div>
  );
}

function SmartGigBanner() {
  return (
    <Reveal delay={0.2}>
      <div style={{
        marginTop: 24, borderRadius: 16, overflow: 'hidden',
        border: '1px solid rgba(16,185,129,0.2)',
        background: 'rgba(16,185,129,0.04)',
        display: 'grid', gridTemplateColumns: '280px 1fr',
      }}>
        {/* Cert preview */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 180 }}>
          <img
            src={CERT_SMARTGIG}
            alt="SmartGig Certificate"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
            onError={e => {
              e.target.parentElement.style.display = 'none';
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, transparent 60%, rgba(8,12,20,0.5))',
          }} />
        </div>

        {/* Text */}
        <div style={{
          padding: '28px 32px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{
            fontSize: 10, fontFamily: 'var(--font-mono)',
            color: 'var(--emerald)', textTransform: 'uppercase',
            letterSpacing: 2, marginBottom: 10,
          }}>
            Certificate of Appreciation · Q2 2023
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700,
            color: 'var(--text)', marginBottom: 8,
          }}>
            Best Performer & Team Lead — SmartGig Technologies
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.65 }}>
            Awarded by CEO Mahesh Nayani in recognition of outstanding performance and
            dedication during Q2 2023. Recognised for leading the team and delivering
            high-impact features across Infinity Learn and LYWO platforms.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Hackathons() {
  return (
    <section id="hackathons" className="section-wrapper">
      <Reveal>
        <SectionLabel>// 05. hackathons</SectionLabel>
        <SectionTitle>
          3 UK Hackathons.<br />
          <Accent>1 podium finish.</Accent>
        </SectionTitle>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {hackathons.map((hack, i) => (
          <HackathonCard key={hack.name} hack={hack} index={i} />
        ))}
      </div>

      <SmartGigBanner />
    </section>
  );
}
