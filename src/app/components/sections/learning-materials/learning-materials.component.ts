import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BentoCardComponent } from '../../shared/bento-card/bento-card';

@Component({
  selector: 'app-learning-materials',
  standalone: true,
  imports: [BentoCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-bento-card tag="Skills" title="Tech Stack" ariaLabel="Technical Skills">
      <div class="skills-container">
        @for (category of categories; track category.label) {
          <div class="skill-category">
            <h3 class="category-label">{{ category.label }}</h3>
            <div class="chip-cloud">
              @for (name of category.skills; track name) {
                <span class="skill-chip">{{ name }}</span>
              }
            </div>
          </div>
        }
      </div>
    </app-bento-card>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
      }
      @media (max-width: 1024px) {
        :host { grid-column: 1 / -1; }
      }
      .skills-container {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        margin-top: 0.5rem;
        width: 100%;
      }
      .skill-category {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
      }
      .category-label {
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: rgba(255, 255, 255, 0.25);
        margin: 0;
      }
      .chip-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
      .skill-chip {
        display: inline-flex;
        align-items: center;
        padding: 0.3rem 0.75rem;
        border-radius: 99px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.03);
        font-size: 0.76rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.65);
        transition: all 0.16s ease;
        cursor: default;
        white-space: nowrap;
      }
      .skill-chip:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.22);
        color: #fff;
        transform: translateY(-1px);
      }
    `,
  ],
})
export class LearningMaterialsComponent {
  readonly categories = [
    {
      label: 'Frontend',
      skills: [
        'Angular 18+',
        'React',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind',
        'Shadcn/ui',
        'WIJMO',
        'Bootstrap',
      ],
    },
    {
      label: 'Backend',
      skills: ['Node.js', '.NET Core', 'C#', 'MongoDB', 'Cosmos DB'],
    },
    {
      label: 'Cloud',
      skills: ['Azure', 'Function Apps', 'Azure Storage'],
    },
    {
      label: 'AI & Tools',
      skills: ['LangChain', 'OpenAI', 'Azure AI Foundry', 'Form Recognizer'],
    },
  ];
}
