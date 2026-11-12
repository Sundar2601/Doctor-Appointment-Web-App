import { ChangeDetectionStrategy, Component, computed, input, model, signal } from '@angular/core'

export type AndroidTextFieldVariant = 'filled' | 'outlined'

let nextId = 0

/** Material 3 text field (56dp) with floating label, supporting text and error state. */
@Component({
  selector: 'app-android-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full' },
  template: `
    <div [class]="boxClasses()">
      <label [for]="id" [class]="labelClasses()" [class.bg-background]="variant() === 'outlined' && floated()">
        {{ label() }}
      </label>
      <input
        [id]="id"
        class="text-foreground placeholder:text-muted-foreground h-full w-full bg-transparent px-4 text-base outline-none disabled:opacity-40"
        [class.pt-4]="variant() === 'filled'"
        [type]="type()"
        [placeholder]="floated() ? placeholder() : ''"
        [disabled]="disabled()"
        [value]="value()"
        [attr.aria-invalid]="error() ? true : null"
        [attr.aria-describedby]="hasSupport() ? id + '-support' : null"
        (input)="value.set($any($event.target).value)"
        (focus)="focused.set(true)"
        (blur)="focused.set(false)"
      />
    </div>
    @if (hasSupport()) {
      <p [id]="id + '-support'" class="mt-1 px-4 text-xs" [class.text-destructive]="error()" [class.text-muted-foreground]="!error()">
        {{ error() || supporting() }}
      </p>
    }
  `,
})
export class AndroidTextFieldComponent {
  protected readonly id = `app-android-text-field-${nextId++}`
  readonly variant = input<AndroidTextFieldVariant>('outlined')
  readonly label = input.required<string>()
  readonly value = model('')
  readonly placeholder = input('')
  readonly supporting = input('')
  /** Error message; when set the field turns destructive and replaces the supporting text. */
  readonly error = input('')
  readonly type = input('text')
  readonly disabled = input(false)

  protected readonly focused = signal(false)
  protected readonly floated = computed(() => this.focused() || !!this.value() || !!this.placeholder())
  protected readonly hasSupport = computed(() => !!(this.error() || this.supporting()))

  protected readonly boxClasses = computed(() => {
    const accent = this.error() ? 'border-destructive ring-destructive' : 'border-primary ring-primary'
    const focus = this.focused() ? `${accent} ring-1` : this.error() ? 'border-destructive' : 'border-border'
    return this.variant() === 'outlined'
      ? `relative h-14 rounded-sm border ${focus}`
      : `bg-secondary relative h-14 rounded-t-sm border-b ${focus.replace('ring-1', '')} ${this.focused() ? 'border-b-2' : ''}`
  })

  protected readonly labelClasses = computed(() => {
    const color = this.error() ? 'text-destructive' : this.focused() ? 'text-primary' : 'text-muted-foreground'
    const pos = this.floated()
      ? this.variant() === 'outlined'
        ? 'left-3 -top-2 px-1 text-xs'
        : 'left-4 top-2 text-xs'
      : 'left-4 top-1/2 -translate-y-1/2 text-base'
    return `pointer-events-none absolute leading-4 ${pos} ${color}`
  })
}
