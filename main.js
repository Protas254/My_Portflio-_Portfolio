// Mobile Navigation Toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.navbar-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // Log form data (in a real application, you would send this to a server)
  console.log('Form submitted:', formData);

  // Reset form
  contactForm.reset();

  // Show success message (in a real application, you would handle this better)
  alert('Message sent successfully!');

  // script.js

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme in localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to light mode if no theme is saved
        setTheme('light');
    }
});

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }

});
