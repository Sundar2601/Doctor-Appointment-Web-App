import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, linearScale, seriesColor } from './chart-extended-utils'

export interface ScatterPoint {
  x: number
  y: number
  /** Index of the colour group (0-4). */
  group?: number
}

/** Relationship between two measures, coloured by group. */
@Component({
  selector: 'app-scatter-chart',
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
      @for (p of dots(); track $index) {
        <circle [attr.cx]="p.x" [attr.cy]="p.y" r="4" [attr.fill]="p.color" />
      }
    </svg>
  `,
})
export class ScatterChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  readonly data = input.required<readonly ScatterPoint[]>()

  protected readonly grid = [20, 70, 120]
  protected readonly dots = computed(() => {
    const d = this.data()
    const xs = d.map((p) => p.x)
    const ys = d.map((p) => p.y)
    const sx = linearScale(Math.min(...xs), Math.max(...xs), 8, 292)
    const sy = linearScale(Math.min(...ys), Math.max(...ys), 135, 12)
    return d.map((p) => ({ x: sx(p.x), y: sy(p.y), color: seriesColor(p.group ?? 0) }))
  })
  protected readonly ariaLabel = computed(() => `${this.title() ?? 'Scatter chart'}: ${this.data().length} points`)
}
