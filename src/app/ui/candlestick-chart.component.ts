import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, linearScale } from './chart-extended-utils'

export interface Candle {
  label: string
  open: number
  high: number
  low: number
  close: number
}

/** Open, high, low and close per period. */
@Component({
  selector: 'app-candlestick-chart',
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
    <svg viewBox="0 0 300 130" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (c of candles(); track c.label) {
        <line [attr.x1]="c.cx" [attr.x2]="c.cx" [attr.y1]="c.yHigh" [attr.y2]="c.yLow" [attr.stroke]="c.color" stroke-width="2" />
        <rect [attr.x]="c.cx - c.w / 2" [attr.y]="c.yTop" [attr.width]="c.w" [attr.height]="c.h" rx="2" [attr.fill]="c.color">
          <title>{{ c.label }}</title>
        </rect>
      }
    </svg>
  `,
})
export class CandlestickChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  readonly data = input.required<readonly Candle[]>()

  protected readonly candles = computed(() => {
    const d = this.data()
    const y = linearScale(Math.min(...d.map((c) => c.low)), Math.max(...d.map((c) => c.high)), 124, 6)
    const slot = 300 / d.length
    return d.map((c, i) => {
      const up = c.close >= c.open
      const yTop = y(Math.max(c.open, c.close))
      return {
        label: c.label,
        cx: i * slot + slot / 2,
        w: Math.min(16, slot * 0.5),
        yHigh: y(c.high),
        yLow: y(c.low),
        yTop,
        h: Math.max(2, y(Math.min(c.open, c.close)) - yTop),
        color: up ? 'var(--success, #00a63e)' : 'var(--destructive, #e7000b)',
      }
    })
  })
  protected readonly ariaLabel = computed(() => `${this.title() ?? 'Candlestick'}: ${this.data().length} periods`)
}
