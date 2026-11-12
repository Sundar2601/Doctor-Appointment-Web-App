import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS } from './chart-extended-utils'

/** Intensity across two categories; each cell is the series colour at an opacity scaled by value. */
@Component({
  selector: 'app-heatmap-chart',
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
      @for (c of cells(); track c.key) {
        <rect
          [attr.x]="c.x"
          [attr.y]="c.y"
          [attr.width]="c.w"
          [attr.height]="c.h"
          rx="3"
          fill="var(--chart-1)"
          [attr.fill-opacity]="c.opacity"
        >
          <title>{{ c.title }}</title>
        </rect>
      }
    </svg>
  `,
})
export class HeatmapChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  /** Matrix of values: rows x columns. */
  readonly values = input.required<readonly (readonly number[])[]>()
  readonly rowLabels = input<readonly string[]>([])
  readonly columnLabels = input<readonly string[]>([])

  protected readonly cells = computed(() => {
    const rows = this.values()
    const cols = Math.max(...rows.map((r) => r.length), 1)
    const flat = rows.flat()
    const min = Math.min(...flat)
    const max = Math.max(...flat)
    const gap = 4
    const w = (300 - gap * (cols - 1)) / cols
    const h = (150 - gap * (rows.length - 1)) / rows.length
    return rows.flatMap((row, r) =>
      row.map((v, c) => ({
        key: `${r}-${c}`,
        x: c * (w + gap),
        y: r * (h + gap),
        w,
        h,
        opacity: 0.12 + 0.88 * ((v - min) / (max - min || 1)),
        title: `${this.rowLabels()[r] ?? 'Row ' + (r + 1)}, ${this.columnLabels()[c] ?? 'Column ' + (c + 1)}: ${v}`,
      })),
    )
  })
  protected readonly ariaLabel = computed(() => `${this.title() ?? 'Heatmap'}: ${this.values().length} rows of intensity values`)
}
