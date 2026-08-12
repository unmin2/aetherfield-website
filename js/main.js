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

// --- ТЕМА (DARK/LIGHT) ---
function initTheme() {
  // 1. Сначала СРАЗУ применяем сохранённую тему для ВСЕХ страниц
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }

  // 2. И только потом ищем кнопку переключателя (если она есть на этой странице)
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Обновляем иконку на кнопке
  updateThemeIcon(savedTheme === 'light');

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

// --- AI ASSISTANT (AETHERAI CORE V3 — DEEP REASONING) ---
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

  setupVoiceInput();

  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-action');
      if (action === 'help') processUserMessage('help');
      if (action === 'random') processUserMessage('recommend article');
      if (action === 'tldr') processUserMessage('latest article summary');
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

  // --- Voice Input (Web Speech API) ---
  function setupVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    if (form && !document.getElementById('ai-mic-btn')) {
      const micBtn = document.createElement('button');
      micBtn.type = 'button';
      micBtn.id = 'ai-mic-btn';
      micBtn.className = 'ai-mic-btn';
      micBtn.innerHTML = '🎙️';
      micBtn.title = 'Voice Input';
      form.insertBefore(micBtn, form.querySelector('button[type="submit"]'));

      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;

      micBtn.addEventListener('click', () => {
        try {
          recognition.start();
          micBtn.classList.add('recording');
        } catch (err) {
          recognition.stop();
          micBtn.classList.remove('recording');
        }
      });

      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        micBtn.classList.remove('recording');
        processUserMessage(transcript);
      };

      recognition.onerror = recognition.onend = () => micBtn.classList.remove('recording');
    }
  }

  // --- Reasoning Engine ---
  function processUserMessage(text) {
    addMessage(escapeHtml(text), 'user');

    // 1. Create Thinking block
    const thinkingId = showThinkingProcess();

    // Simulated two-step deep reasoning
    setTimeout(() => {
      updateThinkingStep(thinkingId, "Analyzing context and Aetherfield knowledge base...");
    }, 600);

    setTimeout(() => {
      updateThinkingStep(thinkingId, "Formulating a comprehensive response...");
    }, 1200);

    setTimeout(() => {
      removeThinkingProcess(thinkingId);
      const response = generateThoughtfulResponse(text);
      addMessage(response, 'bot');
    }, 1800);
  }

  // Thoughtful Response Generator
  function generateThoughtfulResponse(userText) {
    const q = userText.toLowerCase().trim();

    // 1. Search database
    const matchedArticles = articlesData.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q)
    );

    // 2. Dialogue logic
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('greetings')) {
      return `Hello! I'm **AetherAI**, your assistant at *Aetherfield*. <br><br>I can help you explore spatial interfaces, WebAssembly, modern UI/UX standards, and engineering careers. What would you like to discover today?`;
    }

    if (q.includes('help') || q.includes('sos') || q.includes('what can you do')) {
      return `
        I'd be glad to guide you around our platform:<br><br>
        • <b>Article Analysis:</b> Ask me about <i>Design, WebAssembly, AI, or Spatial Computing</i> to get tailored articles.<br>
        • <b>Summaries & Recommendations:</b> Say <i>"recommend an article"</i> or <i>"summarize latest"</i>.<br>
        • <b>Careers:</b> Check our latest open job positions.<br>
        • <b>Customization:</b> Ask me to <i>"switch to light theme"</i> or <i>"dark mode"</i>.<br><br>
        Feel free to type your query or press the 🎙️ icon to speak!
      `;
    }

    if (q.includes('recommend') || q.includes('random') || q.includes('suggest')) {
      const art = articlesData[Math.floor(Math.random() * articlesData.length)];
      return `
        I reviewed our library and picked this for you:<br><br>
        📖 <b><a href="article.html?id=${art.id}" style="color:var(--accent-color); text-decoration:underline;">${art.title}</a></b><br>
        <small>Category: ${art.category} • Read time: ${art.readTime}</small><br><br>
        <i>"${art.summary}"</i><br><br>
        Would you like more articles from this category?
      `;
    }

    if (q.includes('latest') || q.includes('recent') || q.includes('new') || q.includes('tldr')) {
      const top = articlesData[0];
      return `
        Here is the newest publication in our journal:<br><br>
        ✨ <b><a href="article.html?id=${top.id}" style="color:var(--accent-color); text-decoration:underline;">${top.title}</a></b><br><br>
        <b>Overview:</b> ${top.summary}<br><br>
        You can jump right into reading, or ask me for key takeaways!
      `;
    }

    if (q.includes('job') || q.includes('career') || q.includes('work') || q.includes('hiring')) {
      const jobsList = jobsData.map(j => `• <b>${j.role}</b> — <i>${j.dept}</i> (${j.type})`).join('<br>');
      return `
        We're always looking for talented folks! Here are our currently open roles:<br><br>
        ${jobsList}<br><br>
        Detailed requirements and application forms can be found on our <a href="careers.html" style="color:var(--accent-color); text-decoration:underline;">Careers Page</a>.
      `;
    }

    if (q.includes('light')) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
      return `All set! Switched the interface to **Light Theme**. ☀️`;
    }

    if (q.includes('dark')) {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
      return `Done! Returned to **Dark Theme**. 🌙`;
    }

    if (matchedArticles.length > 0) {
      const items = matchedArticles.slice(0, 3).map(a => 
        `• <a href="article.html?id=${a.id}" style="color:var(--accent-color); text-decoration:underline;"><b>${a.title}</b></a> (${a.category})<br><small style="opacity:0.8;">${a.summary}</small>`
      ).join('<br><br>');

      return `
        I searched our knowledge base and found ${matchedArticles.length} matching article(s):<br><br>
        ${items}<br><br>
        Which one would you like to explore first?
      `;
    }

    return `
      Hmm, I was thinking about your query: <i>"${escapeHtml(userText)}"</i>, but couldn't find an exact match in our current articles.<br><br>
      Try searching by main topics: <b>Spatial Design, WebAssembly, UX, Async Culture</b>, or type <i>"help"</i>!
    `;
  }

  // --- Thinking Process UI ---
  function showThinkingProcess() {
    const id = 'thinking-' + Date.now();
    const div = document.createElement('div');
    div.id = id;
    div.className = 'ai-msg bot ai-thinking-block';
    div.innerHTML = `
      <div class="ai-thinking-header">
        <span class="ai-brain-icon">🧠</span> 
        <span class="ai-thinking-text">Thinking...</span>
      </div>
    `;
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return id;
  }

  function updateThinkingStep(id, text) {
    const el = document.getElementById(id);
    if (el) {
      const textEl = el.querySelector('.ai-thinking-text');
      if (textEl) textEl.textContent = text;
    }
  }

  function removeThinkingProcess(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function addMessage(htmlContent, type) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-msg ${type}`;
    msgDiv.innerHTML = htmlContent;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  }
}