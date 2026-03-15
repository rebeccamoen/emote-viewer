console.log("layout.js loaded");

import { renderSettingsPanel } from "./components/settings/settings-panel.js";
import { renderTwitchPreview } from "./views/twitch/twitch.js";
import { renderDiscordPreview } from "./views/discord/discord.js";

export function renderLayout() {
  return `
    <div class="app">
      <aside class="sidebar">
        <h1 class="app-title">Emote Viewer</h1>
        ${renderSettingsPanel()}
      </aside>

      <main class="content">
        ${renderTwitchPreview()}
        ${renderDiscordPreview()}
      </main>
    </div>
  `;
}