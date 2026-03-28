import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BentoCardComponent } from '../../shared/bento-card/bento-card';

interface Project {
  name: string;
  period: string;
  tags: string[];
}

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  projects: Project[];
}

@Component({
  selector: 'app-professional-info',
  standalone: true,
  imports: [BentoCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-bento-card tag="Experience" title="Employment History" ariaLabel="Employment History">
      <div class="jobs-grid">
        @for (job of jobs; track job.company + job.period) {
          <div class="job-block">
            <!-- Job Header -->
            <div class="job-header">
              <div class="job-dot-col">
                <span class="job-dot" [class.job-dot--active]="job.current" [attr.aria-label]="job.current ? 'Current role' : 'Past role'"></span>
                <div class="job-line"></div>
              </div>
              <div class="job-meta">
                <div class="job-title-row">
                  <span class="job-title">{{ job.role }}</span>
                  @if (job.current) {
                    <span class="job-now-badge">Now</span>
                  }
                </div>
                <span class="job-company">{{ job.company }} &nbsp;·&nbsp; {{ job.location }}</span>
                <span class="job-period">{{ job.period }}</span>
              </div>
            </div>

            <!-- Nested Projects -->
            @if (job.projects.length > 0) {
              <div class="job-projects">
                @for (proj of job.projects; track proj.name) {
                  <div class="proj-item">
                    <div class="proj-header">
                      <span class="proj-name">{{ proj.name }}</span>
                      <span class="proj-period">{{ proj.period }}</span>
                    </div>
                    <div class="proj-tags">
                      @for (tag of proj.tags; track tag) {
                        <span class="proj-tag">{{ tag }}</span>
                      }
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        }
      </div>
    </app-bento-card>
  `,
  styles: [`
    :host { 
      display: block; 
      grid-column: 1 / -1; 
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }
    @media (max-width: 1024px) {
      :host { grid-column: 1 / -1; }
    }

    /* Responsive job grid */
    .jobs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
      width: 100%;
    }

    @media (max-width: 1200px) {
      .jobs-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 768px) {
      .jobs-grid { grid-template-columns: 1fr; gap: 1rem; }
    }

    /* Job Block */

    .job-block {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      transition: background 0.18s ease, border-color 0.18s ease;
    }
    .job-block:hover {
      background: rgba(255,255,255,0.04);
      border-color: rgba(255,255,255,0.12);
    }

    /* Header */
    .job-header { display: flex; gap: 0.65rem; }
    .job-dot-col { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; padding-top: 3px; }
    .job-dot {
      width: 9px; height: 9px;
      border-radius: 50%;
      background: rgba(255,255,255,0.22);
      flex-shrink: 0;
    }
    .job-dot--active {
      background: #fff;
      box-shadow: 0 0 0 3px rgba(255,255,255,0.12);
    }
    .job-line { flex: 1; width: 1px; background: rgba(255,255,255,0.06); margin-top: 5px; }

    .job-meta { display: flex; flex-direction: column; gap: 0.2rem; }
    .job-title-row { display: flex; align-items: center; gap: 0.5rem; }
    .job-title { font-size: 0.9rem; font-weight: 700; color: rgba(255,255,255,0.92); }
    .job-now-badge {
      font-size: 0.58rem; font-weight: 700; letter-spacing: 0.07em;
      text-transform: uppercase; color: #000;
      background: rgba(255,255,255,0.9);
      padding: 0.1rem 0.42rem; border-radius: 99px;
    }
    .job-company { font-size: 0.78rem; color: rgba(255,255,255,0.4); }
    .job-period { font-size: 0.7rem; color: rgba(255,255,255,0.24); letter-spacing: 0.03em; }

    /* Nested Projects */
    .job-projects {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      border-top: 1px solid rgba(255,255,255,0.06);
      padding-top: 0.65rem;
    }
    .proj-item { display: flex; flex-direction: column; gap: 0.35rem; }
    .proj-header { display: flex; align-items: baseline; justify-content: space-between; gap: 0.5rem; }
    .proj-name { font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.7); }
    .proj-period { font-size: 0.65rem; color: rgba(255,255,255,0.25); white-space: nowrap; flex-shrink: 0; }
    .proj-tags { display: flex; flex-wrap: wrap; gap: 0.25rem; }
    .proj-tag {
      font-size: 0.65rem; color: rgba(255,255,255,0.35);
      border: 1px solid rgba(255,255,255,0.09);
      padding: 0.1rem 0.45rem; border-radius: 99px;
    }
  `],
})
export class ProfessionalInfoComponent {
  jobs: Job[] = [
    {
      role: 'Senior Consultant',
      company: 'IBM',
      location: 'Kochi',
      period: 'Feb 2026 – Present',
      current: true,
      projects: [
        { name: 'FSI Innovations', period: 'Jun 2025 – Feb 2026', tags: ['React 18', 'Node.js', 'Cosmos DB', 'Azure AI', 'LangChain', 'OpenAI', 'Azure Storage', 'Function Apps'] },
      ],
    },
    {
      role: 'Senior Consultant I',
      company: 'Neudesic Technologies Pvt. Ltd.',
      location: 'Kochi',
      period: 'Aug 2021 – Feb 2026',
      projects: [
        { name: 'Schlumberger (SLB)', period: 'Aug 2021 – Jun 2025', tags: ['Angular 11→18', '.NET Core', 'MongoDB', 'Microservices', 'C#'] },
      ],
    },
    {
      role: 'Junior Front-End Developer',
      company: 'Benzy Infotech',
      location: 'Kochi',
      period: 'Jul 2019 – Aug 2021',
      projects: [
        { name: 'Akbar Travels (akbartravels.com)', period: 'Jul 2019 – Aug 2021', tags: ['Angular', 'Cashfree Payment', 'Flight & Hotel Booking', 'Travel Domain'] },
      ],
    },
  ];
}
