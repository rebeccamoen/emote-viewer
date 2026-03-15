import { renderLayout } from "../src/layout.js";
import { setupPreview } from "./preview.js";

console.log("app.js loaded");

export function renderApp() {
  console.log("renderApp called");

  const root = document.getElementById("app");
  console.log("root:", root);

  root.innerHTML = renderLayout();
  console.log("layout rendered");

  setupPreview();
  console.log("preview setup done");
}