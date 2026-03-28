import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bento-card bento-card--entertainment" aria-label="Entertainment and Lifestyle">
      <div class="bento-tag">Lifestyle</div>

      <!-- Films / Letterboxd -->
      <a
        href="https://letterboxd.com/AthulMS/"
        target="_blank"
        rel="noopener noreferrer"
        class="ent-block"
        aria-label="Letterboxd film diary"
      >
        <div class="ent-icon" aria-hidden="true">🎬</div>
        <div class="ent-info">
          <span class="ent-label">Films</span>
          <span class="ent-sub">Tracking on Letterboxd</span>
        </div>
        <span class="ent-arrow" aria-hidden="true">↗</span>
      </a>

      <div class="ent-divider" role="separator"></div>

      <!-- Music / Spotify -->
      <a
        href="https://open.spotify.com/user/21h2yl7d5qotmt4zmgn73tnrq"
        target="_blank"
        rel="noopener noreferrer"
        class="ent-block"
        aria-label="Music on Spotify"
      >
        <div class="ent-icon" aria-hidden="true">♪</div>
        <div class="ent-info">
          <span class="ent-label">Music</span>
          <span class="ent-sub">Playing on Spotify</span>
        </div>
        <span class="ent-arrow" aria-hidden="true">↗</span>
      </a>

      <div class="ent-divider" role="separator"></div>

      <!-- Football -->
      <div class="ent-block ent-static" aria-label="Football fan">
        <div class="ent-icon" aria-hidden="true">⚽</div>
        <div class="ent-info">
          <span class="ent-label">Football</span>
          <span class="ent-sub">Passionate fan & player</span>
        </div>
      </div>

      <div class="ent-divider" role="separator"></div>

      <!-- Gaming -->
      <div class="ent-block ent-static" aria-label="Video gaming">
        <div class="ent-icon" aria-hidden="true">🎮</div>
        <div class="ent-info">
          <span class="ent-label">Video Gaming</span>
          <span class="ent-sub">Strategy & open-world</span>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .bento-card--entertainment {
        width: 100%;
        height: 100%;
      }
      .ent-block {
        display: flex;
        align-items: center;
        gap: 0.9rem;
        padding: 0.55rem 0;
        text-decoration: none;
        border-radius: 10px;
        transition:
          transform 0.16s cubic-bezier(0.34, 1.56, 0.64, 1),
          opacity 0.15s;
      }
      .ent-block:not(.ent-static):hover {
        transform: translateX(4px);
      }
      .ent-block:not(.ent-static):hover .ent-arrow {
        opacity: 1;
        transform: translate(2px, -2px);
      }
      .ent-block:not(.ent-static):active {
        transform: scale(0.97);
        transition-duration: 0.07s;
      }
      .ent-static {
        cursor: default;
      }
      .ent-icon {
        width: 34px;
        height: 34px;
        border-radius: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        flex-shrink: 0;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.07);
      }
      .ent-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.08rem;
      }
      .ent-label {
        font-size: 0.85rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.85);
      }
      .ent-sub {
        font-size: 0.72rem;
        color: rgba(255, 255, 255, 0.3);
      }
      .ent-arrow {
        font-size: 0.82rem;
        color: rgba(255, 255, 255, 0.25);
        opacity: 0.5;
        transition:
          opacity 0.18s ease,
          transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .ent-divider {
        height: 1px;
        background: rgba(255, 255, 255, 0.06);
        margin: 0.1rem 0;
      }
    `,
  ],
})
export class EntertainmentComponent {}
