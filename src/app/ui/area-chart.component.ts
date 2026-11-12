import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ChartFrameComponent } from './chart-frame.component'
import { ChartLegendComponent } from './chart-legend.component'
import {
  type ChartDatum,
  type ChartLabel,
  type ChartLine,
  type ChartPoint,
  type ChartSeries,
  areaPath,
  horizontalGrid,
  linePath,
  linearScale,
  niceScale,
  seriesColor,
  stackSeries,
  valueOf,
} from './chart-utils'

interface AreaShape {
  fill: string
  edge: string
  color: string
}

interface AreaLayout {
  grid: ChartLine[]
  areas: AreaShape[]
  labels: ChartLabel[]
}

const WIDTH = 400
const TOP = 8
const BOTTOM = 230

function layoutAreas(data: ChartDatum[], series: ChartSeries[], stacked: boolean): AreaLayout {
  const keys = series.map((s) => s.key)
  const stack = stackSeries(data, keys)
  const peak = stacked
    ? Math.max(0, ...(stack[stack.length - 1] ?? []).map((v) => v.y1))
    : Math.max(0, ...data.flatMap((d) => keys.map((k) => valueOf(d, k))))
  const { max, ticks } = niceScale(peak)
  const y = linearScale(0, max, BOTTOM, TOP)
  const x = linearScale(0, Math.max(data.length - 1, 1), 0, WIDTH)
  const edge = (values: number[]): ChartPoint[] => values.map((v, i) => ({ x: x(i), y: y(v) }))

  return {
    grid: horizontalGrid(ticks, y, 0, WIDTH),
    // Draw the topmost stacked series first so lower series paint over it.
    areas: series
      .map((s, j) => {
        const top = edge(stacked ? (stack[j] ?? []).map((v) => v.y1) : data.map((d) => valueOf(d, s.key)))
        const bottom = edge(stacked ? (stack[j] ?? []).map((v) => v.y0) : data.map(() => 0))
        return { fill: areaPath(top, bottom), edge: linePath(top), color: seriesColor(s, j) }
      })
      .reverse(),
    labels: data.map((d, i) => ({
      x: x(i),
      y: 254,
      text: d.label,
      anchor: i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle',
    })),
  }
}

/** Overlapping or stacked area chart. */
@Component({
  selector: 'app-area-chart',
  imports: [ChartFrameComponent, ChartLegendComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <app-chart-frame [title]="title()" [description]="description()" [footerTitle]="footerTitle()" [footerNote]="footerNote()">
      <svg viewBox="0 0 400 270" class="block h-auto w-full" role="img" [attr.aria-label]="ariaLabel()">
        @for (line of layout().grid; track $index) {
          <line [attr.x1]="line.x1" [attr.x2]="line.x2" [attr.y1]="line.y1" [attr.y2]="line.y2" stroke="var(--border)" stroke-width="1" />
        }
        @for (area of layout().areas; track $index) {
          <path [attr.d]="area.fill" [attr.fill]="area.color" [attr.fill-opacity]="stacked() ? 1 : 0.4" />
          @if (!stacked()) {
            <path [attr.d]="area.edge" fill="none" [attr.stroke]="area.color" stroke-width="2" stroke-linejoin="round" />
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
export class AreaChartComponent {
  readonly data = input.required<ChartDatum[]>()
  readonly series = input.required<ChartSeries[]>()
  readonly stacked = input(false)
  readonly legend = input(false)
  readonly title = input<string>()
  readonly description = input<string>()
  readonly footerTitle = input<string>()
  readonly footerNote = input<string>()
  readonly ariaLabel = input('Area chart')

  protected readonly layout = computed(() => layoutAreas(this.data(), this.series(), this.stacked()))
  protected readonly legendItems = computed(() => this.series().map((s, i) => ({ label: s.label, color: seriesColor(s, i) })))
}
