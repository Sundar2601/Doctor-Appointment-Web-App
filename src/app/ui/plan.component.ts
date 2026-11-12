import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCircle, lucideCircleCheck } from '@ng-icons/lucide'
import { BadgeComponent } from './badge.component'
import { ProgressComponent } from './progress.component'

export interface PlanStep {
  label: string
  done?: boolean
}

/** Agent plan: title, "n of m" badge, progress bar and a checklist of steps. */
@Component({
  selector: 'app-plan',
  imports: [NgIcon, BadgeComponent, ProgressComponent],
  viewProviders: [provideIcons({ lucideCircle, lucideCircleCheck })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': '"Plan: " + title()' },
  template: `
    <div class="flex items-center justify-between gap-3">
      <h3 class="text-sm font-semibold">{{ title() }}</h3>
      <app-badge tone="outline">{{ doneCount() }} of {{ steps().length }}</app-badge>
    </div>
    <app-progress class="mt-3 h-1.5" [value]="percent()" [attr.aria-label]="'Plan progress'" />
    <ul class="mt-4 grid gap-3">
      @for (s of steps(); track s.label) {
        <li class="flex items-center gap-2 text-sm" [class.text-muted-foreground]="s.done">
          <span class="inline-flex" [class]="s.done ? 'text-success' : 'text-muted-foreground'"
            ><ng-icon [name]="s.done ? 'lucideCircleCheck' : 'lucideCircle'" size="16" aria-hidden="true"
          /></span>
          {{ s.label }}
          <span class="sr-only">{{ s.done ? '(done)' : '(to do)' }}</span>
        </li>
      }
    </ul>
  `,
})
export class PlanComponent {
  readonly title = input.required<string>()
  readonly steps = input<PlanStep[]>([])
  protected readonly doneCount = computed(() => this.steps().filter((s) => s.done).length)
  protected readonly percent = computed(() => (this.steps().length ? (this.doneCount() / this.steps().length) * 100 : 0))
}
