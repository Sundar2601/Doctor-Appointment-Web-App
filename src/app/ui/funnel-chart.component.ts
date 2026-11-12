import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, seriesColor } from './chart-extended-utils'

export interface FunnelStage {
  label: string
  value: number
}

/** Drop-off across sequential steps; bar widths are proportional to value. */
@Component({
  selector: 'app-funnel-chart',
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
    <svg viewBox="0 0 300 160" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (s of bars(); track s.label) {
        <rect [attr.x]="s.x" [attr.y]="s.y" [attr.width]="s.w" height="22" rx="3" [attr.fill]="s.color" />
        @if (s.w > 60) {
          <text [attr.x]="150" [attr.y]="s.y + 15" text-anchor="middle" font-size="11" fill="var(--primary-foreground, #fff)">
            {{ s.label }}
          </text>
        }
      }
    </svg>
  `,
})
export class FunnelChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  readonly data = input.required<readonly FunnelStage[]>()

  protected readonly bars = computed(() => {
    const d = this.data()
    const max = Math.max(...d.map((s) => s.value)) || 1
    return d.map((s, i) => {
      const w = Math.max(24, (s.value / max) * 300)
      return { label: s.label, w, x: (300 - w) / 2, y: i * 28, color: seriesColor(i) }
    })
  })
  protected readonly ariaLabel = computed(
    () =>
      `${this.title() ?? 'Funnel'}: ${this.data()
        .map((s) => `${s.label} ${s.value}`)
        .join(', ')}`,
  )
}
