/* ============================================
   PROGRAMMES PAGE JAVASCRIPT
   ============================================ */

// Programme Data
const programmesData = [
  // Child Focused Activities
  {
    id: 1,
    title: "Child Rights Campaign",
    category: "child",
    tags: ["advocacy", "awareness", "rights"],
    description: "Empowering children through awareness campaigns against child labor, child marriage, and abuse. Creating a safer future for every child.",
    duration: "Ongoing",
    participants: "500+",
    age: "8-14 years",
    type: "Campaign",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>`
  },
  {
    id: 2,
    title: "Child Education Support",
    category: "child",
    tags: ["education", "learning", "support"],
    description: "Providing educational support, books, and digital learning resources to underprivileged children. Building a foundation for lifelong learning.",
    duration: "12 months",
    participants: "300+",
    age: "6-16 years",
    type: "Support Program",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>`
  },
  {
    id: 3,
    title: "Child Health & Mental Care",
    category: "child",
    tags: ["health", "mental-health", "wellbeing"],
    description: "Mental health support and counseling services for children. Creating a safe space for emotional growth and psychological wellbeing.",
    duration: "Ongoing",
    participants: "200+",
    age: "8-16 years",
    type: "Healthcare",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>`
  },
  {
    id: 4,
    title: "Child Safe Internet Program",
    category: "child",
    tags: ["technology", "safety", "digital"],
    description: "Teaching children about online safety, digital citizenship, and responsible internet usage. Protecting young minds in the digital age.",
    duration: "6 months",
    participants: "400+",
    age: "10-16 years",
    type: "Tech Education",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>`
  },
  {
    id: 5,
    title: "Child Creativity Hub",
    category: "child",
    tags: ["creative", "arts", "expression"],
    description: "Fostering creativity through storytelling, debates, arts, and creative workshops. Nurturing young talents and innovative thinking.",
    duration: "Ongoing",
    participants: "350+",
    age: "7-14 years",
    type: "Creative Program",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>`
  },
  
  // Youth Focused Activities
  {
    id: 6,
    title: "Skill Development Programs",
    category: "youth",
    tags: ["technology", "skills", "training"],
    description: "Comprehensive training in coding, graphic design, digital marketing, and entrepreneurship. Preparing youth for the digital economy.",
    duration: "3-6 months",
    participants: "250+",
    age: "16-25 years",
    type: "Training Program",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>`
  },
  {
    id: 7,
    title: "Youth Cyber Forum",
    category: "youth",
    tags: ["technology", "safety", "community"],
    description: "Addressing online safety, cyberbullying prevention, and digital ethics. Building a responsible digital community.",
    duration: "Ongoing",
    participants: "180+",
    age: "15-24 years",
    type: "Community Forum",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`
  },
  {
    id: 8,
    title: "Research & Innovation Hub",
    category: "youth",
    tags: ["research", "innovation", "startup"],
    description: "Supporting youth research, innovative projects, and startup initiatives. Turning ideas into impactful solutions.",
    duration: "12 months",
    participants: "150+",
    age: "18-28 years",
    type: "Innovation Lab",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>`
  },
  {
    id: 9,
    title: "Youth Media & Content Creation",
    category: "youth",
    tags: ["creative", "media", "content"],
    description: "Creating awareness and driving change through digital content creation, video production, and social media campaigns.",
    duration: "Ongoing",
    participants: "200+",
    age: "16-26 years",
    type: "Media Program",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>`
  },
  {
    id: 10,
    title: "Youth Leadership Platform",
    category: "youth",
    tags: ["leadership", "development", "community"],
    description: "Developing leadership skills through debates, knowledge sharing, and community engagement. Building tomorrow's leaders today.",
    duration: "6 months",
    participants: "220+",
    age: "17-25 years",
    type: "Leadership Program",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`
  },
  {
    id: 11,
    title: "Gender Equality Campaign",
    category: "youth",
    tags: ["advocacy", "equality", "awareness"],
    description: "Engaging youth in fighting discrimination and sexual harassment. Creating a safe and equal society for all.",
    duration: "Ongoing",
    participants: "280+",
    age: "16-30 years",
    type: "Social Campaign",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>`
  },
  
  // Technology Programs
  {
    id: 12,
    title: "Web Development Bootcamp",
    category: "tech",
    tags: ["technology", "coding", "web"],
    description: "Intensive training in HTML, CSS, JavaScript, and modern web frameworks. Build real-world projects and launch your tech career.",
    duration: "4 months",
    participants: "120+",
    age: "16-28 years",
    type: "Bootcamp",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>`
  },
  {
    id: 13,
    title: "Mobile App Development",
    category: "tech",
    tags: ["technology", "mobile", "apps"],
    description: "Learn to build cross-platform mobile applications. From concept to deployment on app stores.",
    duration: "5 months",
    participants: "90+",
    age: "18-30 years",
    type: "Technical Course",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>`
  },
  {
    id: 14,
    title: "Data Science & AI Workshop",
    category: "tech",
    tags: ["technology", "ai", "data"],
    description: "Explore machine learning, data analysis, and artificial intelligence. Shape the future with data-driven solutions.",
    duration: "3 months",
    participants: "75+",
    age: "20-32 years",
    type: "Workshop Series",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>`
  },
  
  // Creative Programs
  {
    id: 15,
    title: "Digital Art & Design",
    category: "creative",
    tags: ["creative", "design", "arts"],
    description: "Master graphic design, illustration, and digital art. Express yourself through visual creativity.",
    duration: "4 months",
    participants: "140+",
    age: "14-26 years",
    type: "Creative Course",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>`
  },
  {
    id: 16,
    title: "Creative Writing & Storytelling",
    category: "creative",
    tags: ["creative", "writing", "expression"],
    description: "Develop your voice through creative writing, storytelling, and content creation. Share stories that inspire.",
    duration: "3 months",
    participants: "110+",
    age: "12-24 years",
    type: "Writing Workshop",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
      <path d="M2 2l7.586 7.586"/>
      <circle cx="11" cy="11" r="2"/>
    </svg>`
  }
];

