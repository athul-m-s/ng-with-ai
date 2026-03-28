import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-certification',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bento-card" aria-label="Certifications">
      <div class="bento-tag">Certificates</div>
      <h2 class="section-title">Certifications</h2>
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
    </section>
  `,
  styles: [`
    :host { display: block; }
    .bento-card { width: 100%; height: 100%; }
    .cert-list { display: flex; flex-direction: column; gap: 0.8rem; }
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
