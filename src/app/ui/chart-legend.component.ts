import { ChangeDetectionStrategy, Component, input } from '@angular/core'

export interface ChartLegendItem {
  label: string
  color: string
}

/** Row of colour dots with series names. */
@Component({
  selector: 'app-chart-legend',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-wrap items-center justify-center gap-4' },
  template: `
    @for (item of items(); track item.label) {
      <span class="text-muted-foreground inline-flex items-center gap-1.5 text-sm">
        <span class="size-2.5 rounded-full" [style.background]="item.color"></span>
        {{ item.label }}
      </span>
    }
  `,
})
export class ChartLegendComponent {
  readonly items = input.required<ChartLegendItem[]>()
}
