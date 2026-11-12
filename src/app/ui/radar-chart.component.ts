import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ChartFrameComponent } from './chart-frame.component'
import { ChartLegendComponent } from './chart-legend.component'
import {
  type ChartDatum,
  type ChartLabel,
  type ChartSeries,
  linearScale,
  niceScale,
  pointsAttr,
  polarToCartesian,
  seriesColor,
  valueOf,
} from './chart-utils'

interface RadarShape {
  points: string
  color: string
}

interface RadarLayout {
  rings: string[]
  shapes: RadarShape[]
  labels: ChartLabel[]
}

const CX = 150
const CY = 125
const RADIUS = 90
const LEVELS = 4

function layoutRadar(data: ChartDatum[], series: ChartSeries[], maxInput: number | undefined): RadarLayout {
  const peak = Math.max(0, ...data.flatMap((d) => series.map((s) => valueOf(d, s.key))))
  const max = maxInput ?? niceScale(peak, LEVELS).max
  const radius = linearScale(0, max, 0, RADIUS)
  const angleOf = (i: number) => (i * 360) / Math.max(data.length, 1)
  const polygon = (r: (i: number) => number) => pointsAttr(data.map((_, i) => polarToCartesian(CX, CY, r(i), angleOf(i))))

  return {
    rings: Array.from({ length: LEVELS }, (_, l) => polygon(() => (RADIUS * (l + 1)) / LEVELS)),
    shapes: series.map((s, j) => ({ points: polygon((i) => radius(data[i] ? valueOf(data[i], s.key) : 0)), color: seriesColor(s, j) })),
    labels: data.map((d, i) => {
      const p = polarToCartesian(CX, CY, RADIUS + 16, angleOf(i))
      const dx = p.x - CX
      return { x: p.x, y: p.y, text: d.label, anchor: Math.abs(dx) < 4 ? 'middle' : dx > 0 ? 'start' : 'end' }
    }),
  }
}

/** Radar (spider) chart with one polygon per series. */
@Component({
  selector: 'app-radar-chart',
  imports: [ChartFrameComponent, ChartLegendComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <app-chart-frame
      align="center"
      [title]="title()"
      [description]="description()"
      [footerTitle]="footerTitle()"
      [footerNote]="footerNote()"
    >
      <svg viewBox="0 0 300 250" class="mx-auto block h-auto w-full max-w-[300px]" role="img" [attr.aria-label]="ariaLabel()">
        @for (ring of layout().rings; track $index) {
          <polygon [attr.points]="ring" fill="none" stroke="var(--border)" stroke-width="1" />
        }
        @for (shape of layout().shapes; track $index) {
          <polygon
            [attr.points]="shape.points"
            [attr.fill]="shape.color"
            fill-opacity="0.7"
            [attr.stroke]="shape.color"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        }
        @for (label of layout().labels; track $index) {
          <text
            [attr.x]="label.x"
            [attr.y]="label.y"
            [attr.text-anchor]="label.anchor"
            dominant-baseline="middle"
            font-size="12"
            fill="var(--muted-foreground)"
          >
            {{ label.text }}
          </text>
        }
      </svg>
      @if (legend()) {
        <app-chart-legend [items]="legendItems()" />
      }
    </app-chart-frame>
  `,
})
export class RadarChartComponent {
  readonly data = input.required<ChartDatum[]>()
  readonly series = input.required<ChartSeries[]>()
  /** Value at the outer ring; defaults to a rounded-up maximum of the data. */
  readonly max = input<number>()
  readonly legend = input(false)
  readonly title = input<string>()
  readonly description = input<string>()
  readonly footerTitle = input<string>()
  readonly footerNote = input<string>()
  readonly ariaLabel = input('Radar chart')

  protected readonly layout = computed(() => layoutRadar(this.data(), this.series(), this.max()))
  protected readonly legendItems = computed(() => this.series().map((s, i) => ({ label: s.label, color: seriesColor(s, i) })))
}
