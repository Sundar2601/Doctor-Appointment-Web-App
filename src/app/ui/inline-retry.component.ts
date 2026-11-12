import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { ButtonDirective } from './button.directive'
import { SpinnerComponent } from './spinner.component'

export type InlineRetryState = 'loading' | 'error'

/** Figma "Inline loading and retry". Usage: `<app-inline-retry [state]="state" message="Saving..." (retry)="save()" />`. */
@Component({
  selector: 'app-inline-retry',
  imports: [ButtonDirective, SpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col items-start gap-3' },
  template: `
    @if (state() === 'loading') {
      <button appButton disabled aria-busy="true">
        <app-spinner class="text-primary-foreground" />
        <span>{{ message() }}</span>
      </button>
    } @else {
      <div class="flex flex-col items-start gap-3" role="alert">
        <p class="text-destructive text-sm font-semibold">{{ message() }}</p>
        <button appButton variant="outline" (click)="retry.emit()">{{ retryLabel() }}</button>
      </div>
    }
  `,
})
export class InlineRetryComponent {
  readonly state = input<InlineRetryState>('loading')
  readonly message = input<string>('Saving...')
  readonly retryLabel = input<string>('Retry')
  readonly retry = output<void>()
}
