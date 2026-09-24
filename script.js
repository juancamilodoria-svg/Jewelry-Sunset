const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const scrollTopButton = document.querySelector(".scroll-top");

function closeMenu() {
  menuToggle.classList.remove("is-active");
  navMenu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");

  menuToggle.classList.toggle("is-active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú" : "Abrir menú"
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  const clickedOutsideMenu =
    !navMenu.contains(event.target) &&
    !menuToggle.contains(event.target);

  if (clickedOutsideMenu && navMenu.classList.contains("is-open")) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    closeMenu();
  }
});

window.addEventListener("scroll", () => {
  scrollTopButton.classList.toggle("is-visible", window.scrollY > 500);
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});