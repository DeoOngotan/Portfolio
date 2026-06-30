// SVG Paths for Technology Icons
const TECH_ICONS = {
  react: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 7c2.76 0 5 1 .7 3-1.7 2-4 .3-4 .3 0 0-2.3 1.7-4 .3s2-3.3 2-3.3S11.3 7 12 7zm0 10c-2.76 0-5-1-.7-3 1.7-2 4-.3 4-.3 0 0 2.3-1.7 4-.3s-2 3.3-2 3.3-2.6.3-3.3.3zM7 12c0-2.76 1-5 3-.7 2 1.7.3 4 .3 4 0 0 1.7 2.3.3 4s-3.3-2-3.3-2S7 12.7 7 12zm10 0c0 2.76-1 5-3 .7-2-1.7-.3-4-.3-4 0 0-1.7-2.3-.3-4s3.3 2 3.3 2-1.7 4.6-1.7 5.3z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/></svg>`,
  
  firebase: `<svg viewBox="0 0 24 24"><path d="M3.89 15.75L5.61 5.03c.09-.55.5-.96 1.05-.96.15 0 .3.03.44.1l1.6 1.63L3.89 15.75zm12.39.02l-1.89-3.55-5.59-5.55 1.83-1.81a1.05 1.05 0 0 1 1.48 0l4.17 4.13 1.89 3.55-3.89 3.23z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.89 15.75l7.66 4.47a1.06 1.06 0 0 0 1.05 0l7.66-4.47L12 12.06 3.89 15.75z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  
  php: `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="6" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7.5 14.5V9.5h2c.8 0 1.5.5 1.5 1.25s-.7 1.25-1.5 1.25h-2M13.5 14.5V9.5h1M16.5 14.5V9.5h2c.8 0 1.5.5 1.5 1.25s-.7 1.25-1.5 1.25h-2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="13" y1="12" x2="15" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  
  mysql: `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7" ry="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 6v5c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 11v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  
  javascript: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11.5 14.25c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25v-2h3.5v2zm4 0c0 .69-.56 1.25-1.25 1.25h-1.5v-3.5h1.5c.69 0 1.25.56 1.25 1.25v1z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  
  typescript: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 9h4M11 9v6M14 14.5c.5.5 1 1 2 1s1.5-.5 1.5-1c0-.8-.8-1-1.5-1.2s-2-.5-2-1.8c0-.8.7-1.5 1.8-1.5s1.8.8 2.2 1.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  
  laravel: `<svg viewBox="0 0 24 24"><path d="M6 18l4-4 4 4M10 14V3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="18" width="12" height="3" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M14 8l4-4 4 4M18 4v11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="12" y="15" width="8" height="3" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`,
  
  ionic: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 3a9 9 0 0 1 9 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  
  git: `<svg viewBox="0 0 24 24"><circle cx="18" cy="18" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="6" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 9v6M9 15l9-9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  
  github: `<svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`
};

class AntigravityEngine {
  constructor() {
    this.scene = document.getElementById('antigravity-scene');
    this.profileCard = document.getElementById('hero-profile-card');
    if (!this.scene) return;

    this.elements = [];
    this.startTime = performance.now();
    this.sceneRect = null;
    this.cardRect = null;
    this.isReducedMode = false;

    // Icons orbit the profile card with even angular spacing.
    this.floaterConfigs = [
      { key: 'react', size: 50 },
      { key: 'firebase', size: 44 },
      { key: 'typescript', size: 46 },
      { key: 'javascript', size: 46 },
      { key: 'laravel', size: 50 },
      { key: 'php', size: 44 },
      { key: 'mysql', size: 44 },
      { key: 'ionic', size: 46 },
      { key: 'git', size: 44 },
      { key: 'github', size: 46 }
    ];

    this.init();
  }

  init() {
    // Media checks
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      this.isReducedMode = true;
    }

    // Build DOM elements
    this.floaterConfigs.forEach((cfg, index) => {
      const el = document.createElement('div');
      el.className = `float-element float-${cfg.key}`;
      el.innerHTML = TECH_ICONS[cfg.key];
      el.style.width = `${cfg.size}px`;
      el.style.height = `${cfg.size}px`;
      el.style.borderRadius = `${cfg.size * 0.28}px`;
      el.style.setProperty('--float-index', index);

      this.scene.appendChild(el);

      this.elements.push({
        dom: el,
        cfg,
        index
      });
    });

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('scroll', () => this.onResize(), { passive: true });

    this.onResize();
    requestAnimationFrame(() => this.tick());
  }

  onResize() {
    if (!this.scene || !this.profileCard) return;
    this.sceneRect = this.scene.getBoundingClientRect();
    this.cardRect = this.profileCard.getBoundingClientRect();
  }

  tick() {
    if (!this.sceneRect || !this.cardRect) this.onResize();
    if (!this.sceneRect || !this.cardRect) return;

    const elapsed = performance.now() - this.startTime;
    const centerX = this.cardRect.left - this.sceneRect.left + this.cardRect.width / 2;
    const centerY = this.cardRect.top - this.sceneRect.top + this.cardRect.height / 2;
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768;
    const radiusX = this.cardRect.width / 2 + (isMobile ? 44 : isTablet ? 56 : 78);
    const radiusY = this.cardRect.height / 2 + (isMobile ? 36 : isTablet ? 46 : 62);
    const orbitDuration = this.isReducedMode ? Infinity : 36000;
    const rotation = this.isReducedMode ? 0 : (elapsed / orbitDuration) * Math.PI * 2;

    this.elements.forEach(item => {
      const baseAngle = (item.index / this.elements.length) * Math.PI * 2 - Math.PI / 2;
      const angle = baseAngle + rotation;
      const subtleFloat = this.isReducedMode ? 0 : Math.sin(elapsed * 0.0012 + item.index) * 4;
      const x = centerX + Math.cos(angle) * radiusX - item.cfg.size / 2;
      const y = centerY + Math.sin(angle) * radiusY - item.cfg.size / 2 + subtleFloat;

      item.dom.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    requestAnimationFrame(() => this.tick());
  }
}

// Initialize floating engine
window.addEventListener('DOMContentLoaded', () => {
  window.antigravityEngineInstance = new AntigravityEngine();
});
