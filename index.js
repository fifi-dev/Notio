AOS.init();

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('menu'); // Correction ici

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});



$(document).ready(function () {
    $('.slick-carousel').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10px',
                },
            },
        ],
    });
});
