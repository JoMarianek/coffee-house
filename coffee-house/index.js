const burger = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu')

burger.addEventListener("click", () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active')
}))