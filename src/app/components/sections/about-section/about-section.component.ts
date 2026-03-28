import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bento-card bento-card--about" aria-label="About">
      <div class="bento-tag">About</div>
      <h2 class="section-title">Who I&nbsp;Am</h2>
      <p class="section-body">
        Ambitious developer with over 6+ years of experience building responsive web applications
        in Angular. Currently working at <strong class="highlight">IBM Pvt. Ltd., Kochi</strong>,
        with expertise in travel and finance domain applications.
      </p>
      <p class="section-body">
        Committed to continuous learning, adept at leading teams, and passionate about
        developing innovative solutions — from Angular migrations to AI-powered document workflows.
      </p>
      <div class="cert-row">
        @for (cert of certifications; track cert.title) {
          <div class="cert-chip">
            <span class="cert-icon" aria-hidden="true">🏅</span>
            <span class="cert-label">{{ cert.title }}</span>
            <span class="cert-date">{{ cert.date }}</span>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    :host { 
      display: block; 
      grid-column: span 2; 
    }
    .bento-card--about { 
      width: 100%; 
      height: 100%; 
    }
    @media (max-width: 1024px) {
      :host { grid-column: span 2; }
    }
    @media (max-width: 640px) {
      :host { grid-column: span 1; }
    }
    
    .cert-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .cert-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.3rem 0.75rem;
      border-radius: 99px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.03);
    }
    .cert-icon { font-size: 0.8rem; }
    .cert-label { font-size: 0.75rem; font-weight: 500; color: rgba(255,255,255,0.65); }
    .cert-date { font-size: 0.68rem; color: rgba(255,255,255,0.3); }


  `],
})
export class AboutSectionComponent {
  certifications = [
    { title: 'Azure Fundamentals AZ-900', date: 'Nov 2022' },
    { title: 'Azure Data Fundamentals DP-900', date: 'Dec 2022' },
  ];
}
