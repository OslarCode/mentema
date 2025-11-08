import "./style.css";
import { router, handleLinkClicks } from "./router.js";

import NAV_HTML from "./components/Navbar.html?raw";

document.getElementById("navbar").innerHTML = NAV_HTML;

router();
handleLinkClicks();

window.addEventListener("popstate", router);
