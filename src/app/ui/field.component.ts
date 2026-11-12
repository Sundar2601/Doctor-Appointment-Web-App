import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Label + control + optional hint/error. Pass the control's `id` as `for`. */
@Component({
  selector: 'app-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'grid gap-1.5' },
  template: `
    <label class="text-sm font-medium" [attr.for]="for()">{{ label() }}</label>
    <ng-content />
    @if (error()) {
      <p class="text-destructive text-xs" role="alert">{{ error() }}</p>
    } @else if (hint()) {
      <p class="text-muted-foreground text-xs">{{ hint() }}</p>
    }
  `,
})
export class FieldComponent {
  readonly label = input.required<string>()
  readonly for = input<string>()
  readonly hint = input<string>()
  readonly error = input<string>()
}
