// Smooth scroll to section
export function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Color map helpers
export function getAccentColor(color) {
  const map = {
    blue:    'var(--blue)',
    emerald: 'var(--emerald)',
    violet:  'var(--violet)',
    slate:   '#94a3b8',
    gold:    '#F59E0B',
  };
  return map[color] || map.blue;
}

export function getAccentBg(color, opacity = 0.1) {
  const map = {
    blue:    `rgba(59,130,246,${opacity})`,
    emerald: `rgba(16,185,129,${opacity})`,
    violet:  `rgba(139,92,246,${opacity})`,
    slate:   `rgba(100,116,139,${opacity})`,
    gold:    `rgba(245,158,11,${opacity})`,
  };
  return map[color] || map.blue;
}

export function getAccentBorder(color, opacity = 0.2) {
  return getAccentBg(color, opacity);
}

// Clamp number
export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
