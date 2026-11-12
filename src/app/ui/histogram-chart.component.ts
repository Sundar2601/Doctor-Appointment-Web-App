import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, histogramBins, linearScale, niceMax } from './chart-extended-utils'

/** Distribution of raw values across equal-width bins. */
@Component({
  selector: 'app-histogram-chart',
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
      @for (g of grid; track g) {
        <line x1="0" x2="300" [attr.y1]="g" [attr.y2]="g" stroke="var(--border)" />
      }
      @for (b of bars(); track $index) {
        <rect [attr.x]="b.x" [attr.y]="b.y" [attr.width]="b.w" [attr.height]="b.h" rx="1.5" fill="var(--chart-1)">
          <title>{{ b.title }}</title>
        </rect>
      }
    </svg>
  `,
})
export class HistogramChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  /** Raw values to bin. */
  readonly values = input.required<readonly number[]>()
  readonly bins = input(12)

  protected readonly grid = [20, 70, 120]
  protected readonly bars = computed(() => {
    const bins = histogramBins(this.values(), this.bins())
    const y = linearScale(0, niceMax(Math.max(...bins.map((b) => b.count), 1)), 140, 10)
    const slot = 300 / bins.length
    return bins.map((b, i) => ({
      x: i * slot + 0.5,
      w: slot - 1,
      y: y(b.count),
      h: 140 - y(b.count),
      title: `${Math.round(b.x0)}-${Math.round(b.x1)}: ${b.count}`,
    }))
  })
  protected readonly ariaLabel = computed(() => `${this.title() ?? 'Histogram'}: distribution of ${this.values().length} values`)
}
