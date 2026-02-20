import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getAccentColor, getAccentBg, getAccentBorder } from '../../utils';

// ─── Section Label ─────────────────────────────────────────────────────────────
export function SectionLabel({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--blue)',
      textTransform: 'uppercase',
      letterSpacing: 3,
      marginBottom: 16,
      display: 'block',
    }}>
      {children}
    </span>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────
export function SectionTitle({ children, style }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px, 5vw, 52px)',
      fontWeight: 800,
      letterSpacing: '-2px',
      lineHeight: 1.05,
      color: 'var(--text)',
      marginBottom: 64,
      ...style,
    }}>
      {children}
    </h2>
  );
}

export function Accent({ children }) {
  return <span style={{ color: 'var(--blue)' }}>{children}</span>;
}

// ─── Button ───────────────────────────────────────────────────────────────────
export function Button({ variant = 'primary', children, onClick, href, target, style }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '13px 26px',
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
    transition: 'var(--transition)',
    letterSpacing: 0.3,
    fontFamily: 'var(--font-body)',
    ...style,
  };

  const variants = {
    primary: {
      background: 'var(--blue)',
      color: 'white',
    },
    secondary: {
      background: 'var(--glass)',
      border: '1px solid var(--glass-border)',
      color: 'var(--text-dim)',
      backdropFilter: 'blur(10px)',
    },
    ghost: {
      background: 'transparent',
      border: '1px solid rgba(59,130,246,0.3)',
      color: 'var(--blue)',
    },
  };

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
      <Tag
        href={href}
        target={target}
        onClick={onClick}
        style={{ ...base, ...variants[variant] }}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

// ─── Glass Card ───────────────────────────────────────────────────────────────
export function GlassCard({ children, style, hoverBorder, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverBorder ? { borderColor: hoverBorder, y: -4 } : { y: -2 }}
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(20px)',
        borderRadius: 'var(--radius-lg)',
        transition: 'var(--transition)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Tag / Chip ───────────────────────────────────────────────────────────────
export function Tag({ children, color = 'blue' }) {
  return (
    <span style={{
      padding: '4px 10px',
      borderRadius: 5,
      fontSize: 10,
      fontFamily: 'var(--font-mono)',
      background: getAccentBg(color, 0.1),
      border: `1px solid ${getAccentBorder(color, 0.2)}`,
      color: getAccentColor(color),
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}

// ─── Tech Badge ───────────────────────────────────────────────────────────────
export function TechBadge({ children }) {
  return (
    <span style={{
      padding: '4px 10px',
      borderRadius: 5,
      fontSize: 11,
      fontFamily: 'var(--font-mono)',
      background: 'var(--bg3)',
      color: 'var(--text-muted)',
      border: '1px solid rgba(255,255,255,0.05)',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}

// ─── Reveal Wrapper ───────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
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
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────
export function Divider() {
  return <div className="h-divider" />;
}

// ─── Architecture Node ────────────────────────────────────────────────────────
export function ArchNode({ label, cls }) {
  const styles = {
    blue:   { bg: 'rgba(59,130,246,0.12)',  color: 'var(--blue)',    border: 'rgba(59,130,246,0.2)' },
    emerald:{ bg: 'rgba(16,185,129,0.10)',  color: 'var(--emerald)', border: 'rgba(16,185,129,0.2)' },
    slate:  { bg: 'rgba(100,116,139,0.10)', color: '#94a3b8',        border: 'rgba(100,116,139,0.2)' },
  };
  const s = styles[cls] || styles.slate;

  if (cls === 'arrow') {
    return (
      <span style={{
        fontSize: 11, color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        animation: 'arrowPulse 2.5s ease-in-out infinite',
      }}>
        ──▶
      </span>
    );
  }

  return (
    <span style={{
      padding: '5px 10px',
      borderRadius: 6,
      fontSize: 11,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      background: s.bg,
      color: s.color,
      border: `1px solid ${s.border}`,
    }}>
      {label}
    </span>
  );
}