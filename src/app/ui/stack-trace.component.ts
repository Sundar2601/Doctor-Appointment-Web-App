import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Error message and stack frames of a failed tool call. */
@Component({
  selector: 'app-stack-trace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground border-destructive block rounded-lg border p-4', role: 'alert' },
  template: `
    <p class="text-text-destructive text-sm font-semibold">Error: {{ message() }}</p>
    @for (f of frames(); track $index) {
      <p class="text-muted-foreground mt-3 font-mono text-xs">{{ f }}</p>
    }
  `,
})
export class StackTraceComponent {
  readonly message = input.required<string>()
  readonly frames = input<string[]>([])
}
