import { Component, ChangeDetectionStrategy } from '@angular/core';

interface SocialLink {
  label: string;
  icon: string;
  handle: string;
  href: string;
}

@Component({
  selector: 'app-social-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bento-card bento-card--social" aria-label="Social Media and Contact">
      <div class="bento-tag">Connect</div>
      <div class="social-grid">
        @for (link of links; track link.label) {
          <a
            [href]="link.href"
            [target]="link.href.startsWith('mailto') || link.href.startsWith('tel') ? '_self' : '_blank'"
            rel="noopener noreferrer"
            class="social-item"
            [attr.aria-label]="link.label + ': ' + link.handle"
          >
            <span class="social-icon" aria-hidden="true">{{ link.icon }}</span>
            <span class="social-label">{{ link.label }}</span>
            <span class="social-handle">{{ link.handle }}</span>
          </a>
        }
      </div>
    </section>
  `,
  styles: [`
    :host { 
      display: block; 
      grid-column: 1 / -1; 
    }
    .bento-card--social { width: 100%; height: 100%; }

    .social-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
    }
    .social-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
      padding: 0.9rem 1rem;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.02);
      text-decoration: none;
      min-width: 0;
      transition:
        background 0.18s ease,
        border-color 0.18s ease,
        transform 0.16s cubic-bezier(0.34,1.56,0.64,1);
    }
    .social-item:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.18);
      transform: translateY(-3px);
    }
    .social-item:active { transform: scale(0.94); transition-duration: 0.07s; }
    .social-icon { font-size: 1.25rem; }
    .social-label { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.7); letter-spacing: 0.03em; }
    .social-handle { font-size: 0.68rem; color: rgba(255,255,255,0.28); text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; }

    @media (max-width: 1024px) {
      .social-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 640px) {
      :host { grid-column: span 1; }
      .social-grid { grid-template-columns: 1fr; }
    }

  `],
})
export class SocialLinksComponent {
  links: SocialLink[] = [
    { label: 'GitLab', icon: '🦊', handle: 'athulms', href: 'https://gitlab.com/athulms' },
    { label: 'Email', icon: '✉', handle: '4thulms@gmail.com', href: 'mailto:4thulms@gmail.com' },
    { label: 'Phone', icon: '📞', handle: '+91 77362 23178', href: 'tel:+917736223178' },
    { label: 'Location', icon: '📍', handle: 'Palakkad, Kerala', href: 'https://maps.google.com/?q=Palakkad,Kerala,India' },
  ];
}
