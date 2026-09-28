const menuToggle = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".site-navigation");

function trackEvent(eventName, eventData = {}) {
  const event = {
    event: eventName,
    ...eventData,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
function initializeEventTracking() {
  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", () => {
      trackEvent("cta_click", {
        cta: element.dataset.track,
      });
    });
  });
}
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("is-open");

    const isOpen = navigation.classList.contains("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  });
}
/* ========================================
   Lead Form Validation
======================================== */

const leadForm = document.querySelector("#lead-form");

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".form-error").forEach((error) => {
      error.textContent = "";
    });

    // Validate name
    if (name.value.trim() === "") {
      showError("name", "Please enter your name.");

      isValid = false;
    }

    // Validate email
    if (email.value.trim() === "") {
      showError("email", "Please enter your email address.");

      isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
      showError("email", "Please enter a valid email address.");

      isValid = false;
    }

    // Validate message
    if (message.value.trim() === "") {
      showError("message", "Please enter a message.");

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
  const errorElement = document.querySelector(
    `[data-error-for="${fieldName}"]`,
  );

  if (errorElement) {
    errorElement.textContent = message;
  }
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}
/* ========================================
   Submit Lead Form
======================================== */

async function submitLeadForm() {
  const form = document.querySelector("#lead-form");

  const status = document.querySelector("#lead-form-status");

  const submitButton = document.querySelector(".lead-form__submit");

  const formData = new FormData(form);

  const leadData = {
    name: formData.get("name"),

    email: formData.get("email"),

    company: formData.get("company"),

    message: formData.get("message"),
  };

  status.textContent = "Sending...";

  submitButton.disabled = true;

  try {
    const response = await fetch("http://localhost:3000/api/leads", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(leadData),
      utm_source: document.getElementById("utm_source")?.value || "",

      utm_medium: document.getElementById("utm_medium")?.value || "",

      utm_campaign: document.getElementById("utm_campaign")?.value || "",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to submit the form.");
    }

    status.textContent = "Thank you! Your message has been submitted.";

    form.reset();
  } catch (error) {
    console.error("Lead submission error:", error);

    status.textContent = "Something went wrong. Please try again.";
  } finally {
    submitButton.disabled = false;
  }
}
const newsletterForm = document.querySelector("#newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailInput = document.querySelector("#newsletter-email");

    const status = document.querySelector("#newsletter-status");

    const submitButton = document.querySelector(".newsletter-form__submit");

    const email = emailInput.value.trim();

    if (email === "") {
      status.textContent = "Please enter your email address.";

      return;
    }

    if (!isValidEmail(email)) {
      status.textContent = "Please enter a valid email address.";

      return;
    }

    status.textContent = "Subscribing...";

    submitButton.disabled = true;

    try {
      const response = await fetch("http://localhost:3000/api/newsletter", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to subscribe.");
      }

      status.textContent = "Thank you! You have been subscribed.";
      trackEvent("newsletter_subscribe", {
        form: "newsletter_form",
      });
      newsletterForm.reset();
    } catch (error) {
      console.error("Newsletter subscription error:", error);

      status.textContent = "Something went wrong. Please try again.";
    } finally {
      submitButton.disabled = false;
    }
  });
}
async function loadServices() {
  const servicesContainer = document.querySelector(".services-grid");

  if (!servicesContainer) {
    return;
  }

  try {
    const response = await fetch(`${leadflowConfig.apiUrl}/api/services`);

    if (!response.ok) {
      throw new Error("Unable to load services.");
    }

    const result = await response.json();

    if (!result.success || !Array.isArray(result.data)) {
      throw new Error("Invalid services response.");
    }
    trackEvent("lead_form_submit", {
      form: "contact_form",

      utm_source: document.getElementById("utm_source")?.value || "",

      utm_medium: document.getElementById("utm_medium")?.value || "",

      utm_campaign: document.getElementById("utm_campaign")?.value || "",
    });
    servicesContainer.innerHTML = result.data
      .map((service) => {
        return `
                        <article class="service-card">

                            <div class="service-card__content">

                                <h3 class="service-card__title">
                                    ${service.title.rendered}
                                </h3>

                                <div class="service-card__description">
                                    ${service.content.rendered}
                                </div>

                            </div>

                        </article>
                    `;
      })
      .join("");
  } catch (error) {
    console.error("Service loading error:", error);

    servicesContainer.innerHTML = `
            <p>
                Unable to load services at this time.
            </p>
        `;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  loadServices();

  captureCampaignParameters();
  initializeEventTracking();
});

function captureCampaignParameters() {
  const params = new URLSearchParams(window.location.search);

  const campaignFields = ["utm_source", "utm_medium", "utm_campaign"];

  campaignFields.forEach((fieldName) => {
    const field = document.getElementById(fieldName);

    if (!field) {
      return;
    }

    field.value = params.get(fieldName) || "";
  });
}
