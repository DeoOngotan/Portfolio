class PremiumCursor {
  constructor() {
    this.dot = document.getElementById('cursor-dot');
    this.ring = document.getElementById('cursor-ring');
    this.label = document.getElementById('cursor-label');
    this.ambientGlow = document.getElementById('ambient-glow');
    
    // Mouse coordinates
    this.mouse = { x: 0, y: 0 };
    // Ring coordinates (spring-interpolated)
    this.ringPos = { x: 0, y: 0 };
    // Spring physics configuration
    this.springSpeed = 0.18;
    this.isHovering = false;
    this.magneticElement = null;
    
    this.init();
  }

  init() {
    // Hide custom cursor on mobile/touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      this.dot.style.display = 'none';
      this.ring.style.display = 'none';
      return;
    }

    // Set initial position
    this.dot.style.opacity = '0';
    this.ring.style.opacity = '0';

    // Event listeners
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('scroll', () => this.onScroll());

    // Initialize magnetic elements
    this.updateInteractives();

    // Start rendering loop
    requestAnimationFrame(() => this.tick());
  }

  onMouseMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;

    if (this.dot.style.opacity === '0') {
      this.dot.style.opacity = '1';
      this.ring.style.opacity = '1';
      // Sync initial position
      this.ringPos.x = this.mouse.x;
      this.ringPos.y = this.mouse.y;
    }

    // Move ambient glow light
    if (this.ambientGlow) {
      this.ambientGlow.style.left = `${e.clientX}px`;
      this.ambientGlow.style.top = `${e.clientY}px`;
    }

    // If hovering over a magnetic element, calculate attraction pulls
    if (this.magneticElement) {
      this.handleMagneticPull(e);
    }
  }

  onScroll() {
    // When scrolling, magnetic elements boundaries might shift, clear it
    if (this.magneticElement) {
      this.resetMagneticElement();
    }
  }

  updateInteractives() {
    // Buttons & Links
    const hoverables = document.querySelectorAll('a, button, .tab-btn, .mobile-nav-toggle, .float-element');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
        this.isHovering = true;
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
        this.isHovering = false;
      });
    });

    // Magnetic buttons
    const magnetics = document.querySelectorAll('.magnetic');
    magnetics.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.magneticElement = el;
      });
      el.addEventListener('mouseleave', () => {
        this.resetMagneticElement();
      });
    });

    // Project cards view label
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(card => {
      card.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-view-project');
        if (this.label) this.label.textContent = 'VIEW';
      });
      card.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-view-project');
        if (this.label) this.label.textContent = '';
      });
    });
  }

  handleMagneticPull(e) {
    const rect = this.magneticElement.getBoundingClientRect();
    const strength = parseFloat(this.magneticElement.getAttribute('data-strength')) || 15;
    
    // Calculate distance from center of element to mouse
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    const deltaX = e.clientX - elementCenterX;
    const deltaY = e.clientY - elementCenterY;

    // Pull the element towards the mouse
    this.magneticElement.style.transform = `translate(${deltaX / rect.width * strength}px, ${deltaY / rect.height * strength}px)`;
    
    // Snap cursor ring to the center of the magnetic button slightly
    this.mouse.x = elementCenterX + (deltaX * 0.25);
    this.mouse.y = elementCenterY + (deltaY * 0.25);
  }

  resetMagneticElement() {
    if (this.magneticElement) {
      this.magneticElement.style.transform = '';
      this.magneticElement = null;
    }
  }

  tick() {
    // Spring physics formula for smooth ring trailing
    const dx = this.mouse.x - this.ringPos.x;
    const dy = this.mouse.y - this.ringPos.y;

    this.ringPos.x += dx * this.springSpeed;
    this.ringPos.y += dy * this.springSpeed;

    // Render dot and ring
    this.dot.style.transform = `translate3d(${this.mouse.x}px, ${this.mouse.y}px, 0) translate(-50%, -50%)`;
    this.ring.style.transform = `translate3d(${this.ringPos.x}px, ${this.ringPos.y}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(() => this.tick());
  }
}

// Instantiate on startup
window.addEventListener('DOMContentLoaded', () => {
  window.premiumCursorInstance = new PremiumCursor();
});