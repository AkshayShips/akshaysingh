// =================================
// MOBILE NAVBAR TOGGLE
// =================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    // Open/close mobile menu when hamburger is clicked
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu after clicking a navigation link
    const navigationLinks = document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });

    });

}


// =================================
// CONTACT FORM VALIDATION
// (only runs if a contact form exists on the page)
// =================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get values from the form
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();


        // Check if any field is empty
        if (name === "" || email === "" || message === "") {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.className = "message error";

            return;
        }


        // Simple email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.className = "message error";

            return;
        }


        // If all validation checks pass
        formMessage.textContent =
            "Message sent successfully!";

        formMessage.className = "message success";


        // Clear the form
        contactForm.reset();

    });

}


// =================================
// SHOW MORE REVIEWS TOGGLE
// (only runs if a reviews grid exists on the page)
// =================================

const reviewsToggleBtn = document.getElementById("reviewsToggleBtn");
const testimonialsGrid = document.getElementById("testimonialsGrid");

if (reviewsToggleBtn && testimonialsGrid) {

    reviewsToggleBtn.addEventListener("click", function () {

        const isExpanded = testimonialsGrid.classList.toggle("show-all");

        reviewsToggleBtn.textContent = isExpanded
            ? "Show Fewer Reviews"
            : "Show All Reviews";

    });

}