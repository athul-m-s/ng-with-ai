import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BentoCardComponent } from '../../shared/bento-card/bento-card';

interface Project {
  name: string;
  client: string;
  period: string;
  desc: string;
  tags: string[];
  highlights: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BentoCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-bento-card tag="Projects" title="Featured Work" ariaLabel="Work Projects">
      <div class="project-list">
        @for (p of projects; track p.name) {
          <div class="glass-item" tabindex="0" [attr.aria-label]="p.name">
            <div class="project-top">
              <div class="project-meta">
                <span class="project-name">{{ p.name }}</span>
                <span class="project-client">{{ p.client }}</span>
              </div>
              <span class="project-period">{{ p.period }}</span>
            </div>
            <p class="project-desc">{{ p.desc }}</p>
            <ul class="project-highlights" aria-label="Key contributions">
              @for (h of p.highlights; track h) {
                <li class="project-highlight">{{ h }}</li>
              }
            </ul>
            <div class="project-tags">
              @for (tag of p.tags; track tag) {
                <span class="glass-tag">{{ tag }}</span>
              }
            </div>
          </div>
        }
      </div>
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
    
    .project-list { 
      display: flex; 
      flex-direction: column; 
      gap: 0.75rem; 
      width: 100%;
    }

    .glass-item {
      cursor: default;
      padding: 1.1rem;
    }

    .project-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.5rem;
      margin-bottom: 0.4rem;
    }
    .project-meta { display: flex; flex-direction: column; gap: 0.1rem; }
    .project-name { font-size: 0.88rem; font-weight: 700; color: rgba(255,255,255,0.92); }
    .project-client { font-size: 0.75rem; color: rgba(255,255,255,0.35); }
    .project-period { font-size: 0.7rem; color: rgba(255,255,255,0.28); white-space: nowrap; flex-shrink: 0; }
    .project-desc {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.38);
      line-height: 1.55;
      margin: 0 0 0.55rem;
    }
    .project-highlights {
      list-style: none;
      margin: 0 0 0.6rem;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .project-highlight {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      padding-left: 0.9rem;
      position: relative;
      line-height: 1.5;
    }
    .project-highlight::before {
      content: '—';
      position: absolute;
      left: 0;
      color: rgba(255,255,255,0.2);
    }
    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;
    }
  `],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'FSI Innovations',
      client: 'Neudesic Technologies → IBM',
      period: 'Jun 2025 – Feb 2026',
      desc: 'AI-powered document processing platform for enterprise finance, medical, and insurance workflows using Azure AI Document Intelligence and OpenAI.',
      highlights: [
        'Configured Azure AI Foundry assistants for intelligent document processing pipelines',
        'Implemented AI-powered document analysis using LangChain, Azure Form Recognizer, and OpenAI',
        'Built a scalable reusable component library using shadcn/ui and Tailwind CSS',
        'Remediated critical security vulnerabilities identified through Veracode static analysis',
        'Executed Node.js backend upgrade from v18 to v22',
        'Performed comprehensive npm package audits and upgrades',
        'Delivered performance improvements through bug fixes and code optimization',
      ],
      tags: ['React 18', 'Node.js', 'Cosmos DB', 'Azure AI', 'LangChain', 'OpenAI'],
    },
    {
      name: 'Schlumberger (SLB)',
      client: 'Neudesic Technologies',
      period: 'Aug 2021 – Jun 2025',
      desc: 'Finance operations platform — billing, Quote/Operation/Field-ticket creation, and user profile management for a global oilfield services leader.',
      highlights: [
        'Delivered high-performance modules using Angular, .NET Core, and MongoDB',
        'Collaborated with cross-functional teams for technology integration',
        'Analyzed client requirements in an agile environment',
        'Provided technical guidance and mentorship to team members',
        'Migrated Angular application from version 11 to 18',
        'Developed reusable UI interfaces and components',
        'Integrated .NET Core APIs and led migrations from Mono to Microservices architecture',
      ],
      tags: ['Angular 18', '.NET Core', 'MongoDB', 'Microservices'],
    },
    {
      name: 'Akbar Travels',
      client: 'Benzy Infotech',
      period: 'Jul 2019 – Aug 2021',
      desc: 'Responsive Angular web application for flight and hotel bookings on akbartravels.com — mobile and desktop.',
      highlights: [
        'Integrated Cashfree payment gateway (UPI and credit cards)',
        'Developed reusable and responsive UI components',
        'Conducted unit testing and bug fixes',
        'Provided production support and troubleshooting',
        'Contributed to feature development and user engagement',
      ],
      tags: ['Angular', 'Travel Domain', 'Payment Gateway'],
    },
  ];
}
