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