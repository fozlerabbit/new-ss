/* ========================================
   404 PAGE JAVASCRIPT - ScriptySphere
   Interactive Features & Animations
   ======================================== */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initParticleBackground();
  initSearchForm();
  displayCurrentPath();
  initLinkCardAnimations();
  initKeyboardNavigation();
  trackErrorPage();
  initEasterEgg();
});

/* ============ PARTICLE BACKGROUND ============ */
function initParticleBackground() {
  const canvas = document.getElementById('particleCanvas');
  
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let mouse = { x: null, y: null, radius: 100 };

  // Resize canvas
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  // Mouse move event
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = (Math.random() - 0.5) * 2;
      this.color = `rgba(14, 165, 233, ${Math.random() * 0.5 + 0.3})`;
    }

    update() {
      // Mouse interaction
      if (mouse.x != null && mouse.y != null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const dirX = dx / distance;
          const dirY = dy / distance;
          
          this.x -= dirX * force * 3;
          this.y -= dirY * force * 3;
        }
      }

      // Regular movement
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around edges
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Initialize particles
  const initParticles = () => {
    particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  };

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.strokeStyle = `rgba(14, 165, 233, ${0.3 * (1 - distance / 100)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    animationId = requestAnimationFrame(animate);
  };

  // Initialize and start
  resizeCanvas();
  initParticles();
  animate();

  // Handle resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas();
      initParticles();
    }, 250);
  }, { passive: true });

  // Cleanup
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationId);
  });
}

/* ============ SEARCH FORM ============ */
function initSearchForm() {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');

  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim();

    if (query) {
      // Redirect to search page
      window.location.href = `/search/?q=${encodeURIComponent(query)}`;
    } else {
      // Shake animation for empty search
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 500);
      
      // Add shake animation if not exists
      if (!document.querySelector('#shakeAnimation')) {
        const style = document.createElement('style');
        style.id = 'shakeAnimation';
        style.textContent = `
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
          }
          .shake {
            animation: shake 0.5s;
          }
        `;
        document.head.appendChild(style);
      }
    }
  });

  // Add focus effect
  input.addEventListener('focus', () => {
    input.parentElement.style.transform = 'scale(1.02)';
  });

  input.addEventListener('blur', () => {
    input.parentElement.style.transform = '';
  });
}

/* ============ DISPLAY CURRENT PATH ============ */
function displayCurrentPath() {
  const pathElement = document.getElementById('currentPath');
  
  if (pathElement) {
    const currentPath = window.location.pathname;
    pathElement.textContent = currentPath || '/';
  }
}

/* ============ LINK CARD ANIMATIONS ============ */
function initLinkCardAnimations() {
  const linkCards = document.querySelectorAll('.link-card');

  linkCards.forEach((card, index) => {
    // Stagger fade-in animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.5s ease-out';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 1000 + (index * 100));

    // Add parallax effect on mouse move
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

/* ============ KEYBOARD NAVIGATION ============ */
function initKeyboardNavigation() {
  // Add keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });

  // Add focus styles if not exists
  if (!document.querySelector('#keyboardNavStyles')) {
    const style = document.createElement('style');
    style.id = 'keyboardNavStyles';
    style.textContent = `
      .keyboard-nav *:focus {
        outline: 3px solid var(--color-primary);
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  // ESC key to go back
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.history.back();
    }
  });
}

/* ============ TRACK ERROR PAGE ============ */
function trackErrorPage() {
  // Log 404 error for analytics
  const errorData = {
    page: '404',
    path: window.location.pathname,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  };

  // Store in localStorage for debugging
  const errors = JSON.parse(localStorage.getItem('404_errors') || '[]');
  errors.push(errorData);
  
  // Keep only last 10 errors
  if (errors.length > 10) {
    errors.shift();
  }
  
  localStorage.setItem('404_errors', JSON.stringify(errors));

  // Send to analytics (if available)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_not_found', {
      page_path: window.location.pathname,
      page_referrer: document.referrer
    });
  }

  // Console log for debugging
  console.log('404 Error Logged:', errorData);
}

