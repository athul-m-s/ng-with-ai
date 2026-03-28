import { Directive, ElementRef, OnDestroy, Output, EventEmitter, input, afterNextRender } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnDestroy {
  threshold = input<number>(0.1);
  rootMargin = input<string>('0px');
  delay = input<string>('0s');
  once = input<boolean>(true);

  @Output() revealed = new EventEmitter<void>();

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {
    afterNextRender(() => {
      this.createObserver();
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private createObserver(): void {
    const options = {
      root: null,
      rootMargin: this.rootMargin(),
      threshold: this.threshold()
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.style.transitionDelay = this.delay();
          this.el.nativeElement.classList.add('reveal-in-view');
          this.revealed.emit();
          if (this.once()) {
            this.observer?.unobserve(this.el.nativeElement);
          }
        } else if (!this.once()) {
          this.el.nativeElement.style.transitionDelay = '0s';
          this.el.nativeElement.classList.remove('reveal-in-view');
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }
}
