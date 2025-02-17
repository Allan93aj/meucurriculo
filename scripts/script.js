document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.querySelector('.back-to-top');
    const whatsapp = document.querySelector('.whatsapp');

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    whatsapp.addEventListener('click', () => {
        window.open('https://wa.me/5551964299127', '_blank');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
});

function redirectTo(link) {
    window.open(link, '_blank');
}



const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });