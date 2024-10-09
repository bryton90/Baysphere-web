const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide and show logo on scroll
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    logo.style.display = 'none';
  } else {
    logo.style.display = 'block';
  }
});
// Add event listener to back to top button
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add event listener to logo to hide and show on scroll
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('unscrolled');
    }
});
// Add a JavaScript function to toggle the dropdown menu
function toggleDropdown() {
  var dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('show');
}

// Add an event listener to the menu
document.querySelector('nav ul li').addEventListener('mouseover', toggleDropdown);