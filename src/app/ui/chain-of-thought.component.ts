import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideFile, lucidePencil, lucideSearch } from '@ng-icons/lucide'

export interface ThoughtStep {
  label: string
  icon: 'search' | 'file' | 'edit'
  /** Active steps are dimmed until complete. */
  active?: boolean
}

/** Figma "Chain of Thought": reasoning steps with a leading icon; the in-progress step is muted. */
@Component({
  selector: 'app-chain-of-thought',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideFile, lucidePencil, lucideSearch })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <ol class="grid gap-3 text-sm" aria-label="Chain of thought">
      @for (step of steps(); track step.label) {
        <li class="flex items-center gap-3" [class.text-muted-foreground]="step.active">
          <ng-icon
            [name]="step.icon === 'search' ? 'lucideSearch' : step.icon === 'file' ? 'lucideFile' : 'lucidePencil'"
            size="16"
            aria-hidden="true"
          />
          {{ step.label }}
        </li>
      }
    </ol>
  `,
})
export class ChainOfThoughtComponent {
  readonly steps = input.required<ThoughtStep[]>()
}
