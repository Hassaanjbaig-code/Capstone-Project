const nav = document.querySelector('#show');
const icon = document.querySelector('.nav-icon');
const close = document.querySelector('.close');
const navbar = document.querySelectorAll('.navbar-fun');

icon.addEventListener('click', () => {
  nav.classList.add('show');
});

for (let i = 0; i < navbar.length; i += 1) {
  navbar[i].addEventListener('click', () => {
    nav.classList.remove('show');
  });
}

close.addEventListener('click', () => {
  nav.classList.remove('show');
});
