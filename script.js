"use strict";
const navLinks = document.querySelectorAll(".nav-links .link");
const animatedSections = document.querySelectorAll("section:not(#hero)");
// Hide and Observe sections

/***** Smooth Scrolling ******/
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    const headerHeight = document.querySelector("#header").clientHeight;
    const section = document.querySelector(id);
    const topOfSection =
      window.pageYOffset + section.getBoundingClientRect().top - headerHeight;

    window.scrollTo({
      top: topOfSection,
      behavior: "smooth",
    });
  });
});

/***** Section Animations ******/
const showSection = function (entries, observer) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  }
};

// Section Observer
const sectionObs = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.2,
});

// Hide and Observe sections
animatedSections.forEach((section) => {
  section.classList.add("section-hidden");
  sectionObs.observe(section);
});
