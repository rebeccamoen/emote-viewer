export function renderDiscordPreview() {
  return `
    <section class="preview-section">
      <div class="section-header">
        <h2>Discord Preview</h2>
      </div>

      <div class="preview-grid">
        <div>
          <h3 class="preview-label">Discord Light</h3>
          <div class="discord-messages discord-light">
            <div class="discord-line">
              <div class="discord-avatar">R</div>
              <div class="discord-body">
                <div class="discord-meta">
                  <span class="discord-name">Rebecca</span>
                  <span class="discord-time">Today at 20:21</span>
                </div>
                <div class="discord-message">
                  this is cute
                  <span class="emote-slot" data-emote="0"></span>
                  <span class="emote-slot" data-emote="1"></span>
                </div>
              </div>
            </div>

            <div class="discord-line">
              <div class="discord-avatar">N</div>
              <div class="discord-body">
                <div class="discord-meta">
                  <span class="discord-name discord-name-alt">Natasha</span>
                  <span class="discord-time">Today at 20:22</span>
                </div>
                <div class="discord-message">
                  spam check
                  <span class="emote-slot" data-emote="2"></span>
                  <span class="emote-slot" data-emote="0"></span>
                  <span class="emote-slot" data-emote="2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="preview-label">Discord Dark</h3>
          <div class="discord-messages discord-dark">
            <div class="discord-line">
              <div class="discord-avatar">R</div>
              <div class="discord-body">
                <div class="discord-meta">
                  <span class="discord-name">Rebecca</span>
                  <span class="discord-time">Today at 20:21</span>
                </div>
                <div class="discord-message">
                  dark mode test
                  <span class="emote-slot" data-emote="1"></span>
                  <span class="emote-slot" data-emote="0"></span>
                </div>
              </div>
            </div>

            <div class="discord-line">
              <div class="discord-avatar">F</div>
              <div class="discord-body">
                <div class="discord-meta">
                  <span class="discord-name discord-name-blue">Felicia</span>
                  <span class="discord-time">Today at 20:23</span>
                </div>
                <div class="discord-message">
                  how does this read
                  <span class="emote-slot" data-emote="2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}