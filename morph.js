// Case Studies Detailed Content Datastore
const CASE_STUDIES = {
  digitrike: {
    category: "SMART TRANSPORT & TRANSIT SYSTEMS",
    title: "DigiTrike Sudipen",
    subtitle: "A real-time ridesharing web and mobile platform supporting passenger-driver matchmaking, live mapping, and native Android deployment.",
    tech: ["React 18", "Firebase Suite", "Leaflet.js", "Capacitor 7", "Chart.js"],
    organization: "Sudipen Transport Cooperative",
    role: "Fullstack Web Developer & UI/UX Designer",
    duration: "3 Months (2024)",
    overview: "DigiTrike Sudipen is a modern, real-time ridesharing web and mobile platform built specifically for passenger-driver matchmaking. It supports interactive real-time mapping, location synchronization, dynamic fare estimation, document-based role registration, comprehensive admin panels, and native Android deployment via Capacitor.",
    bgClass: "visual-digitrike",
    features: [
      {
        title: "Interactive Passenger Maps",
        desc: "Real-time pin-drop mapping interface powered by Leaflet to request rides and track drivers."
      },
      {
        title: "Direct Dispatch Sockets",
        desc: "Connects commuters dynamically to nearby tricycle terminals with background location tracking via Firestore."
      },
      {
        title: "Document Verification Workflow",
        desc: "Allows admins to audit uploaded government/student IDs, driver's licenses, and selfie captures for validation."
      },
      {
        title: "System Analytics Board",
        desc: "Visualizes revenue trajectories, passenger-driver distributions, and trip completion rates using dynamic Chart.js dashboards."
      }
    ],
    process: "Mapped out the layout wireframes using Canva, then engineered the web application using React 18, integrating Firebase Services and Leaflet maps before bridging to native Android via Capacitor.",
    challenges: "Ensuring accurate location synchronization and driver-matching logic without draining mobile devices' battery. Resolved by building custom React hooks for throttle-controlled location watches.",
    results: "Adopted by municipal drivers and passenger commuters, introducing fare transparency, streamlining queue dispatcher coordination, and stabilizing booking rates.",
    demoUrl: "https://digitrike-rgb.github.io/DigiTrike-Page/",
    githubUrl: "https://github.com/DeoOngotan"
  },
  eunoiamind: {
    category: "CLINICAL APPOINTMENT & MENTAL HEALTH PORTAL",
    title: "EunoiaMind",
    subtitle: "A premium counseling scheduling application featuring secure client intake flows, admin dashboards, and science-backed mindfulness exercises.",
    tech: ["HTML5", "Vanilla JavaScript (ES6+)", "Tailwind CSS v3", "Firebase Suite", "Chart.js"],
    organization: "Eunoia Counseling Services",
    role: "Fullstack Web Developer & UX Designer",
    duration: "4 Months (2023)",
    overview: "EunoiaMind is a premium, modern, and comprehensive web-based Psychological Counseling & Appointment System. Built with a stunning aesthetic and robust functionality, EunoiaMind integrates seamlessly with Firebase to connect clients seeking mental health support with administrative managers and counselors. It features science-backed, interactive therapeutic tools like the Breathing Bubble and Gratitude Garden to help clients cultivate mindfulness and manage stress in real-time.",
    bgClass: "visual-eunoiamind",
    features: [
      {
        title: "Client Portal & Scheduler",
        desc: "Secure logins with Google Authentication and appointment booking with custom date/time preferences."
      },
      {
        title: "Mindfulness Tools",
        desc: "Guided 4-4-6-2 box breathing pattern (Breathing Bubble) and an interactive journal (Gratitude Garden) for daily mental wellness."
      },
      {
        title: "Admin Analytics Dashboard",
        desc: "High-level overview of booking trends and user statistics visualized using custom Chart.js modules."
      },
      {
        title: "Client Management Panel",
        desc: "Allows admins to audit user profiles, manage booking lifecycles, and configure counselor availability templates."
      }
    ],
    process: "Designed high-fidelity mockups in Canva, then built the responsive web portal using Vanilla JS modules, modular Firebase services, and Tailwind CSS.",
    challenges: "Preventing reservation transaction collisions when multiple users attempted to lock the same session slot simultaneously. Resolved by designing database write processes in Firestore transactions.",
    results: "Successfully deployed to a local counseling clinic, securely processing over 500 appointments with zero booking collision incidents.",
    demoUrl: "https://eunoia-psych-appoint.web.app/",
    githubUrl: "https://github.com/DeoOngotan"
  },
  osas: {
    category: "CAMPUS MANAGEMENT & STUDENT PORTAL",
    title: "ISPSC OSAS Web Page",
    subtitle: "A digital hub centralizing organization directories, handbooks, and announcements for 1,500+ student profiles.",
    tech: ["HTML5", "CSS3 (Custom Variables)", "Vanilla JavaScript (ES6+)", "EmailJS SDK", "Vercel Hosting"],
    organization: "Ilocos Sur Polytechnic State College",
    role: "Solo Frontend Engineer & Designer",
    duration: "3 Months (2024)",
    overview: "The Office of Student Affairs and Services (OSAS) Portal of the ISPSC Tagudin Campus is a premium, modern, responsive, and highly interactive multi-page web application. It serves as a digital information hub linking students to active clubs, registrar handbooks, health services, cashier billing guidelines, and counselor channels.",
    bgClass: "visual-osas",
    features: [
      {
        title: "Services Directory & Portals",
        desc: "Dedicated sub-pages for Registrar, Scholarships, Guidance & Counseling, Health Services, Student Organizations, and Cashier info."
      },
      {
        title: "Interactive FAQ Chatbot",
        desc: "A fully client-side mock chatbot responding dynamically to student FAQs regarding office hours, requirements, and contacts."
      },
      {
        title: "EmailJS Contact Forms",
        desc: "Secure feedback and contact forms routing student concerns directly to OSAS staff via EmailJS templates."
      },
      {
        title: "Masonry Activity Galleries",
        desc: "Dynamic masonry photo grids and lightbox sliders showcasing historical campus moments, student achievements, and community services."
      }
    ],
    process: "Mocked up layouts in Canva following campus brand standards, then coded the multi-page portal using semantic HTML5, custom CSS variables, and clean vanilla JS, hosting it on Vercel.",
    challenges: "Displaying and filtering extensive static text files on low-end mobile devices without causing browser lag. Resolved by structuring data inside JSON documents and loading them dynamically through asynchronous JS fetch routines.",
    results: "Deployed at ISPSC Tagudin Campus, serving over 1,500 students daily and reducing paper printing dependencies by 80%.",
    demoUrl: "https://osas-ispsc-tagudin.vercel.app/",
    githubUrl: "https://github.com/DeoOngotan"
  },
  supply: {
    category: "INVENTORY LOGISTICS & TELEMETRY SYSTEMS",
    title: "ISPSC Supply Office System",
    subtitle: "An inventory logistics dashboard tracking assets, requests, and replenishment alerts with standardized Excel exporters.",
    tech: ["HTML5", "Tailwind CSS", "Vanilla JavaScript (ES Modules)", "Firebase Suite", "Chart.js", "SheetJS / ExcelJS"],
    organization: "ISPSC Supply Division",
    role: "Lead Developer & UX Architect",
    duration: "5 Months (2023)",
    overview: "The ISPSC Supply Office System is an elegant, real-time Supply Management and Resource Monitoring System designed specifically for the ISPSC Supply Office. It streamlines supply requests, monitors inventory status, issues alerts for low-stock items, registers equipment using property ledger card structures, and facilitates department-level asset tracking.",
    bgClass: "visual-supply",
    features: [
      {
        title: "Property Ledger Cards (PAR)",
        desc: "Digital ledger sheets mapping assets to specific personnel, locations, brands, and models, tracking their useful life and control numbers."
      },
      {
        title: "Low Stock Alert System",
        desc: "Visual triggers and system alerts when supply stock levels fall below the critical threshold of 8 items."
      },
      {
        title: "Interactive Request Workflow",
        desc: "Enables campus departments to submit stock requests online, routing real-time approval actions directly to supply officers."
      },
      {
        title: "Excel Exporters & Charts",
        desc: "Visual dashboard visualizations utilizing Chart.js, paired with automated SheetJS and ExcelJS workbooks mapped to Property Ledger Card 2026 templates."
      }
    ],
    process: "Designed high-fidelity mockups in Canva, then built the responsive logistics panel using HTML5, Tailwind CSS, JavaScript (ES modules), Chart.js, and SheetJS/ExcelJS libraries on a Firebase backend.",
    challenges: "Designing a seamless custom Excel generation framework that correctly formats complex merged cells for the standardized property ledger cards. Resolved by using ExcelJS to write layout structures cell-by-cell.",
    results: "Successfully deployed inside the supply division, managing 2,000+ school assets and reducing resource requisition delay from days to minutes.",
    demoUrl: "https://ispsc-supply-office.web.app/",
    githubUrl: "https://github.com/DeoOngotan"
  },
  marienglish: {
    category: "ACADEMIC PORTALS & SESSION SCHEDULING",
    title: "Mari English Academy",
    subtitle: "A bilingual tutoring reservation system and parent-teacher information board built for a premium academy in Suwon, South Korea.",
    tech: ["HTML5", "Vanilla JavaScript (ES6+)", "Tailwind CSS", "Firebase Suite", "Translation Engine"],
    organization: "Mari English Academy (Suwon, South Korea)",
    role: "Solo Frontend Developer & Designer",
    duration: "3 Months (2024)",
    overview: "The Mari English Academy management and student platform provides a premium English education web portal for kindergarten, elementary, and adult students in Maetan-dong, Suwon. It includes a public landing page, bilingual lesson reservation calendars, and a robust administrator dashboard powered by a serverless Firebase backend.",
    bgClass: "visual-marienglish",
    features: [
      {
        title: "Bilingual Translation Engine",
        desc: "Custom translations framework to instantly toggle the entire web portal content between Korean (한국어) and English."
      },
      {
        title: "Student Session Reservation",
        desc: "Enables registered students and parents to view available English tutoring classes and book learning slots directly."
      },
      {
        title: "Admin Management & Logs",
        desc: "Allows operators to review, approve, reschedule, or cancel student appointments, manage student records, and trace history logs."
      },
      {
        title: "Cinematic Visual Identity",
        desc: "Premium theme layout featuring custom typography, dark mode, smooth animations, and gold styling elements."
      }
    ],
    process: "Mocked up the layout in Canva with a premium dark-navy theme, then coded the frontend using HTML5, Vanilla JavaScript, and Tailwind CSS, deployed via Firebase Hosting and Firestore.",
    challenges: "Maintaining text grid alignment and typography scale across different Korean and English sentence structures. Resolved by utilizing responsive CSS flexbox wrappers and custom local translation mappings.",
    results: "Deployed in Suwon, registering over 100 student bookings and simplifying administrative reservation overhead.",
    demoUrl: "https://mari-english.web.app/",
    githubUrl: "https://github.com/DeoOngotan"
  }
};

