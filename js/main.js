// ==========================================ДАННЫЕ (БАЗА КОНТЕНТА С ПОЛНЫМИ ТЕКСТАМИ)
// ==========================================

const articlesData = [
  {
    id: 1,
    title: "The Future of Spatial Interfaces & Ambient UX",
    category: "Design",
    date: "AUG 05, 2026",
    readTime: "6 min read",
    author: "Elena Rostova",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    summary: "How 3D spatial computing and context-aware interfaces are replacing 2D screens across web applications.",
    content: `
      <p>As interaction design evolves beyond flat rectangles, spatial computing is redefining how we interact with digital tools.</p>
      <p>Modern interfaces are no longer constrained by rigid pixels. Designers now construct fluid environments that respond to lighting, gaze, gesture, and physical depth.</p>
      <h2>Key Architectural Pillars</h2>
      <p>Spatial design demands a shift toward ambient minimalism. Rather than crowding the canvas with controls, tools remain hidden until called upon by user intent.</p>
      <ul>
        <li><b>Depth Refraction:</b> Replacing traditional flat drop shadows with dynamic optical blurs.</li>
        <li><b>Ergonomic Comfort:</b> UI elements designed around natural hand radii to reduce fatigue.</li>
        <li><b>Contextual Awareness:</b> Interfaces adapt automatically to environmental illumination.</li>
      </ul>
      <p>Building for ambient UX requires developers and designers to work in unison, crafting lightweight models that render instantly across modern web browsers.</p>
    `
  },
  {
    id: 2,
    title: "Zero-Config Toolchains and WebAssembly in 2026",
    category: "Technology",
    date: "AUG 03, 2026",
    readTime: "5 min read",
    author: "Alexander Chen",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    summary: "Exploring native ES modules, edge runtimes, and WebAssembly as heavy bundlers become obsolete.",
    content: `
      <p>The JavaScript ecosystem has undergone a massive simplification. Native browser support for ES modules and WebAssembly renders complex build steps and 5MB JavaScript bundles obsolete.</p>
      <h2>The Rise of Zero-Dependency Architecture</h2>
      <p>Web developers are rediscovering the speed and security of lean codebases. Modern browser engines have evolved rapidly, providing native APIs that solve problems once delegated to heavy external npm packages.</p>
      <h2>Key Benefits:</h2>
      <ul>
        <li><b>Instant Initial Load:</b> Sub-100ms content delivery without complex SSR hydrations.</li>
        <li><b>Enhanced Security:</b> Eliminating third-party packages protects apps from supply-chain attacks.</li>
        <li><b>Native Longevity:</b> Standard Web APIs do not break every year like third-party frameworks.</li>
      </ul>
      <p>By relying on native web standards, we build a web that is faster, safer, and resilient.</p>
    `
  },
  {
    id: 3,
    title: "Building High-Performing Remote Product Cultures",
    category: "Careers",
    date: "JUL 29, 2026",
    readTime: "7 min read",
    author: "Sarah Jenkins",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    summary: "Why async documentation and high trust models outperform rigid synchronous office hours.",
    content: `
      <p>Constant pinging notifications and back-to-back calendar meetings are the greatest threats to high-quality engineering and design work. Leading digital teams are pivoting to asynchronous communication.</p>
      <h2>The Async First Mindset</h2>
      <p>Asynchronous work means replacing real-time discussions with clear, well-written documentation. Instead of scheduling a 30-minute sync call, team members share detailed updates, code specs, or Loom walkthroughs.</p>
      <h2>Benefits of Async Teams:</h2>
      <ul>
        <li><b>4+ Hours of Uninterrupted Flow:</b> Deep focus time without context switching.</li>
        <li><b>Global Talent Pool:</b> Work seamlessly across different time zones without forcing anyone into midnight meetings.</li>
        <li><b>Better Decision Making:</b> Written proposals encourage thoughtful analysis rather than fast, reactionary opinions.</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Architectural Principles of Minimalist Design",
    category: "Design",
    date: "JUL 22, 2026",
    readTime: "4 min read",
    author: "Elena Rostova",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    summary: "Simplicity is not the absence of clutter, but the deliberate presence of visual rhythm.",
    content: `
      <p>Minimalism is often misunderstood as simply removing elements until a page looks empty. In reality, true minimalism is about creating intentional hierarchy and rhythm.</p>
      <h2>Proportions and Negative Space</h2>
      <p>Negative space (white space) acts as the oxygen of your layout. It guides the reader's visual flow and establishes clear relationships between titles, imagery, and body paragraphs.</p>
      <p>When every pixel serves a purpose, user cognitive load drops dramatically, leading to higher engagement and better comprehension.</p>
    `
  },
  {
    id: 5,
    title: "Accessible Interaction Systems for Everyone",
    category: "Design",
    date: "JUL 18, 2026",
    readTime: "5 min read",
    author: "Marcus Vance",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=80",
    summary: "Designing inclusive digital platforms with WCAG 3.0 compliance and full screen-reader support.",
    content: `
      <p>Accessibility is not a luxury or a checklist item added at the end of a project. It is the core indicator of high-grade product engineering.</p>
      <h2>Building for Diverse Abilities</h2>
      <p>From screen readers to keyboard-only navigation, designing with accessibility in mind ensures that software is usable for everyone, including users with visual, motor, or cognitive impairments.</p>
      <ul>
        <li><b>Semantic HTML:</b> Using standard standard tags like &lt;main&gt;, &lt;article&gt;, and &lt;nav&gt;.</li>
        <li><b>Contrast Ratios:</b> Meeting WCAG 3.0 standards for outdoor and low-light readability.</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "AI Automation Workflows for Modern Frontends",
    category: "Technology",
    date: "JUL 12, 2026",
    readTime: "8 min read",
    author: "Alexander Chen",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    summary: "Integrating generative AI helpers directly into local development pipelines and CI/CD testing.",
    content: `
      <p>Artificial intelligence is transforming frontend engineering from manual code writing to high-level architectural orchestration.</p>
      <h2>Autonomous Code Pairing</h2>
      <p>Modern developer tools leverage micro-models directly inside the browser environment to catch edge-case bugs, generate unit tests automatically, and audit accessibility standards in real-time.</p>
    `
  },
  {
    id: 7,
    title: "The Psychology of Dark Mode & Eye Strain",
    category: "Design",
    date: "JUL 08, 2026",
    readTime: "4 min read",
    author: "Elena Rostova",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
    summary: "Optimizing contrast ratios and OLED color palettes to protect visual health during night sessions.",
    content: `
      <p>Pure black pixels (#000000) on OLED screens can cause harsh halation and eye strain when juxtaposed with crisp white text.</p>
      <h2>Designing Muted Dark Palettes</h2>
      <p>Instead of pure black, modern dark themes utilize rich slate (#0b0c10) and deep navy backgrounds paired with soft white text (#f8fafc) to reduce visual glare during prolonged focus sessions.</p>
    `
  },
  {
    id: 8,
    title: "Micro-Frontends and Modular Web Architecture",
    category: "Technology",
    date: "JUL 02, 2026",
    readTime: "6 min read",
    author: "Alexander Chen",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    summary: "Breaking massive web applications into autonomous, independently deployable frontend services.",
    content: `
      <p>As web applications scale across large organizations, monolithic frontend codebases often become bottlenecks for feature deployment.</p>
      <h2>Independent Micro-Apps</h2>
      <p>Micro-frontends allow engineering teams to own separate verticals independently, deploying feature updates without risking global codebase breakage.</p>
    `
  },
  {
    id: 9,
    title: "Navigating Senior Engineering Careers in 2026",
    category: "Careers",
    date: "JUN 25, 2026",
    readTime: "7 min read",
    author: "Sarah Jenkins",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    summary: "Shifting from individual contribution to technical leadership, domain mastery, and mentorship.",
    content: `
      <p>Advancing as a senior engineer is less about writing thousands of lines of code and more about technical clarity, mentoring teammates, and driving architectural vision.</p>
    `
  }
];

