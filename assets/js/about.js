/* ========================================
   ABOUT PAGE JAVASCRIPT - ScriptySphere
   Interactive Features & Animations
   ======================================== */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initHeroParticles();
  initCountUp();
  initTeamCards();
  initParallax();
  initIntersectionObserver();
  initMVCards();
  initValueCards();
  initStatsAnimation();
  initTimelineAnimation();
  initSmoothScroll();
  initLazyLoading();
  initBadgeAnimation();
  addSkipLink();
  handleReducedMotion();
});

/* ============ ANIMATE ON SCROLL (AOS) ============ */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
      disable: 'mobile' // Disable on mobile for better performance
    });
  }
}

/* ============ HERO PARTICLES ============ */
function initHeroParticles() {
  const canvas = document.getElementById('heroParticles');
  
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let mouse = { x: null, y: null, radius: 150 };

  // Resize canvas
  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  // Mouse move event
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle class
  class Particle {
    constructor() {
      this.reset();
      this.baseX = this.x;
      this.baseY = this.y;
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 4 + 1;
      this.speedX = (Math.random() - 0.5) * 1;
      this.speedY = (Math.random() - 0.5) * 1;
      this.opacity = Math.random() * 0.5 + 0.3;
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
          
          this.x -= dirX * force * 5;
          this.y -= dirY * force * 5;
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
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Initialize particles
  const initParticles = () => {
    particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
    
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

        if (distance < 120) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 120)})`;
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

/* ============ COUNT UP ANIMATION ============ */
function initCountUp() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length === 0 || typeof CountUp === 'undefined') return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const endValue = parseInt(target.getAttribute('data-count'));
        
        const countUp = new CountUp(target, endValue, {
          duration: 2.5,
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          suffix: ''
        });

        if (!countUp.error) {
          countUp.start();
        } else {
          // Fallback if CountUp fails
          target.textContent = endValue;
        }

        // Unobserve after animation
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  statNumbers.forEach(number => observer.observe(number));
}

/* ============ TEAM CARDS INTERACTION ============ */
function initTeamCards() {
  const teamCards = document.querySelectorAll('.team-card');

  teamCards.forEach(card => {
    // Add 3D tilt effect with mouse movement
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });

    // Accessibility: Add keyboard support
    card.addEventListener('focus', () => {
      card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('blur', () => {
      card.style.transform = '';
    });
  });
}

/* ============ PARALLAX EFFECT ============ */
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;

  let ticking = false;

  const updateParallax = () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}

/* ============ INTERSECTION OBSERVER ============ */
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Add stagger animation for children
        const children = entry.target.querySelectorAll('.value-card, .timeline-item, .team-card');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe sections
  const sections = document.querySelectorAll('.section-padding');
  sections.forEach(section => observer.observe(section));
}

/* ============ SMOOTH SCROLL FOR ANCHOR LINKS ============ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = 80; // Adjust based on your header height
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============ MISSION & VISION CARDS ANIMATION ============ */
function initMVCards() {
  const mvCards = document.querySelectorAll('.mv-card');

  mvCards.forEach(card => {
    // Create floating animation on hover
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.mv-icon');
      if (icon) {
        icon.style.animation = 'float 2s ease-in-out infinite';
      }
    });

    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.mv-icon');
      if (icon) {
        icon.style.animation = '';
      }
    });
  });
}

/* ============ VALUE CARDS HOVER EFFECT ============ */
function initValueCards() {
  const valueCards = document.querySelectorAll('.value-card');

  valueCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      this.appendChild(ripple);

      // Add ripple styles if not already added
      if (!document.querySelector('#rippleStyles')) {
        const style = document.createElement('style');
        style.id = 'rippleStyles';
        style.textContent = `
          .ripple {
            position: absolute;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(14, 165, 233, 0.3);
            transform: translate(-50%, -50%);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
          }
          
          @keyframes rippleEffect {
            to {
              width: 500px;
              height: 500px;
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }

      // Remove ripple after animation
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* ============ STATS ANIMATION ON SCROLL ============ */
function initStatsAnimation() {
  const statCards = document.querySelectorAll('.stat-card');

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInScale 0.6s ease-out forwards';
        
        // Add pulse animation to icon
        const icon = entry.target.querySelector('.stat-icon');
        if (icon) {
          icon.style.animation = 'pulse 2s ease-in-out infinite';
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  statCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8)';
    observer.observe(card);
  });

  // Add animation styles
  if (!document.querySelector('#statsAnimationStyles')) {
    const style = document.createElement('style');
    style.id = 'statsAnimationStyles';
    style.textContent = `
      @keyframes fadeInScale {
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ============ TIMELINE ANIMATION ============ */
function initTimelineAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, observerOptions);

  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
    observer.observe(item);
  });
}

/* ============ LAZY LOAD IMAGES ============ */
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // If data-src exists, use it
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          // Add loaded class for fade-in effect
          img.classList.add('loaded');
          
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease';
      imageObserver.observe(img);
    });

    // Add loaded class style
    if (!document.querySelector('#lazyLoadStyles')) {
      const style = document.createElement('style');
      style.id = 'lazyLoadStyles';
      style.textContent = `
        img.loaded {
          opacity: 1 !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
}

/* ============ BADGE ANIMATION ============ */
function initBadgeAnimation() {
  const badges = document.querySelectorAll('.hero-badge, .story-badge');
  
  badges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
      badge.style.animation = 'none';
      setTimeout(() => {
        badge.style.animation = 'float 3s ease-in-out infinite';
      }, 10);
    });
  });
}

/* ============ ACCESSIBILITY ============ */
// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// Focus visible styles
if (!document.querySelector('#keyboardNavStyles')) {
  const keyboardNavStyles = document.createElement('style');
  keyboardNavStyles.id = 'keyboardNavStyles';
  keyboardNavStyles.textContent = `
    .keyboard-nav *:focus {
      outline: 3px solid var(--color-primary);
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(keyboardNavStyles);
}

// Add skip to content link
function addSkipLink() {
  if (!document.querySelector('.skip-link')) {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    
    if (!document.querySelector('#skipLinkStyles')) {
      const style = document.createElement('style');
      style.id = 'skipLinkStyles';
      style.textContent = `
        .skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: var(--color-primary);
          color: white;
          padding: 8px;
          text-decoration: none;
          z-index: 10000;
        }
        .skip-link:focus {
          top: 0;
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
}

/* ============ REDUCED MOTION SUPPORT ============ */
function handleReducedMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.body.classList.add('reduced-motion');
    
    if (!document.querySelector('#reducedMotionStyles')) {
      const style = document.createElement('style');
      style.id = 'reducedMotionStyles';
      style.textContent = `
        .reduced-motion *,
        .reduced-motion *::before,
        .reduced-motion *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
}

/* ============ PERFORMANCE MONITORING ============ */
function monitorPerformance() {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.loadTime > 3000) {
            console.warn('Slow resource detected:', entry.name);
          }
        }
      });
      
      observer.observe({ entryTypes: ['resource'] });
    } catch (e) {
      console.log('Performance monitoring not available');
    }
  }
}

// Initialize performance monitoring
monitorPerformance();

/* ============ EXPORT FUNCTIONS ============ */
export {
  initAOS,
  initHeroParticles,
  initCountUp,
  initTeamCards,
  initParallax,
  initIntersectionObserver,
  initSmoothScroll
};