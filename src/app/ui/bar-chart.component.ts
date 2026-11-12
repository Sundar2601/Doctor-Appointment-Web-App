import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ChartFrameComponent } from './chart-frame.component'
import { ChartLegendComponent } from './chart-legend.component'
import {
  type ChartDatum,
  type ChartLabel,
  type ChartLine,
  type ChartSeries,
  bandScale,
  horizontalGrid,
  linearScale,
  niceScale,
  seriesColor,
  stackSeries,
  ZERO_RANGE,
  valueOf,
} from './chart-utils'

interface BarRect {
  x: number
  y: number
  width: number
  height: number
  color: string
  tip: string
}

interface BarLayout {
  height: number
  grid: ChartLine[]
  bars: BarRect[]
  labels: ChartLabel[]
}

const WIDTH = 400
const LABEL_WIDTH = 48
const PAD = 8

function layoutBars(data: ChartDatum[], series: ChartSeries[], stacked: boolean, horizontal: boolean): BarLayout {
  const keys = series.map((s) => s.key)
  const stack = stackSeries(data, keys)
  const peak = data.reduce(
    (max, d, i) => Math.max(max, stacked ? (stack[stack.length - 1]?.[i]?.y1 ?? 0) : Math.max(0, ...keys.map((k) => valueOf(d, k)))),
    0,
  )
  const { max, ticks } = niceScale(peak)
  const height = horizontal ? PAD * 2 + data.length * 32 : 270
  const plotTop = PAD
  const plotBottom = horizontal ? height - PAD : 230
  const bars: BarRect[] = []
  const tip = (datum: ChartDatum, s: ChartSeries) => `${datum.label} · ${s.label}: ${valueOf(datum, s.key)}`

  if (horizontal) {
    const rows = bandScale(data.length, plotTop, plotBottom, 0.3)
    const x = linearScale(0, max, LABEL_WIDTH, WIDTH)
    data.forEach((datum, i) => {
      const inner = bandScale(stacked ? 1 : series.length, rows.start(i), rows.start(i) + rows.width, stacked ? 0 : 0.1)
      series.forEach((s, j) => {
        const range = stack[j]?.[i] ?? ZERO_RANGE
        const [from, to] = stacked ? [range.y0, range.y1] : [0, valueOf(datum, s.key)]
        bars.push({
          x: x(from),
          y: inner.start(stacked ? 0 : j),
          width: Math.max(x(to) - x(from), 0),
          height: inner.width,
          color: seriesColor(s, j),
          tip: tip(datum, s),
        })
      })
    })
    const step = (plotBottom - plotTop) / Math.max(data.length, 1)
    return {
      height,
      grid: Array.from({ length: data.length + 1 }, (_, i) => ({
        x1: LABEL_WIDTH,
        x2: WIDTH,
        y1: plotTop + i * step,
        y2: plotTop + i * step,
      })),
      bars,
      labels: data.map((d, i) => ({ x: 0, y: rows.center(i), text: d.label, anchor: 'start' })),
    }
  }

  const columns = bandScale(data.length, 0, WIDTH, 0.35)
  const y = linearScale(0, max, plotBottom, plotTop)
  data.forEach((datum, i) => {
    const inner = bandScale(stacked ? 1 : series.length, columns.start(i), columns.start(i) + columns.width, stacked ? 0 : 0.1)
    series.forEach((s, j) => {
      const range = stack[j]?.[i] ?? ZERO_RANGE
      const [from, to] = stacked ? [range.y0, range.y1] : [0, valueOf(datum, s.key)]
      bars.push({
        x: inner.start(stacked ? 0 : j),
        y: y(to),
        width: inner.width,
        height: Math.max(y(from) - y(to), 0),
        color: seriesColor(s, j),
        tip: tip(datum, s),
      })
    })
  })
  return {
    height,
    grid: horizontalGrid(ticks, y, 0, WIDTH),
    bars,
    labels: data.map((d, i) => ({ x: columns.center(i), y: 254, text: d.label, anchor: 'middle' })),
  }
}

/** Vertical or horizontal, grouped or stacked bar chart. */
@Component({
  selector: 'app-bar-chart',
  imports: [ChartFrameComponent, ChartLegendComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <app-chart-frame
      [title]="title()"
      [description]="description()"
      [footerTitle]="footerTitle()"
      [footerNote]="footerNote()"
      class="h-full"
    >
      <svg [attr.viewBox]="'0 0 400 ' + layout().height" class="block h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
        @for (line of layout().grid; track $index) {
          <line [attr.x1]="line.x1" [attr.x2]="line.x2" [attr.y1]="line.y1" [attr.y2]="line.y2" stroke="var(--border)" stroke-width="1" />
        }
        @for (bar of layout().bars; track $index) {
          <rect
            [attr.x]="bar.x"
            [attr.y]="bar.y"
            [attr.width]="bar.width"
            [attr.height]="bar.height"
            [attr.fill]="bar.color"
            [attr.rx]="stacked() ? 0 : 4"
          >
            <title>{{ bar.tip }}</title>
          </rect>
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
export class BarChartComponent {
  readonly data = input.required<ChartDatum[]>()
  readonly series = input.required<ChartSeries[]>()
  readonly orientation = input<'vertical' | 'horizontal'>('vertical')
  readonly stacked = input(false)
  readonly legend = input(false)
  readonly title = input<string>()
  readonly description = input<string>()
  readonly footerTitle = input<string>()
  readonly footerNote = input<string>()
  readonly ariaLabel = input('Bar chart')

  protected readonly layout = computed(() => layoutBars(this.data(), this.series(), this.stacked(), this.orientation() === 'horizontal'))
  protected readonly legendItems = computed(() => this.series().map((s, i) => ({ label: s.label, color: seriesColor(s, i) })))
}
