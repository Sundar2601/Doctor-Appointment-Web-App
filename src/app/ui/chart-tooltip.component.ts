import { ChangeDetectionStrategy, Component, input } from '@angular/core'

export interface ChartTooltipItem {
  label: string
  value: string | number
  color: string
}

/** Floating tooltip card: heading plus a dot, label and value per series. */
@Component({
  selector: 'app-chart-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-popover text-popover-foreground inline-flex min-w-36 flex-col gap-2 rounded-lg border p-3 text-sm shadow-md' },
  template: `
    @if (title()) {
      <p class="font-medium">{{ title() }}</p>
    }
    @for (item of items(); track item.label) {
      <div class="flex items-center gap-2">
        <span class="size-2.5 shrink-0 rounded-full" [style.background]="item.color"></span>
        <span class="text-muted-foreground">{{ item.label }}</span>
        <span class="ml-auto pl-4 font-medium tabular-nums">{{ item.value }}</span>
      </div>
    }
  `,
})
export class ChartTooltipComponent {
  readonly title = input<string>()
  readonly items = input.required<ChartTooltipItem[]>()
}
