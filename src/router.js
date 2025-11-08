// src/router.js

// BASE_URL de Vite: '/' en dev y '/mentema/' en Pages
const BASE_URL = import.meta.env.BASE_URL; // p.ej. '/mentema/'
const BASE_TRIM = BASE_URL.replace(/\/$/, ""); // p.ej. '/mentema'

// Importa TODAS las vistas y componentes como texto en tiempo de build
// Así evitamos fetch/404 en GitHub Pages
const VIEW_MAP = import.meta.glob("./views/**/*.html", {
  as: "raw",
  eager: true,
});
const COMP_MAP = import.meta.glob("./components/**/*.html", {
  as: "raw",
  eager: true,
});

const routes = {
  "/": {
    view: "Home",
    components: [
      { name: "Hero", container: "hero" },
      { name: "SeccionEstrategia", container: "seccion-estrategia" },
      { name: "SeccionServicios", container: "seccion-servicios" },
      { name: "SeccionContacto", container: "seccion-contacto" },
    ],
  },
  "/about": {
    view: "About",
    components: [
      { name: "SeccionAboutHero", container: "seccion-about-hero" },
      { name: "SeccionMetodologia", container: "seccion-metodologia" },
      { name: "SeccionEquipo", container: "seccion-equipo" },
      { name: "SeccionPremios", container: "seccion-premios" },
    ],
  },
  "/services": {
    view: "Services",
    components: [
      { name: "SeccionServiciosHero", container: "seccion-servicios-hero" },
      {
        name: "SeccionServiciosOfertas",
        container: "seccion-servicios-ofertas",
      },
      {
        name: "SeccionContactoFormulario",
        container: "seccion-contacto-formulario",
      },
    ],
  },
  "/contacto": {
    view: "Contacto",
    components: [
      {
        name: "SeccionContactoPrincipal",
        container: "seccion-contacto-principal",
      },
    ],
  },
  "/privacidad": {
    view: "Privacidad",
    components: [{ name: "SeccionPolitica", container: "seccion-politica" }],
  },
  "/avisolegal": {
    view: "AvisoLegal",
    components: [
      { name: "SeccionAvisoLegal", container: "seccion-aviso-legal" },
    ],
  },
  "/404": { view: "Error404", components: [] },
};

// Utilidades para obtener HTML estático desde los mapas
function getViewHtml(viewName) {
  return (
    VIEW_MAP[`./views/${viewName}.html`] ??
    VIEW_MAP[`./views/Error404.html`] ??
    `<main class="p-8"><h1>404</h1><p>Vista no encontrada.</p></main>`
  );
}
function getComponentHtml(componentName) {
  return COMP_MAP[`./components/${componentName}.html`] ?? "";
}

async function loadComponents(components, containerId) {
  let container = document.getElementById(containerId);
  if (!container) {
    // Fallback: inserta en #app para no quedar en blanco si falta el contenedor
    console.warn(
      `[router] contenedor #${containerId} no existe. Inserto al final de #app.`
    );
    container = document.getElementById("app");
    if (!container) return;
  }
  const html = components.map((c) => getComponentHtml(c));
  container.insertAdjacentHTML("beforeend", html.join(""));
}

export async function router() {
  // Normaliza la ruta actual y quita el prefijo BASE en producción (p.ej. '/mentema')
  let path = window.location.pathname;

  if (BASE_TRIM && path.startsWith(BASE_TRIM)) {
    path = path.slice(BASE_TRIM.length) || "/";
  }
  path = path || "/";
  if (!path.startsWith("/")) path = `/${path}`;

  const def = routes[path] || routes["/404"];

  // Pinta la vista
  const viewHtml = getViewHtml(def.view);
  const app = document.getElementById("app");
  if (app) app.innerHTML = viewHtml;

  // Inserta el footer común si existe el contenedor
  // Puedes crear <div id="common-components"></div> dentro de cada vista
  const common = getComponentHtml("Footer");
  const commonContainer = document.getElementById("common-components");
  if (commonContainer) {
    commonContainer.innerHTML = common;
  } else if (app) {
    // fallback si no hay contenedor dedicado
    app.insertAdjacentHTML("beforeend", common);
  }

  // Inserta los componentes específicos de la ruta
  if (def.components?.length) {
    for (const { name, container } of def.components) {
      await loadComponents([name], container);
    }
  }
}

export function handleLinkClicks() {
  document.body.addEventListener("click", async (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;

    // Enlaces externos o _blank: dejarlos pasar
    if (
      (/^https?:\/\//i.test(link.href) &&
        !link.href.startsWith(window.location.origin)) ||
      link.target === "_blank"
    ) {
      return;
    }

    const raw = link.getAttribute("href") || "/";
    if (raw.startsWith("#")) return; // anclas internas

    // Normaliza ruta
    let path = raw.startsWith("/") ? raw : `/${raw}`;

    // Evita navegación redundante
    const current =
      window.location.pathname.replace(new RegExp(`^${BASE_TRIM}`), "") || "/";
    if (path === current) return;

    e.preventDefault();

    // Construye URL con base en producción
    const nextUrl = `${BASE_TRIM}${path}`;
    window.history.pushState(null, "", nextUrl);

    await router();
  });
}

// Precarga ligera (opcional)
document.addEventListener("DOMContentLoaded", () => {
  // No hace falta con glob eager, pero puedes mantenerla por si cambias la estrategia
});

// Flechas del navegador (por si importan router.js directo)
window.addEventListener("popstate", router);
