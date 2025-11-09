/* ========================================
   HEADER JAVASCRIPT - ScriptySphere
   Navigation, Search & Mobile Menu
   ======================================== */

// Initialize header features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initDropdowns();
  initSearchOverlay();
  initLanguageSelector();
  initActiveNavLinks();
  initScrollSpy();
});

/* ============ STICKY HEADER ============ */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  
  if (!header) return;

  let lastScroll = 0;
  let ticking = false;

  const updateHeader = () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class when scrolled down
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Optional: Hide header on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
}

/* ============ MOBILE MENU ============ */
function initMobileMenu() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const body = document.body;

  if (!menuToggle || !mobileNav) return;

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileNav.classList.toggle('active');
    body.style.overflow = !isExpanded ? 'hidden' : '';
  });

  // Close menu when clicking outside
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
      closeMenu();
    }
  });

  // Close menu on link click
  const mobileLinks = mobileNav.querySelectorAll('a:not(.mobile-dropdown-toggle)');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Mobile dropdown toggles
  const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const dropdown = toggle.closest('.mobile-dropdown');
      dropdown.classList.toggle('active');
    });
  });

  // Close menu function
  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('active');
    body.style.overflow = '';
  }

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close menu on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 1024 && mobileNav.classList.contains('active')) {
        closeMenu();
      }
    }, 250);
  });
}

/* ============ DESKTOP DROPDOWNS ============ */
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!toggle || !menu) return;

    let timeoutId;

    // Mouse enter
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeoutId);
      toggle.setAttribute('aria-expanded', 'true');
    });

    // Mouse leave
    dropdown.addEventListener('mouseleave', () => {
      timeoutId = setTimeout(() => {
        toggle.setAttribute('aria-expanded', 'false');
      }, 200);
    });

    // Keyboard navigation
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      
      // Close all other dropdowns
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          const otherToggle = other.querySelector('.dropdown-toggle');
          if (otherToggle) {
            otherToggle.setAttribute('aria-expanded', 'false');
          }
        }
      });

      toggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });
}

/* ============ SEARCH OVERLAY ============ */
function initSearchOverlay() {
  const searchToggle = document.getElementById('searchToggle');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchForm = searchOverlay?.querySelector('.search-form');

  if (!searchToggle || !searchOverlay || !searchClose) return;

  // Open search overlay
  searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput?.focus(), 300);
  });

  // Close search overlay
  const closeSearch = () => {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  searchClose.addEventListener('click', closeSearch);

  // Close on overlay click
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
  });

  // Handle search form submission
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      
      if (query) {
        // Redirect to search page or handle search
        window.location.href = `/search/?q=${encodeURIComponent(query)}`;
      }
    });
  }

  // Real-time search suggestions (optional)
  let searchTimeout;
  searchInput?.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.trim();

    if (query.length >= 3) {
      searchTimeout = setTimeout(() => {
        // Implement search suggestions here
        console.log('Searching for:', query);
        // You can call your search API here
      }, 300);
    }
  });
}

/* ============ LANGUAGE SELECTOR ============ */
function initLanguageSelector() {
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option');

  if (!langToggle || !langDropdown) return;

  // Get current language from localStorage or default to 'en'
  let currentLang = localStorage.getItem('language') || 'en';
  updateLanguageDisplay(currentLang);

  // Toggle dropdown
  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
  });

  // Language selection
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selectedLang = option.getAttribute('data-lang');
      
      if (selectedLang !== currentLang) {
        currentLang = selectedLang;
        localStorage.setItem('language', selectedLang);
        updateLanguageDisplay(selectedLang);
        
        // Show notification
        showLanguageNotification(selectedLang);
        
        // Optionally reload page or update content
        // window.location.reload();
      }
      
      langDropdown.classList.remove('active');
    });
  });

  function updateLanguageDisplay(lang) {
    const langCode = langToggle.querySelector('.lang-code');
    if (langCode) {
      langCode.textContent = lang.toUpperCase();
    }

    // Update active state
    langOptions.forEach(option => {
      if (option.getAttribute('data-lang') === lang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  function showLanguageNotification(lang) {
    const langNames = {
      'en': 'English',
      'bn': 'বাংলা'
    };

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'lang-notification';
    notification.innerHTML = `
      <span>Language changed to ${langNames[lang]}</span>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .lang-notification {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-white);
        padding: 1rem 2rem;
        border-radius: var(--radius-lg);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideUp 0.3s ease-out;
      }
      
      @keyframes slideUp {
        from {
          transform: translateX(-50%) translateY(100px);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideUp 0.3s ease-out reverse';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

/* ============ ACTIVE NAV LINKS ============ */
function initActiveNavLinks() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === currentPath || 
        (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    }
  });
}

/* ============ SCROLL SPY ============ */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (sections.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Update active links
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else if (href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  // Smooth scroll for anchor links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const headerHeight = document.getElementById('siteHeader')?.offsetHeight || 80;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/* ============ PERFORMANCE OPTIMIZATION ============ */
// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ============ ACCESSIBILITY HELPERS ============ */
// Trap focus within mobile menu
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  });
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

/* ============ EXPORT FUNCTIONS ============ */
export {
  initStickyHeader,
  initMobileMenu,
  initDropdowns,
  initSearchOverlay,
  initLanguageSelector,
  initActiveNavLinks,
  initScrollSpy
};