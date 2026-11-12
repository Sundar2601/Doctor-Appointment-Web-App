import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCircle, lucideLoaderCircle, lucideTerminal } from '@ng-icons/lucide'

export interface TraceStep {
  label: string
  status: 'done' | 'running' | 'pending'
}

/** Figma "Trace": ordered list of agent steps with a status icon each. */
@Component({
  selector: 'app-trace',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCircle, lucideLoaderCircle, lucideTerminal })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <ol class="grid gap-3 text-sm" aria-label="Agent steps">
      @for (step of steps(); track step.label) {
        <li class="flex items-center gap-3" [attr.aria-current]="step.status === 'running' ? 'step' : null">
          <ng-icon
            [name]="step.status === 'done' ? 'lucideTerminal' : step.status === 'running' ? 'lucideLoaderCircle' : 'lucideCircle'"
            size="16"
            [class.animate-spin]="step.status === 'running'"
            aria-hidden="true"
          />
          <span [class.text-muted-foreground]="step.status === 'pending'">{{ step.label }}</span>
          <span class="sr-only">{{ step.status }}</span>
        </li>
      }
    </ol>
  `,
})
export class TraceComponent {
  readonly steps = input.required<TraceStep[]>()
}
