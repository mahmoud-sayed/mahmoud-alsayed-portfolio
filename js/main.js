//navpar
window.addEventListener('scroll', () => {
    let nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

const toggleButton = document.getElementsByClassName('toggle-button')[0];

const navBarList = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navBarList.classList.toggle('active')
});