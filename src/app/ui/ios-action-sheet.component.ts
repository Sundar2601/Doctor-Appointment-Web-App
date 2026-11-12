import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

export interface IosSheetAction {
  label: string
  /** Renders red. */
  destructive?: boolean
}

/** Bottom iOS action sheet: a grouped list of actions plus a separate Cancel group. */
@Component({
  selector: 'app-ios-action-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full max-w-[360px] flex-col gap-2 text-center', role: 'dialog', '[attr.aria-label]': 'title() || "Actions"' },
  template: `
    <div class="bg-background border-border overflow-hidden rounded-[14px] border">
      @if (title()) {
        <p class="text-muted-foreground border-border border-b px-4 py-3.5 text-[13px]">{{ title() }}</p>
      }
      @for (action of actions(); track action.label) {
        <button
          type="button"
          class="hover:bg-muted/60 focus-visible:ring-ring/50 border-border h-14 w-full text-[20px] font-semibold focus-visible:ring-[3px] focus-visible:outline-none focus-visible:ring-inset not-first:border-t"
          [class.text-primary]="!action.destructive"
          [class.text-destructive]="action.destructive"
          (click)="actionClick.emit(action)"
        >
          {{ action.label }}
        </button>
      }
    </div>
    <button
      type="button"
      class="bg-background border-border text-primary hover:bg-muted/60 focus-visible:ring-ring/50 h-14 w-full rounded-[14px] border text-[20px] font-semibold focus-visible:ring-[3px] focus-visible:outline-none"
      (click)="dismissed.emit()"
    >
      {{ cancelLabel() }}
    </button>
  `,
})
export class IosActionSheetComponent {
  readonly title = input('')
  readonly actions = input.required<IosSheetAction[]>()
  readonly cancelLabel = input('Cancel')
  readonly actionClick = output<IosSheetAction>()
  readonly dismissed = output()
}
