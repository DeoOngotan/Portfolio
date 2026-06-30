// Chatbot Knowledge Base & Matcher Engine
const BOT_DATABASE = [
  {
    keywords: ["digitrike", "tricycle", "sudipen", "transit", "fare", "booking", "commuter", "municipal", "distance"],
    response: "<b>DigiTrike Sudipen</b> is a smart tricycle booking and fare tracking page. It calculates exact commuter fares based on official municipal distances and geofences to ensure fare transparency. Built with HTML5, CSS3, Tailwind CSS, and JavaScript. <a href='https://digitrike-rgb.github.io/DigiTrike-Page/' target='_blank' style='text-decoration: underline; font-weight:600; color:var(--accent-blue);'>Visit DigiTrike Page</a>"
  },
  {
    keywords: ["eunoia", "psychological", "appointment", "counseling", "mental", "health", "therapist", "calendar", "intakes", "booking", "reserve", "scheduling"],
    response: "The <b>Psychological Appointment System (EunoiaMind)</b> is a counseling portal offering calendar reservations, therapist schedules, and secure client intakes. Built with React, Tailwind CSS, and Firestore database transactions to prevent double-booking. <a href='https://eunoia-psych-appoint.web.app/' target='_blank' style='text-decoration: underline; font-weight:600; color:var(--accent-blue);'>Visit EunoiaMind</a>"
  },
  {
    keywords: ["osas", "student", "affairs", "tagudin", "campus", "guidebook", "handbook", "directory", "organization"],
    response: "The <b>ISPSC OSAS Web Page</b> is the Student Affairs portal for Ilocos Sur Polytechnic State College in Tagudin Campus. It organizes campus organization directories, guidebook handbooks, and announcements. Built with HTML5, Tailwind, and JavaScript. <a href='https://osas-ispsc-tagudin.vercel.app/' target='_blank' style='text-decoration: underline; font-weight:600; color:var(--accent-blue);'>Visit OSAS Portal</a>"
  },
  {
    keywords: ["supply", "office", "inventory", "resource", "log", "distribution", "asset", "warehouse", "chart", "telemetry"],
    response: "The <b>ISPSC Supply Office System</b> is a telemetry and inventory monitor designed to manage assets, log departmental requests, and track distributions. Developed using Tailwind CSS, Firebase Authentication, and Chart.js dashboards. <a href='https://ispsc-supply-office.web.app/' target='_blank' style='text-decoration: underline; font-weight:600; color:var(--accent-blue);'>Visit Supply Office</a>"
  },
  {
    keywords: ["mari", "english", "suwon", "korea", "academy", "tutoring", "reserve", "curriculum", "lesson"],
    response: "<b>Mari English Academy</b> is a scheduling system built for a premium English tutoring academy in Suwon, South Korea. It handles lesson reservation calendars, parent curriculums, and reviews. Built with React JS and Firebase Hosting. <a href='https://mari-english.web.app/' target='_blank' style='text-decoration: underline; font-weight:600; color:var(--accent-blue);'>Visit Mari English</a>"
  },
  {
    keywords: ["project", "build", "portfolio", "case studies", "apps", "work", "creations", "development", "systems", "applications", "websites", "software"],
    response: "DEO has built several real-world applications. Ask me about:<br>• <b>DigiTrike Sudipen</b> (Smart transit & fare tracking)<br>• <b>EunoiaMind</b> (Psychological counseling reservation)<br>• <b>ISPSC OSAS</b> (Student portal and directories)<br>• <b>ISPSC Supply Office</b> (Telemetry resource inventory logs)<br>• <b>Mari English</b> (Academy schedules in Suwon, South Korea)"
  },
  {
    keywords: ["skill", "tech", "languages", "code", "react", "laravel", "database", "stack", "frontend", "backend", "mysql", "javascript", "php", "css", "html", "tailwind", "bootstrap", "firebase", "firestore", "git", "github", "canva", "prompt", "engineering", "agentic", "ai tools", "antigravity", "claude", "cursor", "codex", "copilot", "v0", "bolt", "replit"],
    response: "DEO's core technical stack includes:<br>• <b>Frontend:</b> HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap<br>• <b>Backend & Database:</b> PHP, Laravel Framework, Firebase Suite, MySQL, Firebase Firestore<br>• <b>Programming Languages:</b> JavaScript, PHP<br>• <b>Tools & Platforms:</b> Git, GitHub, VS Code, XAMPP<br>• <b>Agentic AI Tools:</b> Antigravity, Claude, Cursor, Codex, Copilot, Vercel v0, Bolt.new, Replit<br>• <b>Creative & AI Skills:</b> Canva Graphic Design (posters, banners, brochures, business cards, certificates), Photo Editing (enhancements and adjustments), and AI Prompt Engineering (Magic Media prompts, writing and coding accelerators)"
  },
  {
    keywords: ["experience", "career", "job", "work", "freelance", "history", "position", "role", "resume", "cv", "past"],
    response: "DEO's experience spans academic and freelance full-stack development since 2022:<br>• <b>Full-Stack Developer</b> (Freelance & Academic, 2022 - Present): Designing and deploying web systems, calendar booking grids (EunoiaMind, Mari English), transit trackers (DigiTrike), and asset monitors (Supply Office) using React, Laravel, Firebase, and MySQL.<br>• Designed print/digital marketing assets in Canva, and leveraged Agentic AI tools (Antigravity, Cursor, Bolt.new, v0) and prompt engineering to optimize backend development workflows."
  },
  {
    keywords: ["study", "studied", "education", "college", "degree", "university", "school", "information technology", "it", "graduate", "bs", "bsit"],
    response: "DEO is a fresh graduate with a <b>Bachelor of Science in Information Technology (BSIT)</b> from Ilocos Sur Polytechnic State College - Tagudin Campus (2022 - 2026). During his studies, he specialized in web development, database design, and systems analysis, leading multiple web-app capstones."
  },
  {
    keywords: ["certifications", "credentials", "course", "certified", "training"],
    response: "DEO holds multiple credentials, including:<br>• <b>BSIT Degree</b> (ISPSC - Tagudin Campus): software engineering, systems analysis, and database design.<br>• <b>AI-Assisted Development & Canva Design</b> (Self-Directed Learning): Hands-on experience using modern AI coding agents—including Cursor, Claude Code, GitHub Copilot, Codex, Antigravity, Bolt.new, Vercel v0, and Replit—to accelerate software prototyping, code generation, debugging, refactoring, and full-stack application development, complemented by Canva graphics, layouts, and photo editing."
  },
  {
    keywords: ["location", "live", "base", "philippines", "country", "where"],
    response: "DEO is based in the <b>Philippines</b>, but works remotely with clients globally, including tutoring systems built for Suwon, South Korea (Mari English Academy)."
  },
  {
    keywords: ["contact", "hire", "email", "job", "freelance", "collab", "avail", "message", "social", "github", "facebook", "instagram", "get in touch"],
    response: "You can reach DEO for hires or collaborations by:<br>• <b>Email:</b> <a href='mailto:deoongotan@gmail.com' style='text-decoration: underline; font-weight:600; color:var(--accent-blue);'>deoongotan@gmail.com</a><br>• <b>Form:</b> Scroll to the bottom of this page to submit a direct message.<br>• <b>Socials:</b> Connect on GitHub, Facebook, or Instagram (links are located in the contact block)."
  },
  {
    keywords: ["performance", "fps", "antigravity", "motion", "animation", "engine", "physics", "60fps"],
    response: "This portfolio is built for high performance, targeting 60 FPS. It utilizes a custom physics engine (antigravity.js) driven by requestAnimationFrame, GPU-accelerated transforms, and automatically scales down animations on low-performance devices or if prefers-reduced-motion is active."
  },
  {
    keywords: ["who", "deo", "about", "bio", "background", "story", "profile", "identity", "name", "ongotan", "person"],
    response: "DEO (Deo Ongotan) is a results-driven Full-Stack Web Developer and IT graduate based in the Philippines. He specializes in building responsive web systems, structuring databases, designing creative graphic layouts in Canva, and utilizing AI prompting workflows to deliver modern, production-ready software solutions."
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "yo", "start", "welcome", "good morning", "good afternoon", "good evening"],
    response: "Hello! I am DEO's Virtual Assistant. I'm here to help you navigate this portfolio. Ask me about DEO's projects, technical skills, background, work experience, or how to get in touch!"
  }
];

