// Header scroll
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 100);
});

// Animations Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), index * 100);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth', block: 'start'
        });
    });
});


// Phone tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('🔓 Unlock Express - Appel Urgence 07 64 51 29 54');
        // gtag('event', 'phone_call', { event_category: 'conversion' });
    });
});

// Hero animation
window.addEventListener('load', () => {
    document.querySelector('.hero-text').style.animation = 'slideInUp 1s ease forwards';
});


// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {

        // 1️⃣ Fermer toutes les réponses
        document.querySelectorAll('.view').forEach(openAnswer => {
            if (openAnswer !== question.nextElementSibling) {
                openAnswer.classList.remove('view');
                openAnswer.parentElement.classList.remove('display');

                const openIcon = openAnswer.nextElementSibling;
                openIcon.classList.remove('less-sign');
            }
        });


        // 2️⃣ Toggle la réponse cliquée
        const answer = question.nextElementSibling;
        const icon = answer.nextElementSibling;

        const isOpen = answer.classList.contains('view');

        question.parentElement.classList.toggle('display', !isOpen);
        answer.classList.toggle('view', !isOpen);
        icon.classList.toggle('less-sign', !isOpen);
    });
});


//MENU HAMBURGER
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation()
    hamburger.classList.toggle('active');  // anime le hamburger
    navLinks.classList.toggle('open');     // ouvre/ferme le menu

    if (navLinks.classList.contains('open')) {
        document.querySelectorAll('.nav-links li a').forEach((link) => {
            link.addEventListener('click', (e) => {
                e.stopPropagation()
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            })
        })

        document.body.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        })
    }
});

/*BUTTON DE NAVIGUATION*/
// Scroll vers le bas (vers la prochaine section)
document.getElementById("scroll-down").addEventListener("click", () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

// Scroll vers le haut
document.getElementById("scroll-up").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Affichage intelligent du bouton "up"
window.addEventListener("scroll", () => {
    const upBtn = document.getElementById("scroll-up");

    if (window.scrollY > 300) {
        upBtn.classList.add("show");
    } else {
        upBtn.classList.remove("show");
    }
});

