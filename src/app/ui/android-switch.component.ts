import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

/** Material 3 switch (52x32dp); the thumb grows when on. */
@Component({
  selector: 'app-android-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-block' },
  template: `
    <button
      type="button"
      role="switch"
      class="relative block h-8 w-[52px] rounded-full border transition-colors disabled:opacity-40"
      [class.bg-primary]="checked()"
      [class.border-primary]="checked()"
      [class.bg-secondary]="!checked()"
      [class.border-border]="!checked()"
      [attr.aria-checked]="checked()"
      [attr.aria-label]="ariaLabel()"
      [disabled]="disabled()"
      (click)="checked.set(!checked())"
    >
      <span
        class="absolute top-1/2 -translate-y-1/2 rounded-full transition-all"
        [class.size-6]="checked()"
        [class.left-6]="checked()"
        [class.bg-white]="checked()"
        [class.size-4]="!checked()"
        [class.left-1.5]="!checked()"
        [class.bg-muted-foreground]="!checked()"
      ></span>
    </button>
  `,
})
export class AndroidSwitchComponent {
  readonly checked = model(false)
  readonly disabled = input(false)
  readonly ariaLabel = input<string>()
}