class PortfolioChatbot {
  constructor() {
    this.widget = null;
    this.toggleBtn = null;
    this.chatPanel = null;
    this.msgContainer = null;
    this.form = null;
    this.input = null;
    this.closeBtn = null;
    this.isOpened = false;

    this.init();
  }

  init() {
    this.createDOM();
    this.bindEvents();
    this.crawlPortfolio();
    
    // Welcome message
    this.addBotMessage("Hi there! 👋 Ask me anything about DEO's projects, experience, or skills. I'm ready to answer!");
  }

  createDOM() {
    // Create floating trigger and chat panel container
    this.widget = document.createElement('div');
    this.widget.className = 'chatbot-widget';
    this.widget.innerHTML = `
      <button class="chatbot-toggle magnetic" id="chatbot-toggle" data-strength="15" aria-label="Open chat assistant">
        <svg viewBox="0 0 24 24" class="chat-icon-svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="chat-badge"></span>
      </button>

      <div class="chatbot-panel" id="chatbot-panel">
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">D</div>
            <div>
              <h4>DEO's Assistant</h4>
              <span class="chat-status"><span class="status-dot"></span>Online</span>
            </div>
          </div>
          <button class="chat-close-btn" id="chat-close" aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="chat-messages" id="chat-messages">
          <!-- Messages inject here -->
        </div>

        <div class="chat-presets">
          <button class="preset-btn" data-query="Who is DEO?">About DEO</button>
          <button class="preset-btn" data-query="Show me your projects">Projects</button>
          <button class="preset-btn" data-query="What skills do you have?">Tech Stack</button>
          <button class="preset-btn" data-query="How to contact you?">Hire DEO</button>
        </div>

        <form class="chat-input-area" id="chat-form" autocomplete="off">
          <input type="text" id="chat-input" placeholder="Type a message..." required>
          <button type="submit" class="chat-send-btn" aria-label="Send message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(this.widget);

    // Cache elements
    this.toggleBtn = document.getElementById('chatbot-toggle');
    this.chatPanel = document.getElementById('chatbot-panel');
    this.msgContainer = document.getElementById('chat-messages');
    this.form = document.getElementById('chat-form');
    this.input = document.getElementById('chat-input');
    this.closeBtn = document.getElementById('chat-close');
  }

  bindEvents() {
    this.toggleBtn.addEventListener('click', () => this.toggleChat());
    this.closeBtn.addEventListener('click', () => this.toggleChat());

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = this.input.value.trim();
      if (!val) return;

      this.addUserMessage(val);
      this.input.value = '';

      // Trigger bot response
      this.getBotResponse(val);
    });

    // Preset queries clicks
    const presets = this.widget.querySelectorAll('.preset-btn');
    presets.forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-query');
        this.addUserMessage(query);
        this.getBotResponse(query);
      });
    });

    // Adapt to custom cursor hooks
    if (window.premiumCursorInstance) {
      window.premiumCursorInstance.updateInteractives();
    }
  }

  crawlPortfolio() {
    this.portfolioData = [];

    // Helper to clean up multiple spaces/newlines
    const cleanText = (txt) => txt ? txt.replace(/\s+/g, ' ').trim() : '';

    // Crawl About section
    const aboutSec = document.getElementById('about') || document.querySelector('.about-section');
    if (aboutSec) {
      const bioText = aboutSec.querySelector('.story-text')?.innerText || aboutSec.innerText;
      this.portfolioData.push({
        id: 'about',
        title: 'About DEO / Biography',
        text: cleanText(bioText),
        category: 'about'
      });
    }

    // Crawl Skills section panels
    const skillsSec = document.querySelector('.skills-section') || document.getElementById('skills');
    if (skillsSec) {
      const panels = skillsSec.querySelectorAll('.skills-panel');
      panels.forEach(panel => {
        const id = panel.id;
        const panelName = id.replace('panel-', '');
        // Gather specific skill items
        const cards = panel.querySelectorAll('.skill-meter-card');
        let skillDetails = [];
        cards.forEach(card => {
          const name = card.querySelector('.skill-name')?.innerText || '';
          const percent = card.querySelector('.skill-percentage')?.innerText || '';
          skillDetails.push(`${name} (${percent})`);
        });
        this.portfolioData.push({
          id: id,
          title: `Skills & Tools (${panelName.toUpperCase()})`,
          text: `DEO's core tools and technologies for ${panelName} development are: ${skillDetails.join(', ')}.`,
          category: 'skills'
        });
      });
    }

    // Crawl Projects section
    const projectsSec = document.querySelector('.projects-section') || document.getElementById('projects');
    if (projectsSec) {
      const cards = projectsSec.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        const title = card.querySelector('h3')?.innerText || '';
        const desc = card.querySelector('p')?.innerText || '';
        const tags = Array.from(card.querySelectorAll('.project-tags span')).map(s => s.innerText).join(', ');
        const url = card.querySelector('.btn-view')?.getAttribute('href') || card.querySelector('a')?.getAttribute('href') || '';
        this.portfolioData.push({
          id: `project-${index}`,
          title: `Project: ${title}`,
          text: `Project Name: ${title}. Description: ${desc}. Technologies used: ${tags}.`,
          category: 'projects',
          url: url
        });
      });
    }

    // Crawl Experience timeline
    const timelineSec = document.querySelector('.timeline-section') || document.getElementById('experience');
    if (timelineSec) {
      const cards = timelineSec.querySelectorAll('.timeline-card');
      cards.forEach((card, index) => {
        const title = card.querySelector('h3')?.innerText || '';
        const org = card.querySelector('.timeline-org')?.innerText || '';
        const desc = card.querySelector('p')?.innerText || '';
        const date = card.parentElement.querySelector('.timeline-date')?.innerText || '';
        const category = card.parentElement.querySelector('.timeline-category')?.innerText || '';
        this.portfolioData.push({
          id: `experience-${index}`,
          title: `Experience: ${title} at ${org}`,
          text: `Position: ${title} at ${org} (${category}, ${date}). Role details: ${desc}`,
          category: 'experience'
        });
      });
    }

    // Crawl contact section
    const contactSec = document.getElementById('contact') || document.querySelector('.contact-section');
    if (contactSec) {
      const contactText = contactSec.querySelector('.contact-info-wrap')?.innerText || contactSec.innerText;
      this.portfolioData.push({
        id: 'contact',
        title: 'Contact Information & Collaboration',
        text: cleanText(contactText),
        category: 'contact'
      });
    }
  }

  searchPortfolio(query) {
    const stopWords = new Set(["a", "an", "the", "what", "is", "his", "her", "of", "in", "on", "at", "by", "for", "with", "about", "to", "deo", "deo's", "use", "used", "by", "are", "do", "does", "he", "she", "they", "you", "your", "my", "me", "i", "how", "where", "when", "who", "tell", "show", "get", "find", "search", "tool", "tools", "used", "uses"]);

    const cleanQuery = query.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g," ");
    const words = cleanQuery.split(/\s+/).filter(w => w.length > 1);
    const searchTerms = words.filter(w => !stopWords.has(w));

    if (searchTerms.length === 0) return null;

    let bestDoc = null;
    let maxScore = 0;

    for (const doc of this.portfolioData) {
      let score = 0;
      const docTextLower = doc.text.toLowerCase();
      const docTitleLower = doc.title.toLowerCase();

      searchTerms.forEach(term => {
        if (docTextLower.includes(term)) {
          score += 1.5;
          // Count exact word occurrences
          const regex = new RegExp("\\b" + term + "\\b", 'g');
          const count = (docTextLower.match(regex) || []).length;
          score += count * 0.8;
        }

        if (docTitleLower.includes(term)) {
          score += 12;
        }
      });

      // Special boosting for multi-word phrases and common queries
      if (cleanQuery.includes("front end") || cleanQuery.includes("frontend")) {
        if (doc.id.includes("frontend") || docTextLower.includes("frontend") || docTextLower.includes("front end")) {
          score += 22;
        }
      }
      if (cleanQuery.includes("back end") || cleanQuery.includes("backend")) {
        if (doc.id.includes("backend") || docTextLower.includes("backend") || docTextLower.includes("back end")) {
          score += 22;
        }
      }
      if (cleanQuery.includes("mobile")) {
        if (doc.id.includes("mobile") || docTextLower.includes("mobile")) {
          score += 22;
        }
      }
      if (cleanQuery.includes("database") || cleanQuery.includes("db") || cleanQuery.includes("sql")) {
        if (doc.id.includes("database") || docTextLower.includes("database")) {
          score += 22;
        }
      }
      if (cleanQuery.includes("design") || cleanQuery.includes("ux") || cleanQuery.includes("ui")) {
        if (doc.id.includes("design") || docTextLower.includes("design") || docTextLower.includes("ui/ux")) {
          score += 22;
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestDoc = doc;
      }
    }

    if (bestDoc && maxScore >= 1.5) {
      return { doc: bestDoc, score: maxScore };
    }

    return null;
  }

  toggleChat() {
    this.isOpened = !this.isOpened;
    this.chatPanel.classList.toggle('open', this.isOpened);
    this.widget.classList.toggle('active', this.isOpened);
    
    // Hide chat badge on open
    if (this.isOpened) {
      const badge = this.widget.querySelector('.chat-badge');
      if (badge) badge.style.display = 'none';
      setTimeout(() => {
        this.scrollToBottom();
      }, 200);
    }
  }

  addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'chat-bubble user-msg';
    msg.innerHTML = `<p>${text}</p>`;
    this.msgContainer.appendChild(msg);
    this.scrollToBottom();
  }

  addBotMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'chat-bubble bot-msg';
    msg.innerHTML = `<p>${text}</p>`;
    this.msgContainer.appendChild(msg);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'chat-bubble bot-msg typing-indicator';
    indicator.id = 'typing-indicator';
    indicator.innerHTML = `
      <div class="dot-pulse-chat">
        <span></span><span></span><span></span>
      </div>
    `;
    this.msgContainer.appendChild(indicator);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
  }

  getBotResponse(userMsg) {
    this.showTypingIndicator();

    const cleanMsg = userMsg.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g," ");

    let response = null;
    let matchedEntry = null;

    // 1. Try to find a matched entry in BOT_DATABASE
    for (const entry of BOT_DATABASE) {
      const matchedKeywords = entry.keywords.filter(keyword => cleanMsg.includes(keyword));
      if (matchedKeywords.length > 0) {
        const strength = matchedKeywords.length;
        if (!matchedEntry || strength > matchedEntry.strength) {
          matchedEntry = { entry, strength };
        }
      }
    }

    // 2. Perform live DOM search
    const searchResult = this.searchPortfolio(userMsg);

    // 3. Dispatch response
    // If a search result matches a specific category and database is a general about/hello match, use live search
    if (searchResult && (!matchedEntry || matchedEntry.entry.keywords.includes("deo") || matchedEntry.entry.keywords.includes("hello"))) {
      const doc = searchResult.doc;
      if (doc.category === 'skills') {
        const listStr = doc.text.replace(/DEO's core tools and technologies for \w+ development are:\s*/, "");
        response = `Based on the portfolio, here are DEO's tools and technologies for <b>${doc.title}</b>:<br><br>• ${listStr.replace(/,\s*/g, "<br>• ")}`;
      } else if (doc.category === 'projects') {
        response = `I found a matching project in the portfolio:<br><br><b>${doc.title}</b><br><br>${doc.text}`;
        if (doc.url) {
          response += `<br><br><a href="${doc.url}" target="_blank" style="text-decoration: underline; font-weight:600; color:var(--accent-blue);">Open Live App</a>`;
        }
      } else if (doc.category === 'experience') {
        response = `I found the following in DEO's experience section:<br><br><b>${doc.title}</b><br><br>${doc.text}`;
      } else if (doc.category === 'about') {
        response = `Here is what's described in DEO's about info:<br><br>${doc.text}`;
      } else {
        response = `I found information in the <b>${doc.title}</b> section:<br><br>${doc.text}`;
      }
    } else if (matchedEntry) {
      // High-quality manual database mapping
      response = matchedEntry.entry.response;
    } else {
      // Default suggestion fallback
      response = "I couldn't find a direct match. Could you rephrase? You can ask me about:<br>• Specific projects (DigiTrike, EunoiaMind, OSAS, Mari English)<br>• Technical stacks (Frontend or Backend tools)<br>• Work experience and education background";
    }

    // Simulate typing delay
    setTimeout(() => {
      this.hideTypingIndicator();
      this.addBotMessage(response);
    }, 1000 + Math.random() * 800);
  }

  scrollToBottom() {
    this.msgContainer.scrollTop = this.msgContainer.scrollHeight;
  }
}

// Instantiate on startup
window.addEventListener('DOMContentLoaded', () => {
  window.portfolioChatbotInstance = new PortfolioChatbot();
});
