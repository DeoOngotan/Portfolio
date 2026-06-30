// Case Studies Detailed Content Datastore
const CASE_STUDIES = {
  digitrike: {
    category: "SMART TRANSPORT & TRANSIT SYSTEMS",
    title: "DigiTrike Sudipen",
    subtitle: "A mobile-responsive smart booking and fare mapping application built to eliminate transit fare disputes and scheduling friction.",
    tech: ["React Native", "JavaScript", "Tailwind CSS"],
    organization: "Sudipen Transport Cooperative",
    role: "Frontend Developer & UI/UX Designer",
    duration: "3 Months (2024)",
    overview: "DigiTrike Sudipen is a smart tricycle booking and fare tracking application designed to make local travel easier, faster, and more convenient for passengers and drivers in the municipality of Sudipen. By offering transparent fare estimations based on local ordinances and geofenced routing features, it eliminates manual dispatching overhead and coordinates bookings efficiently.",
    bgClass: "visual-digitrike",
    features: [
      {
        title: "Real-Time Fare Calculations",
        desc: "Calculates exact passenger costs based on official municipal distance regulations, establishing total fare transparency."
      },
      {
        title: "Direct Dispatch Queueing",
        desc: "Connects commuters dynamically to nearby tricycle terminals through a responsive, mobile-first booking interface."
      },
      {
        title: "Offline Geofence Sockets",
        desc: "Saves active route coordinate tables to local client memory, allowing the app to calculate fares even on weak cellular networks."
      },
      {
        title: "Driver Dashboard Profiles",
        desc: "Enables local drivers to log availability statuses and coordinate trips efficiently without manual dispatch logs."
      }
    ],
    process: "I mapped out high-contrast layout wireframes using Canva for maximum visibility under direct sunlight, then implemented the mobile-first frontend application using React Native and JavaScript for lightweight operations.",
    challenges: "Unstable internet connectivity in rural transit zones. Resolved by caching geofence route bounds locally, shifting distance estimations from API calls to client-side memory.",
    results: "Adopted by municipal tricycle cooperative drivers, introducing passenger fare transparency, streamlining dispatcher queues, and increasing booking efficiency by 40%.",
    demoUrl: "https://digitrike-rgb.github.io/DigiTrike-Page/",
    githubUrl: "https://github.com/DeoOngotan"
  },
  eunoiamind: {
    category: "CLINICAL APPOINTMENT & MENTAL HEALTH PORTAL",
    title: "EunoiaMind",
    subtitle: "A premium counseling scheduling application solving therapist double-bookings and manual intake bottlenecks.",
    tech: ["React JS", "Firebase Suite", "Tailwind CSS", "Firestore", "Google Authentication"],
    organization: "Eunoia Counseling Services",
    role: "Fullstack Web Developer & UX Designer",
    duration: "4 Months (2023)",
    overview: "EunoiaMind is an interactive psychological appointment and therapy scheduling application designed to connect patients with licensed therapists. It solves manual intake paper bottlenecks, therapist-client scheduling conflicts, and session collisions by introducing an automated booking pipeline.",
    bgClass: "visual-eunoiamind",
    features: [
      {
        title: "Interactive Booking Grid",
        desc: "Allows patients to view licensed therapists, examine hourly availability windows, and reserve sessions instantly."
      },
      {
        title: "Secure Intake Encryption",
        desc: "Captures and stores client intake responses safely using Firebase Firestore rules to ensure privacy."
      },
      {
        title: "Mood Telemetry Graphing",
        desc: "An interactive dashboard visualizing patient mental states and progress logs across weekly intervals."
      },
      {
        title: "Instant Email Dispatches",
        desc: "Integrates Firebase Functions to automatically email patients and therapists session summaries upon booking edits."
      }
    ],
    process: "I designed a calming, high-fidelity visual layout in Canva, then built the application using React and Tailwind CSS, integrating real-time Firebase services.",
    challenges: "Preventing reservation transaction collisions when multiple users attempted to lock the same session slot simultaneously. Resolved by designing database write processes in Firestore transactions.",
    results: "Successfully deployed to a local counseling clinic, securely processing over 500 appointments with zero booking collision incidents.",
    demoUrl: "https://eunoia-psych-appoint.web.app/",
    githubUrl: "https://github.com/DeoOngotan"
  },
  osas: {
    category: "CAMPUS MANAGEMENT & STUDENT PORTAL",
    title: "ISPSC OSAS Web Page",
    subtitle: "A digital hub centralizing organization directories, handbooks, and announcements for 1,500+ student profiles.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vercel Hosting"],
    organization: "Ilocos Sur Polytechnic State College",
    role: "Solo Frontend Engineer & Designer",
    duration: "3 Months (2024)",
    overview: "The Office of Student Affairs and Services (OSAS) at Ilocos Sur Polytechnic State College needed a centralized system to coordinate with student bodies, track organization events, and deliver announcements. The OSAS Web Page serves as a digital hub linking students to active clubs, handbooks, and guidance logs, solving manual paper printing overhead.",
    bgClass: "visual-osas",
    features: [
      {
        title: "Interactive Handbook Directory",
        desc: "A digital search index parsing student guidelines, rules, and campus services instantly."
      },
      {
        title: "Campus Notice Board",
        desc: "A real-time notice board with categorical filters for organization news, scholarships, and academic alerts."
      },
      {
        title: "Student Directory Board",
        desc: "Displays active student organizations, officer contact info, and campus directories."
      },
      {
        title: "Counselor Contact Funnels",
        desc: "Secure feedback forms routing student academic and guidance concerns directly to advisors."
      }
    ],
    process: "Created layout layouts in Canva following campus color standards, then engineered the responsive web portal using HTML5, CSS3, JavaScript, and Tailwind CSS.",
    challenges: "Displaying and filtering extensive static text files on low-end mobile devices without causing browser lag. Resolved by structuring data inside JSON documents, loaded dynamically through asynchronous JS fetch routines.",
    results: "Deployed at ISPSC Tagudin Campus, serving over 1,500 students daily and reducing paper printing dependencies by 80%.",
    demoUrl: "https://osas-ispsc-tagudin.vercel.app/",
    githubUrl: "https://github.com/DeoOngotan"
  },
  supply: {
    category: "INVENTORY LOGISTICS & TELEMETRY SYSTEMS",
    title: "ISPSC Supply Office System",
    subtitle: "An inventory dashboard tracking assets, requests, and replenishment alerts for public education institutions.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase Suite", "ChartJS API", "Tailwind CSS"],
    organization: "ISPSC Supply Division",
    role: "Lead Developer & UX Architect",
    duration: "5 Months (2023)",
    overview: "Public university campuses require precise tracking of assets, ranging from classroom computers to office stationery. The ISPSC Supply Office System is an asset logistics and telemetry monitor that automates inventory stock allocations, asset requisition processes, and real-time replenishment tracking, replacing print-heavy logs.",
    bgClass: "visual-supply",
    features: [
      {
        title: "Real-Time Asset Telemetry",
        desc: "A dynamic inventory monitor tracking asset stock levels and automatically raising warning flags for low reserves."
      },
      {
        title: "Automated Requisition Pipeline",
        desc: "Enables campus departments to submit stock requests online, routing alerts directly to supply officers."
      },
      {
        title: "Interactive Consumption Charts",
        desc: "Uses ChartJS to visualize monthly inventory distribution rates and departmental consumption trends."
      },
      {
        title: "Role-Based Staff Access",
        desc: "Restricts stock updates, asset checkouts, and dispatch signatures to authorized administrative personnel."
      }
    ],
    process: "Designed high-fidelity mockups in Canva, then built the responsive logistics panel using HTML5, CSS3, JavaScript, Tailwind CSS, and ChartJS, backed by Firebase Database rules.",
    challenges: "Synchronizing database updates without slowing down administrative machines. Resolved by optimizing Firestore real-time snapshots and utilizing lightweight payload structures.",
    results: "Successfully deployed inside the supply division, managing 2,000+ school assets and reducing resource requisition delay from days to minutes.",
    demoUrl: "https://ispsc-supply-office.web.app/",
    githubUrl: "https://github.com/DeoOngotan"
  },
  marienglish: {
    category: "ACADEMIC PORTALS & SESSION SCHEDULING",
    title: "Mari English Academy",
    subtitle: "A bilingual tutoring reservation system and parent-teacher information board built for a premium academy.",
    tech: ["React JS", "Firebase Suite", "Tailwind CSS", "Google Fonts API"],
    organization: "Mari English Academy (Suwon, South Korea)",
    role: "Solo Frontend Developer & Designer",
    duration: "3 Months (2024)",
    overview: "Mari English Academy, located in Maetan-dong, Suwon, South Korea, offers premium English education. The Mari English portal manages class session reservations, parent-teacher reviews, and tutoring schedules, solving manual calendar coordination overhead across different languages.",
    bgClass: "visual-marienglish",
    features: [
      {
        title: "Bilingual Session Reservation",
        desc: "Allows parents and students to schedule private English tutoring classes using responsive calendar sheets."
      },
      {
        title: "Categorized Curriculum Showcase",
        desc: "Visual grids detailing class focuses, schedules, and targets for kindergarten, elementary, and adult levels."
      },
      {
        title: "Parent-Teacher Portals",
        desc: "Real-time communication notice boards updating parents on class announcements and homework logs."
      },
      {
        title: "Bilingual Localized Layout",
        desc: "Designed custom translation wrappers to adjust content layouts seamlessly between Korean and English."
      }
    ],
    process: "Mocked up the layout in Canva with a premium dark-navy theme, and developed the frontend using React and Tailwind CSS with Firebase Hosting integrations.",
    challenges: "Ensuring text grids and typography rules wrapped correctly across different English and Korean word lengths. Resolved by utilizing responsive CSS flexbox wrappers.",
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
