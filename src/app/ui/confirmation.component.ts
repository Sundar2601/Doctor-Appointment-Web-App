import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideTriangleAlert } from '@ng-icons/lucide'
import { ButtonDirective } from './button.directive'

/** Asks the user to approve or deny a tool call before it runs. */
@Component({
  selector: 'app-confirmation',
  imports: [NgIcon, ButtonDirective],
  viewProviders: [provideIcons({ lucideTriangleAlert })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': 'title()' },
  template: `
    <p class="flex items-center gap-2 text-sm font-semibold">
      <span class="text-warning inline-flex"><ng-icon name="lucideTriangleAlert" size="16" aria-hidden="true" /></span>{{ title() }}
    </p>
    @if (description()) {
      <p class="text-muted-foreground mt-2 text-sm">{{ description() }}</p>
    }
    <div class="mt-3 flex justify-end gap-2">
      <button appButton variant="outline" type="button" (click)="denied.emit()">{{ denyLabel() }}</button>
      <button appButton type="button" (click)="approved.emit()">{{ approveLabel() }}</button>
    </div>
  `,
})
export class ConfirmationComponent {
  readonly title = input.required<string>()
  readonly description = input<string>()
  readonly approveLabel = input('Approve')
  readonly denyLabel = input('Deny')
  readonly approved = output<void>()
  readonly denied = output<void>()
}
