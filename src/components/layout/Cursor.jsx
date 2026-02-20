import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [hover, setHover] = useState(false);
  const rafRef  = useRef(null);
  const posRef  = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only show on pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const { x, y } = posRef.current;
          if (dotRef.current)  dotRef.current.style.transform  = `translate(${x - 3}px, ${y - 3}px)`;
          if (ringRef.current) ringRef.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
          rafRef.current = null;
        });
      }
    };

    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);

    window.addEventListener('mousemove', onMove, { passive: true });

    const t = setTimeout(() => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    }, 500);

    return () => {
      window.removeEventListener('mousemove', onMove);
      clearTimeout(t);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--blue)',
          pointerEvents: 'none', zIndex: 9999,
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 32, height: 32, borderRadius: '50%',
          border: `1px solid ${hover ? 'var(--emerald)' : 'rgba(59,130,246,0.4)'}`,
          pointerEvents: 'none', zIndex: 9998,
          transition: 'border-color 0.2s, transform 0.08s linear',
          willChange: 'transform',
        }}
      />
    </>
  );
}