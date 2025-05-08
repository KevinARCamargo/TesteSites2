// Scroll Reveal
const scrollReveal = document.querySelectorAll('.scroll-reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

scrollReveal.forEach((element) => observer.observe(element));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicialização do Swiper para Depoimentos
const depoimentosSwiper = new Swiper('.depoimentosSwiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links a');

// Abrir/Fechar o menu ao clicar no ícone
menuToggle.addEventListener('click', (event) => {
    navLinks.classList.toggle('show');
    event.stopPropagation(); // Previne que o clique no botão feche o menu
});

// Fechar o menu ao clicar em qualquer link
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navLinks.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInsideMenu) {
        navLinks.classList.remove('show');
    }
});