// State Management
let currentFilter = 'all';
let searchQuery = '';
let filteredProgrammes = [...programmesData];

// DOM Elements
const programmesGrid = document.getElementById('programmesGrid');
const filterButtons = document.querySelectorAll('.filter-pill');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const backToTop = document.getElementById('backToTop');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  initScrollProgress();
  initCursorGlow();
  initAOS();
  initCountUp();
  initParticleBackground();
  initFilterButtons();
  initSearch();
  initBackToTop();
  renderProgrammes();
}

// Scroll Progress Bar
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  }, { passive: true });
}

// Cursor Glow Effect
function initCursorGlow() {
  const cursorGlow = document.getElementById('cursorGlow');
  if (!cursorGlow || !window.matchMedia('(hover: hover)').matches) return;
  
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

// AOS (Animate On Scroll)
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }
}

// CountUp Numbers
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0 || typeof CountUp === 'undefined') return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = entry.target;
        const endValue = parseInt(target.getAttribute('data-count'));
        const countUp = new CountUp(target, endValue, {
          duration: 2.5,
          separator: ',',
          useEasing: true
        });
        if (!countUp.error) {
          countUp.start();
          target.classList.add('counted');
        }
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// Particle Background
function initParticleBackground() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  const particles = [];
  const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2
    });
  }
  
  function drawParticle(particle) {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(14, 165, 233, ${particle.opacity})`;
    ctx.fill();
  }
  
  function updateParticle(particle) {
    particle.x += particle.dx;
    particle.y += particle.dy;
    
    if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
  }
  
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 * (1 - distance / 120)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      updateParticle(particle);
      drawParticle(particle);
    });
    
    drawConnections();
    requestAnimationFrame(animate);
  }
  
  animate();
}

// Filter Buttons
function initFilterButtons() {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      currentFilter = filter;
      filterProgrammes();
    });
  });
}

// Search Functionality
function initSearch() {
  if (!searchInput) return;
  
  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterProgrammes();
    }, 300);
  });
}

// Filter Programmes
function filterProgrammes() {
  filteredProgrammes = programmesData.filter(programme => {
    const matchesFilter = currentFilter === 'all' || programme.category === currentFilter;
    const matchesSearch = !searchQuery || 
      programme.title.toLowerCase().includes(searchQuery) ||
      programme.description.toLowerCase().includes(searchQuery) ||
      programme.tags.some(tag => tag.includes(searchQuery));
    
    return matchesFilter && matchesSearch;
  });
  
  renderProgrammes();
}

// Render Programmes
function renderProgrammes() {
  programmesGrid.innerHTML = '';
  
  if (filteredProgrammes.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  
  filteredProgrammes.forEach((programme, index) => {
    const card = createProgrammeCard(programme, index);
    programmesGrid.appendChild(card);
  });
  
  // Trigger AOS refresh
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// Create Programme Card
function createProgrammeCard(programme, index) {
  const card = document.createElement('div');
  card.className = 'programme-card';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', Math.min(index * 50, 300));
  
  const categoryColors = {
    child: '#0EA5E9',
    youth: '#8B5CF6',
    tech: '#06B6D4',
    creative: '#F59E0B'
  };
  
  const categoryLabels = {
    child: 'Child Focus',
    youth: 'Youth Focus',
    tech: 'Technology',
    creative: 'Creative'
  };
  
  card.innerHTML = `
    <div class="programme-badge" style="background: linear-gradient(135deg, ${categoryColors[programme.category]}, ${categoryColors[programme.category]}dd);">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
      </svg>
      ${categoryLabels[programme.category]}
    </div>
    
    <div class="programme-icon">
      ${programme.icon}
    </div>
    
    <h3>${programme.title}</h3>
    <p>${programme.description}</p>
    
    <div class="programme-meta">
      <div class="meta-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        ${programme.duration}
      </div>
      <div class="meta-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        ${programme.participants}
      </div>
      <div class="meta-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        ${programme.age}
      </div>
    </div>
    
    <div class="programme-tags">
      ${programme.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    
    <div class="programme-cta">
      <a href="#" class="btn btn-primary" onclick="handleEnroll(event, ${programme.id})">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <line x1="20" y1="8" x2="20" y2="14"/>
          <line x1="23" y1="11" x2="17" y2="11"/>
        </svg>
        Enroll Now
      </a>
      <a href="#" class="btn btn-secondary" onclick="handleLearnMore(event, ${programme.id})">
        Learn More
      </a>
    </div>
  `;
  
  return card;
}

// Back to Top Button
function initBackToTop() {
  if (!backToTop) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Event Handlers
function handleEnroll(event, programmeId) {
  event.preventDefault();
  const programme = programmesData.find(p => p.id === programmeId);
  
  // Show success message
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: 'Enrollment Successful!',
      text: `You have been enrolled in ${programme.title}`,
      icon: 'success',
      confirmButtonColor: '#0EA5E9'
    });
  } else {
    alert(`Enrollment successful for: ${programme.title}\n\nWe will contact you soon with further details.`);
  }
  
  // Track enrollment
  console.log('Enrolled in programme:', programme);
}

function handleLearnMore(event, programmeId) {
  event.preventDefault();
  const programme = programmesData.find(p => p.id === programmeId);
  
  // Show detailed information
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: programme.title,
      html: `
        <div style="text-align: left;">
          <p><strong>Type:</strong> ${programme.type}</p>
          <p><strong>Duration:</strong> ${programme.duration}</p>
          <p><strong>Age Group:</strong> ${programme.age}</p>
          <p><strong>Current Participants:</strong> ${programme.participants}</p>
          <br>
          <p>${programme.description}</p>
        </div>
      `,
      confirmButtonColor: '#0EA5E9',
      confirmButtonText: 'Enroll Now',
      showCancelButton: true,
      cancelButtonText: 'Close'
    }).then((result) => {
      if (result.isConfirmed) {
        handleEnroll(event, programmeId);
      }
    });
  } else {
    console.log('Programme details:', programme);
  }
}

// Performance Optimization
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}

// Export functions for global use
window.handleEnroll = handleEnroll;
window.handleLearnMore = handleLearnMore;