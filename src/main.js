import "./style.css";

import { router, handleLinkClicks } from "./router.js";

fetch("/src/components/Navbar.html")
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

    router();
    handleLinkClicks();
  });

window.addEventListener("popstate", router);
