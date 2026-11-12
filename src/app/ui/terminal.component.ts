import { ChangeDetectionStrategy, Component, input } from '@angular/core'

export interface TerminalLine {
  text: string
  tone?: 'default' | 'muted' | 'success' | 'error'
}
const TONE = { default: '', muted: 'opacity-60', success: 'text-success', error: 'text-destructive' }

/** Command output on a dark surface. */
@Component({
  selector: 'app-terminal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-foreground text-background block rounded-lg p-4 font-mono text-sm',
    role: 'log',
    '[attr.aria-label]': '"Terminal: " + command()',
  },
  template: `
    <p class="font-medium"><span aria-hidden="true">$ </span>{{ command() }}</p>
    @for (l of lines(); track $index) {
      <p class="mt-2 whitespace-pre-wrap" [class]="tone[l.tone ?? 'muted']">{{ l.text }}</p>
    }
  `,
})
export class TerminalComponent {
  readonly command = input.required<string>()
  readonly lines = input<TerminalLine[]>([])
  protected readonly tone = TONE
}
