window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 420) {
        header.classList.add('header-colored');
    } else {
        header.classList.remove('header-colored');
    }
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.querySelector('.close-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action
    // Code to close the sidebar
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('slide');

    // Hide all slides and remove 'active' class
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Add 'active' class to the current slide
    slides[slideIndex - 1].classList.add('active');

    // Set timeout to change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simple form validation
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && subject && message) {
            // Display success message
            formMessage.textContent = "Thank you for your message! We will get back to you shortly.";
            formMessage.style.color = "green";

            // Optionally, clear form fields after submission
            contactForm.reset();
        } else {
            // Display error message
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";
        }
    });
});
