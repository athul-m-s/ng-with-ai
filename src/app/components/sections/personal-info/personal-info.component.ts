import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bento-card" aria-label="Personal Information">
      <div class="bento-tag">Personal</div>
      <div class="personal-grid">
        @for (item of items; track item.label) {
          <div class="personal-item">
            <span class="personal-icon" aria-hidden="true">{{ item.icon }}</span>
            <span class="personal-label">{{ item.label }}</span>
            <span class="personal-value">{{ item.value }}</span>
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
  `],
})
export class PersonalInfoComponent {
  items = [
    { icon: '📍', label: 'Location', value: 'Palakkad, Kerala, India' },
    { icon: '🌐', label: 'Nationality', value: 'Indian' },
    { icon: '🗣️', label: 'Languages', value: 'Malayalam · English · Tamil' },
    { icon: '🎂', label: 'Date of Birth', value: '03 Apr 1997' },
    { icon: '⚽', label: 'Hobbies', value: 'Films · Music · Football · Gaming' },
    { icon: '📧', label: 'Email', value: '4thulms@gmail.com' },
  ];
}
