import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideTerminal } from '@ng-icons/lucide'
import { BadgeComponent, type BadgeTone } from './badge.component'

export type ToolCallStatus = 'pending' | 'running' | 'completed' | 'error'
const STATUS: Record<ToolCallStatus, { label: string; tone: BadgeTone }> = {
  pending: { label: 'Pending', tone: 'neutral' },
  running: { label: 'Running', tone: 'info' },
  completed: { label: 'Completed', tone: 'success' },
  error: { label: 'Error', tone: 'danger' },
}

/** Agent tool call: tool name, status, input parameters and result. */
@Component({
  selector: 'app-tool-call',
  imports: [NgIcon, BadgeComponent],
  viewProviders: [provideIcons({ lucideTerminal })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': '"Tool call " + name()' },
  template: `
    <div class="flex items-center justify-between gap-3">
      <span class="flex items-center gap-2 font-mono text-sm"
        ><ng-icon name="lucideTerminal" size="16" aria-hidden="true" />{{ name() }}</span
      >
      <app-badge [tone]="status().tone">{{ status().label }}</app-badge>
    </div>
    @if (parameters()) {
      <p class="text-muted-foreground mt-4 mb-2 text-xs font-medium">Parameters</p>
      <pre class="bg-muted overflow-x-auto rounded-md p-3 font-mono text-xs">{{ parameters() }}</pre>
    }
    @if (result()) {
      <p class="text-muted-foreground mt-3 mb-2 text-xs font-medium">{{ state() === 'error' ? 'Error' : 'Result' }}</p>
      <pre class="bg-muted overflow-x-auto rounded-md p-3 font-mono text-xs" [class.text-text-destructive]="state() === 'error'">{{
        result()
      }}</pre>
    }
  `,
})
export class ToolCallComponent {
  readonly name = input.required<string>()
  readonly state = input<ToolCallStatus>('completed')
  readonly parameters = input<string>()
  readonly result = input<string>()
  protected readonly status = computed(() => STATUS[this.state()])
}
