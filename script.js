"use strict";
const navLinks = document.querySelectorAll(".nav-links .link");

// Smooth Scrolling
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
