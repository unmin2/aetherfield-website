const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Мидлвары
app.use(cors());
app.use(express.json());

// Отдача статических файлов фронтенда (html, css, js, images)
app.use(express.static(path.join(__dirname, './')));

// ==========================================
// БАЗА ДАННЫХ (In-Memory)
// ==========================================
const articles = [
  {
    id: 1,
    title: "Spatial Interfaces & The Future of UX",
    excerpt: "Exploring 3D spatial UI patterns, depth hierarchy, and real-time lighting in next-gen web applications.",
    category: "Design",
    date: "May 12, 2026",
    readTime: "6 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    content: "Full content for Spatial Interfaces..."
  },
  {
    id: 2,
    title: "Zero-Cost Abstractions in WebAssembly",
    excerpt: "How Rust and Wasm enable high-performance compute in browser-native graphic editors.",
    category: "Technology",
    date: "May 08, 2026",
    readTime: "10 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    content: "Full content for WebAssembly..."
  },
  {
    id: 3,
    title: "Building Resilient Design Systems at Scale",
    excerpt: "A deep dive into token architecture, automated component testing, and cross-platform syncing.",
    category: "Careers",
    date: "Apr 29, 2026",
    readTime: "8 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    content: "Full content for Design Systems..."
  }
];

// ==========================================
// API ENDPOINTS
// ==========================================

// 1. Получить все статьи (с поддержкой поиска и фильтра по категории)
app.get('/api/articles', (req, res) => {
  const { category, search } = req.query;
  let filtered = [...articles];

  if (category && category !== 'all') {
    filtered = filtered.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(a => 
      a.title.toLowerCase().includes(q) || 
      a.excerpt.toLowerCase().includes(q)
    );
  }

  res.json(filtered);
});

// 2. Получить конкретную статью по ID
app.get('/api/articles/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({ error: 'Статья не найдена' });
  }
  res.json(article);
});

// 3. Отправка заявки на подписку (Newsletter)
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Некорректный email' });
  }
  console.log(`[SUBSCRIBE] Новый подписчик: ${email}`);
  res.json({ success: true, message: 'Успешная подписка!' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});