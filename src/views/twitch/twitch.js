export function renderTwitchPreview() {
  return `
    <section class="preview-section">
      <div class="section-header">
        <h2>Twitch Preview</h2>
      </div>

      <div class="preview-grid">
        <div>
          <h3 class="preview-label">Twitch Light</h3>
          <div class="chat-messages twitch-chat">
            <div class="chat-lines">
              <div class="chat-line">
                <span class="timestamp"><small>20:21</small></span>
                <span class="badges">
                  <img class="badge customBadge" alt="badge" />
                </span>
                <span style="color: #1E90FF;" class="from">Felicia</span>
                <span class="colon">:</span>&nbsp;
                <span class="message">
                  first emote
                  <span class="emote-slot" data-emote="0"></span>
                </span>
              </div>

              <div class="chat-line">
                <span class="timestamp"><small>20:22</small></span>
                <span class="badges">
                  <img class="badge customBadge" alt="badge" />
                </span>
                <span style="color: #ff5011;" class="from">Natasha</span>
                <span class="colon">:</span>&nbsp;
                <span class="message">
                  spam test
                  <span class="emote-slot" data-emote="0"></span>
                  <span class="emote-slot" data-emote="1"></span>
                  <span class="emote-slot" data-emote="2"></span>
                </span>
              </div>

              <div class="chat-line">
                <span class="timestamp"><small>20:23</small></span>
                <span class="badges">
                  <img class="badge customBadge" alt="badge" />
                </span>
                <span style="color: #ff2592;" class="from">Rebecca</span>
                <span class="colon">:</span>&nbsp;
                <span class="message">
                  LOVE
                  <span class="emote-slot" data-emote="1"></span>
                  <span class="emote-slot" data-emote="0"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="preview-label">Twitch Dark</h3>
          <div class="chat-messages twitch-chat dark">
            <div class="chat-lines">
              <div class="chat-line">
                <span class="timestamp"><small>20:21</small></span>
                <span class="badges">
                  <img class="badge customBadge" alt="badge" />
                </span>
                <span style="color: #1E90FF;" class="from">Felicia</span>
                <span class="colon">:</span>&nbsp;
                <span class="message">
                  dark test
                  <span class="emote-slot" data-emote="0"></span>
                </span>
              </div>

              <div class="chat-line">
                <span class="timestamp"><small>20:22</small></span>
                <span class="badges">
                  <img class="badge customBadge" alt="badge" />
                </span>
                <span style="color: #ff5011;" class="from">Natasha</span>
                <span class="colon">:</span>&nbsp;
                <span class="message">
                  hi whats up
                  <span class="emote-slot" data-emote="1"></span>
                  <span class="emote-slot" data-emote="2"></span>
                </span>
              </div>

              <div class="chat-line">
                <span class="timestamp"><small>20:23</small></span>
                <span class="badges">
                  <img class="badge customBadge" alt="badge" />
                </span>
                <span style="color: #ff2592;" class="from">Rebecca</span>
                <span class="colon">:</span>&nbsp;
                <span class="message">
                  LOVE
                  <span class="emote-slot" data-emote="2"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}