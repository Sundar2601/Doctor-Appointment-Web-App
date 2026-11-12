import { ChangeDetectionStrategy, Component, input } from '@angular/core'

export interface TimelineItem {
  title: string
  description?: string
  time?: string
}

/** Vertical event timeline. */
@Component({
  selector: 'app-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', role: 'list' },
  template: `
    @for (it of items(); track $index; let last = $last) {
      <div class="flex gap-4" role="listitem">
        <div class="flex w-3 shrink-0 flex-col items-center">
          <span class="bg-primary size-3 shrink-0 rounded-full"></span>
          @if (!last) {
            <span class="bg-border w-px flex-1"></span>
          }
        </div>
        <div class="flex min-w-0 flex-1 flex-col gap-0.5" [class.pb-4]="!last">
          <div class="flex items-start justify-between gap-2">
            <p class="text-sm font-medium">{{ it.title }}</p>
            @if (it.time) {
              <p class="text-muted-foreground text-xs">{{ it.time }}</p>
            }
          </div>
          @if (it.description) {
            <p class="text-muted-foreground text-sm">{{ it.description }}</p>
          }
        </div>
      </div>
    }
  `,
})
export class TimelineComponent {
  readonly items = input.required<TimelineItem[]>()
}
