// src/main.js
import "./style.css";
import { router, handleLinkClicks } from "./router.js";

// Monta la navbar desde componente empaquetado (sin fetch)
import NAV_HTML from "./components/Navbar.html?raw";

document.getElementById("navbar").innerHTML = NAV_HTML;

// Lógica del menú móvil (ajusta los selectores a tu HTML real)
const toggleButton = document.querySelector('button[aria-label="toggle menu"]');
const mobileMenu = document.getElementById("mobile-menu");
if (toggleButton && mobileMenu) {
  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Arranca el enrutador
router();
handleLinkClicks();

// Soporte navegación con flechas del navegador
window.addEventListener("popstate", router);