class MorphController {
  constructor() {
    this.overlay = document.getElementById('case-study-overlay');
    this.container = document.getElementById('case-study-container');
    this.closeBtn = document.getElementById('case-close-btn');
    
    // Transitions state
    this.activeCard = null;
    this.clonedVisual = null;
    
    this.init();
  }

  init() {
    if (!this.overlay || !this.container) return;

    // Click project card to trigger morph
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', (e) => this.openCaseStudy(card, e));
    });

    // Close button click
    this.closeBtn.addEventListener('click', () => this.closeCaseStudy());

    // Escape key closes modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('open')) {
        this.closeCaseStudy();
      }
    });
  }

  openCaseStudy(card, e) {
    // Prevent double clicking
    if (this.activeCard) return;
    this.activeCard = card;

    const projectId = card.getAttribute('data-project-id');
    const caseData = CASE_STUDIES[projectId];
    if (!caseData) return;

    // Hide custom cursor view label to prevent overlay interference
    document.body.classList.remove('cursor-view-project');

    // 1. FLIP: Record First (initial bounding box of the card's visual asset)
    const visual = card.querySelector('.project-card-visual');
    const firstRect = visual.getBoundingClientRect();

    // 2. Build Case Study Detailed HTML Content
    const detailHTML = this.buildDetailHTML(caseData);
    this.container.innerHTML = detailHTML;

    // Temporarily disable page scrolling
    document.body.style.overflow = 'hidden';

    // 3. Create absolute morphing element to perform fluid transition
    this.clonedVisual = document.createElement('div');
    this.clonedVisual.className = `project-fallback-bg ${caseData.bgClass} morph-cloner`;
    
    // Copy content for smooth transition
    this.clonedVisual.innerHTML = `
      <div class="floating-asset asset-1">${caseData.title}</div>
    `;

    // Apply "First" style configurations
    Object.assign(this.clonedVisual.style, {
      position: 'fixed',
      top: `${firstRect.top}px`,
      left: `${firstRect.left}px`,
      width: `${firstRect.width}px`,
      height: `${firstRect.height}px`,
      borderRadius: '24px',
      zIndex: '999',
      transition: 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
      pointerEvents: 'none'
    });

    document.body.appendChild(this.clonedVisual);

    // Fade overlay open
    this.overlay.classList.add('open');
    this.overlay.scrollTop = 0;

    // 4. Record Last (where our full case study hero visual should be)
    // We update this via dynamic timing
    setTimeout(() => {
      const lastVisual = document.getElementById('case-hero-visual-target');
      if (lastVisual) {
        const lastRect = lastVisual.getBoundingClientRect();
        
        // 5. Play: Transition clone to the Last bounds
        Object.assign(this.clonedVisual.style, {
          top: `${lastRect.top}px`,
          left: `${lastRect.left}px`,
          width: `${lastRect.width}px`,
          height: `${lastRect.height}px`,
          borderRadius: '28px'
        });

        // After transition completes, swap assets and fade content details in
        setTimeout(() => {
          lastVisual.style.opacity = '1';
          
          // Fade in other detail elements (case header, specs, blocks)
          const fadeables = this.container.querySelectorAll('.case-fade-in');
          fadeables.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible');
            }, index * 80);
          });

          // Delete cloner
          if (this.clonedVisual) {
            this.clonedVisual.remove();
            this.clonedVisual = null;
          }
        }, 650);
      }
    }, 50);
  }

  closeCaseStudy() {
    if (!this.activeCard) return;

    // Disable transition properties from overlay
    this.overlay.classList.remove('open');
    document.body.style.overflow = '';

    // Clear contents
    setTimeout(() => {
      this.container.innerHTML = '';
      this.activeCard = null;
    }, 400);
  }

  buildDetailHTML(data) {
    // Map tech badges
    const techBadges = data.tech.map(t => `<span class="project-tag-pill">${t}</span>`).join('');
    
    // Map features list
    const featuresList = data.features.map(f => `
      <div class="feature-pill-card case-fade-in">
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    `).join('');

    return `
      <div class="case-header case-fade-in">
        <span class="case-category-tag font-mono">${data.category}</span>
        <h1 class="case-title">${data.title}</h1>
        <p class="case-lead">${data.subtitle}</p>
      </div>

      <div class="case-intro-block case-fade-in">
        <div class="case-desc-col">
          <h3>Project Overview</h3>
          <p>${data.overview}</p>
        </div>
        <div class="case-meta-spec">
          <div class="spec-item">
            <span class="spec-lbl">Organization</span>
            <span class="spec-val">${data.organization}</span>
          </div>
          <div class="spec-item">
            <span class="spec-lbl">Role</span>
            <span class="spec-val">${data.role}</span>
          </div>
          <div class="spec-item">
            <span class="spec-lbl">Duration</span>
            <span class="spec-val">${data.duration}</span>
          </div>
        </div>
      </div>

      <!-- Morph target visual placeholder -->
      <div class="case-hero-visual ${data.bgClass}" id="case-hero-visual-target" style="opacity:0; transition: opacity 0.3s ease;">
        <div class="project-fallback-bg" style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
           <span style="font-size: 2rem; font-weight: 800; opacity: 0.25;">${data.title} Presentation</span>
        </div>
      </div>

      <div class="case-section-block case-fade-in">
        <h3>Core Engine Features</h3>
        <div class="case-features-list">
          ${featuresList}
        </div>
      </div>

      <div class="case-section-block case-fade-in">
        <h3>Development Process</h3>
        <p>${data.process}</p>
      </div>

      <div class="case-section-block case-fade-in">
        <h3>Challenges Solved</h3>
        <p>${data.challenges}</p>
      </div>

      <div class="case-section-block case-fade-in">
        <h3>Result & Business Value</h3>
        <p>${data.results}</p>
      </div>

      <div class="case-links-group case-fade-in">
        <a href="${data.demoUrl}" target="_blank" rel="noopener" class="btn btn-primary magnetic" data-strength="15">
          <span>Launch Live App</span>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    `;
  }
}

// Inject morph styles
const style = document.createElement('style');
style.textContent = `
  .morph-cloner {
    box-shadow: var(--shadow-lg);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .case-fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s var(--ease-apple), transform 0.8s var(--ease-apple);
  }
  
  .case-fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Initialize on startup
window.addEventListener('DOMContentLoaded', () => {
  window.morphControllerInstance = new MorphController();
});
