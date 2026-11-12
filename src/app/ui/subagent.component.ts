import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideSparkles } from '@ng-icons/lucide'
import { BadgeComponent, type BadgeTone } from './badge.component'

export type SubagentStatus = 'running' | 'done' | 'error'
const STATUS: Record<SubagentStatus, { label: string; tone: BadgeTone }> = {
  running: { label: 'Running', tone: 'info' },
  done: { label: 'Done', tone: 'success' },
  error: { label: 'Failed', tone: 'danger' },
}

/** A subagent run: name, status and its result summary. */
@Component({
  selector: 'app-subagent',
  imports: [NgIcon, BadgeComponent],
  viewProviders: [provideIcons({ lucideSparkles })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': '"Subagent " + name()' },
  template: `
    <div class="flex items-center justify-between gap-3">
      <span class="flex items-center gap-2 text-sm font-semibold"
        ><ng-icon name="lucideSparkles" size="16" aria-hidden="true" />{{ name() }}</span
      >
      <app-badge [tone]="badge().tone">{{ badge().label }}</app-badge>
    </div>
    @if (result()) {
      <p class="mt-3 text-sm">{{ result() }}</p>
    }
  `,
})
export class SubagentComponent {
  readonly name = input.required<string>()
  readonly state = input<SubagentStatus>('done')
  readonly result = input<string>()
  protected readonly badge = computed(() => STATUS[this.state()])
}
