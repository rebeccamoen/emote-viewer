export function renderSettingsPanel() {
  return `
    <div class="panel">
      <h2 class="panel-title">Uploads</h2>

      <div class="drop-zone" id="badgeDropZone">
        <p><strong>Badge</strong></p>
        <p>Click or drag 1 badge here</p>
        <input type="file" id="badgeInput" accept="image/*" />
      </div>

      <div class="drop-zone" id="emoteDropZone">
        <p><strong>Emotes</strong></p>
        <p>Click or drag multiple emotes here</p>
        <input type="file" id="emoteInput" accept="image/*" multiple />
      </div>
    </div>

    <div class="panel">
      <h2 class="panel-title">Settings</h2>

      <label class="setting">
        <span>Show timestamps</span>
        <input type="checkbox" id="toggleTimestamps" checked />
      </label>

      <label class="setting">
        <span>Show badges</span>
        <input type="checkbox" id="toggleBadges" checked />
      </label>
    </div>
  `;
}