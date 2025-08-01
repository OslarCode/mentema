// Importamos los estilos generados por Tailwind CSS
import "./style.css";

// Importamos el enrutador principal SPA y el gestor de clics internos en enlaces <a>
import { router, handleLinkClicks } from "./router.js";

// Cargamos de forma asíncrona el componente Navbar al iniciar la aplicación
fetch("/src/components/Navbar.html")
  .then((res) => res.text()) // Convertimos la respuesta en texto HTML
  .then((html) => {
    // Insertamos el HTML de la navbar en el div con id="navbar"
    document.getElementById("navbar").innerHTML = html;

    // Buscamos el botón que abre/cierra el menú mobile (hamburguesa)
    const toggleButton = document.querySelector(
      'button[aria-label="toggle menu"]'
    );

    // Buscamos el contenedor del menú móvil
    const mobileMenu = document.getElementById("mobile-menu");

    // Si ambos elementos existen, añadimos evento click para mostrar/ocultar el menú
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden"); // Alterna la clase que oculta o muestra el menú
      });
    }

    // Una vez cargada la navbar correctamente:
    // - ejecutamos el router para cargar la vista actual
    // - activamos el gestor de clicks en enlaces internos (SPA)
    router();
    handleLinkClicks();
  });

// Si el usuario usa el botón "atrás" o "adelante" del navegador,
// recargamos la vista correspondiente usando el router SPA
window.addEventListener("popstate", router);
