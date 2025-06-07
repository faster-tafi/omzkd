
// Smooth scrolling for navigation links
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

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert('شكراً لك! تم تسجيل بريدك الإلكتروني بنجاح.');
        this.querySelector('input[type="email"]').value = '';
    }
});

// Plan buttons click handlers
document.querySelectorAll('.plan-button').forEach(button => {
    button.addEventListener('click', function() {
        // Store plan data and redirect to order page
        const planCard = this.closest('.plan-card');
        const planName = planCard.querySelector('h3').textContent;
        const planPrice = planCard.querySelector('.amount').textContent;
        
        localStorage.setItem('selectedPlan', planName);
        localStorage.setItem('selectedPrice', planPrice);
        localStorage.setItem('selectedOffer', 'عرض عام');
        
        window.location.href = 'index4.html';
    });
});

// Offer buttons click handlers
document.querySelectorAll('.offer-button').forEach(button => {
    button.addEventListener('click', function() {
        const offerCard = this.closest('.offer-card');
        const offerTitle = offerCard.querySelector('h3').textContent;
        
        // Redirect to appropriate offer page
        if (offerTitle.includes('Inwi 6') && !offerTitle.includes('WIN')) {
            window.location.href = 'index1.html';
        } else if (offerTitle.includes('WIN BY INWI') || offerTitle.includes('WIN 0DH')) {
            window.location.href = 'index3.html';
        } else if (offerTitle.includes('Maroc Telecom')) {
            window.location.href = 'index2.html';
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .plan-card, .offer-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle (for responsive design)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('mobile-overlay');
    document.body.appendChild(overlay);
    
    // Update nav menu with dropdowns for mobile
    const plansLink = navMenu.querySelector('a[href="#plans"]').parentElement;
    const offersLink = navMenu.querySelector('a[href="#offers"]').parentElement;
    const supportLink = navMenu.querySelector('a[href="#support"]').parentElement;
    const contactLink = navMenu.querySelector('a[href="#contact"]').parentElement;
    
    // Add dropdown for plans
    plansLink.classList.add('dropdown');
    plansLink.innerHTML = `
        <a href="#plans">الخطط <i class="fas fa-chevron-down"></i></a>
        <ul class="dropdown-menu">
            <li><a href="#plans" data-plan="WIN 0DH">WIN 0DH</a></li>
            <li><a href="#plans" data-plan="INWI 6">INWI 6</a></li>
            <li><a href="#plans" data-plan="INWI 6 45 يوم">INWI 6 - 45 يوم</a></li>
        </ul>
    `;
    
    // Add dropdown for offers
    offersLink.classList.add('dropdown');
    offersLink.innerHTML = `
        <a href="#offers">العروض <i class="fas fa-chevron-down"></i></a>
        <ul class="dropdown-menu">
            <li><a href="index1.html">عروض Inwi 6 الحصرية</a></li>
            <li><a href="index2.html">عروض Maroc Telecom 6 المميزة</a></li>
            <li><a href="index3.html">عروض WIN BY INWI 0DH</a></li>
        </ul>
    `;
    
    // Update support and contact links to redirect to WhatsApp
    if (supportLink) {
        supportLink.innerHTML = `<a href="https://wa.me/212631906392" target="_blank">الدعم</a>`;
    }
    if (contactLink) {
        contactLink.innerHTML = `<a href="https://wa.me/212631906392" target="_blank">اتصل بنا</a>`;
    }
    
    navbar.appendChild(hamburger);
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        navMenu.classList.toggle('mobile-active');
        overlay.classList.toggle('active');
        hamburger.classList.toggle('active');
        const icon = this.querySelector('i');
        
        if (navMenu.classList.contains('mobile-active')) {
            icon.classList.replace('fa-bars', 'fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        navMenu.classList.remove('mobile-active');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
        document.body.style.overflow = 'auto';
    });
    
    // Handle dropdown toggles
    navMenu.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Handle plan navigation
    navMenu.querySelectorAll('a[data-plan]').forEach(planLink => {
        planLink.addEventListener('click', function(e) {
            e.preventDefault();
            const planName = this.getAttribute('data-plan');
            
            // Close mobile menu
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('mobile-active');
                overlay.classList.remove('active');
                hamburger.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
                document.body.style.overflow = 'auto';
            }
            
            // Navigate to plans section and highlight the selected plan
            setTimeout(() => {
                const plansSection = document.querySelector('#plans');
                if (plansSection) {
                    plansSection.scrollIntoView({ behavior: 'smooth' });
                    
                    // Highlight the selected plan card
                    setTimeout(() => {
                        const planCards = document.querySelectorAll('.plan-card h3');
                        planCards.forEach(card => {
                            if (card.textContent.includes(planName)) {
                                card.closest('.plan-card').style.border = '3px solid #00BCD4';
                                card.closest('.plan-card').style.transform = 'scale(1.02)';
                                setTimeout(() => {
                                    card.closest('.plan-card').style.border = '';
                                    card.closest('.plan-card').style.transform = '';
                                }, 2000);
                            }
                        });
                    }, 500);
                }
            }, 100);
        });
    });
    
    // Close menu when clicking on regular menu items
    navMenu.querySelectorAll('a:not(.dropdown > a):not([data-plan])').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('mobile-active');
                overlay.classList.remove('active');
                hamburger.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Media query for mobile
    function checkMobile() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            if (!navMenu.classList.contains('mobile-active')) {
                navMenu.style.display = 'none';
            }
        } else {
            hamburger.style.display = 'none';
            navMenu.style.display = 'flex';
            navMenu.classList.remove('mobile-active');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = 'auto';
        }
    }
    
    window.addEventListener('resize', checkMobile);
    checkMobile();
}

// Initialize mobile menu
createMobileMenu();

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
