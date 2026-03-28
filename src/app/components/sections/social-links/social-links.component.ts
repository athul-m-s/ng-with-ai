import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BentoCardComponent } from '../../shared/bento-card/bento-card';

interface SocialLink {
  label: string;
  icon: string;
  handle: string;
  href: string;
}

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [BentoCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-bento-card tag="Connect" ariaLabel="Social Media and Contact">
      <div class="social-grid">
        @for (link of links; track link.label) {
          <a
            [href]="link.href"
            [target]="link.href.startsWith('mailto') || link.href.startsWith('tel') ? '_self' : '_blank'"
            rel="noopener noreferrer"
            class="glass-item"
            [attr.aria-label]="link.label + ': ' + link.handle"
          >
            <span class="social-icon" aria-hidden="true">{{ link.icon }}</span>
            <span class="social-label">{{ link.label }}</span>
            <span class="social-handle">{{ link.handle }}</span>
          </a>
        }
      </div>
    </app-bento-card>
  `,
  styles: [`
    :host { 
      display: block; 
      grid-column: 1 / -1; 
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }

    .social-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
      width: 100%;
    }

    @media (max-width: 1200px) {
      .social-grid { grid-template-columns: repeat(3, 1fr); }
    }

    @media (max-width: 768px) {
      .social-grid { 
        grid-template-columns: repeat(2, 1fr); 
        gap: 0.65rem; 
        max-height: 220px;
        overflow-y: auto;
        padding: 1rem 0.4rem 1rem 0;
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
        mask-image: linear-gradient(to bottom, 
          transparent, 
          black 15px, 
          black calc(100% - 15px), 
          transparent
        );
      }
      .social-grid::-webkit-scrollbar {
        width: 3px;
      }
      .social-grid::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      }
    }

    @media (max-width: 480px) {
      .social-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 768px) {
      :host { grid-column: 1 / -1; }
    }

    .glass-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
      padding: 0.9rem 1rem;
      text-decoration: none;
      min-width: 0;
    }
    .social-icon { font-size: 1.25rem; }
    .social-label { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.7); letter-spacing: 0.03em; }
    .social-handle { font-size: 0.68rem; color: rgba(255,255,255,0.28); text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; }
  `],
})
export class SocialLinksComponent {
  links: SocialLink[] = [
    { label: 'LinkedIn', icon: '🔗', handle: 'athul-ms', href: 'https://www.linkedin.com/in/athul-ms/' },
    { label: 'GitHub', icon: '🐙', handle: 'athul-m-s', href: 'https://github.com/athul-m-s' },
    { label: 'GitLab', icon: '🦊', handle: 'athul-m-s', href: 'https://gitlab.com/athul-m-s' },
    { label: 'Instagram', icon: '📸', handle: 'iamathulms', href: 'https://www.instagram.com/iamathulms' },
    { label: 'Facebook', icon: '👥', handle: 'iamathulms', href: 'https://www.facebook.com/iamathulms/' },
    { label: 'Email', icon: '✉', handle: '4thulms@gmail.com', href: 'mailto:4thulms@gmail.com' },
    { label: 'Phone', icon: '📞', handle: '+91 77362 23178', href: 'tel:+917736223178' },
    { label: 'Location', icon: '📍', handle: 'Palakkad, Kerala', href: 'https://maps.google.com/?q=Palakkad,Kerala,India' },
  ];
}
