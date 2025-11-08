import "./style.css";
import { router, handleLinkClicks } from "./router.js";

// Carga Navbar con URL de módulo (Vite la empaqueta y reescribe en build)
const navbarUrl = new URL("./components/Navbar.html", import.meta.url);

fetch(navbarUrl)
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("navbar").innerHTML = html;

    const toggleButton = document.querySelector(
      'button[aria-label="toggle menu"]'
    );
    const mobileMenu = document.getElementById("mobile-menu");

    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Arranca router e interceptores
    router();
    handleLinkClicks();
  });

// popstate para navegación con flechas del navegador
window.addEventListener("popstate", router);
