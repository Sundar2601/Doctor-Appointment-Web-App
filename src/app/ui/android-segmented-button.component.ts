import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { ANDROID_ICONS } from './android-icons'

/** Material 3 segmented button (2-5 options); the selected segment shows a check. */
@Component({
  selector: 'app-android-segmented-button',
  imports: [NgIcon],
  viewProviders: [provideIcons(ANDROID_ICONS)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'border-border bg-background inline-flex h-10 overflow-hidden rounded-full border',
    role: 'radiogroup',
    '[attr.aria-label]': 'ariaLabel()',
  },
  template: `
    @for (option of options(); track option; let first = $first) {
      <button
        type="button"
        role="radio"
        class="text-foreground hover:bg-accent flex items-center gap-2 px-4 text-sm font-medium"
        [class.border-border]="!first"
        [class.border-l]="!first"
        [class.bg-secondary]="option === value()"
        [attr.aria-checked]="option === value()"
        (click)="value.set(option)"
      >
        @if (option === value()) {
          <ng-icon name="lucideCheck" size="18" />
        }
        {{ option }}
      </button>
    }
  `,
})
export class AndroidSegmentedButtonComponent {
  readonly options = input.required<string[]>()
  readonly value = model<string>()
  readonly ariaLabel = input<string>()
}
