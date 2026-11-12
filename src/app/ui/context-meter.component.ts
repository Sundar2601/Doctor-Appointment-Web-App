import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ProgressComponent } from './progress.component'

const fmt = (n: number) => (n >= 1000 ? `${Math.round(n / 1000)}K` : `${n}`)

/** Context-window usage meter. */
@Component({
  selector: 'app-context-meter',
  imports: [ProgressComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground block rounded-lg border p-4' },
  template: `
    <div class="flex items-center justify-between text-sm">
      <span class="font-medium">{{ label() }}</span>
      <span class="text-muted-foreground">{{ percent() }}%</span>
    </div>
    <app-progress class="mt-2" [value]="percent()" [attr.aria-label]="label() + ' usage'" />
    <p class="text-muted-foreground mt-3 text-xs">{{ format(used()) }} of {{ format(max()) }} tokens used</p>
  `,
})
export class ContextMeterComponent {
  readonly used = input.required<number>()
  readonly max = input.required<number>()
  readonly label = input('Context window')
  protected readonly percent = computed(() => (this.max() ? Math.min(100, Math.round((this.used() / this.max()) * 100)) : 0))
  protected readonly format = fmt
}
