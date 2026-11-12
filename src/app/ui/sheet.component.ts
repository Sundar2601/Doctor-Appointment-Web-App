import { type DialogConfig } from '@angular/cdk/dialog'
import { Overlay } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideX } from '@ng-icons/lucide'
import { OverlayPanelBase } from './overlay.base'

export type SheetSide = 'right' | 'left'

/** Side sheet. Usage: `<app-sheet heading="Filters" side="right" [(open)]="show">body <div sheetFooter>...</div></app-sheet>`. */
@Component({
  selector: 'app-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideX })],
  host: { class: 'contents' },
  template: `
    <ng-template #tpl>
      <div
        class="bg-background text-foreground relative flex h-full w-full flex-col gap-4 p-6 shadow-lg"
        [class.border-l]="side() === 'right'"
        [class.border-r]="side() === 'left'"
      >
        <header class="flex flex-col gap-1.5">
          <h2 [id]="titleId" class="text-lg font-semibold">{{ heading() }}</h2>
          @if (description()) {
            <p [id]="descId" class="text-muted-foreground text-sm">{{ description() }}</p>
          }
        </header>
        <div class="min-h-0 flex-1 overflow-auto"><ng-content /></div>
        <footer class="flex flex-col gap-2"><ng-content select="[sheetFooter]" /></footer>
        <button
          type="button"
          aria-label="Close"
          (click)="close()"
          class="focus-visible:ring-ring/50 absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-[3px] focus-visible:outline-none"
        >
          <ng-icon name="lucideX" size="16" />
        </button>
      </div>
    </ng-template>
  `,
})
export class SheetComponent extends OverlayPanelBase {
  readonly side = input<SheetSide>('right')
  private readonly overlay = inject(Overlay)
  protected config(): DialogConfig {
    const g = this.overlay.position().global().top('0')
    return { width: '24rem', maxWidth: '90vw', height: '100%', positionStrategy: this.side() === 'right' ? g.right('0') : g.left('0') }
  }
}
