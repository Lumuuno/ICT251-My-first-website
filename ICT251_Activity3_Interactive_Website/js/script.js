// ICT251 Activity 3 JavaScript
document.addEventListener("DOMContentLoaded", () => {
    setupContactForm();
    setupExpandableProjects();
    setupGallery();
    setupProjectSearch();
    setupThemeSwitch();
    setupMobileNavigation();
});

// Compulsory feature: validate the form and show a local preview.
function setupContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const topic = document.getElementById("topic");

        clearFormErrors();

        let valid = true;

        if (name.value.trim() === "") {
            showError("nameError", "Please enter your name.");
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError("emailError", "Please enter a valid email address.");
            valid = false;
        }

        if (message.value.trim() === "") {
            showError("messageError", "Please enter a message.");
            valid = false;
        }

        const status = document.getElementById("formStatus");
        const preview = document.getElementById("formPreview");

        if (!valid) {
            status.textContent = "Please correct the highlighted fields.";
            status.style.color = "#b42318";
            preview.hidden = true;
            return;
        }

        // textContent is used so user-entered data is displayed safely.
        preview.textContent =
            `Data validated successfully. Name: ${name.value.trim()} | ` +
            `Email: ${email.value.trim()} | Topic: ${topic.value} | ` +
            `Message: ${message.value.trim()}`;
        preview.hidden = false;

        status.textContent = "The form data was validated locally. No message was delivered.";
        status.style.color = "#147a3e";
    });
}

function clearFormErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

// Feature 2: expandable project details.
function setupExpandableProjects() {
    document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            const isOpen = !details.hidden;

            details.hidden = isOpen;
            button.textContent = isOpen ? "Show details" : "Hide details";
            button.setAttribute("aria-expanded", String(!isOpen));
        });
    });
}

// Feature 3: gallery viewer using an array of images and captions.
function setupGallery() {
    const galleryImage = document.getElementById("galleryImage");
    const galleryCaption = document.getElementById("galleryCaption");
    const counter = document.getElementById("photoCounter");
    const previous = document.getElementById("previousPhoto");
    const next = document.getElementById("nextPhoto");

    if (!galleryImage) return;

    const photos = [
        {
            src: "images/photo1.jpg",
            alt: "First personal portfolio placeholder photo",
            caption: "Photo 1 — from personal collection"
        },
        {
            src: "images/photo2.jpg",
            alt: "Second personal portfolio placeholder photo",
            caption: "Photo 2 — from personal collection"
        },
        {
            src: "images/photo3.jpg",
            alt: "Third personal portfolio placeholder photo",
            caption: "Photo 3 — My Hobbies"
        }
    ];

    let current = 0;

    function showPhoto(index) {
        current = Math.max(0, Math.min(index, photos.length - 1));
        galleryImage.src = photos[current].src;
        galleryImage.alt = photos[current].alt;
        galleryCaption.textContent = photos[current].caption;
        counter.textContent = `${current + 1} of ${photos.length}`;
        previous.disabled = current === 0;
        next.disabled = current === photos.length - 1;
    }

    previous.addEventListener("click", () => showPhoto(current - 1));
    next.addEventListener("click", () => showPhoto(current + 1));
    showPhoto(0);
}

// Feature 4: project/skills search and reset.
function setupProjectSearch() {
    const search = document.getElementById("projectSearch");
    const reset = document.getElementById("resetSearch");
    const message = document.getElementById("searchMessage");
    const cards = [...document.querySelectorAll(".project-card")];

    if (!search) return;

    function filterProjects() {
        const term = search.value.trim().toLowerCase();
        let visible = 0;

        cards.forEach((card) => {
            const matches = card.dataset.search.toLowerCase().includes(term);
            card.hidden = !matches;
            if (matches) visible++;
        });

        if (term && visible === 0) {
            message.textContent = "No projects or skills match your search.";
        } else {
            message.textContent = `${visible} project(s) shown.`;
        }
    }

    search.addEventListener("input", filterProjects);

    reset.addEventListener("click", () => {
        search.value = "";
        cards.forEach((card) => { card.hidden = false; });
        message.textContent = `${cards.length} project(s) shown.`;
        search.focus();
    });

    filterProjects();
}

// Extra feature: light/dark theme switch.
function setupThemeSwitch() {
    const button = document.getElementById("themeButton");
    if (!button) return;

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const dark = document.body.classList.contains("dark-mode");
        button.textContent = dark ? "Switch to Light Theme" : "Switch Theme";
    });
}

// Extra feature: mobile navigation menu.
function setupMobileNavigation() {
    const button = document.getElementById("menuButton");
    const nav = document.getElementById("navLinks");
    if (!button || !nav) return;

    button.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        button.setAttribute("aria-expanded", String(open));
        button.textContent = open ? "✕ Close Menu" : "☰ Menu";
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            button.setAttribute("aria-expanded", "false");
            button.textContent = "☰ Menu";
        });
    });
}
