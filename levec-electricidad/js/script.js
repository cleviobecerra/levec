document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Mobile Nav Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.nav');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = mobileNavToggle.querySelector('ion-icon');
            if (nav.classList.contains('active')) {
                icon.setAttribute('name', 'close-outline');
            } else {
                icon.setAttribute('name', 'menu-outline');
            }
        });
    }
});
