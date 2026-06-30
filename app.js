class PortfolioCoordinator {
  constructor() {
    this.preloader = document.getElementById('preloader');
    this.loadingBar = document.getElementById('loading-bar');
    this.loadingText = document.getElementById('loading-text');
    this.header = document.querySelector('.header');
    this.scrollProgress = document.getElementById('scroll-progress-bar');
    
    this.init();
  }

  init() {
    // 1. Trigger preloader simulator
    this.runPreloader();

    // 2. Navigation scroll adjustments & active link updates
    window.addEventListener('scroll', () => {
      this.handleScroll();
      this.trackActiveSection();
    });

    // 3. Set up Intersection Observers for section scroll reveals
    this.initScrollReveals();

    // 4. Set up 3D Card Tilt Effects
    this.initCardTilts();

    // 5. Skills Tab Switchers
    this.initSkillsTabs();

    // 6. Contact Form Success Submissions
    this.initContactForm();

    // 7. Mobile Menu Trigger Drawer
    this.initMobileNav();

    // 8. Dynamic Headline Word Switcher Loop
    this.initWordCycler();

    // 9. Light/Dark Mode Switcher
    this.initThemeToggle();
  }

  /* ==========================================================================
     LOADING EXPERIENCE
     ========================================================================== */
  runPreloader() {
    if (!this.preloader) return;

    const phrases = [
      "ESTABLISHING SYSTEM VARIABLES...",
      "CALIBRATING ANTIGRAVITY ENGINE...",
      "COMPILING COMPONENT STACK...",
      "SYNCING VECTOR RENDERS...",
      "LAUNCHING ENGINE..."
    ];
    
    let progress = 0;
    let phraseIdx = 0;

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 12) + 4;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Finalize preloader sequence
        setTimeout(() => {
          this.loadingText.textContent = "ENGINE ONLINE";
          this.preloader.classList.add('fade-out');
          
          // Trigger Hero entry animations after preloader fades
          setTimeout(() => {
            this.revealHero();
          }, 400);
        }, 300);
      }

      this.loadingBar.style.width = `${progress}%`;
      
      // Rotate status text phrases
      if (progress > (phraseIdx + 1) * 20 && phraseIdx < phrases.length - 1) {
        phraseIdx++;
        this.loadingText.textContent = phrases[phraseIdx];
      }
    }, 120);
  }

  revealHero() {
    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('revealed');
      }, index * 120);
    });
  }

  /* ==========================================================================
     SCROLL & NAVIGATION COORDINATOR
     ========================================================================== */
  handleScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Update scroll progress bar
    if (this.scrollProgress && docHeight > 0) {
      const pct = (scrollY / docHeight) * 100;
      this.scrollProgress.style.width = `${pct}%`;
    }

    // Nav Header scrolled transition state
    if (this.header) {
      if (scrollY > 50) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }
  }

  trackActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentActiveId = '';
    const scrollPosition = window.scrollY + 150; // offset for nav header height

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentActiveId = sec.getAttribute('id');
      }
    });

    if (currentActiveId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentActiveId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  /* ==========================================================================
     SCROLL FADE-IN REVEALS (Intersection Observer)
     ========================================================================== */
  initScrollReveals() {
    const revealItems = document.querySelectorAll('.reveal-on-scroll');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    };

    // Staggered generic sections reveals
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealItems.forEach(item => {
      revealObserver.observe(item);
    });

    // Special timeline activator
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, {
      root: null,
      threshold: 0.5,
      rootMargin: "-20% 0px -40% 0px"
    });

    timelineItems.forEach(item => {
      timelineObserver.observe(item);
    });
  }

  /* ==========================================================================
     3D PERSPECTIVE CARD TILT EFFECTS
     ========================================================================== */
  initCardTilts() {
    const profileCard = document.getElementById('hero-profile-card');
    
    if (profileCard) {
      profileCard.addEventListener('mousemove', (e) => {
        const rect = profileCard.getBoundingClientRect();
        
        // Normalized coordinates relative to card center (-1 to 1)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        // Tilt bounds: maximum 14 degrees
        const tiltX = -y * 14;
        const tiltY = x * 14;
        
        profileCard.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
      });

      profileCard.addEventListener('mouseleave', () => {
        profileCard.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
      });
    }

    // Dynamic mouse-coordinate card backgrounds (About cards)
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Set CSS custom properties inside style
        card.style.setProperty('--mouse-x', `${mouseX}px`);
        card.style.setProperty('--mouse-y', `${mouseY}px`);

        // Apply a gentle 3D bend
        const normX = mouseX / rect.width - 0.5;
        const normY = mouseY / rect.height - 0.5;
        card.style.transform = `rotateX(${-normY * 6}deg) rotateY(${normX * 6}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ==========================================================================
     SKILLS METER GRAPH TABS CONTROL
     ========================================================================== */
  initSkillsTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.skills-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Toggle Active state on Tabs
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Toggle Active panels
        const panelId = `panel-${tab.getAttribute('data-tab')}`;
        panels.forEach(p => {
          p.classList.remove('active');
          if (p.getAttribute('id') === panelId) {
            p.classList.add('active');
            
            // Trigger progress meter fills
            this.animateSkillsMeter(p);
          }
        });
      });
    });

    // Auto animate the default active panel
    const defaultActive = document.querySelector('.skills-panel.active');
    if (defaultActive) {
      setTimeout(() => {
        this.animateSkillsMeter(defaultActive);
      }, 2500);
    }
  }

  animateSkillsMeter(panel) {
    const fills = panel.querySelectorAll('.skill-meter-fill');
    fills.forEach(fill => {
      const width = fill.getAttribute('data-width');
      // Set width to fill
      fill.style.width = width;
    });
  }

  /* ==========================================================================
     CONTACT FORM & VALIDATIONS
     ========================================================================== */
  initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;

    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return;
      }

      const submitBtn = form.querySelector('.btn-submit');
      if (!submitBtn) return;

      const nameInput = form.querySelector('#form-name');
      const emailInput = form.querySelector('#form-email');
      const messageInput = form.querySelector('#form-message');
      const subjectInput = form.querySelector('#form-subject');
      const replyToInput = form.querySelector('#form-replyto');
      const submittedAtInput = form.querySelector('#form-submitted-at');
      const inquiryIdInput = form.querySelector('#form-inquiry-id');

      const senderName = nameInput.value.trim().replace(/\s+/g, ' ');
      const senderEmail = emailInput.value.trim();
      const message = messageInput.value.trim();
      const inquiryId = this.createInquiryId();
      const submittedAt = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      subjectInput.value = `New Portfolio Inquiry from ${senderName} - ${inquiryId}`;
      replyToInput.value = senderEmail;
      submittedAtInput.value = submittedAt;
      inquiryIdInput.value = inquiryId;
      nameInput.value = senderName;
      emailInput.value = senderEmail;
      messageInput.value = message;
      
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = "SENDING...";
    });
  }

  createInquiryId() {
    const now = new Date();
    const datePart = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0'),
      String(now.getHours()).padStart(2, '0'),
      String(now.getMinutes()).padStart(2, '0'),
      String(now.getSeconds()).padStart(2, '0')
    ].join('');
    const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();

    return `${datePart}-${randomPart}`;
  }

  /* ==========================================================================
     MOBILE NAVIGATION DRAWER
     ========================================================================== */
  initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const links = document.querySelectorAll('.mobile-link');
    
    if (!toggle || !drawer) return;

    const toggleDrawer = () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        toggle.classList.remove('active');
      } else {
        drawer.classList.add('open');
        toggle.classList.add('active');
      }
    };

    toggle.addEventListener('click', toggleDrawer);

    // Close menu when clicking items
    links.forEach(l => {
      l.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  /* ==========================================================================
     DYNAMIC WORD CYCLER
     ========================================================================== */
  initWordCycler() {
    const wrap = document.querySelector('.dynamic-word-wrap');
    if (!wrap) return;
    const words = wrap.querySelectorAll('.dynamic-word');
    let currentIdx = 0;

    setInterval(() => {
      const activeWord = words[currentIdx];
      activeWord.classList.remove('active');
      activeWord.classList.add('exit');

      // Update index
      currentIdx = (currentIdx + 1) % words.length;
      
      const nextWord = words[currentIdx];
      nextWord.classList.remove('exit');
      nextWord.classList.add('active');
      
      // Clean up exit class after transition completes
      setTimeout(() => {
        activeWord.classList.remove('exit');
      }, 800); // matches CSS transition time
    }, 3200); // cycle every 3.2 seconds
  }

  /* ==========================================================================
     LIGHT / DARK THEME TOGGLE
     ========================================================================== */
  initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    // Check localStorage (defaulting to Light Mode first on initial visit)
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Toggle click listener
    toggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      
      // Store choice
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      // Force refresh cursor hover triggers to fetch fresh var border colors
      if (window.premiumCursorInstance) {
        window.premiumCursorInstance.updateInteractives();
      }
    });
  }
}

// Inject additional mobile hamburger bar active animation
const styleToggle = document.createElement('style');
styleToggle.textContent = `
  .mobile-nav-toggle.active .toggle-bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .mobile-nav-toggle.active .toggle-bar:nth-child(2) {
    transform: translateY(-8px) rotate(-45deg);
  }
  .mobile-nav-toggle.active .toggle-bar {
    background-color: var(--text-primary);
  }
`;
document.head.appendChild(styleToggle);

// Initialize coordinator
window.addEventListener('DOMContentLoaded', () => {
  window.portfolioCoordinatorInstance = new PortfolioCoordinator();
});
