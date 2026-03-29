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
        Ambitious <strong class="highlight">Senior Consultant</strong> with over 6+ years of
        experience specializing in building high-performance, responsive web applications.
        Currently at <strong class="highlight">IBM</strong>, I leverage a deep technical stack
        including <strong class="highlight">Angular 18+</strong>, <strong class="highlight">React</strong>,
        <strong class="highlight">Node.js</strong>, and <strong class="highlight">.NET Core</strong>
        to deliver enterprise-grade solutions in the travel and finance domains.
      </p>
      <p class="section-body">
        I am passionate about architecting scalable systems and leading teams to bridge the gap
        between complex business requirements and innovative technology.
      </p>
    </app-bento-card>
  `,
  styles: [
    `
      :host {
        display: block;
        grid-column: span 2;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
      }
      @media (max-width: 1024px) {
        :host {
          grid-column: 1 / -1;
        }
      }
      .section-body {
        margin-bottom: 0.85rem !important;
      }
      .section-body:last-child {
        margin-bottom: 0 !important;
      }
    `,
  ],
})
export class AboutSectionComponent {}
