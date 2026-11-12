import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ChartFrameComponent } from './chart-frame.component'
import { ChartLegendComponent } from './chart-legend.component'
import { type ChartSlice, arcPath, paletteColor } from './chart-utils'

interface Wedge {
  d: string
  color: string
  tip: string
}

const CENTER = 100
const OUTER = 96

function layoutWedges(data: ChartSlice[], innerRadius: number): Wedge[] {
  const total = data.reduce((sum, s) => sum + Math.max(s.value, 0), 0)
  if (total <= 0) return []
  let angle = 0
  return data.map((slice, i) => {
    const sweep = (Math.max(slice.value, 0) / total) * 360
    const wedge = {
      d: arcPath(CENTER, CENTER, OUTER, innerRadius, angle, angle + sweep),
      color: paletteColor(slice.color, i),
      tip: `${slice.label}: ${slice.value}`,
    }
    angle += sweep
    return wedge
  })
}

/** Pie chart; give `innerRadius` (0 to 96) for a donut and `centerLabel` for text in the hole. */
@Component({
  selector: 'app-pie-chart',
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
      <svg viewBox="0 0 200 200" class="mx-auto block h-auto w-full max-w-[220px]" role="img" [attr.aria-label]="ariaLabel()">
        @for (wedge of wedges(); track $index) {
          <path [attr.d]="wedge.d" [attr.fill]="wedge.color" stroke="var(--card)" stroke-width="3" stroke-linejoin="round">
            <title>{{ wedge.tip }}</title>
          </path>
        }
        @if (centerLabel()) {
          <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" font-size="28" font-weight="700" fill="currentColor">
            {{ centerLabel() }}
          </text>
          @if (centerSubLabel()) {
            <text x="100" y="124" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="var(--muted-foreground)">
              {{ centerSubLabel() }}
            </text>
          }
        }
      </svg>
      @if (legend()) {
        <app-chart-legend [items]="legendItems()" />
      }
    </app-chart-frame>
  `,
})
export class PieChartComponent {
  readonly data = input.required<ChartSlice[]>()
  readonly innerRadius = input(0)
  readonly centerLabel = input<string>()
  readonly centerSubLabel = input<string>()
  readonly legend = input(false)
  readonly title = input<string>()
  readonly description = input<string>()
  readonly footerTitle = input<string>()
  readonly footerNote = input<string>()
  readonly ariaLabel = input('Pie chart')

  protected readonly wedges = computed(() => layoutWedges(this.data(), this.innerRadius()))
  protected readonly legendItems = computed(() => this.data().map((s, i) => ({ label: s.label, color: paletteColor(s.color, i) })))
}
