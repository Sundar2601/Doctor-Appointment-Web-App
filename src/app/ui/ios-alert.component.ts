import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

export interface IosAlertAction {
  label: string
  /** Renders bold red. */
  destructive?: boolean
}

let nextId = 0

/** Centered 270pt iOS alert. Two actions sit side by side; more stack vertically. */
@Component({
  selector: 'app-ios-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-background text-foreground block w-[270px] overflow-hidden rounded-[14px] text-center shadow-[0_8px_24px_rgb(0_0_0/0.12)]',
    role: 'alertdialog',
    '[attr.aria-labelledby]': 'id',
  },
  template: `
    <div class="px-4 pt-5 pb-4">
      <h2 [id]="id" class="text-[17px] leading-[22px] font-semibold">{{ title() }}</h2>
      @if (message()) {
        <p class="mt-0.5 text-[13px] leading-[18px]">{{ message() }}</p>
      }
    </div>
    <div class="border-border grid border-t" [class.grid-flow-col]="actions().length === 2" [class.auto-cols-fr]="actions().length === 2">
      @for (action of actions(); track action.label) {
        <button
          type="button"
          class="border-border hover:bg-muted/60 focus-visible:ring-ring/50 h-11 text-[17px] focus-visible:ring-[3px] focus-visible:outline-none focus-visible:ring-inset not-first:border-l"
          [class.text-primary]="!action.destructive"
          [class.text-destructive]="action.destructive"
          [class.font-semibold]="action.destructive"
          [class.border-l-0]="actions().length !== 2"
          [class.border-t]="actions().length !== 2"
          (click)="actionClick.emit(action)"
        >
          {{ action.label }}
        </button>
      }
    </div>
  `,
})
export class IosAlertComponent {
  protected readonly id = `ios-alert-${nextId++}`
  readonly title = input.required<string>()
  readonly message = input('')
  readonly actions = input<IosAlertAction[]>([{ label: 'OK' }])
  readonly actionClick = output<IosAlertAction>()
}
