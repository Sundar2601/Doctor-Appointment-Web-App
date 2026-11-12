import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'text-muted-foreground flex flex-col items-center gap-1 py-10 text-center text-sm' },
  template: `
    <p class="text-foreground font-medium">{{ title() }}</p>
    @if (description()) {
      <p>{{ description() }}</p>
    }
    <ng-content />
  `,
})
export class EmptyStateComponent {
  readonly title = input.required<string>()
  readonly description = input<string>()
}
