// Global JavaScript for OnePage theme

// Utility functions
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Cart functionality
class CartManager {
  constructor() {
    this.cart = null;
    this.init();
  }

  init() {
    this.loadCart();
    this.bindEvents();
  }

  async loadCart() {
    try {
      const response = await fetch('/cart.js');
      this.cart = await response.json();
      this.updateCartUI();
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  }

  async addToCart(formData) {
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const item = await response.json();
        this.cart.items.push(item);
        this.updateCartUI();
        this.showNotification('Item added to cart!');
      } else {
        throw new Error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      this.showNotification('Error adding item to cart', 'error');
    }
  }

  updateCartUI() {
    const cartCount = document.querySelector('.cart-count-bubble');
    if (cartCount && this.cart) {
      cartCount.textContent = this.cart.item_count;
    }
  }

  showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '1rem 2rem',
      backgroundColor: type === 'error' ? '#e74c3c' : '#27ae60',
      color: 'white',
      borderRadius: '0.5rem',
      zIndex: '9999',
      fontSize: '1.4rem',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  bindEvents() {
    // Handle add to cart forms
    document.addEventListener('submit', (e) => {
      if (e.target.classList.contains('product-form')) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const variantId = formData.get('id');
        
        if (variantId) {
          this.addToCart({
            id: variantId,
            quantity: 1
          });
        }
      }
    });
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Lazy loading for images
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('mobile-menu--open');
      menuToggle.setAttribute('aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }
}

// FAQ accordion functionality
function initFAQAccordion() {
  document.querySelectorAll('.faq-section__question').forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-section__question').forEach(otherQuestion => {
        if (otherQuestion !== this) {
          otherQuestion.setAttribute('aria-expanded', 'false');
          otherQuestion.nextElementSibling.setAttribute('aria-hidden', 'true');
        }
      });
      
      // Toggle current item
      this.setAttribute('aria-expanded', !isExpanded);
      answer.setAttribute('aria-hidden', isExpanded);
    });
  });
}

// Testimonials slider
function initTestimonialsSlider() {
  const sliders = document.querySelectorAll('.testimonials-section__slider');
  
  sliders.forEach(slider => {
    const prevBtn = slider.parentElement.querySelector('.testimonials-section__nav--prev');
    const nextBtn = slider.parentElement.querySelector('.testimonials-section__nav--next');
    const slides = slider.querySelectorAll('.testimonials-section__slide');
    
    if (!prevBtn || !nextBtn || slides.length <= 1) return;
    
    let currentIndex = 0;
    
    function updateNavigation() {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= slides.length - 1;
    }
    
    function scrollToSlide(index) {
      const slideWidth = slides[0].offsetWidth + 32; // 32px gap
      slider.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }
    
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        scrollToSlide(currentIndex);
        updateNavigation();
      }
    });
    
    nextBtn.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        scrollToSlide(currentIndex);
        updateNavigation();
      }
    });
    
    // Update navigation on scroll
    slider.addEventListener('scroll', debounce(() => {
      const slideWidth = slides[0].offsetWidth + 32;
      currentIndex = Math.round(slider.scrollLeft / slideWidth);
      updateNavigation();
    }, 100));
    
    // Initialize
    updateNavigation();
  });
}

// Sticky cart functionality
function initStickyCart() {
  const stickyCarts = document.querySelectorAll('.sticky-cart');
  
  stickyCarts.forEach(stickyCart => {
    let isVisible = false;
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateStickyCart() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show sticky cart when scrolled down 300px and not at the bottom
      const shouldShow = scrollY > 300 && scrollY < documentHeight - windowHeight - 100;
      
      if (shouldShow && !isVisible) {
        stickyCart.classList.add('sticky-cart--visible');
        isVisible = true;
      } else if (!shouldShow && isVisible) {
        stickyCart.classList.remove('sticky-cart--visible');
        isVisible = false;
      }
      
      lastScrollY = scrollY;
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateStickyCart);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Hide sticky cart when user reaches the bottom
    window.addEventListener('scroll', debounce(() => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollY + windowHeight >= documentHeight - 50) {
        stickyCart.classList.remove('sticky-cart--visible');
        isVisible = false;
      }
    }, 100), { passive: true });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize cart manager
  new CartManager();
  
  // Initialize other features
  initSmoothScrolling();
  initLazyLoading();
  initMobileMenu();
  initFAQAccordion();
  initTestimonialsSlider();
  initStickyCart();
  
  // Add loaded class to body
  document.body.classList.add('loaded');
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
  // Recalculate any size-dependent features
  initTestimonialsSlider();
}, 250));

// Export for use in other scripts
window.OnePageTheme = {
  CartManager,
  debounce
};
