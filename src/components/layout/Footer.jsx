import React from 'react';
import { personal } from '../../data';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 2,
      padding: '36px 48px',
      borderTop: '1px solid var(--glass-border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: 1280,
      margin: '0 auto',
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
        © 2025 <span style={{ color: 'var(--blue)' }}>Sumit Malviya</span>. Designed & Built with care.
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)',
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--emerald)',
          display: 'inline-block',
          animation: 'pulse 2s infinite',
        }} />
        Available for opportunities
      </div>
    </footer>
  );
}
