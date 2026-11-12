import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCheck, lucideLoaderCircle } from '@ng-icons/lucide'

export type QueueItemStatus = 'running' | 'done' | 'pending'
export interface QueueItem {
  label: string
  status: QueueItemStatus
}

/** Queue of agent steps: running and pending items versus completed ones. */
@Component({
  selector: 'app-queue',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCheck, lucideLoaderCircle })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <ul class="flex flex-col items-start gap-2" aria-label="Queue">
      @for (i of items(); track i.label) {
        <li class="bg-card flex items-center gap-2 rounded-lg border px-3 py-2 text-sm" [class.text-muted-foreground]="i.status === 'done'">
          @if (i.status === 'done') {
            <ng-icon name="lucideCheck" size="16" aria-hidden="true" />
          } @else {
            <ng-icon name="lucideLoaderCircle" size="16" [class.animate-spin]="i.status === 'running'" aria-hidden="true" />
          }
          {{ i.label }}
          <span class="sr-only">{{ i.status === 'done' ? '(done)' : i.status === 'running' ? '(running)' : '(queued)' }}</span>
        </li>
      }
    </ul>
  `,
})
export class QueueComponent {
  readonly items = input<QueueItem[]>([])
}
