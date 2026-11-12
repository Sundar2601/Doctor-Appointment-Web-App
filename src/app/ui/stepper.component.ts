import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCheck } from '@ng-icons/lucide'

export interface Step {
  title: string
  description?: string
}

/** Horizontal step indicator. `current` is the zero-based active step. */
@Component({
  selector: 'app-stepper',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCheck })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full items-center gap-3' },
  template: `
    @for (s of steps(); track $index; let i = $index; let last = $last) {
      <div class="flex shrink-0 items-center gap-3" [attr.aria-current]="i === current() ? 'step' : null">
        <span
          class="flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium"
          [class]="i < current() ? 'bg-primary text-primary-foreground border border-primary' : i === current() ? 'bg-background text-primary border-primary border-2' : 'border text-muted-foreground'"
        >
          @if (i < current()) { <ng-icon name="lucideCheck" size="16" /> } @else { {{ i + 1 }} }
        </span>
        <span class="flex flex-col whitespace-nowrap" [class.text-muted-foreground]="i > current()">
          <span class="text-sm font-medium" [class.text-foreground]="i <= current()">{{ s.title }}</span>
          @if (s.description) { <span class="text-muted-foreground text-xs">{{ s.description }}</span> }
        </span>
      </div>
      @if (!last) { <div class="h-px min-w-px flex-1" [class]="i < current() ? 'bg-primary' : 'bg-border'"></div> }
    }
  `,
})
export class StepperComponent {
  readonly steps = input.required<Step[]>()
  readonly current = input(0)
}
