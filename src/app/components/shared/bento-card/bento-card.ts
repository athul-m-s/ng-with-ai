import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bento-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (tag()) {
      <div class="bento-tag">{{ tag() }}</div>
    }
    @if (title()) {
      <h2 class="section-title">{{ title() }}</h2>
    }
    <ng-content />
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      justify-self: stretch;
      height: 100%;
      width: 100%;
      padding: 1.5rem;
      border-radius: 0.75rem; /* Matches var(--radius) */
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      :host {
        padding: 1.15rem;
      }
    }

    :host::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%);
      pointer-events: none;
    }

    :host:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.14);
      transform: translateY(-2px);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
    }

    .bento-tag {
      display: inline-flex;
      align-items: center;
      padding: 0.25rem 0.75rem;
      border-radius: 99px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.35);
      margin-bottom: 1rem;
      background: rgba(255, 255, 255, 0.03);
    }

    .section-title {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(1.5rem, 4vw, 2rem);
      font-weight: 800;
      letter-spacing: -0.035em;
      color: #fff;
      margin: 0 0 1rem;
      line-height: 1.2;
    }
  `]
})
export class BentoCardComponent {
  tag = input<string>();
  title = input<string>();
  ariaLabel = input.required<string>();
}
