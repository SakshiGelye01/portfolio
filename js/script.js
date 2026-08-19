/* ========================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ======================================== */

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initScrollProgress();
  initNavbar();
  initScrollReveal();
  initSkillBars();
  initCounters();
  initProjectFilters();
  initCertificatesModals();
  initFormValidation();
  initBackToTop();
  initTypingAnimation();
  hideLoadingScreen();
});

// ========================================
// THEME TOGGLE (Dark/Light Mode)
// ========================================
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark-mode';
  htmlElement.classList.add(savedTheme);
  updateThemeToggleText(savedTheme);
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = htmlElement.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    
    htmlElement.classList.remove(currentTheme);
    htmlElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleText(newTheme);
  });
}

function updateThemeToggleText(theme) {
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.innerHTML = theme === 'dark-mode' 
    ? '<i class="bi bi-moon"></i> Light Mode' 
    : '<i class="bi bi-sun"></i> Dark Mode';
}

// ========================================
// SCROLL PROGRESS BAR
// ========================================
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Add scrolled class
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Update active link based on scroll position
    updateActiveNavLink();
  });
  
  // Smooth scroll on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu
          const navbarToggler = document.querySelector('.navbar-toggler');
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
          }
        }
      }
    });
  });
}

function updateActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === '#' + current) {
      link.classList.add('active');
    }
  });
}

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.scroll-reveal');
  
  function reveal() {
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('reveal');
      }
    });
  }
  
  window.addEventListener('scroll', reveal);
  reveal(); // Trigger on load
}

// ========================================
// SKILL BARS ANIMATION
// ========================================
function initSkillBars() {
  const skillItems = document.querySelectorAll('.skill-item');
  let animated = false;
  
  function animateSkills() {
    skillItems.forEach(item => {
      const progressBar = item.querySelector('.skill-progress');
      const progressValue = item.getAttribute('data-progress') || '90';
      
      progressBar.style.setProperty('--progress-width', progressValue + '%');
    });
  }
  
  window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection && !animated) {
      const skillsSectionTop = skillsSection.getBoundingClientRect().top;
      if (skillsSectionTop < window.innerHeight) {
        animateSkills();
        animated = true;
      }
    }
  });
}

// ========================================
// ANIMATED COUNTERS
// ========================================
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  let counted = false;
  
  function count() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target')) || parseInt(counter.innerText);
      const increment = target / 50;
      let current = 0;
      
      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.floor(current) + '+';
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + '+';
        }
      };
      
      updateCount();
    });
  }
  
  window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    if (aboutSection && !counted) {
      const aboutTop = aboutSection.getBoundingClientRect().top;
      if (aboutTop < window.innerHeight) {
        count();
        counted = true;
      }
    }
  });
}

// ========================================
// PROJECT FILTERING
// ========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'none';
          setTimeout(() => {
            card.style.animation = '';
          }, 10);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
  
  // Set "All" as active by default
  filterBtns[0].classList.add('active');
}

