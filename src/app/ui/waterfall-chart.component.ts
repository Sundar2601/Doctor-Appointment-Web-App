import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, linearScale } from './chart-extended-utils'

export interface WaterfallStep {
  label: string
  /** Delta for a step; absolute value for a total. */
  value: number
  /** Marks a start or end total bar. */
  total?: boolean
}

/** How a start value becomes an end value through gains and losses. */
@Component({
  selector: 'app-waterfall-chart',
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
      @for (b of bars(); track b.label) {
        <rect [attr.x]="b.x" [attr.y]="b.y" [attr.width]="b.w" [attr.height]="b.h" rx="2" [attr.fill]="b.color" />
        <text [attr.x]="b.x + b.w / 2" y="146" text-anchor="middle" font-size="9" fill="var(--muted-foreground)">{{ b.label }}</text>
      }
    </svg>
  `,
})
export class WaterfallChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  readonly data = input.required<readonly WaterfallStep[]>()

  protected readonly bars = computed(() => {
    const d = this.data()
    let running = 0
    const spans = d.map((s) => {
      const from = s.total ? 0 : running
      const to = s.total ? s.value : running + s.value
      running = to
      return { s, lo: Math.min(from, to), hi: Math.max(from, to) }
    })
    const y = linearScale(0, Math.max(...spans.map((p) => p.hi)) || 1, 130, 8)
    const slot = 300 / d.length
    const w = slot * 0.6
    return spans.map((p, i) => ({
      label: p.s.label,
      x: i * slot + (slot - w) / 2,
      w,
      y: y(p.hi),
      h: Math.max(2, y(p.lo) - y(p.hi)),
      color: p.s.total ? 'var(--chart-1)' : p.s.value >= 0 ? 'var(--chart-2)' : 'var(--destructive)',
    }))
  })
  protected readonly ariaLabel = computed(
    () =>
      `${this.title() ?? 'Waterfall'}: ${this.data()
        .map((s) => `${s.label} ${s.value}`)
        .join(', ')}`,
  )
}
