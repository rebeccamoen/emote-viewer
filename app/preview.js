import {
  startLiveChat,
  stopAllLiveChat,
} from "../src/components/settings/livechat.js";
import { buildTwitchLine } from "../src/views/twitch/twitch.js";
import { buildDiscordMessage } from "../src/views/discord/discord.js";

const state = {
  badgeUrl: "",
  emoteUrls: [],
  showTimestamps: true,
  showBadges: true,
  liveChatEnabled: false,
};

export function setupPreview() {
  const badgeInput = document.getElementById("badgeInput");
  const emoteInput = document.getElementById("emoteInput");
  const badgeDropZone = document.getElementById("badgeDropZone");
  const emoteDropZone = document.getElementById("emoteDropZone");
  const toggleTimestamps = document.getElementById("toggleTimestamps");
  const toggleBadges = document.getElementById("toggleBadges");
  const toggleLiveChat = document.getElementById("toggleLiveChat");

  badgeInput?.addEventListener("change", (event) => {
    const files = event.target.files;
    if (!files || !files[0]) return;
    setBadge(files[0]);
  });

  emoteInput?.addEventListener("change", (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    setEmotes(files);
  });

  toggleTimestamps?.addEventListener("change", (event) => {
    state.showTimestamps = event.target.checked;
    renderTimestamps();
  });

  toggleBadges?.addEventListener("change", (event) => {
    state.showBadges = event.target.checked;
    renderBadges();
  });

  toggleLiveChat?.addEventListener("change", (event) => {
    state.liveChatEnabled = event.target.checked;
    syncLiveChat();
  });

  setupDropZone(badgeDropZone, (files) => {
    if (files.length) setBadge(files[0]);
  });

  setupDropZone(emoteDropZone, (files) => {
    if (files.length) setEmotes(files);
  });

  renderBadges();
  renderEmotes();
  renderTimestamps();
  syncLiveChat();
}

function setupDropZone(element, onFiles) {
  if (!element) return;

  element.addEventListener("dragover", (event) => {
    event.preventDefault();
    element.classList.add("dragover");
  });

  element.addEventListener("dragleave", () => {
    element.classList.remove("dragover");
  });

  element.addEventListener("drop", (event) => {
    event.preventDefault();
    element.classList.remove("dragover");

    const files = Array.from(event.dataTransfer?.files || []);
    if (!files.length) return;

    onFiles(files);
  });
}

function setBadge(file) {
  if (state.badgeUrl) {
    URL.revokeObjectURL(state.badgeUrl);
  }

  state.badgeUrl = URL.createObjectURL(file);
  renderBadges();
}

function setEmotes(files) {
  state.emoteUrls.forEach((url) => URL.revokeObjectURL(url));
  state.emoteUrls = files.map((file) => URL.createObjectURL(file));
  renderEmotes();
}

function renderBadges() {
  const badges = document.querySelectorAll(".customBadge");

  badges.forEach((badge) => {
    if (state.badgeUrl && state.showBadges) {
      badge.src = state.badgeUrl;
      badge.style.display = "inline-block";
    } else {
      badge.removeAttribute("src");
      badge.style.display = "none";
    }
  });
}

function renderEmotes() {
  const slots = document.querySelectorAll(".emote-slot");

  slots.forEach((slot) => {
    const index = Number(slot.dataset.emote);

    if (!Number.isInteger(index) || !state.emoteUrls[index]) {
      slot.innerHTML = "";
      return;
    }

    slot.innerHTML = `<img class="emoticon" src="${state.emoteUrls[index]}" alt="emote ${index}" />`;
  });
}

function renderTimestamps() {
  const timestamps = document.querySelectorAll(".timestamp, .discord-time");

  timestamps.forEach((timestamp) => {
    timestamp.classList.toggle("hidden", !state.showTimestamps);
  });
}

function applyStateToContainer(container) {
  const badges = container.querySelectorAll(".customBadge");

  badges.forEach((badge) => {
    if (state.badgeUrl && state.showBadges) {
      badge.src = state.badgeUrl;
      badge.style.display = "inline-block";
    } else {
      badge.removeAttribute("src");
      badge.style.display = "none";
    }
  });

  const timestamps = container.querySelectorAll(".timestamp, .discord-time");
  timestamps.forEach((timestamp) => {
    timestamp.classList.toggle("hidden", !state.showTimestamps);
  });

  const slots = container.querySelectorAll(".emote-slot");
  slots.forEach((slot) => {
    const index = Number(slot.dataset.emote);

    if (!Number.isInteger(index) || !state.emoteUrls[index]) {
      slot.innerHTML = "";
      return;
    }

    slot.innerHTML = `<img class="emoticon" src="${state.emoteUrls[index]}" alt="emote ${index}" />`;
  });
}

function syncLiveChat() {
  stopAllLiveChat();

  if (!state.liveChatEnabled) return;

  const twitchContainers = document.querySelectorAll(".chat-lines");
  const discordContainers = document.querySelectorAll(".discord-messages");

  twitchContainers.forEach((container) => {
    startLiveChat({
      container,
      buildMessage: () => buildTwitchLine(),
      visibleSelector: ".chat-line",
      poolSize: 20,
      minDelay: 500,
      maxDelay: 2000,
      afterRender: applyStateToContainer,
    });
  });

  discordContainers.forEach((container) => {
    startLiveChat({
      container,
      buildMessage: () => buildDiscordMessage(),
      visibleSelector: ".discord-line",
      poolSize: 20,
      minDelay: 500,
      maxDelay: 2000,
      afterRender: applyStateToContainer,
    });
  });
}