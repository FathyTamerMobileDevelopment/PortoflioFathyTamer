// Loading Animation
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loader').classList.add('fade-out');
    }, 1000);
});

// Sticky Navigation
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Show Projects
const projectLinks = document.querySelectorAll('.show-projects');
projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('data-target');
        
        // Hide all project containers
        document.querySelectorAll('.projects-container').forEach(container => {
            container.classList.remove('active');
        });
        
        // Show target container
        document.getElementById(targetId).classList.add('active');
        
        // Scroll to projects container
        window.scrollTo({
            top: document.getElementById(targetId).offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Back to Top
document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.hidden');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Run animation on load
window.addEventListener('load', animateOnScroll);

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // The form will be handled by Formspree
    // We can add some validation or additional functionality here
    
    // For example, you can show a loading indicator
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    
    // This will actually be handled by the form action, but we can add some client-side validation
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    if (!email || !name || !message) {
        e.preventDefault();
        alert('Please fill out all fields');
        submitButton.textContent = originalText;
        return;
    }
    
    // The rest will be handled by the form action to Formspree
});

// Profile Image Animation
const profileImg = document.querySelector('.profile-img');

profileImg.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1) rotate(5deg)';
    this.style.transition = 'all 0.5s ease';
});

profileImg.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
});

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const projectImg = this.querySelector('.project-img img');
        const projectTitle = this.querySelector('.project-title');
        
        projectImg.style.transform = 'scale(1.1)';
        projectTitle.style.color = 'var(--primary-color)';
    });
    
    card.addEventListener('mouseleave', function() {
        const projectImg = this.querySelector('.project-img img');
        const projectTitle = this.querySelector('.project-title');
        
        projectImg.style.transform = 'scale(1)';
        projectTitle.style.color = 'var(--text-light)';
    });
});

// Add some random floating particles in the background of header
function createParticles() {
    const header = document.querySelector('header');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random styles
        particle.style.width = Math.random() * 15 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = i % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)';
        particle.style.opacity = '0.1';
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        header.appendChild(particle);
    }
}

