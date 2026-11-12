import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ChartFrameComponent } from './chart-frame.component'
import { ChartLegendComponent } from './chart-legend.component'
import {
  type ChartDatum,
  type ChartLabel,
  type ChartLine,
  type ChartPoint,
  type ChartSeries,
  bandScale,
  horizontalGrid,
  linePath,
  linearScale,
  niceScale,
  seriesColor,
  valueOf,
} from './chart-utils'

interface LineShape {
  d: string
  color: string
  points: (ChartPoint & { tip: string })[]
}

interface LineLayout {
  grid: ChartLine[]
  lines: LineShape[]
  labels: ChartLabel[]
}

const WIDTH = 400
const TOP = 8
const BOTTOM = 230

function layoutLines(data: ChartDatum[], series: ChartSeries[]): LineLayout {
  const peak = Math.max(0, ...data.flatMap((d) => series.map((s) => valueOf(d, s.key))))
  const { max, ticks } = niceScale(peak)
  const y = linearScale(0, max, BOTTOM, TOP)
  const columns = bandScale(data.length, 0, WIDTH, 0)
  return {
    grid: horizontalGrid(ticks, y, 0, WIDTH),
    lines: series.map((s, j) => {
      const points = data.map((d, i) => ({
        x: columns.center(i),
        y: y(valueOf(d, s.key)),
        tip: `${d.label} · ${s.label}: ${valueOf(d, s.key)}`,
      }))
      return { d: linePath(points), color: seriesColor(s, j), points }
    }),
    labels: data.map((d, i) => ({ x: columns.center(i), y: 254, text: d.label, anchor: 'middle' })),
  }
}

/** Multi-series line chart with optional point markers. */
@Component({
  selector: 'app-line-chart',
  imports: [ChartFrameComponent, ChartLegendComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <app-chart-frame [title]="title()" [description]="description()" [footerTitle]="footerTitle()" [footerNote]="footerNote()">
      <svg viewBox="0 0 400 270" class="block h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
        @for (line of layout().grid; track $index) {
          <line [attr.x1]="line.x1" [attr.x2]="line.x2" [attr.y1]="line.y1" [attr.y2]="line.y2" stroke="var(--border)" stroke-width="1" />
        }
        @for (shape of layout().lines; track $index) {
          <path [attr.d]="shape.d" fill="none" [attr.stroke]="shape.color" stroke-width="2" stroke-linejoin="round" />
          @if (dots()) {
            @for (p of shape.points; track $index) {
              <circle [attr.cx]="p.x" [attr.cy]="p.y" r="4" [attr.fill]="shape.color">
                <title>{{ p.tip }}</title>
              </circle>
            }
          }
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
export class LineChartComponent {
  readonly data = input.required<ChartDatum[]>()
  readonly series = input.required<ChartSeries[]>()
  readonly dots = input(true)
  readonly legend = input(false)
  readonly title = input<string>()
  readonly description = input<string>()
  readonly footerTitle = input<string>()
  readonly footerNote = input<string>()
  readonly ariaLabel = input('Line chart')

  protected readonly layout = computed(() => layoutLines(this.data(), this.series()))
  protected readonly legendItems = computed(() => this.series().map((s, i) => ({ label: s.label, color: seriesColor(s, i) })))
}
