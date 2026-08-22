const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 10),
  { passive: true },
);

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
