// Navigation toggle
const toggleBtn = document.querySelector(".togglebtn");
const nav = document.querySelector(".navlinks");

toggleBtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// Close menu when clicking on a navigation link
const navLinks = document.querySelectorAll(".navlinks li a");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        toggleBtn.classList.remove("click");
        nav.classList.remove("open");
    });
});

// Typed.js initialization
const typed = new Typed(".typed-text", {
    strings: ["Data Engineering", "Data Science", "Data Analysis", "Web Development", "Front-end Development"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// Active navigation link based on scroll position
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navlinks li a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navlinks li a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
});

// Portfolio filtering
const portfolioCategories = document.querySelectorAll(".portfolio-category");
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioCategories.forEach(category => {
    category.addEventListener("click", function() {
        // Remove active class from all buttons
        portfolioCategories.forEach(btn => btn.classList.remove("active"));

        // Add active class to clicked button
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        portfolioItems.forEach(item => {
            if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    });
});

// Form submission handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Basic form validation
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Here you would typically send the form data to a server
        // For demonstration, we'll just show a success message
        alert("Thank you for your message! I'll get back to you soon.");
        contactForm.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function revealOnScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
}

// Handle page load animations
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});