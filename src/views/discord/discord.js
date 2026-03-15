import { getRandomMessage } from "../../components/examples/messages.js";
import { getRandomUsername } from "../../components/examples/usernames.js";
import { getDiscordColorForUsername } from "../../components/examples/colors.js";
import { getExampleChatContent } from "../../components/examples/chats.js";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getInitials(name) {
  return name.trim().charAt(0).toUpperCase();
}

function formatDiscordTimestamp(date = new Date()) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

export function buildDiscordMessage() {
  const timestamp = formatDiscordTimestamp();
  const username = getRandomUsername();
  const color = getDiscordColorForUsername(username);
  const content = getExampleChatContent();

  const messageClass =
    content.type === "emote-only"
      ? "discord-message discord-message-emote-only"
      : "discord-message";

  const messageHtml =
    content.type === "text-only" ? escapeHtml(content.html) : content.html;

  return `
    <div class="discord-line">
      <div class="discord-avatar">${escapeHtml(getInitials(username))}</div>
      <div class="discord-body">
        <div class="discord-meta">
          <span class="discord-name" style="color: ${color};">${escapeHtml(username)}</span>
          <span class="discord-time">${timestamp}</span>
        </div>
        <div class="${messageClass}">
          ${messageHtml}
        </div>
      </div>
    </div>
  `;
}

function buildDiscordColumn(themeClass, label, startIndex) {
  const lines = Array.from({ length: 5 }, (_, index) => {
    return buildDiscordMessage(startIndex + index);
  }).join("");

  return `
    <div>
      <h3 class="preview-label">${label}</h3>
      <div class="discord-messages ${themeClass}">
        ${lines}
      </div>
    </div>
  `;
}

export function renderDiscordPreview() {
  return `
    <section class="preview-section">
      <div class="section-header">
        <h2>Discord Preview</h2>
      </div>

      <div class="preview-grid">
        ${buildDiscordColumn("discord-light", "Discord Light", 0)}
        ${buildDiscordColumn("discord-dark", "Discord Dark", 3)}
      </div>
    </section>
  `;
}