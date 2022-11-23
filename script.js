const nav = document.querySelector('#show');
const icon = document.querySelector('.nav-icon');
const close = document.querySelector('.close');

icon.addEventListener('click', () => {
  nav.classList.add('show');
});

close.addEventListener('click', () => {
  nav.classList.remove('show');
});