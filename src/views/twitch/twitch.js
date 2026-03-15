import { getRandomMessage } from "../../components/examples/messages.js";
import { getRandomUsername } from "../../components/examples/usernames.js";
import { getTwitchColorForUsername } from "../../components/examples/colors.js";
import { getExampleChatContent } from "../../components/examples/chats.js";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatTwitchTimestamp(date = new Date()) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function buildTwitchLine(index) {
  const timestamp = formatTwitchTimestamp();
  const username = getRandomUsername();
  const color = getTwitchColorForUsername(username);
  const content = getExampleChatContent();

  return `
    <div class="chat-line">
      <span class="timestamp"><small>${timestamp}</small></span>
      <span class="badges">
        <img class="badge customBadge" alt="badge" />
      </span>
      <span style="color: ${color};" class="from">${escapeHtml(username)}</span>
      <span class="colon">:</span>&nbsp;
      <span class="message">
  ${content.type === "text-only" ? escapeHtml(content.html) : content.html}
</span>
    </div>
  `;
}

function buildTwitchColumn(isDark, label, startIndex) {
  const lines = Array.from({ length: 14 }, (_, index) => {
    return buildTwitchLine(startIndex + index);
  }).join("");

  return `
    <div>
      <h3 class="preview-label">${label}</h3>
      <div class="chat-messages twitch-chat${isDark ? " dark" : ""}">
        <div class="chat-lines">
          ${lines}
        </div>
      </div>
    </div>
  `;
}

export function renderTwitchPreview() {
  return `
    <section class="preview-section">
      <div class="section-header">
        <h2>Twitch Preview</h2>
      </div>

      <div class="preview-grid">
        ${buildTwitchColumn(false, "Twitch Light", 0)}
        ${buildTwitchColumn(true, "Twitch Dark", 4)}
      </div>
    </section>
  `;
}