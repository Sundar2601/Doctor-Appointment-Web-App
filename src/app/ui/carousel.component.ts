import { ChangeDetectionStrategy, Component, contentChildren, Directive, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide'

/** A single slide: `<div appCarouselSlide>...</div>`. */
@Directive({
  selector: '[appCarouselSlide]',
  host: {
    class: 'bg-card text-card-foreground flex h-50 w-full shrink-0 items-center justify-center rounded-lg border',
    role: 'group',
    'aria-roledescription': 'slide',
  },
})
export class CarouselSlideDirective {}

/** Usage: `<app-carousel><div appCarouselSlide>1</div>...</app-carousel>`. */
@Component({
  selector: 'app-carousel',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-80 flex-col items-center gap-3', role: 'region', 'aria-roledescription': 'carousel' },
  template: `
    <div class="w-full overflow-hidden rounded-lg">
      <div class="flex transition-transform duration-300" [style.transform]="'translateX(-' + index() * 100 + '%)'"><ng-content /></div>
    </div>
    <div class="flex gap-2">
      <button
        type="button"
        class="border-input bg-background hover:bg-accent focus-visible:ring-ring/50 inline-flex size-8 items-center justify-center rounded-full border shadow-xs focus-visible:ring-[3px] focus-visible:outline-none disabled:opacity-50"
        aria-label="Previous slide"
        [disabled]="index() === 0"
        (click)="go(-1)"
      >
        <ng-icon name="lucideChevronLeft" size="16" />
      </button>
      <button
        type="button"
        class="border-input bg-background hover:bg-accent focus-visible:ring-ring/50 inline-flex size-8 items-center justify-center rounded-full border shadow-xs focus-visible:ring-[3px] focus-visible:outline-none disabled:opacity-50"
        aria-label="Next slide"
        [disabled]="index() >= slides().length - 1"
        (click)="go(1)"
      >
        <ng-icon name="lucideChevronRight" size="16" />
      </button>
    </div>
  `,
})
export class CarouselComponent {
  protected readonly slides = contentChildren(CarouselSlideDirective)
  protected readonly index = signal(0)
  protected go(n: number) {
    this.index.update((i) => Math.min(Math.max(i + n, 0), this.slides().length - 1))
  }
}
