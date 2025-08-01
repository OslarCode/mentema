// src/router.js

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
  "/404": {
    view: "Error404",
    components: [],
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
};

const COMMON_COMPONENTS = ["Footer"];
const viewCache = {};

async function loadResource(path, type = "view") {
  const basePath = type === "view" ? "/src/views/" : "/src/components/";
  const url = `${basePath}${path}.html`;

  if (viewCache[url]) return viewCache[url];

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error al cargar ${type}: ${url}`);
    const html = await res.text();
    viewCache[url] = html;
    return html;
  } catch (err) {
    console.error(err);
    return type === "view" ? loadResource("Error404", "view") : "";
  }
}

async function loadComponents(components, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const html = await Promise.all(
    components.map((c) => loadResource(c, "component"))
  );
  container.innerHTML = html.join("");
}

export async function router() {
  const path = window.location.pathname.toLowerCase();
  const route = routes[path] || routes["/404"];

  const viewHtml = await loadResource(route.view, "view");
  document.getElementById("app").innerHTML = viewHtml;

  // Cargar componentes comunes
  await loadComponents(COMMON_COMPONENTS, "common-components");

  // Cargar componentes específicos
  for (const { name, container } of route.components) {
    await loadComponents([name], container);
  }
}

export function handleLinkClicks() {
  document.body.addEventListener("click", async (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;

    if (
      (link.href.startsWith("http") &&
        !link.href.includes(window.location.origin)) ||
      link.target === "_blank"
    )
      return;

    const path = new URL(link.href).pathname;
    if (path === window.location.pathname) return;

    e.preventDefault();
    window.history.pushState(null, null, link.href);
    document.dispatchEvent(new CustomEvent("routeChangeStart"));
    await new Promise((r) => setTimeout(r, 50));
    await router();
    document.dispatchEvent(new CustomEvent("routeChangeComplete"));
  });
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  ["Home", "About", "Error404"].forEach((v) => loadResource(v, "view"));
});
