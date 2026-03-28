import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BentoCardComponent } from '../../shared/bento-card/bento-card';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [BentoCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-bento-card tag="About" title="Who I&nbsp;Am" ariaLabel="About">
      <p class="section-body">
        Ambitious developer with over 6+ years of experience building responsive web applications
        in Angular. Currently working at <strong class="highlight">IBM Pvt. Ltd., Kochi</strong>,
        with expertise in travel and finance domain applications.
      </p>
      <p class="section-body">
        Committed to continuous learning, adept at leading teams, and passionate about
        developing innovative solutions — from Angular migrations to AI-powered document workflows.
      </p>
    </app-bento-card>
  `,
  styles: [`
    :host { 
      display: block; 
      grid-column: span 2; 
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }
    @media (max-width: 1024px) {
      :host { grid-column: 1 / -1; }
    }
  `],
})
export class AboutSectionComponent {
}
