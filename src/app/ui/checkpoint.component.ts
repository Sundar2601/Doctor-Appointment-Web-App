import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideRotateCw } from '@ng-icons/lucide'

/** Restore-point marker in a conversation. Emits `restore` when clicked. */
@Component({
  selector: 'app-checkpoint',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideRotateCw })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'text-muted-foreground flex items-center gap-3 text-sm', role: 'separator', '[attr.aria-label]': 'label()' },
  template: `
    <span class="bg-border h-px flex-1"></span>
    <button
      type="button"
      class="hover:text-foreground focus-visible:ring-ring/50 inline-flex items-center gap-2 rounded-md px-2 py-1 focus-visible:ring-[3px] focus-visible:outline-none"
      [attr.aria-label]="'Restore ' + label()"
      (click)="restore.emit()"
    >
      <ng-icon name="lucideRotateCw" size="16" aria-hidden="true" />{{ label() }}
    </button>
    <span class="bg-border h-px flex-1"></span>
  `,
})
export class CheckpointComponent {
  readonly label = input('Checkpoint · Restore')
  readonly restore = output<void>()
}
