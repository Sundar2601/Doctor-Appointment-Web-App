import { type DialogConfig } from '@angular/cdk/dialog'
import { Overlay } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core'
import { ButtonDirective } from './button.directive'
import { OverlayPanelBase } from './overlay.base'

/** Alert dialog (role=alertdialog, no backdrop dismiss). Usage: `<app-alert-dialog heading="Delete?" description="..." [(open)]="show" (confirm)="del()" />`. */
@Component({
  selector: 'app-alert-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonDirective],
  host: { class: 'contents' },
  template: `
    <ng-template #tpl>
      <div class="bg-background text-foreground grid w-full gap-4 rounded-lg border p-6 shadow-lg">
        <header class="flex flex-col gap-2 text-left">
          <h2 [id]="titleId" class="text-lg font-semibold">{{ heading() }}</h2>
          <p [id]="descId" class="text-muted-foreground text-sm">{{ description() }}</p>
        </header>
        <footer class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button type="button" appButton variant="outline" (click)="cancelled.emit(); close()">{{ cancelLabel() }}</button>
          <button type="button" appButton (click)="confirm.emit(); close()">{{ confirmLabel() }}</button>
        </footer>
      </div>
    </ng-template>
  `,
})
export class AlertDialogComponent extends OverlayPanelBase {
  readonly confirmLabel = input('Continue')
  readonly cancelLabel = input('Cancel')
  readonly confirm = output<void>()
  readonly cancelled = output<void>()
  protected override readonly role = 'alertdialog' as const
  private readonly overlay = inject(Overlay)
  protected config(): DialogConfig {
    return {
      width: '32rem',
      maxWidth: 'calc(100vw - 2rem)',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    }
  }
}
