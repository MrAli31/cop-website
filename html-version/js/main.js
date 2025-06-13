// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Smooth Scroll
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

// Form Validation
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }

        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });

    return isValid;
};

// Form Submission Handler
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!validateForm(form)) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Replace with your actual API endpoint
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});

// Dynamic Content Loading
const loadContent = async (url, targetElement) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Content loading failed');
        const data = await response.json();
        targetElement.innerHTML = data.content;
    } catch (error) {
        console.error('Error loading content:', error);
        targetElement.innerHTML = '<p>Error loading content. Please try again later.</p>';
    }
};

// Intersection Observer for Lazy Loading
const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            if (target.dataset.src) {
                target.src = target.dataset.src;
                target.removeAttribute('data-src');
                lazyLoadObserver.unobserve(target);
            }
        }
    });
}, {
    rootMargin: '50px'
});

// Apply lazy loading to images
document.querySelectorAll('img[data-src]').forEach(img => {
    lazyLoadObserver.observe(img);
});

// Handle active navigation state
const updateActiveNavLink = () => {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Call updateActiveNavLink on page load and history changes
window.addEventListener('load', updateActiveNavLink);
window.addEventListener('popstate', updateActiveNavLink);

// API endpoints
const API_ENDPOINTS = {
    BLOG: '/api/api.php?endpoint=blog',
    NEWSLETTER: '/api/api.php?endpoint=newsletter',
    ENROLL: '/backend/enroll.php',
    CONTACT: '/api/api.php?endpoint=contact'
};

// Fetch blog posts
async function fetchBlogPosts(featured = false) {
    try {
        const response = await fetch(`${API_ENDPOINTS.BLOG}${featured ? '&featured=1' : ''}`);
        const data = await response.json();
        if (data.success) {
            return data.data;
        }
        throw new Error(data.error);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

// Handle newsletter subscription
async function handleNewsletterSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;

    try {
        const response = await fetch(API_ENDPOINTS.NEWSLETTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}`
        });
        const data = await response.json();
        
        if (data.success) {
            alert(data.message);
            form.reset();
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        alert('Failed to subscribe. Please try again.');
        console.error('Newsletter subscription error:', error);
    }
}

// Handle course enrollment
async function handleEnrollment(event) {
    event.preventDefault();
    const form = event.target;
    
    // Get form data
    const formData = {
        firstName: form.querySelector('[name="firstName"]').value,
        lastName: form.querySelector('[name="lastName"]').value,
        email: form.querySelector('[name="email"]').value,
        phone: form.querySelector('[name="phone"]')?.value || '',
        dob: form.querySelector('[name="dob"]').value,
        courseName: form.querySelector('[name="courseName"]').value
    };

    try {
        const response = await fetch(API_ENDPOINTS.ENROLL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        
        if (data.success) {
            alert(data.message);
            form.reset();
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        alert(error.message || 'Enrollment failed. Please try again.');
        console.error('Enrollment error:', error);
    }
}

// Handle contact form submission
async function handleContactSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(API_ENDPOINTS.CONTACT, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        
        if (data.success) {
            alert(data.message);
            form.reset();
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        alert('Failed to send message. Please try again.');
        console.error('Contact form error:', error);
    }
}

// Handle mobile menu
function handleMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

// Handle scroll animations
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));
}

// Handle header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmission);
    });

    // Handle enrollment forms
    const enrollmentForms = document.querySelectorAll('.enrollment-form');
    enrollmentForms.forEach(form => {
        form.addEventListener('submit', handleEnrollment);
    });

    // Handle contact forms
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactSubmission);
    });

    handleMobileMenu();
    handleScrollAnimations();
    handleHeaderScroll();
}); 