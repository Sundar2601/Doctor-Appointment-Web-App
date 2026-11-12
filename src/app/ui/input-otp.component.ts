import { ChangeDetectionStrategy, Component, computed, type ElementRef, input, model, signal, viewChild } from '@angular/core'

/**
 * Figma "Input OTP": N 36px slots, optional separator, backed by one real (transparent) input
 * so typing, paste, and autofill (`autocomplete="one-time-code"`) work natively.
 * Usage: `<app-input-otp [length]="6" [(value)]="code" />`.
 */
@Component({
  selector: 'app-input-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'relative inline-flex items-center gap-2', '(click)': 'field().nativeElement.focus()' },
  template: `
    @for (s of slots(); track s) {
      <div
        class="border-input bg-background data-[active=true]:border-ring flex size-9 items-center justify-center rounded-md border text-sm shadow-xs data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50"
        [attr.data-active]="focused() && s === active()"
      >
        {{ value()[s] ?? '' }}
      </div>
      @if (separatorAfter() === s + 1 && s + 1 < length()) {
        <span class="text-muted-foreground text-sm" aria-hidden="true">–</span>
      }
    }
    <input
      #field
      class="absolute inset-0 size-full cursor-text opacity-0"
      autocomplete="one-time-code"
      [attr.inputmode]="numeric() ? 'numeric' : 'text'"
      [attr.maxlength]="length()"
      [attr.aria-label]="ariaLabel()"
      [disabled]="disabled()"
      [value]="value()"
      (input)="onInput($event)"
      (focus)="focused.set(true)"
      (blur)="focused.set(false)"
    />
  `,
})
export class InputOtpComponent {
  readonly length = input(6)
  readonly value = model('')
  /** Show a dash after this many slots (design: 3 of 6). `null` for none. */
  readonly separatorAfter = input<number | null>(3)
  readonly numeric = input(true)
  readonly disabled = input(false)
  readonly ariaLabel = input('One-time password')

  protected readonly focused = signal(false)
  protected readonly field = viewChild.required<ElementRef<HTMLInputElement>>('field')
  protected readonly slots = computed(() => Array.from({ length: this.length() }, (_, i) => i))
  protected readonly active = computed(() => Math.min(this.value().length, this.length() - 1))

  protected onInput(e: Event) {
    const el = e.target as HTMLInputElement
    const v = (this.numeric() ? el.value.replace(/\D/g, '') : el.value).slice(0, this.length())
    el.value = v
    this.value.set(v)
  }
}
