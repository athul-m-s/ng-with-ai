import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bento-card" aria-label="Personal Information">
      <div class="bento-tag">Personal</div>
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
    </section>
  `,
  styles: [`
    :host { display: block; }
    .bento-card { width: 100%; height: 100%; }
    .personal-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.9rem 0.5rem;
    }
    .personal-item { display: flex; flex-direction: column; gap: 0.15rem; }
    .personal-icon { font-size: 1rem; margin-bottom: 0.1rem; }
    .personal-label { font-size: 0.68rem; color: rgba(255,255,255,0.28); letter-spacing: 0.06em; text-transform: uppercase; }
    .personal-value { font-size: 0.85rem; font-weight: 500; color: rgba(255,255,255,0.78); }
    .personal-link {
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      transition: color 0.2s ease;
    }
    .personal-link:hover {
      color: rgba(255,255,255,0.6);
      text-decoration: underline;
    }
    .link-icon {
      font-size: 0.7rem;
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
