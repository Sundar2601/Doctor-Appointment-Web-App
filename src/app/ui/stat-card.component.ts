import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideArrowDown, lucideArrowUp } from '@ng-icons/lucide'

/** KPI tile: label, big value, optional delta. */
@Component({
  selector: 'app-stat-card',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideArrowDown, lucideArrowUp })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground flex flex-col gap-2 rounded-xl border p-5 shadow-sm' },
  template: `
    <div class="flex items-center justify-between gap-2">
      <p class="text-muted-foreground text-sm">{{ label() }}</p>
      @if (delta()) {
        <span class="text-foreground inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium">
          <ng-icon [name]="trend() === 'down' ? 'lucideArrowDown' : 'lucideArrowUp'" size="12" />
          {{ delta() }}
        </span>
      }
    </div>
    <p class="text-3xl font-bold">{{ value() }}</p>
    @if (hint()) { <p class="text-muted-foreground text-sm">{{ hint() }}</p> }
  `,
})
export class StatCardComponent {
  readonly label = input.required<string>()
  readonly value = input.required<string | number>()
  readonly delta = input<string>()
  readonly trend = input<'up' | 'down'>('up')
  readonly hint = input<string>()
}
