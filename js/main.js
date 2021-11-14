new Swiper('.slider', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',

        clickable: true,
      },

    autoplay: {
        delay: 2000,

        disableOnInteraction: false,
    },
});

let cartButton = document.querySelector('.cart');
let cart = document.querySelector('.shopping-cart');
let close = document.querySelector('.close');

cartButton.addEventListener('click', (e) => {
    e.preventDefault();

    cart.classList.add('active');
});

close.addEventListener('click', () => {
    cart.classList.remove('active');
});