import { type DialogConfig } from '@angular/cdk/dialog'
import { Overlay } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideX } from '@ng-icons/lucide'
import { OverlayPanelBase } from './overlay.base'

/**
 * Modal dialog. Usage: `<app-dialog heading="Edit" description="..." [(open)]="show">body <div dialogFooter>buttons</div></app-dialog>`.
 */
@Component({
  selector: 'app-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideX })],
  host: { class: 'contents' },
  template: `
    <ng-template #tpl>
      <div class="bg-background text-foreground relative grid w-full gap-4 rounded-lg border p-6 shadow-lg">
        <header class="flex flex-col gap-1.5 text-left">
          <h2 [id]="titleId" class="text-lg leading-none font-semibold">{{ heading() }}</h2>
          @if (description()) {
            <p [id]="descId" class="text-muted-foreground text-sm">{{ description() }}</p>
          }
        </header>
        <ng-content />
        <footer class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><ng-content select="[dialogFooter]" /></footer>
        <button
          type="button"
          aria-label="Close"
          (click)="close()"
          class="focus-visible:outline-ring absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100 focus-visible:outline-2"
        >
          <ng-icon name="lucideX" size="16" />
        </button>
      </div>
    </ng-template>
  `,
})
export class DialogComponent extends OverlayPanelBase {
  private readonly overlay = inject(Overlay)
  protected config(): DialogConfig {
    return {
      width: '32rem',
      maxWidth: 'calc(100vw - 2rem)',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    }
  }
}
