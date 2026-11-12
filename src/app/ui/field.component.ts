import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Label + control + optional hint/error. Pass the control's `id` as `for`. */
@Component({
  selector: 'app-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'grid gap-2' },
  template: `
    <label class="text-foreground text-sm leading-5 font-medium" [attr.for]="for()">{{ label() }}</label>
    <ng-content />
    @if (error()) {
      <p class="text-destructive text-sm" role="alert">{{ error() }}</p>
    } @else if (hint()) {
      <p class="text-muted-foreground text-sm">{{ hint() }}</p>
    }
  `,
})
export class FieldComponent {
  readonly label = input.required<string>()
  readonly for = input<string>()
  readonly hint = input<string>()
  readonly error = input<string>()
}
