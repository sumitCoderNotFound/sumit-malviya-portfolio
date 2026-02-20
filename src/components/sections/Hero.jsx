import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '../../hooks';
import { Button, Reveal } from '../ui';
import { personal, typingStrings, heroStats } from '../../data';
import { scrollTo } from '../../utils';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const typedText = useTypingEffect(typingStrings);

  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '0 48px',
          paddingTop: 64,
          position: 'relative',
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        {/* Left: Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ flex: 1 }}
        >
          {/* Available badge */}
          <motion.div variants={item}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              borderRadius: 100,
              border: '1px solid rgba(16,185,129,0.25)',
              background: 'rgba(16,185,129,0.06)',
              fontSize: 12,
              fontFamily: 'var(--font-mono)',
              color: 'var(--emerald)',
              marginBottom: 32,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--emerald)',
                animation: 'pulse 2s infinite',
              }} />
              Available for UK Software Roles · MSc Northumbria
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 8vw, 96px)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-3px',
            }}
          >
            SUMIT<br />
            <span style={{ color: 'var(--blue)' }}>MALVIYA</span>
          </motion.h1>

          {/* Typing */}
          <motion.div
            variants={item}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 18,
              color: 'var(--text-muted)',
              margin: '28px 0 12px',
              minHeight: 28,
            }}
          >
            / {typedText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ color: 'var(--blue)' }}
            >
              |
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            style={{
              fontSize: 16,
              color: 'var(--text-dim)',
              lineHeight: 1.75,
              maxWidth: 540,
              marginBottom: 48,
            }}
          >
            {personal.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => scrollTo('projects')}>
              View Projects ↓
            </Button>
            <Button
              variant="secondary"
              href={personal.cvUrl}
              target="_blank"
            >
              ↓ Download CV
            </Button>
            <Button variant="secondary" onClick={() => scrollTo('contact')}>
              Contact →
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Stats */}
        <motion.div
          style={{
            position: 'absolute',
            right: 48,
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '18px 22px',
                borderRadius: 14,
                border: '1px solid var(--glass-border)',
                background: 'var(--glass)',
                backdropFilter: 'blur(20px)',
                textAlign: 'center',
                minWidth: 128,
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 30,
                fontWeight: 800,
                color: 'var(--blue)',
                lineHeight: 1,
              }}>
                {stat.num}
              </div>
              <div style={{
                fontSize: 10,
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                marginTop: 6,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
