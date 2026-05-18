// Scroll Reveal
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => observer.observe(el));
});

// Mobile Side-Slide Navigation
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            if (overlay) overlay.classList.toggle('show');
            document.body.style.overflow = navLinks.classList.contains('show') ? 'hidden' : '';
        });
        
        if (overlay) {
            overlay.addEventListener('click', () => {
                navLinks.classList.remove('show');
                overlay.classList.remove('show');
                document.body.style.overflow = '';
            });
        }
        
        // Close button
        const closeBtn = navLinks.querySelector('.nav-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                navLinks.classList.remove('show');
                if (overlay) overlay.classList.remove('show');
                document.body.style.overflow = '';
            });
        }
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                if (overlay) overlay.classList.remove('show');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Active nav link
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Contact Form
function submitContactForm() {
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();
    if (!name || !email || !message) { alert('Please fill required fields'); return; }
    alert(`✅ Thank you ${name}! We'll get back to you soon.`);
    document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select').forEach(el => el.value = '');
}

// Order Form
function submitOrder() {
    const name = document.getElementById('orderName')?.value.trim();
    const phone = document.getElementById('orderPhone')?.value.trim();
    if (!name || !phone) { alert('Please fill required fields'); return; }
    alert(`✅ Thank you ${name}! Your order has been received. We'll call you at ${phone} to confirm.`);
    document.querySelectorAll('.order-form input, .order-form textarea, .order-form select').forEach(el => el.value = '');
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
});
