// Prefijo base: '/' en dev, '/mentema/' en GitHub Pages (se define en vite.config.*
const BASE_URL = import.meta.env.BASE_URL; // p.ej. '/mentema/'
const BASE_TRIM = BASE_URL.replace(/\/$/, ""); // p.ej. '/mentema'

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
  "/404": { view: "Error404", components: [] },
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

// Carga de vistas y componentes como assets del bundle (sin rutas absolutas)
async function loadResource(path, type = "view") {
  const dir = type === "view" ? "./views/" : "./components/";
  const url = new URL(`${dir}${path}.html`, import.meta.url); // se resuelve en build

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
  // Obtén la ruta actual y elimina el prefijo BASE cuando exista (p.ej. '/mentema')
  let path = window.location.pathname.toLowerCase();

  if (BASE_TRIM && path.startsWith(BASE_TRIM)) {
    path = path.slice(BASE_TRIM.length) || "/";
  }

  // Normaliza a '/...'
  if (!path.startsWith("/")) path = `/${path}`;

  const route = routes[path] || routes["/404"];

  const viewHtml = await loadResource(route.view, "view");
  document.getElementById("app").innerHTML = viewHtml;

  await loadComponents(COMMON_COMPONENTS, "common-components");

  for (const { name, container } of route.components) {
    await loadComponents([name], container);
  }
}

export function handleLinkClicks() {
  document.body.addEventListener("click", async (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;

    // Externos o _blank: deja pasar
    if (
      (link.href.startsWith("http") &&
        !link.href.includes(window.location.origin)) ||
      link.target === "_blank"
    ) {
      return;
    }

    // Calcula destino interno a partir del atributo href (no del href absoluto)
    const raw = link.getAttribute("href") || "/";
    const isHash = raw.startsWith("#");
    if (isHash) return; // anclas internas: deja el comportamiento por defecto

    // Normaliza a '/ruta'
    let path = raw.startsWith("/") ? raw : `/${raw}`;

    // Evita recargar misma ruta
    const currentPath =
      window.location.pathname.replace(new RegExp(`^${BASE_TRIM}`), "") || "/";
    if (path === currentPath || path === window.location.pathname) return;

    e.preventDefault();

    // Construye URL con BASE en producción
    const nextUrl = `${BASE_TRIM}${path}`;
    window.history.pushState(null, "", nextUrl);

    document.dispatchEvent(new CustomEvent("routeChangeStart"));
    await new Promise((r) => setTimeout(r, 50));
    await router();
    document.dispatchEvent(new CustomEvent("routeChangeComplete"));
  });
}

// Pre-carga ligera de vistas frecuentes
document.addEventListener("DOMContentLoaded", () => {
  ["Home", "About", "Error404"].forEach((v) => loadResource(v, "view"));
});

// popstate también aquí por si se importa router.js directamente
window.addEventListener("popstate", router);
