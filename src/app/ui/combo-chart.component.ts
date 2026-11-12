import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, linePath, linearScale, niceMax } from './chart-extended-utils'

export interface ComboDatum {
  label: string
  /** Bar value. */
  value: number
  /** Line value (plotted on its own scale). */
  rate: number
}

/** Bars for volume plus a line for a rate on the same x-axis. */
@Component({
  selector: 'app-combo-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'cardClass' },
  template: `
    @if (title() || description()) {
      <div class="flex flex-col gap-1.5">
        @if (title()) {
          <h3 class="text-sm font-semibold">{{ title() }}</h3>
        }
        @if (description()) {
          <p class="text-muted-foreground text-xs">{{ description() }}</p>
        }
      </div>
    }
    <svg viewBox="0 0 300 150" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (g of grid(); track g) {
        <line x1="0" x2="300" [attr.y1]="g" [attr.y2]="g" stroke="var(--border)" />
      }
      @for (b of bars(); track b.label) {
        <rect [attr.x]="b.x" [attr.y]="b.y" [attr.width]="b.w" [attr.height]="b.h" rx="2" fill="var(--chart-2)" />
        <text [attr.x]="b.x + b.w / 2" y="146" text-anchor="middle" font-size="9" fill="var(--muted-foreground)">{{ b.label }}</text>
      }
      <path [attr.d]="line()" fill="none" stroke="var(--chart-1)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
    </svg>
  `,
})
export class ComboChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  readonly data = input.required<readonly ComboDatum[]>()

  private readonly top = 10
  private readonly base = 130
  protected readonly grid = computed(() => [this.top + 10, 70, this.base])
  protected readonly bars = computed(() => {
    const d = this.data()
    const y = linearScale(0, niceMax(Math.max(...d.map((i) => i.value))), this.base, this.top + 20)
    const slot = 300 / d.length
    const w = slot * 0.62
    return d.map((i, n) => ({ label: i.label, x: n * slot + (slot - w) / 2, w, y: y(i.value), h: this.base - y(i.value) }))
  })
  protected readonly line = computed(() => {
    const d = this.data()
    const y = linearScale(0, niceMax(Math.max(...d.map((i) => i.rate))), this.base, this.top)
    const slot = 300 / d.length
    return linePath(d.map((i, n) => ({ x: n * slot + slot / 2, y: y(i.rate) })))
  })
  protected readonly ariaLabel = computed(() => `${this.title() ?? 'Combo chart'}: ${this.data().length} bars with a trend line`)
}
