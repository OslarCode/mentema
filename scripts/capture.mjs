import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const PREVIEWS_DIR = path.resolve("previews");
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

const ROUTES = [
  { path: "/", name: "home" },
  { path: "/services", name: "services" },
  { path: "/about", name: "about" },
  { path: "/contacto", name: "contacto" },
];

const VIEWPORTS = [
  { w: 1280, h: 800, label: "1280x800" },
  { w: 390, h: 844, label: "mobile" },
];

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

function runShell(command) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, {
      stdio: "inherit",
      shell: true,
    });
    child.on("error", reject);
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${command} exited ${code}`))
    );
  });
}

async function startPreview() {
  const child = spawn(`npx vite preview --port ${PORT}`, {
    stdio: "inherit",
    shell: true,
  });
  await wait(1500);
  return child;
}

async function stop(child) {
  try {
    child.kill();
  } catch {}
}

async function main() {
  await ensureDir(PREVIEWS_DIR);

  await runShell("npm run build");

  const server = await startPreview();

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of ROUTES) {
    for (const vp of VIEWPORTS) {
      await page.setViewportSize({ width: vp.w, height: vp.h });
      await page.goto(`${BASE_URL}${route.path}`, { waitUntil: "networkidle" });
      await wait(300);
      const file = path.join(PREVIEWS_DIR, `${route.name}-${vp.label}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log(`✓ ${route.path} → ${file}`);
    }
  }

  await browser.close();
  await stop(server);

  const md = `## Previews

**Desktop (1280×800)**

| Página | Captura |
|---|---|
| Home | ![Home](previews/home-1280x800.png) |
| Services | ![Services](previews/services-1280x800.png) |
| About | ![About](previews/about-1280x800.png) |
| Contacto | ![Contacto](previews/contacto-1280x800.png) |

**Mobile**

| Página | Captura |
|---|---|
| Home | ![Home](previews/home-mobile.png) |
| Services | ![Services](previews/services-mobile.png) |
| About | ![About](previews/about-mobile.png) |
| Contacto | ![Contacto](previews/contacto-mobile.png) |
`;
  await writeFile(path.join(PREVIEWS_DIR, "README_previews.md"), md, "utf8");
  console.log("✓ Generado previews/README_previews.md");
}

main().catch((e) => {
  console.error("ERROR en captura:", e);
  process.exit(1);
});
