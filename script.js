const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97,89,85,87,80,70,50];

// Sticky Navbar, scroll behaviour
window.addEventListener('scroll', () => {
mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= 
    navbar.offsetTop) {
    navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }

  sections.forEach((section, i) => {
    if(window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach(navbarLink => {
        navbarLink.classList.remove('change');
      })
      navbarLinks[i].classList.add('change');
    }
  });
  // Progress Bars
  // if this is true then progress bars will appear
  // for each of those, change their width and color, looping through the array
  if(window.pageYOffset + window.innerHeight >= progress.offsetTop) {
document.querySelectorAll('.progress-percent').forEach((el, i) => {
  el.style.width = `${progressBarPercents[i]}%`;
  el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
})
  }
}

mainFn();

// Resize Event(Page will reload when the screen size is changed on screen)
window.addEventListener('resize', () => {
  window.location.reload();
})