/* ============ EASTER EGG ============ */
function initEasterEgg() {
  let konamiCode = [];
  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    
    // Keep only last 10 keys
    if (konamiCode.length > 10) {
      konamiCode.shift();
    }

    // Check if sequence matches
    if (konamiCode.join(',') === konamiSequence.join(',')) {
      activateEasterEgg();
      konamiCode = [];
    }
  });
}

function activateEasterEgg() {
  // Create confetti explosion
  const colors = ['#0EA5E9', '#06B6D4', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'];
  
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        top: 50%;
        left: 50%;
        opacity: 1;
        pointer-events: none;
        z-index: 10000;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      `;
      
      document.body.appendChild(confetti);
      
      const angle = (Math.PI * 2 * i) / 100;
      const velocity = 200 + Math.random() * 300;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      confetti.animate([
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${tx}px, ${ty}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
      ], {
        duration: 1500 + Math.random() * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        fill: 'forwards'
      }).onfinish = () => confetti.remove();
    }, i * 10);
  }

  // Show easter egg message
  const message = document.createElement('div');
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(14, 165, 233, 0.95);
    color: white;
    padding: 2rem 3rem;
    border-radius: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    z-index: 10001;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: bounceIn 0.5s ease-out;
  `;
  message.innerHTML = `
    🎉 Konami Code Activated! 🎉<br>
    <span style="font-size: 1rem; opacity: 0.9;">You found the secret!</span>
  `;
  
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.style.animation = 'fadeOut 0.5s ease-out';
    setTimeout(() => message.remove(), 500);
  }, 3000);

  // Add animations if not exists
  if (!document.querySelector('#easterEggStyles')) {
    const style = document.createElement('style');
    style.id = 'easterEggStyles';
    style.textContent = `
      @keyframes fadeOut {
        to {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.8);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ============ AUTO REDIRECT SUGGESTIONS ============ */
function initAutoRedirectSuggestions() {
  const currentPath = window.location.pathname.toLowerCase();
  const suggestions = {
    '/about': '/about/',
    '/programme': '/programmes/',
    '/programs': '/programmes/',
    '/community': '/community/members.html',
    '/members': '/community/members.html',
    '/join': '/community/members.html',
    '/contact-us': '/contact/',
    '/blog': '/blog/',
    '/articles': '/blog/'
  };

  // Check for similar paths
  for (const [incorrect, correct] of Object.entries(suggestions)) {
    if (currentPath.includes(incorrect)) {
      showRedirectSuggestion(correct);
      break;
    }
  }
}

function showRedirectSuggestion(correctPath) {
  const banner = document.createElement('div');
  banner.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 1rem;
    animation: slideDown 0.5s ease-out;
  `;
  
  banner.innerHTML = `
    <span>Did you mean: <strong>${correctPath}</strong>?</span>
    <button onclick="window.location.href='${correctPath}'" style="
      background: var(--gradient-primary);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    ">Go There</button>
    <button onclick="this.parentElement.remove()" style="
      background: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0 0.5rem;
    ">×</button>
  `;
  
  document.body.appendChild(banner);
  
  // Add animation
  if (!document.querySelector('#slideDownAnimation')) {
    const style = document.createElement('style');
    style.id = 'slideDownAnimation';
    style.textContent = `
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateX(-50%) translateY(-100px);
        }
        to {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Auto remove after 10 seconds
  setTimeout(() => {
    if (banner.parentElement) {
      banner.style.animation = 'slideDown 0.5s ease-out reverse';
      setTimeout(() => banner.remove(), 500);
    }
  }, 10000);
}

// Initialize auto redirect suggestions
initAutoRedirectSuggestions();

/* ============ EXPORT FUNCTIONS ============ */
export {
  initParticleBackground,
  initSearchForm,
  displayCurrentPath,
  initLinkCardAnimations,
  initKeyboardNavigation,
  trackErrorPage
};