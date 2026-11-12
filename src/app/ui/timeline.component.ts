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
      <div class="flex gap-3" role="listitem">
        <div class="flex flex-col items-center">
          <span class="bg-primary mt-1.5 size-2.5 shrink-0 rounded-full"></span>
          @if (!last) { <span class="bg-border w-px flex-1"></span> }
        </div>
        <div class="grid gap-0.5 pb-6" [class.pb-0]="last">
          <p class="text-sm font-medium">{{ it.title }}</p>
          @if (it.description) { <p class="text-muted-foreground text-sm">{{ it.description }}</p> }
          @if (it.time) { <p class="text-muted-foreground text-xs">{{ it.time }}</p> }
        </div>
      </div>
    }
  `,
})
export class TimelineComponent {
  readonly items = input.required<TimelineItem[]>()
}
