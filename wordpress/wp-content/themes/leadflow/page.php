<?php

get_header();

?>

<main>

    <section class="page-hero">

        <div class="container">

            <p class="page-hero__eyebrow">
                Get In Touch
            </p>

            <h1 class="page-hero__title">
                Let's Talk About Your Project
            </h1>

            <p class="page-hero__description">
                Tell us about your project and our team will get back to you.
            </p>

        </div>

    </section>


    <section class="contact-section">

        <div class="container contact-section__inner">

            <div class="contact-content">

                <p class="section-heading__eyebrow">
                    Start a Conversation
                </p>

                <h2>
                    Build Something That Generates Results
                </h2>

                <p>
                    Whether you need a new website, SEO improvements,
                    performance optimization or lead-generation solutions,
                    tell us what you're working on.
                </p>

            </div>


            <div class="contact-form-wrapper">

                <form
                    id="lead-form"
                    class="lead-form"
                    novalidate
                >

                    <div class="form-field">

                        <label for="name">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            autocomplete="name"
                            required
                        >

                        <p
                            class="form-error"
                            data-error-for="name"
                        ></p>

                    </div>


                    <div class="form-field">

                        <label for="email">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            autocomplete="email"
                            required
                        >

                        <p
                            class="form-error"
                            data-error-for="email"
                        ></p>

                    </div>


                    <div class="form-field">

                        <label for="company">
                            Company
                        </label>

                        <input
                            type="text"
                            id="company"
                            name="company"
                            autocomplete="organization"
                        >

                    </div>


                    <div class="form-field">

                        <label for="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            required
                        ></textarea>

                        <p
                            class="form-error"
                            data-error-for="message"
                        ></p>

                    </div>


                    <button
                        type="submit"
                        class="button button--primary lead-form__submit"
                    >
                        Send Message
                    </button>


                    <div
                        id="lead-form-status"
                        class="lead-form__status"
                        aria-live="polite"
                    ></div>

                </form>

            </div>

        </div>

    </section>

</main>

<?php

get_footer();