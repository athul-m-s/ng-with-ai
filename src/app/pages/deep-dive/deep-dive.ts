import {
  Component,
  signal,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { AboutSectionComponent } from '../../components/sections/about-section/about-section.component';
import { LearningMaterialsComponent } from '../../components/sections/learning-materials/learning-materials.component';
import { ProjectsComponent } from '../../components/sections/projects/projects.component';
import { EntertainmentComponent } from '../../components/sections/entertainment/entertainment.component';
import { ProfessionalInfoComponent } from '../../components/sections/professional-info/professional-info.component';
import { PersonalInfoComponent } from '../../components/sections/personal-info/personal-info.component';
import { SocialLinksComponent } from '../../components/sections/social-links/social-links.component';
import { EducationComponent } from '../../components/sections/education/education.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';


@Component({
  selector: 'app-deep-dive',
  imports: [
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AboutSectionComponent,
    LearningMaterialsComponent,
    ProjectsComponent,
    EntertainmentComponent,
    ProfessionalInfoComponent,
    PersonalInfoComponent,
    SocialLinksComponent,
    EducationComponent,
    ScrollRevealDirective,
  ],

  templateUrl: './deep-dive.html',
  styleUrl: './deep-dive.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeepDiveComponent {
  auth = inject(AuthService);

  protected readonly showLoginModal = signal(false);
  protected readonly showSignupModal = signal(false);

  openLogin() {
    if (this.auth.loginError()) this.auth.loginError.set(null);
    this.showLoginModal.set(true);
    this.showSignupModal.set(false);
  }

  closeLogin() {
    this.showLoginModal.set(false);
  }

  openSignup() {
    if (this.auth.signupError()) this.auth.signupError.set(null);
    this.showSignupModal.set(true);
    this.showLoginModal.set(false);
  }

  closeSignup() {
    this.showSignupModal.set(false);
  }
}
