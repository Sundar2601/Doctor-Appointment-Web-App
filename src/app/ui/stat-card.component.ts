import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideTrendingDown, lucideTrendingUp } from '@ng-icons/lucide'

/** KPI tile: label, big value, optional delta. */
@Component({
  selector: 'app-stat-card',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideTrendingDown, lucideTrendingUp })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground flex flex-col gap-1 rounded-xl border p-4' },
  template: `
    <p class="text-muted-foreground text-sm">{{ label() }}</p>
    <p class="text-2xl font-semibold">{{ value() }}</p>
    @if (delta()) {
      <p class="text-muted-foreground flex items-center gap-1 text-xs">
        <ng-icon [name]="trend() === 'down' ? 'lucideTrendingDown' : 'lucideTrendingUp'" size="14" />
        <span class="text-foreground font-medium">{{ delta() }}</span>
        @if (hint()) { <span>{{ hint() }}</span> }
      </p>
    }
  `,
})
export class StatCardComponent {
  readonly label = input.required<string>()
  readonly value = input.required<string | number>()
  readonly delta = input<string>()
  readonly trend = input<'up' | 'down'>('up')
  readonly hint = input<string>()
}
