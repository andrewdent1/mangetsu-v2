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
