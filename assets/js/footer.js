/* ========================================
   FOOTER JAVASCRIPT - ScriptySphere
   Advanced Features & Animations
   ======================================== */

// Initialize footer features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initNewsletterForm();
  initFooterParticles();
  updateCurrentYear();
  initSmoothScroll();
  initFooterAnimations();
});

/* ============ BACK TO TOP BUTTON ============ */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (!backToTopBtn) return;

  // Show/hide button based on scroll position
  const toggleBackToTop = () => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrolled > windowHeight * 0.3) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  // Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Event listeners
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  backToTopBtn.addEventListener('click', scrollToTop);

  // Initial check
  toggleBackToTop();
}

/* ============ NEWSLETTER FORM ============ */
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const email = emailInput.value.trim();

    // Validation
    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address', 'error');
      emailInput.focus();
      return;
    }

    // Disable button and show loading state
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span>Subscribing...</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spinner">
        <circle cx="12" cy="12" r="10"/>
      </svg>
    `;

    try {
      // Simulate API call (replace with actual API endpoint)
      await simulateAPICall(email);
      
      // Success
      showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
      emailInput.value = '';
      
      // Store subscription in localStorage
      const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
      }

      // Confetti effect
      createConfetti();
      
    } catch (error) {
      showNotification('Oops! Something went wrong. Please try again.', 'error');
      console.error('Newsletter subscription error:', error);
    } finally {
      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    }
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simulate API call
function simulateAPICall(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate 90% success rate
      if (Math.random() > 0.1) {
        resolve({ success: true, email });
      } else {
        reject(new Error('API Error'));
      }
    }, 1500);
  });
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.footer-notification');
  existingNotifications.forEach(n => n.remove());

  // Create notification
  const notification = document.createElement('div');
  notification.className = `footer-notification footer-notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === 'success' ? '<polyline points="20 6 9 17 4 12"/>' : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
      </svg>
      <span>${message}</span>
    </div>
    <button class="notification-close" aria-label="Close notification">×</button>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .footer-notification {
      position: fixed;
      bottom: 100px;
      right: 2rem;
      background: white;
      color: #1F2937;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      z-index: 10000;
      animation: slideInRight 0.3s ease-out;
      max-width: 400px;
    }
    
    .footer-notification-success {
      border-left: 4px solid #10B981;
    }
    
    .footer-notification-error {
      border-left: 4px solid #EF4444;
    }
    
    .notification-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .notification-content svg {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
    
    .footer-notification-success svg {
      color: #10B981;
    }
    
    .footer-notification-error svg {
      color: #EF4444;
    }
    
    .notification-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #6B7280;
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: color 0.2s;
    }
    
    .notification-close:hover {
      color: #1F2937;
    }
    
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @media (max-width: 768px) {
      .footer-notification {
        bottom: 80px;
        right: 1rem;
        left: 1rem;
        max-width: none;
      }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(notification);

  // Close button
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => notification.remove(), 300);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideInRight 0.3s ease-out reverse';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Confetti effect for successful subscription
function createConfetti() {
  const colors = ['#0EA5E9', '#06B6D4', '#8B5CF6', '#10B981', '#F59E0B'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
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
      z-index: 9999;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
    `;
    
    document.body.appendChild(confetti);
    
    const angle = (Math.PI * 2 * i) / confettiCount;
    const velocity = 200 + Math.random() * 200;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    
    confetti.animate([
      { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${tx}px, ${ty}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: 1000 + Math.random() * 1000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      fill: 'forwards'
    }).onfinish = () => confetti.remove();
  }
}

/* ============ FOOTER PARTICLES ANIMATION ============ */
function initFooterParticles() {
  const canvas = document.getElementById('footerParticles');
  
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  // Resize canvas
  const resizeCanvas = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  // Particle class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
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

        if (distance < 150) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 150)})`;
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

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationId);
  });
}

/* ============ UPDATE CURRENT YEAR ============ */
function updateCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ============ SMOOTH SCROLL ============ */
function initSmoothScroll() {
  const footerLinks = document.querySelectorAll('.site-footer a[href^="#"]');
  
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ============ FOOTER ANIMATIONS ============ */
function initFooterAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe footer columns
  const footerColumns = document.querySelectorAll('.footer-column');
  footerColumns.forEach((column, index) => {
    column.style.opacity = '0';
    column.style.transform = 'translateY(30px)';
    column.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(column);
  });

  // Hover effect for social links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-5px) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = '';
    });
  });

  // Animated gradient text
  const gradientTexts = document.querySelectorAll('.gradient-text');
  gradientTexts.forEach(text => {
    text.style.backgroundSize = '200% 200%';
    text.style.animation = 'gradientShift 3s ease infinite';
  });

  // Add gradient animation keyframes
  if (!document.querySelector('#gradientAnimationStyles')) {
    const style = document.createElement('style');
    style.id = 'gradientAnimationStyles';
    style.textContent = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .spinner {
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ============ ACCESSIBILITY HELPERS ============ */
// Add focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// Add keyboard navigation styles
const keyboardNavStyles = document.createElement('style');
keyboardNavStyles.textContent = `
  .keyboard-nav *:focus {
    outline: 2px solid #0EA5E9;
    outline-offset: 2px;
  }
`;
document.head.appendChild(keyboardNavStyles);

/* ============ PERFORMANCE OPTIMIZATION ============ */
// Lazy load images in footer
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('.site-footer img[data-src]');
  
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

/* ============ EXPORT FUNCTIONS ============ */
export {
  initBackToTop,
  initNewsletterForm,
  initFooterParticles,
  updateCurrentYear,
  initSmoothScroll,
  initFooterAnimations
};