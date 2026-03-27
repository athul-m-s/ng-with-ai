import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-learning-materials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bento-card" aria-label="Technical Skills">
      <div class="bento-tag">Skills</div>
      <h2 class="section-title">Tech Stack</h2>
      <div class="chip-cloud">
        @for (skill of skills; track skill) {
          <span class="skill-chip">{{ skill }}</span>
        }
      </div>
    </section>
  `,
  styles: [`
    :host { display: contents; }
    .section-title {
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: -0.025em;
      color: #fff;
      margin: 0 0 0.85rem;
    }
    .chip-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      align-content: flex-start;
    }
    .skill-chip {
      display: inline-flex;
      align-items: center;
      padding: 0.28rem 0.7rem;
      border-radius: 99px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.03);
      font-size: 0.76rem;
      font-weight: 500;
      color: rgba(255,255,255,0.65);
      transition: background 0.14s ease, border-color 0.14s ease, color 0.14s ease, transform 0.12s cubic-bezier(0.34,1.56,0.64,1);
      cursor: default;
      white-space: nowrap;
    }
    .skill-chip:hover {
      background: rgba(255,255,255,0.09);
      border-color: rgba(255,255,255,0.22);
      color: #fff;
      transform: translateY(-1px);
    }
  `],
})
export class LearningMaterialsComponent {
  skills = [
    'Angular 18+', 'React', 'TypeScript', 'JavaScript',
    'HTML', 'CSS', 'Tailwind', 'Shadcn/ui',
    'Angular Material', 'Bootstrap', 'WIJMO',
    'Node.js', '.NET Core', 'MongoDB', 'Cosmos DB',
    'Azure', 'Azure AI Foundry', 'Form Recognizer',
    'Function Apps', 'LangChain', 'OpenAI',
  ];
}
