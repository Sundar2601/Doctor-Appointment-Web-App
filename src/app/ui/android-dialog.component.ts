import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

let nextId = 0

/** Material 3 basic dialog (312dp, 28dp radius) with text-button actions right-aligned. */
@Component({
  selector: 'app-android-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-card text-card-foreground block w-[312px] rounded-[28px] p-6 shadow-lg',
    role: 'dialog',
    'aria-modal': 'true',
    '[attr.aria-labelledby]': 'id + "-title"',
    '[attr.aria-describedby]': 'id + "-text"',
  },
  template: `
    <h2 [id]="id + '-title'" class="text-2xl leading-8">{{ title() }}</h2>
    <p [id]="id + '-text'" class="text-muted-foreground mt-4 text-sm">{{ text() }}</p>
    <ng-content />
    <div class="mt-6 flex justify-end gap-2">
      @for (action of actions(); track action) {
        <button
          type="button"
          class="text-primary hover:bg-accent h-10 rounded-full px-3 text-sm font-medium"
          (click)="actionClick.emit(action)"
        >
          {{ action }}
        </button>
      }
    </div>
  `,
})
export class AndroidDialogComponent {
  protected readonly id = `app-android-dialog-${nextId++}`
  readonly title = input.required<string>()
  readonly text = input('')
  /** Action button labels, in display order. */
  readonly actions = input<string[]>(['Cancel', 'OK'])
  readonly actionClick = output<string>()
}