const jobsData = [
  { role: "Senior Spatial UX Designer", type: "Remote • Full-Time", dept: "Design" },
  { role: "Frontend Systems Engineer", type: "Remote • Full-Time", dept: "Engineering" },
  { role: "Technical Writer & Editor", type: "Remote • Part-Time", dept: "Editorial" }
];

// ==========================================
//  ИНИЦИАЛИЗАЦИЯ
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initArticleGrid();
  initArticleSingle();
  initGSAP();
  initConfetti();
  initAIAssistant();
});

// ==========================================
// ФУНКЦИОНАЛЬНЫЕ МОДУЛИ
// ==========================================

// --- ТЕМА (DARK/LIGHT) ---
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon(true);
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
  });

  function updateThemeIcon(isLight) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', isLight ? 'moon' : 'sun');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  }
}

// --- МОБИЛЬНОЕ МЕНЮ ---
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        const isOpened = navLinks.classList.contains('active');
        icon.setAttribute('data-lucide', isOpened ? 'x' : 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  }
}

// --- СЕТКА СТАТЕЙ (ГЛАВНАЯ) ---
function initArticleGrid() {
  const container = document.getElementById('articles-container');
  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!container) return;

  let activeCategory = 'All';
  let searchQuery = '';

  function render() {
    const filtered = articlesData.filter(art => {
      const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
      const matchesSearch = art.title.toLowerCase().includes(searchQuery) ||
                            art.summary.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1 / -1; padding: 60px; text-align: center; color: var(--text-muted);">No articles found matching your criteria.</div>`;
      return;
    }

    container.innerHTML = filtered.map((art, index) => {
      const isFeatured = index === 0 && activeCategory === 'All' && !searchQuery;
      return `
        <article class="article-card ${isFeatured ? 'featured' : ''}" onclick="openArticle(${art.id})">
          <div class="article-image-wrapper">
            <img class="article-image" src="${art.imageUrl}" alt="${art.title}" loading="lazy">
          </div>
          <div class="article-content-box">
            <div class="article-meta">
              <span class="article-category ${art.category.toLowerCase()}">${art.category}</span>
              <span>${art.date}</span>
              <span>• ${art.readTime}</span>
            </div>
            <h2 class="article-title">${art.title}</h2>
            <p class="article-excerpt">${art.summary}</p>
          </div>
        </article>
      `;
    }).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.getAttribute('data-category');
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      render();
    });
  }

  render();
}

