import { type DialogConfig } from '@angular/cdk/dialog'
import { Overlay } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { OverlayPanelBase } from './overlay.base'

/** Bottom drawer with grab handle. Usage: `<app-drawer heading="Move goal" [(open)]="show">body <div drawerFooter>...</div></app-drawer>`. */
@Component({
  selector: 'app-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'contents' },
  template: `
    <ng-template #tpl>
      <div class="bg-background text-foreground mx-auto flex w-full max-w-lg flex-col gap-4 rounded-t-xl border border-b-0 p-4 shadow-lg">
        <div class="bg-muted mx-auto h-2 w-24 shrink-0 rounded-full" aria-hidden="true"></div>
        <header class="flex flex-col gap-1.5 text-center sm:text-left">
          <h2 [id]="titleId" class="text-lg font-semibold">{{ heading() }}</h2>
          @if (description()) {
            <p [id]="descId" class="text-muted-foreground text-sm">{{ description() }}</p>
          }
        </header>
        <div class="min-h-0 overflow-auto"><ng-content /></div>
        <footer class="flex flex-col gap-2"><ng-content select="[drawerFooter]" /></footer>
      </div>
    </ng-template>
  `,
})
export class DrawerComponent extends OverlayPanelBase {
  private readonly overlay = inject(Overlay)
  protected config(): DialogConfig {
    return { width: '100%', maxHeight: '85vh', positionStrategy: this.overlay.position().global().bottom('0').centerHorizontally() }
  }
}
