import { previewMessages } from "../data/preview.js";

const state = {
  imageUrl: "",
  emoteName: "RebeccaLove",
  theme: "dark",
};

export function renderApp(root) {
  root.innerHTML = `
    <div class="page">
      <header class="topbar">
        <h1>Twitch Emote Preview</h1>
      </header>

      <main class="layout">
        <section class="controls">
          <label class="field">
            <span>Upload emote</span>
            <input id="imageInput" type="file" accept="image/*" />
          </label>

          <label class="field">
            <span>Emote name</span>
            <input id="emoteNameInput" type="text" value="${state.emoteName}" />
          </label>

          <label class="field">
            <span>Theme</span>
            <select id="themeSelect">
              <option value="dark" ${state.theme === "dark" ? "selected" : ""}>Dark</option>
              <option value="light" ${state.theme === "light" ? "selected" : ""}>Light</option>
            </select>
          </label>
        </section>

        <section class="preview ${state.theme}">
          <div class="size-row">
            ${renderSize("28px")}
            ${renderSize("56px")}
            ${renderSize("112px")}
          </div>

          <div class="chat-preview">
            ${previewMessages.map((msg) => renderMessage(msg)).join("")}
          </div>
        </section>
      </main>
    </div>
  `;

  attachEvents(root);
}

function renderSize(size) {
  if (!state.imageUrl) {
    return `
      <div class="size-card">
        <div class="size-label">${size}</div>
        <div class="placeholder">${state.emoteName}</div>
      </div>
    `;
  }

  return `
    <div class="size-card">
      <div class="size-label">${size}</div>
      <img src="${state.imageUrl}" alt="${state.emoteName}" style="width:${size};height:${size};image-rendering:auto;" />
    </div>
  `;
}

function renderMessage(msg) {
  const emote = state.imageUrl
    ? `<img class="chat-emote" src="${state.imageUrl}" alt="${state.emoteName}" />`
    : `<span class="chat-emote-text">${state.emoteName}</span>`;

  return `
    <div class="chat-line">
      <span class="chat-user">${msg.user}:</span>
      <span>${msg.text}</span>
      ${emote}
    </div>
  `;
}

function attachEvents(root) {
  const imageInput = root.querySelector("#imageInput");
  const emoteNameInput = root.querySelector("#emoteNameInput");
  const themeSelect = root.querySelector("#themeSelect");

  imageInput?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    state.imageUrl = URL.createObjectURL(file);
    renderApp(root);
  });

  emoteNameInput?.addEventListener("input", (event) => {
    state.emoteName = event.target.value || "RebeccaLove";
    renderApp(root);
  });

  themeSelect?.addEventListener("change", (event) => {
    state.theme = event.target.value;
    renderApp(root);
  });
}