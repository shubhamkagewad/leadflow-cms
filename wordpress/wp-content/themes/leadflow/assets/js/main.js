const menuToggle =
    document.querySelector('.menu-toggle');

const navigation =
    document.querySelector('.site-navigation');


if (menuToggle && navigation) {

    menuToggle.addEventListener(
        'click',
        () => {

            navigation.classList.toggle(
                'is-open'
            );


            const isOpen =
                navigation.classList.contains(
                    'is-open'
                );


            menuToggle.setAttribute(
                'aria-expanded',
                String(isOpen)
            );


            menuToggle.setAttribute(
                'aria-label',
                isOpen
                    ? 'Close navigation'
                    : 'Open navigation'
            );

        }
    );

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

    submitLeadForm();

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
/* ========================================
   Submit Lead Form
======================================== */

async function submitLeadForm() {

    const form = document.querySelector('#lead-form');

    const status = document.querySelector('#lead-form-status');

    const submitButton =
        document.querySelector('.lead-form__submit');


    const formData = new FormData(form);


    const leadData = {

        name: formData.get('name'),

        email: formData.get('email'),

        company: formData.get('company'),

        message: formData.get('message')

    };


    status.textContent = 'Sending...';

    submitButton.disabled = true;


    try {

        const response = await fetch(
            'http://localhost:3000/api/leads',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(leadData)
            }
        );


        const data = await response.json();


        if (!response.ok) {

            throw new Error(
                data.message || 'Unable to submit the form.'
            );

        }


        status.textContent =
            'Thank you! Your message has been submitted.';

        form.reset();


    } catch (error) {

        console.error(
            'Lead submission error:',
            error
        );

        status.textContent =
            'Something went wrong. Please try again.';


    } finally {

        submitButton.disabled = false;

    }

}
const newsletterForm =
    document.querySelector('#newsletter-form');


if (newsletterForm) {

    newsletterForm.addEventListener(
        'submit',
        async (event) => {

            event.preventDefault();


            const emailInput =
                document.querySelector(
                    '#newsletter-email'
                );

            const status =
                document.querySelector(
                    '#newsletter-status'
                );

            const submitButton =
                document.querySelector(
                    '.newsletter-form__submit'
                );


            const email =
                emailInput.value.trim();


            if (email === '') {

                status.textContent =
                    'Please enter your email address.';

                return;
            }


            if (!isValidEmail(email)) {

                status.textContent =
                    'Please enter a valid email address.';

                return;
            }


            status.textContent =
                'Subscribing...';

            submitButton.disabled = true;


            try {

                const response =
                    await fetch(
                        'http://localhost:3000/api/newsletter',
                        {
                            method: 'POST',

                            headers: {
                                'Content-Type':
                                    'application/json'
                            },

                            body: JSON.stringify({
                                email: email
                            })
                        }
                    );


                const data =
                    await response.json();


                if (!response.ok) {

                    throw new Error(
                        data.message ||
                        'Unable to subscribe.'
                    );

                }


                status.textContent =
                    'Thank you! You have been subscribed.';

                newsletterForm.reset();


            } catch (error) {

                console.error(
                    'Newsletter subscription error:',
                    error
                );


                status.textContent =
                    'Something went wrong. Please try again.';


            } finally {

                submitButton.disabled = false;

            }

        }
    );

}