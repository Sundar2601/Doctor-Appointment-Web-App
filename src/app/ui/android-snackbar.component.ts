import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

/** Material 3 snackbar on the inverse surface with a single action. */
@Component({
  selector: 'app-android-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-foreground text-background flex min-h-12 w-full max-w-[344px] items-center gap-2 rounded-sm pl-4 shadow-md',
    role: 'status',
    'aria-live': 'polite',
  },
  template: `
    <span class="flex-1 py-3 text-sm">{{ message() }}</span>
    @if (action()) {
      <button type="button" class="h-10 px-3 text-sm font-semibold" (click)="actionClick.emit()">{{ action() }}</button>
    }
  `,
})
export class AndroidSnackbarComponent {
  readonly message = input.required<string>()
  readonly action = input<string>()
  readonly actionClick = output()
}
