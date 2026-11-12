import { ChangeDetectionStrategy, Component, computed, effect, input, model, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide'

const sameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())

/** Month grid date picker. Two-way: `[(value)]`; optional `min` / `max` disable days outside the range. */
@Component({
  selector: 'app-calendar',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-popover text-popover-foreground inline-flex w-fit flex-col gap-2 rounded-md border p-3' },
  template: `
    <div class="flex h-8 w-56 items-center justify-between">
      <button
        type="button"
        class="border-input hover:bg-accent inline-flex size-7 items-center justify-center rounded-md border"
        aria-label="Previous month"
        (click)="shift(-1)"
      >
        <ng-icon name="lucideChevronLeft" size="16" />
      </button>
      <span class="text-sm font-medium" aria-live="polite">{{ title() }}</span>
      <button
        type="button"
        class="border-input hover:bg-accent inline-flex size-7 items-center justify-center rounded-md border"
        aria-label="Next month"
        (click)="shift(1)"
      >
        <ng-icon name="lucideChevronRight" size="16" />
      </button>
    </div>
    <div class="grid grid-cols-7 gap-y-2" role="grid" [attr.aria-label]="title()">
      @for (d of weekdays; track d) {
        <div class="text-muted-foreground flex h-7 w-8 items-center justify-center text-xs" role="columnheader">{{ d }}</div>
      }
      @for (c of cells(); track c.date.getTime()) {
        <button
          type="button"
          role="gridcell"
          class="focus-visible:ring-ring/50 flex size-8 items-center justify-center rounded-md text-sm focus-visible:ring-[3px] focus-visible:outline-none"
          [class]="c.selected ? 'bg-primary text-primary-foreground' : c.today ? 'bg-accent text-accent-foreground' : 'hover:bg-accent'"
          [class.opacity-50]="c.outside || c.disabled"
          [class.cursor-not-allowed]="c.disabled"
          [disabled]="c.disabled"
          [attr.aria-selected]="c.selected"
          [attr.aria-current]="c.today ? 'date' : null"
          (click)="pick(c.date)"
        >
          {{ c.date.getDate() }}
        </button>
      }
    </div>
  `,
})
export class CalendarComponent {
  readonly value = model<Date | null>(null)
  readonly min = input<Date | null>(null)
  readonly max = input<Date | null>(null)
  protected readonly weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  private readonly view = signal(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
  constructor() {
    // Show the month of the selected date whenever it is set from outside.
    effect(() => {
      const v = this.value()
      if (v) this.view.set(new Date(v.getFullYear(), v.getMonth(), 1))
    })
  }
  protected readonly title = computed(() => this.view().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }))
  protected readonly cells = computed(() => {
    const v = this.view()
    const start = new Date(v.getFullYear(), v.getMonth(), 1 - v.getDay())
    const today = new Date()
    const sel = this.value()
    const min = this.min()
    const max = this.max()
    const weeks = Math.ceil((v.getDay() + new Date(v.getFullYear(), v.getMonth() + 1, 0).getDate()) / 7)
    return Array.from({ length: weeks * 7 }, (_, i) => {
      const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
      const disabled = (!!min && date < startOfDay(min)) || (!!max && date > startOfDay(max))
      return {
        date,
        outside: date.getMonth() !== v.getMonth(),
        today: sameDay(date, today),
        selected: !!sel && sameDay(date, sel),
        disabled,
      }
    })
  })
  protected shift(n: number) {
    const v = this.view()
    this.view.set(new Date(v.getFullYear(), v.getMonth() + n, 1))
  }
  protected pick(d: Date) {
    this.value.set(d)
    if (d.getMonth() !== this.view().getMonth()) this.view.set(new Date(d.getFullYear(), d.getMonth(), 1))
  }
}