// Hero Section Animation and Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Random movement for tech icons
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        // Random floating animation
        const randomDuration = Math.random() * 4 + 4; // Between 4-8s
        const randomDelay = Math.random() * 2;
        
        item.style.animationDuration = `${randomDuration}s`;
        item.style.animationDelay = `${randomDelay}s`;
        
        // Interactive tooltip behavior
        item.addEventListener('mouseenter', function() {
            // Pause the floating animation when hovered
            item.style.animationPlayState = 'paused';
        });
        
        item.addEventListener('mouseleave', function() {
            // Resume the floating animation
            item.style.animationPlayState = 'running';
        });
    });
    
    // Blob shape morphing
    const blob = document.querySelector('.blob');
    
    function generateBlobPoints() {
        const points = [];
        const numPoints = 8;
        const angleStep = (2 * Math.PI) / numPoints;
        const baseRadius = 200;
        
        for (let i = 0; i < numPoints; i++) {
            const angle = i * angleStep;
            const radius = baseRadius + Math.random() * 50 - 25;
            const x = 250 + Math.cos(angle) * radius;
            const y = 250 + Math.sin(angle) * radius;
            points.push([x, y]);
        }
        
        // Close the path
        points.push(points[0]);
        
        return points;
    }
    
    function createBlobPath(points) {
        let path = `M${points[0][0]},${points[0][1]}`;
        
        for (let i = 0; i < points.length - 1; i++) {
            const cp1x = points[i][0] + (points[i+1][0] - points[i-1 < 0 ? points.length - 2 : i-1][0]) / 6;
            const cp1y = points[i][1] + (points[i+1][1] - points[i-1 < 0 ? points.length - 2 : i-1][1]) / 6;
            
            const cp2x = points[i+1][0] - (points[i+2 >= points.length ? 1 : i+2][0] - points[i][0]) / 6;
            const cp2y = points[i+1][1] - (points[i+2 >= points.length ? 1 : i+2][1] - points[i][1]) / 6;
            
            path += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i+1][0]},${points[i+1][1]}`;
        }
        
        return path;
    }
    
    // Only start morphing after the initial drawing animation
    setTimeout(() => {
        const initialPoints = generateBlobPoints();
        const initialPath = createBlobPath(initialPoints);
        
        blob.setAttribute('d', initialPath);
        blob.style.strokeDasharray = 'none';
        blob.style.strokeDashoffset = '0';
        
        // Start morphing animation
        setInterval(() => {
            const newPoints = generateBlobPoints();
            const newPath = createBlobPath(newPoints);
            
            // Animate to new shape
            const animation = blob.animate([
                { d: blob.getAttribute('d') },
                { d: newPath }
            ], {
                duration: 3000,
                fill: 'forwards',
                easing: 'ease-in-out'
            });
            
            animation.onfinish = () => {
                blob.setAttribute('d', newPath);
            };
        }, 5000);
    }, 5000);
    
    // Replace placeholder images with actual projects when available
    function updateCollageImages() {
        // This function would be used to dynamically load your project images
        // For now, we'll just add hover effects
        
        const collageImgs = document.querySelectorAll('.collage-img');
        
        collageImgs.forEach(img => {
            img.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });
    }
    
    updateCollageImages();
    
    // Smooth scroll for the scroll indicator
    document.querySelector('.scroll-indicator').addEventListener('click', function() {
        const aboutSection = document.getElementById('about');
        
        if (aboutSection) {
            window.scrollTo({
                top: aboutSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Navigation JavaScript
function initMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (menuToggle && mobileNav) {
        // Initially ensure mobile nav is properly hidden
        if (window.innerWidth > 768) {
            mobileNav.style.display = 'none';
            mobileNav.style.visibility = 'hidden';
            mobileNav.style.opacity = '0';
        }
        
        // Toggle mobile menu
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Handle resize events
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                // Reset on desktop
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
                mobileNav.style.display = 'none';
                mobileNav.style.visibility = 'hidden';
                mobileNav.style.opacity = '0';
            } else {
                // Make sure it's visible (but not active) on mobile
                mobileNav.style.display = 'block';
            }
        });
    }
}

// Work Experience Animation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const experienceSection = document.getElementById('experience');
    const expCards = document.querySelectorAll('.exp-card');
    
    // Reset animations when scrolling into view
    function checkExperienceVisibility() {
        const sectionTop = experienceSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // If section is in viewport
        if (sectionTop < windowHeight - 100) {
            // Trigger animations by removing and re-adding the cards
            expCards.forEach((card, index) => {
                card.style.animationDelay = (0.2 * (index + 1)) + 's';
                card.style.opacity = '0';
                card.style.animation = 'none';
                
                // Force reflow
                void card.offsetWidth;
                
                card.style.animation = 'fadeInUp 0.8s forwards';
                card.style.animationDelay = (0.2 * (index + 1)) + 's';
            });
            
            // Remove scroll listener after animation
            window.removeEventListener('scroll', checkExperienceVisibility);
        }
    }
    
    // Run on page load and scroll
    checkExperienceVisibility();
    window.addEventListener('scroll', checkExperienceVisibility);
    
    // Add hover effects for experience cards
    expCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const title = this.querySelector('.exp-title');
            title.style.transform = 'translateX(10px)';
            title.style.color = '#8a84ff'; // Lighter shade of primary color
        });
        
        card.addEventListener('mouseleave', function() {
            const title = this.querySelector('.exp-title');
            title.style.transform = 'translateX(0)';
            title.style.color = '';
        });
    });
});

// Modern Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    const sections = document.querySelectorAll('section');
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        // Add 'scrolled' class when scrolled down
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Highlight active section in navigation
        highlightActiveSection();
    });
    
    // Mobile menu toggle
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section in navigation
    function highlightActiveSection() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const navbarHeight = navbar.offsetHeight;
            
            if (window.scrollY >= (sectionTop - navbarHeight - 100)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Run on page load to set initial active state
    highlightActiveSection();
});

// Initialize mobile navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', initMobileNav);

// Create particles on load
window.addEventListener('load', createParticles);

