// Shoukear.com — shared behavior

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Mark current page in nav
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current) {
      a.setAttribute("aria-current", "page");
    }
  });
});

/*
  Cookie-free analytics placeholder.
  Once a provider is chosen (e.g. Plausible or Fathom), add its
  script tag directly in the <head> of each HTML page — no JS
  wiring needed here since these tools are typically a single
  <script> tag with a data-domain attribute and no cookies.
*/
