import { ChangeDetectionStrategy, Component, input, model, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideStar } from '@ng-icons/lucide'

/** Star rating. Two-way: `[(value)]`. */
@Component({
  selector: 'app-rating',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideStar })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex items-center gap-1', role: 'radiogroup', '[attr.aria-label]': 'label()', '(mouseleave)': 'hover.set(0)' },
  template: `
    @for (n of stars(); track n) {
      <button
        type="button"
        role="radio"
        class="focus-visible:outline-ring rounded-xs text-foreground focus-visible:outline-2 disabled:cursor-default"
        [class.text-muted-foreground]="n > (hover() || value())"
        [attr.aria-checked]="n === value()"
        [attr.aria-label]="n + (n === 1 ? ' star' : ' stars')"
        [disabled]="readonly()"
        (mouseenter)="hover.set(n)"
        (click)="value.set(n === value() ? 0 : n)"
      >
        <ng-icon name="lucideStar" size="20" [class]="n <= (hover() || value()) ? '[&_svg]:fill-current' : ''" />
      </button>
    }
    @if (count() !== undefined) {
      <span class="text-muted-foreground ml-1 text-sm">{{ value().toFixed(1) }} ({{ count() }})</span>
    }
  `,
})
export class RatingComponent {
  readonly value = model(0)
  readonly max = input(5)
  readonly readonly = input(false)
  readonly label = input('Rating')
  /** When set, shows "4.0 (count)" after the stars. */
  readonly count = input<number>()
  protected readonly hover = signal(0)
  protected stars() {
    return Array.from({ length: this.max() }, (_, i) => i + 1)
  }
}
