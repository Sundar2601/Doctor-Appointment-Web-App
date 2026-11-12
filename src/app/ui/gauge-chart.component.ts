import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { CARD_CLASS, arcPath } from './chart-extended-utils'

/** Single value against a target range, drawn as a 240 degree arc. */
@Component({
  selector: 'app-gauge-chart',
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
    <svg viewBox="0 0 200 150" class="mx-auto h-auto w-full max-w-64" role="img" [attr.aria-label]="ariaLabel()">
      <path [attr.d]="track()" fill="none" stroke="var(--muted)" stroke-width="18" stroke-linecap="round" />
      @if (fraction() > 0) {
        <path [attr.d]="arc()" fill="none" stroke="var(--chart-1)" stroke-width="18" stroke-linecap="round" />
      }
      <text x="100" y="92" text-anchor="middle" font-size="28" font-weight="700" fill="var(--foreground)">{{ displayValue() }}</text>
      @if (label()) {
        <text x="100" y="116" text-anchor="middle" font-size="11" fill="var(--muted-foreground)">{{ label() }}</text>
      }
    </svg>
  `,
})
export class GaugeChartComponent {
  protected readonly cardClass = CARD_CLASS
  readonly title = input<string>()
  readonly description = input<string>()
  readonly value = input.required<number>()
  readonly min = input(0)
  readonly max = input(100)
  readonly unit = input('%')
  /** Caption under the value, e.g. "of quarterly target". */
  readonly label = input<string>()

  private readonly start = -120
  private readonly end = 120
  protected readonly fraction = computed(() => {
    const f = (this.value() - this.min()) / (this.max() - this.min() || 1)
    return Math.min(1, Math.max(0, f))
  })
  protected readonly track = computed(() => arcPath(100, 90, 70, this.start, this.end))
  protected readonly arc = computed(() => arcPath(100, 90, 70, this.start, this.start + (this.end - this.start) * this.fraction()))
  protected readonly displayValue = computed(() => `${this.value()}${this.unit()}`)
  protected readonly ariaLabel = computed(() => `${this.title() ?? 'Gauge'}: ${this.displayValue()} ${this.label() ?? ''}`.trim())
}
