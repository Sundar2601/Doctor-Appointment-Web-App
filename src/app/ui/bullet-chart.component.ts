import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, linearScale } from './chart-extended-utils'

export interface BulletDatum {
  label: string
  value: number
  target: number
  /** Ascending upper bounds of the qualitative ranges (poor, fair, good). */
  ranges: readonly [number, number, number]
}

/** Actual versus target against qualitative ranges. */
@Component({
  selector: 'app-bullet-chart',
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
    <svg [attr.viewBox]="'0 0 300 ' + height()" class="h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
      @for (r of rows(); track r.label) {
        <g>
          <title>{{ r.label }}</title>
          @for (b of r.bands; track $index) {
            <rect [attr.x]="b.x" [attr.y]="r.y" [attr.width]="b.w" height="26" fill="var(--foreground)" [attr.fill-opacity]="b.opacity" />
          }
          <rect x="0" [attr.y]="r.y + 9" [attr.width]="r.barW" height="8" fill="var(--chart-1)" />
          <rect [attr.x]="r.targetX - 1.5" [attr.y]="r.y + 3" width="3" height="20" fill="var(--foreground)" />
        </g>
      }
    </svg>
  `,
})
export class BulletChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  readonly data = input.required<readonly BulletDatum[]>()

  protected readonly height = computed(() => this.data().length * 38 - 12)
  protected readonly rows = computed(() =>
    this.data().map((d, i) => {
      const x = linearScale(0, d.ranges[2], 0, 300)
      const opacity = [0.65, 0.4, 0.07]
      let prev = 0
      const bands = d.ranges.map((upper, n) => {
        const band = { x: x(prev), w: x(upper) - x(prev), opacity: opacity[n] }
        prev = upper
        return band
      })
      return { label: d.label, y: i * 38, bands, barW: x(d.value), targetX: x(d.target) }
    }),
  )
  protected readonly ariaLabel = computed(
    () =>
      `${this.title() ?? 'Bullet chart'}: ${this.data()
        .map((d) => `${d.label} ${d.value} of target ${d.target}`)
        .join(', ')}`,
  )
}
