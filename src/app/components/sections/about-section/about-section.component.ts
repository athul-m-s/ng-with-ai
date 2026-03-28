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
        Ambitious <strong class="highlight">Full-Stack Architect</strong> with 6+ years of
        experience crafting enterprise-grade ecosystems. Currently at
        <strong class="highlight">IBM</strong>, I specialize in building complex, high-performance
        applications for the travel and finance sectors—mastering
        <strong class="highlight">Angular 18+</strong> and
        <strong class="highlight">TypeScript</strong> while architecting resilient cloud backends.
      </p>
      <p class="section-body">
        I excel at bridging the gap between standard development, integrating
        <strong class="highlight">Azure AI Foundry</strong>, LangChain, and OpenAI into
        mission-critical document workflows. My background includes building serverless systems on
        <strong class="highlight">Azure</strong> using Function Apps and Cosmos DB.
      </p>
      <p class="section-body">
        Passionate about <strong class="highlight">architectural modernization</strong>, I lead
        migrations across the stack and pioneer the adoption of premium UI standards—balancing
        specialized enterprise grids like <strong class="highlight">WIJMO</strong> with modern
        ecosystems like Tailwind and Shadcn/ui.
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