function openArticle(id) {
  window.location.href = `article.html?id=${id}`;
}

// --- РЕНДЕР СТРАНИЦЫ СТАТЬИ ---
function initArticleSingle() {
  const detailContainer = document.getElementById('article-detail-container') || document.getElementById('article-single-container');
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = parseInt(urlParams.get('id')) || 1;
  const article = articlesData.find(item => item.id === articleId) || articlesData[0];

  detailContainer.innerHTML = `
    <div class="article-single-page">
      <header class="gsap-animate">
        <a href="index.html" class="back-link"><i data-lucide="arrow-left"></i> Back to Journal</a>
        <div class="article-meta" style="margin-top: 16px;">
          <span class="article-category ${article.category.toLowerCase()}">${article.category}</span>
          <span>${article.date}</span>
          <span>• ${article.readTime}</span>
        </div>
        <h1 class="article-single-title">${article.title}</h1>
        <p style="color:var(--text-muted); font-size: 1rem;">Written by <strong style="color: var(--text-color);">${article.author}</strong></p>
      </header>
      
      <img class="article-single-image gsap-animate" src="${article.imageUrl}" alt="${article.title}">
      
      <div class="article-body-text gsap-animate">
        ${article.content}
      </div>
    </div>
  `;
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// --- GSAP АНИМАЦИИ ---
function initGSAP() {
  if (typeof gsap !== 'undefined') {
    gsap.from(".gsap-animate", {
      opacity: 0,
      y: 25,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      delay: 0.1
    });
  }
}


function initConfetti() {
  const applyBtns = document.querySelectorAll('.apply-btn');
  const modalOverlay = document.getElementById('apply-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');

  if (modalOverlay) {
    applyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const role = btn.getAttribute('data-role');
        if (modalTitle) modalTitle.textContent = `Apply Position: ${role}`;
        modalOverlay.classList.add('active');
      });
    });

    if (modalClose) modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  const careerForm = document.getElementById('career-form');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (typeof confetti !== 'undefined') {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#818cf8', '#fbbf24', '#ffffff']
        });
      }

      alert("🎉 Application submitted successfully! We will contact you soon.");
      careerForm.reset();
      if (modalOverlay) modalOverlay.classList.remove('active');
    });
  }
}

// --- ИИ-ПОМОЩНИК (AETHERAI) ---
function initAIAssistant() {
  const toggleBtn = document.getElementById('ai-toggle-btn');
  const closeBtn = document.getElementById('ai-close-btn');
  const chatWindow = document.getElementById('ai-chat-window');
  const form = document.getElementById('ai-form');
  const input = document.getElementById('ai-input');
  const messagesContainer = document.getElementById('ai-messages');
  const quickBtns = document.querySelectorAll('.ai-quick-btn');

  if (!toggleBtn || !chatWindow) return;

  toggleBtn.addEventListener('click', () => chatWindow.classList.toggle('active'));
  if (closeBtn) closeBtn.addEventListener('click', () => chatWindow.classList.remove('active'));

  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-action');
      if (action === 'help') processUserMessage('help me');
      if (action === 'random') processUserMessage('recommend random');
      if (action === 'tldr') processUserMessage('summarize top article');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      processUserMessage(text);
      input.value = '';
    });
  }

  function processUserMessage(text) {
    addMessage(text, 'user');

    setTimeout(() => {
      const query = text.toLowerCase().trim();
      let response = "";

      if (query.includes('help me') || query === 'help' || query.includes('sos')) {
        response = `
          👋 <b>Here is how I can help you today:</b><br><br>
          • Type <b>"Design"</b> or <b>"Tech"</b> to see specific topics.<br>
          • Type <b>"Recommend"</b> to get a random article.<br>
          • Type <b>"Careers"</b> to explore job opportunities.
        `;
      } else if (query.includes('random') || query.includes('recommend')) {
        const randomArt = articlesData[Math.floor(Math.random() * articlesData.length)];
        response = `🎲 Recommended read: <b><a href="article.html?id=${randomArt.id}" style="color:var(--accent-color); text-decoration:underline;">${randomArt.title}</a></b> (${randomArt.category}).`;
      } else if (query.includes('summarize') || query.includes('tldr')) {
        const topArt = articlesData[0];
        response = `💡 <b>Latest Article Summary:</b> "${topArt.summary}"`;
      } else if (query.includes('career') || query.includes('job')) {
        response = `💼 We have ${jobsData.length} open roles. Visit our <a href="careers.html" style="color:var(--accent-color);">Careers Page</a>!`;
      } else {
        response = `I am here to help! Try typing <b>"Design"</b>, <b>"Recommend"</b>, or <b>"help me"</b>!`;
      }

      addMessage(response, 'bot');
    }, 400);
  }

  function addMessage(htmlContent, type) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-msg ${type}`;
    msgDiv.innerHTML = htmlContent;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}