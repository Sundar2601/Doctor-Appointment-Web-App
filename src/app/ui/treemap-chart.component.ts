import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, seriesColor, squarify } from './chart-extended-utils'
import type { TreemapInput } from './chart-extended-utils'

export type TreemapDatum = TreemapInput

/** Part-to-whole across categories with nested size (squarified layout). */
@Component({
  selector: 'app-treemap-chart',
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
      @for (r of rects(); track r.label) {
        <rect [attr.x]="r.x" [attr.y]="r.y" [attr.width]="r.w" [attr.height]="r.h" rx="4" [attr.fill]="r.color" />
        @if (r.w > r.label.length * 6 + 16 && r.h > 20) {
          <text [attr.x]="r.x + 8" [attr.y]="r.y + 16" font-size="10" fill="var(--primary-foreground, #fff)">{{ r.label }}</text>
        }
      }
    </svg>
  `,
})
export class TreemapChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  readonly data = input.required<readonly TreemapDatum[]>()

  protected readonly rects = computed(() => {
    const gap = 2
    return squarify(this.data(), 300, 150).map((r, i) => ({
      label: r.label,
      x: r.x + gap / 2,
      y: r.y + gap / 2,
      w: Math.max(0, r.w - gap),
      h: Math.max(0, r.h - gap),
      color: seriesColor(i),
    }))
  })
  protected readonly ariaLabel = computed(
    () =>
      `${this.title() ?? 'Treemap'}: ${this.data()
        .map((d) => `${d.label} ${d.value}`)
        .join(', ')}`,
  )
}
