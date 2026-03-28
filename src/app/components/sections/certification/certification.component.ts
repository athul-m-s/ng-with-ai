import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BentoCardComponent } from '../../shared/bento-card/bento-card';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [BentoCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-bento-card tag="Certificates" title="Certifications" ariaLabel="Certifications">
      <div class="cert-list">
        @for (cert of certifications; track cert.title) {
          <div class="cert-item">
            <div class="cert-icon" aria-hidden="true">🏅</div>
            <div class="cert-info">
              <span class="cert-title">{{ cert.title }}</span>
              <span class="cert-date">{{ cert.date }}</span>
            </div>
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
    .cert-list { 
      display: flex; 
      flex-direction: column; 
      gap: 0.8rem; 
      width: 100%;
    }
    .cert-item {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      padding: 0.75rem;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.07);
      background: rgba(255,255,255,0.02);
      transition: background 0.18s ease, border-color 0.18s ease;
    }
    .cert-item:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.14);
    }
    .cert-icon {
      font-size: 1.1rem;
      width: 36px; height: 36px;
      border-radius: 9px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.07);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .cert-info { display: flex; flex-direction: column; gap: 0.1rem; }
    .cert-title { font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.85); }
    .cert-date { font-size: 0.72rem; color: rgba(255,255,255,0.3); }
  `],
})
export class CertificationComponent {
  certifications = [
    { title: 'Azure Fundamentals AZ-900', date: 'Nov 2022' },
    { title: 'Azure Data Fundamentals DP-900', date: 'Dec 2022' },
  ];
}
