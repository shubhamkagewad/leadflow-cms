const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-navigation');

if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('is-open');

        const isOpen = navigation.classList.contains('is-open');

        menuToggle.setAttribute('aria-expanded', isOpen);
    });
}