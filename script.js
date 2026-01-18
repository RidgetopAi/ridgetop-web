/**
 * RidgetopAI Landing Page Scripts
 * Minimal JS: Intersection Observer for fade-in animations only
 */

(function() {
    'use strict';

    // Intersection Observer for scroll-triggered fade-in
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally stop observing after animation
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with .fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        fadeInObserver.observe(element);
    });

    // Add staggered delay to project cards for cascade effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
})();
