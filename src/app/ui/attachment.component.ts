import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideFile, lucideX } from '@ng-icons/lucide'

/** Figma "Attachment": file chip with size and remove button. */
@Component({
  selector: 'app-attachment',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideFile, lucideX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-background inline-flex items-center gap-3 rounded-lg border px-3 py-2 shadow-xs' },
  template: `
    <ng-icon name="lucideFile" size="16" class="text-muted-foreground" aria-hidden="true" />
    <span class="grid text-sm leading-tight">
      <span class="font-medium">{{ name() }}</span>
      @if (size()) {
        <span class="text-muted-foreground text-xs">{{ size() }}</span>
      }
    </span>
    @if (removable()) {
      <button
        type="button"
        class="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 ml-2 rounded-sm focus-visible:ring-[3px] focus-visible:outline-none"
        [attr.aria-label]="'Remove ' + name()"
        (click)="remove.emit()"
      >
        <ng-icon name="lucideX" size="16" />
      </button>
    }
  `,
})
export class AttachmentComponent {
  readonly name = input.required<string>()
  readonly size = input<string>()
  readonly removable = input(true)
  readonly remove = output()
}
