const body = document.querySelector("body");
const header = document.querySelector(".page-header");
const navCollapse = document.querySelector(".navbar-collapse");
const scrollClass = "scroll";

window.addEventListener("scroll", () => {
  if (window.matchMedia("(min-width: 992px)").matches) {
    const scrollY = window.scrollY;
    scrollY > 0
      ? body.classList.add(scrollClass)
      : body.classList.remove(scrollClass);
  } else {
    body.classList.remove(scrollClass);
  }
});

function scrollOnClick() {
  const navLinks = document.querySelectorAll(".nav-link, .navbar-brand");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        const targetPosition = target.offsetTop - 71;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}
