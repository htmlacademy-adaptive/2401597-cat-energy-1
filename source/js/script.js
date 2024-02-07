// Menu
const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__toggle');

if (document.querySelector('.nojs')) {
  document.querySelector('.nojs').classList.remove('nojs');
}

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('is-open');
});
