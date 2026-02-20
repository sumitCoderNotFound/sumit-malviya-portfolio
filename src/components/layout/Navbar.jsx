import React from 'react';
import { motion } from 'framer-motion';
import { useNavScroll } from '../../hooks';
import { scrollTo } from '../../utils';

const NAV_LINKS = ['about', 'projects', 'skills', 'hackathons', 'experience', 'contact'];

export default function Navbar() {
  const scrolled = useNavScroll();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '0 48px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        background: scrolled ? 'rgba(8,12,20,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      {/* Logo */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: '-0.5px',
          color: 'var(--text)',
          cursor: 'pointer',
        }}
      >
        SM<span style={{ color: 'var(--blue)' }}>.</span>
      </div>

      {/* Links */}
      <ul style={{ display: 'flex', gap: 28, listStyle: 'none', alignItems: 'center' }}>
        {NAV_LINKS.map(link => (
          <li key={link}>
            <motion.a
              whileHover={{ color: 'var(--text)' }}
              href={`#${link}`}
              onClick={e => { e.preventDefault(); scrollTo(link); }}
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.5px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                transition: 'color 0.2s',
                textTransform: 'capitalize',
              }}
            >
              {link}
            </motion.a>
          </li>
        ))}
        <li>
          <motion.a
            whileHover={{ background: 'rgba(59,130,246,0.2)' }}
            href="https://drive.google.com/file/d/18c9Lt9JCsZ_eV3sayfB3gA9A-1-bVxrv/view"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '7px 18px',
              borderRadius: 8,
              border: '1px solid rgba(59,130,246,0.3)',
              background: 'rgba(59,130,246,0.08)',
              color: 'var(--blue)',
              fontSize: 12,
              fontFamily: 'var(--font-mono)',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            Resume ↗
          </motion.a>
        </li>
      </ul>
    </motion.nav>
  );
}
