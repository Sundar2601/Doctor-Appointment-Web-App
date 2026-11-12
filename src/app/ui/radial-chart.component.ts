import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ChartFrameComponent } from './chart-frame.component'
import { ChartLegendComponent } from './chart-legend.component'
import { type ChartSlice, arcPath, paletteColor } from './chart-utils'

interface Ring {
  track: string
  value: string | null
  color: string
  tip: string
}

const CENTER = 100
const OUTER = 96
const THICKNESS = 14
const GAP = 4

function layoutRings(data: ChartSlice[], max: number): Ring[] {
  return data.map((slice, i) => {
    const outer = OUTER - i * (THICKNESS + GAP)
    const inner = Math.max(outer - THICKNESS, 0)
    const sweep = (Math.min(Math.max(slice.value, 0), max) / max) * 360
    return {
      track: arcPath(CENTER, CENTER, outer, inner, 0, 360),
      value: sweep > 0 ? arcPath(CENTER, CENTER, outer, inner, 0, sweep) : null,
      color: paletteColor(slice.color, i),
      tip: `${slice.label}: ${slice.value}`,
    }
  })
}

/** Concentric radial bars; the first item is the outermost ring. */
@Component({
  selector: 'app-radial-chart',
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
        @for (ring of rings(); track $index) {
          <path [attr.d]="ring.track" fill="var(--muted)" />
          @if (ring.value) {
            <path [attr.d]="ring.value" [attr.fill]="ring.color">
              <title>{{ ring.tip }}</title>
            </path>
          }
        }
      </svg>
      @if (legend()) {
        <app-chart-legend [items]="legendItems()" />
      }
    </app-chart-frame>
  `,
})
export class RadialChartComponent {
  readonly data = input.required<ChartSlice[]>()
  /** Value that fills a complete ring. */
  readonly max = input(100)
  readonly legend = input(false)
  readonly title = input<string>()
  readonly description = input<string>()
  readonly footerTitle = input<string>()
  readonly footerNote = input<string>()
  readonly ariaLabel = input('Radial chart')

  protected readonly rings = computed(() => layoutRings(this.data(), this.max() || 1))
  protected readonly legendItems = computed(() => this.data().map((s, i) => ({ label: s.label, color: paletteColor(s.color, i) })))
}
