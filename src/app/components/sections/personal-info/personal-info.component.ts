import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BentoCardComponent } from '../../shared/bento-card/bento-card';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [BentoCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-bento-card tag="Personal" ariaLabel="Personal Information">
      <div class="personal-grid">
        @for (item of items; track item.label) {
          <div class="personal-item">
            <span class="personal-icon" aria-hidden="true">{{ item.icon }}</span>
            <span class="personal-label">{{ item.label }}</span>
            @if (item.link) {
              <a [href]="item.link" target="_blank" rel="noopener noreferrer" class="personal-value personal-link">
                {{ item.value }}
                <span class="link-icon">↗</span>
              </a>
            } @else {
              <span class="personal-value">{{ item.value }}</span>
            }
          </div>
        }
      </div>
    </app-bento-card>
  `,
  styles: [`
    :host { 
      display: block; 
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }
    @media (max-width: 1024px) {
      :host { grid-column: 1 / -1; }
    }
    .personal-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem 1rem;
      width: 100%;
    }
    @media (max-width: 480px) {
      .personal-grid { grid-template-columns: 1fr; gap: 1.25rem; }
    }
    .personal-item { 
      display: flex; 
      flex-direction: column; 
      gap: 0.25rem; 
      min-width: 0;
    }
    .personal-icon { font-size: 1.15rem; margin-bottom: 0.15rem; opacity: 0.8; }
    .personal-label { 
      font-size: 0.65rem; 
      color: rgba(255,255,255,0.3); 
      letter-spacing: 0.08em; 
      text-transform: uppercase;
      font-weight: 600;
    }
    .personal-value { 
      font-size: 0.92rem; 
      font-weight: 600; 
      color: rgba(255,255,255,0.9);
      line-height: 1.4;
      word-break: break-word;
    }
    .personal-link {
      color: #fff;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: all 0.2s ease;
    }
    .personal-link:hover {
      color: rgba(255,255,255,0.6);
      transform: translateX(4px);
    }
    .link-icon {
      font-size: 0.8rem;
      opacity: 0.5;
    }
  `],
})
export class PersonalInfoComponent {
  items = [
    { 
      icon: '📍', 
      label: 'Location', 
      value: 'Palakkad, Kerala, India',
      link: 'https://maps.app.goo.gl/L74GLTKnnG5wrBEX7'
    },
    { icon: '🌐', label: 'Nationality', value: 'Indian' },
    { icon: '🗣️', label: 'Languages', value: 'Malayalam · English · Tamil' },
    { icon: '🎂', label: 'Date of Birth', value: '03 Apr 1997' },
    { icon: '⚽', label: 'Hobbies', value: 'Films · Music · Football · Gaming' },
    { icon: '📧', label: 'Email', value: '4thulms@gmail.com' },
  ];
}
