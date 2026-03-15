const state = {
  badgeUrl: "",
  emoteUrls: [],
  showTimestamps: true,
  showBadges: true,
};

export function setupPreview() {
  const badgeInput = document.getElementById("badgeInput");
  const emoteInput = document.getElementById("emoteInput");
  const badgeDropZone = document.getElementById("badgeDropZone");
  const emoteDropZone = document.getElementById("emoteDropZone");
  const toggleTimestamps = document.getElementById("toggleTimestamps");
  const toggleBadges = document.getElementById("toggleBadges");

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
    renderBadge();
  });

  setupDropZone(badgeDropZone, (files) => {
    if (files.length) setBadge(files[0]);
  });

  setupDropZone(emoteDropZone, (files) => {
    if (files.length) setEmotes(files);
  });

  renderBadge();
  renderEmotes();
  renderTimestamps();
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
  state.badgeUrl = URL.createObjectURL(file);
  renderBadge();
}

function setEmotes(files) {
  state.emoteUrls = files.map((file) => URL.createObjectURL(file));
  renderEmotes();
}

function renderBadge() {
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
  const timestamps = document.querySelectorAll(".timestamp");

  timestamps.forEach((timestamp) => {
    timestamp.classList.toggle("hidden", !state.showTimestamps);
  });
}