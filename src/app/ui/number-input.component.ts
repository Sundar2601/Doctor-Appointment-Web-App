import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideMinus, lucidePlus } from '@ng-icons/lucide'
import { eventNumber } from './dom-events'

/** Numeric stepper. Two-way: `[(value)]`. */
@Component({
  selector: 'app-number-input',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideMinus, lucidePlus })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'border-input bg-background focus-within:outline-ring inline-flex h-9 w-[136px] items-center overflow-hidden rounded-md border shadow-xs focus-within:outline-2 focus-within:outline-offset-1',
  },
  template: `
    <button
      type="button"
      class="hover:bg-accent inline-flex h-full w-9 items-center justify-center disabled:opacity-50"
      aria-label="Decrease"
      [disabled]="disabled() || value() <= min()"
      (click)="step(-1)"
    >
      <ng-icon name="lucideMinus" size="16" />
    </button>
    <input
      class="h-full w-16 min-w-0 bg-transparent text-center text-sm outline-none [appearance:textfield]"
      type="number"
      inputmode="numeric"
      [attr.aria-label]="label()"
      [min]="min()"
      [max]="max()"
      [step]="stepBy()"
      [disabled]="disabled()"
      [value]="value()"
      (change)="set(eventNumber($event))"
    />
    <button
      type="button"
      class="hover:bg-accent inline-flex h-full w-9 items-center justify-center disabled:opacity-50"
      aria-label="Increase"
      [disabled]="disabled() || value() >= max()"
      (click)="step(1)"
    >
      <ng-icon name="lucidePlus" size="16" />
    </button>
  `,
})
export class NumberInputComponent {
  protected readonly eventNumber = eventNumber
  readonly value = model(0)
  readonly min = input(-Infinity)
  readonly max = input(Infinity)
  readonly stepBy = input(1)
  readonly disabled = input(false)
  readonly label = input('Value')
  protected step(dir: number) {
    this.set(this.value() + dir * this.stepBy())
  }
  protected set(n: number) {
    this.value.set(Number.isNaN(n) ? this.value() : Math.min(this.max(), Math.max(this.min(), n)))
  }
}
