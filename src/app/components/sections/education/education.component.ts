import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BentoCardComponent } from '../../shared/bento-card/bento-card';

interface Degree {
  degree: string;
  institution: string;
  location: string;
  period: string;
  pct: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [BentoCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-bento-card tag="Education" title="Academic Background" ariaLabel="Education">
      <div class="edu-list">
        @for (edu of education; track edu.degree) {
          <div class="glass-item">
            <div class="edu-top">
              <span class="edu-icon" aria-hidden="true">🎓</span>
              <div class="edu-info">
                <span class="edu-degree">{{ edu.degree }}</span>
                <span class="edu-inst">{{ edu.institution }}</span>
                <span class="edu-loc">{{ edu.location }}</span>
              </div>
            </div>
            <div class="edu-bottom">
              <span class="edu-year">{{ edu.period }}</span>
              <span class="edu-pct">{{ edu.pct }}</span>
            </div>
          </div>
        }
      </div>
    </app-bento-card>
  `,
  styles: [`
    :host { 
      display: block; 
      grid-column: span 1; 
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }
    @media (max-width: 1024px) { :host { grid-column: 1 / -1; } }
    
    .edu-list { 
      display: flex; 
      flex-direction: column; 
      gap: 0.6rem; 
      width: 100%;
    }

    .glass-item {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      padding: 0.9rem;
    }

    .edu-top { display: flex; align-items: flex-start; gap: 0.75rem; }
    .edu-icon {
      font-size: 1.1rem;
      width: 36px; height: 36px;
      border-radius: 9px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.07);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .edu-info { display: flex; flex-direction: column; gap: 0.1rem; }
    .edu-degree { font-size: 0.88rem; font-weight: 700; color: rgba(255,255,255,0.88); }
    .edu-inst { font-size: 0.78rem; color: rgba(255,255,255,0.45); }
    .edu-loc { font-size: 0.72rem; color: rgba(255,255,255,0.28); }
    .edu-bottom { display: flex; align-items: center; justify-content: space-between; }
    .edu-year { font-size: 0.72rem; color: rgba(255,255,255,0.28); }
    .edu-pct {
      font-size: 0.75rem; font-weight: 600;
      color: rgba(255,255,255,0.7);
      border: 1px solid rgba(255,255,255,0.12);
      padding: 0.15rem 0.55rem; border-radius: 99px;
    }
  `],
})
export class EducationComponent {
  education: Degree[] = [
    {
      degree: 'Masters in Computer Science',
      institution: 'Sri Krishna Arts and Science College',
      location: 'Coimbatore',
      period: '2017 – 2019',
      pct: '86%',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Nehru Arts and Science College',
      location: 'Coimbatore',
      period: '2014 – 2017',
      pct: '85%',
    },
    {
      degree: 'Computer Science',
      institution: 'Mission higher secondary school',
      location: 'Palakkad',
      period: '2012 – 2014',
      pct: '80%',
    },
  ];
}
