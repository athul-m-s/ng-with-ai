import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
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
      :host { grid-column: span 1; }
    }
    
  `],
})
export class AboutSectionComponent {
}