// ========================================
// CERTIFICATES MODALS
// ========================================
function initCertificatesModals() {
  const certBtns = document.querySelectorAll('.cert-btn');
  
  certBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const certCard = this.closest('.cert-card');
      const certTitle = certCard.querySelector('.cert-title').innerText;
      const certIssuer = certCard.querySelector('.cert-issuer').innerText;
      
      // Create and show modal
      const modalHTML = `
        <div class="modal fade" id="certModal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${certTitle}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <div style="width: 100%; height: 300px; background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(168, 85, 247, 0.1)); display: flex; align-items: center; justify-content: center; border-radius: 12px; margin-bottom: 1rem;">
                  <i class="bi bi-award" style="font-size: 4rem; color: var(--primary-color);"></i>
                </div>
                <p style="color: var(--text-secondary); margin-bottom: 0.5rem;"><strong>Issuer:</strong> ${certIssuer}</p>
                <p style="color: var(--text-tertiary);">Certificate details and verification information would appear here.</p>
              </div>
              <div class="modal-footer">
                <a href="#" class="btn btn-primary" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border: none; color: white;">Download Certificate</a>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Remove old modal if exists
      const oldModal = document.getElementById('certModal');
      if (oldModal) oldModal.remove();
      
      // Add new modal to DOM
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      
      // Show modal
      const modal = new bootstrap.Modal(document.getElementById('certModal'));
      modal.show();
      
      // Remove modal from DOM when hidden
      document.getElementById('certModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
      });
    });
  });
}

// ========================================
// FORM VALIDATION
// ========================================
function initFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  const submitBtn = form.querySelector('.submit-btn');
  
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
      // Show success toast
      showToast('Message sent successfully! I will get back to you soon.', 'success');
      
      // Reset form
      form.reset();
      
      // Clear error messages
      clearFormErrors();
    }
  });
}

function validateForm() {
  const form = document.getElementById('contactForm');
  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  
  let isValid = true;
  
  // Clear previous errors
  clearFormErrors();
  
  // Validate name
  if (!nameInput.value.trim()) {
    showError(nameInput, 'Name is required');
    isValid = false;
  }
  
  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim()) {
    showError(emailInput, 'Email is required');
    isValid = false;
  } else if (!emailPattern.test(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email');
    isValid = false;
  }
  
  // Validate message
  if (!messageInput.value.trim()) {
    showError(messageInput, 'Message is required');
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(messageInput, 'Message must be at least 10 characters');
    isValid = false;
  }
  
  return isValid;
}

function showError(input, message) {
  const formGroup = input.closest('.form-group');
  const errorDiv = formGroup.querySelector('.form-error');
  
  input.style.borderColor = 'var(--danger-color)';
  errorDiv.innerText = message;
  errorDiv.classList.add('show');
}

function clearFormErrors() {
  const form = document.getElementById('contactForm');
  const inputs = form.querySelectorAll('input, textarea');
  const errors = form.querySelectorAll('.form-error');
  
  inputs.forEach(input => {
    input.style.borderColor = '';
  });
  
  errors.forEach(error => {
    error.classList.remove('show');
  });
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================
function showToast(message, type = 'success') {
  const container = document.querySelector('.toast-container');
  const toast = document.createElement('div');
  
  toast.className = `toast ${type}`;
  toast.innerText = message;
  
  container.appendChild(toast);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========================================
// TYPING ANIMATION
// ========================================
function initTypingAnimation() {
  const typingElement = document.querySelector('.typing-animation');
  if (!typingElement) return;
  
  const texts = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Python', 'SQL'];
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentText = texts[currentIndex];
    const displayText = isDeleting 
      ? currentText.substring(0, charIndex - 1) 
      : currentText.substring(0, charIndex + 1);
    
    typingElement.textContent = displayText;
    
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => { isDeleting = true; type(); }, 1500);
      return;
    }
    
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(() => type(), 500);
      return;
    }
    
    charIndex += isDeleting ? -1 : 1;
    setTimeout(type, isDeleting ? 50 : 100);
  }
  
  type();
}

// ========================================
// HIDE LOADING SCREEN
// ========================================
function hideLoadingScreen() {
  const loadingScreen = document.querySelector('.loading-screen');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 2500);
}

// ========================================
// DOWNLOAD RESUME
// ========================================
function downloadResume() {
  // You can replace this with actual resume download logic
  const link = document.createElement('a');
  link.href = 'assets/resume.pdf';
  link.download = 'Sakshi_Gelye_Resume.pdf';
  link.click();
  
  showToast('Resume download started!', 'success');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Smooth scroll helper
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add scroll reveal to elements on page load
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.skill-category, .project-card, .service-card, .cert-card, .timeline-content');
  elements.forEach(el => {
    el.classList.add('scroll-reveal');
  });
});
