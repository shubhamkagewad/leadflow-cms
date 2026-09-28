const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-navigation');

if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('is-open');

        const isOpen = navigation.classList.contains('is-open');

        menuToggle.setAttribute('aria-expanded', isOpen);
    });
}
/* ========================================
   Lead Form Validation
======================================== */

const leadForm = document.querySelector('#lead-form');

if (leadForm) {

    leadForm.addEventListener('submit', (event) => {

        event.preventDefault();

        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');

        let isValid = true;


        // Clear previous errors
        document.querySelectorAll('.form-error').forEach((error) => {
            error.textContent = '';
        });


        // Validate name
        if (name.value.trim() === '') {

            showError(
                'name',
                'Please enter your name.'
            );

            isValid = false;
        }


        // Validate email
        if (email.value.trim() === '') {

            showError(
                'email',
                'Please enter your email address.'
            );

            isValid = false;

        } else if (!isValidEmail(email.value.trim())) {

            showError(
                'email',
                'Please enter a valid email address.'
            );

            isValid = false;
        }


        // Validate message
        if (message.value.trim() === '') {

            showError(
                'message',
                'Please enter a message.'
            );

            isValid = false;
        }


        if (isValid) {

            const status = document.querySelector('#lead-form-status');

            status.textContent =
                'Form validation successful. API connection will be added next.';

        }

    });

}


/* ========================================
   Form Helper Functions
======================================== */

function showError(fieldName, message) {

    const errorElement =
        document.querySelector(
            `[data-error-for="${fieldName}"]`
        );

    if (errorElement) {
        errorElement.textContent = message;
    }
}


function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}