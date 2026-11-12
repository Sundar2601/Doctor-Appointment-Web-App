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
  host: { class: 'flex w-full items-start' },
  template: `
    @for (s of steps(); track $index; let i = $index; let last = $last) {
      <div class="flex min-w-0 items-start" [class.flex-1]="!last" [attr.aria-current]="i === current() ? 'step' : null">
        <div class="flex flex-col items-center gap-2">
          <span
            class="flex size-8 items-center justify-center rounded-full border text-sm font-medium"
            [class]="i < current() ? 'bg-primary text-primary-foreground border-primary' : i === current() ? 'border-primary text-foreground' : 'text-muted-foreground'"
          >
            @if (i < current()) { <ng-icon name="lucideCheck" size="16" /> } @else { {{ i + 1 }} }
          </span>
          <span class="text-center text-sm font-medium" [class.text-muted-foreground]="i > current()">{{ s.title }}</span>
          @if (s.description) { <span class="text-muted-foreground -mt-1.5 text-center text-xs">{{ s.description }}</span> }
        </div>
        @if (!last) { <div class="mx-2 mt-4 h-px flex-1" [class]="i < current() ? 'bg-primary' : 'bg-border'"></div> }
      </div>
    }
  `,
})
export class StepperComponent {
  readonly steps = input.required<Step[]>()
  readonly current = input(0)
}
