const menu = document.querySelector('.navigation'),
      menuItem = document.querySelectorAll('.navigation__link'),
      hamburger = document.querySelector('.hamburger'),
      caruselItemHide = document.querySelectorAll('.carousel-item_hide');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('navigation_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navigation_active');
    })
})

caruselItemHide.forEach(item => {
    if(window.outerWidth < 577){
        item.classList.remove('carousel-item_hide');
        item.classList.add('carousel-item');
    }
})