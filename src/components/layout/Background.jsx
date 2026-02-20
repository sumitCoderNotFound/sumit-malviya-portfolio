import React from 'react';

const orbCSS = `
  @keyframes orbDrift1 {
    0%   { transform: translate(0px, 0px); }
    50%  { transform: translate(30px, 20px); }
    100% { transform: translate(0px, 0px); }
  }
  @keyframes orbDrift2 {
    0%   { transform: translate(0px, 0px); }
    50%  { transform: translate(-25px, -20px); }
    100% { transform: translate(0px, 0px); }
  }
  @keyframes orbDrift3 {
    0%   { transform: translate(0px, 0px); }
    50%  { transform: translate(20px, -25px); }
    100% { transform: translate(0px, 0px); }
  }
`;

export default function Background() {
  return (
    <>
      <style>{orbCSS}</style>

      {/* Noise overlay — pure CSS, zero JS */}
      <div className="noise-overlay" />

      {/* Orbs — CSS animation only, no Framer Motion, no blur filter */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)',
          top: '-20%', left: '-10%',
          animation: 'orbDrift1 18s ease-in-out infinite',
          willChange: 'transform',
        }} />
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 65%)',
          bottom: '-10%', right: '-10%',
          animation: 'orbDrift2 22s ease-in-out infinite',
          willChange: 'transform',
        }} />
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%)',
          top: '45%', left: '40%',
          animation: 'orbDrift3 26s ease-in-out infinite',
          willChange: 'transform',
        }} />
      </div>
    </>
  );
}