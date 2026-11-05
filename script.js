const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
});


menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
    }
});



const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 900);
});

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});