import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, linePath, linearScale } from './chart-extended-utils'

/** Inline trend line, optionally inside a stat card with a headline value. */
@Component({
  selector: 'app-sparkline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'hostClass()' },
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
    @if (value()) {
      <div class="flex flex-col gap-1">
        <p class="text-3xl font-bold">{{ value() }}</p>
        @if (delta()) {
          <p class="text-xs font-medium" [class]="trend() === 'down' ? 'text-destructive' : 'text-green-600'">{{ delta() }}</p>
        }
      </div>
    }
    <svg [attr.viewBox]="'0 0 ' + width() + ' ' + height()" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      <path [attr.d]="path()" fill="none" stroke="var(--chart-2)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
    </svg>
  `,
})
export class SparklineComponent {
  readonly title = input<string>()
  readonly description = input<string>()
  readonly values = input.required<readonly number[]>()
  /** Headline value, e.g. "$24.5k". */
  readonly value = input<string>()
  readonly delta = input<string>()
  readonly trend = input<'up' | 'down'>('up')
  readonly width = input(260)
  readonly height = input(100)
  /** Render only the line, without the card chrome. */
  readonly bare = input(false)

  protected readonly hostClass = computed(() => (this.bare() ? 'block' : CARD_CLASS))
  protected readonly path = computed(() => {
    const v = this.values()
    const x = linearScale(0, Math.max(v.length - 1, 1), 2, this.width() - 2)
    const y = linearScale(Math.min(...v), Math.max(...v), this.height() - 4, 4)
    return linePath(v.map((n, i) => ({ x: x(i), y: y(n) })))
  })
  protected readonly ariaLabel = computed(() => {
    const v = this.values()
    return `${this.title() ?? 'Trend'}: from ${v[0]} to ${v[v.length - 1]}`
  })
}
