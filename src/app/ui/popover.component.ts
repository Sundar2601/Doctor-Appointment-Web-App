import { A11yModule } from '@angular/cdk/a11y'
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedPosition } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core'
import { ensureOverlayStyles } from './overlay.base'

export type PopoverSide = 'bottom' | 'top'
let uid = 0

/** Usage: `<app-popover [(open)]="o"><button trigger appButton variant="outline">Open</button> content...</app-popover>`. */
@Component({
  selector: 'app-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkConnectedOverlay, CdkOverlayOrigin, A11yModule],
  host: { class: 'inline-block' },
  template: `
    <span cdkOverlayOrigin #origin="cdkOverlayOrigin" class="inline-flex" aria-haspopup="dialog" [attr.aria-expanded]="open()" [attr.aria-controls]="open() ? id : null" (click)="open.set(!open())">
      <ng-content select="[trigger]" />
    </span>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="open()"
      [cdkConnectedOverlayPositions]="positions()"
      (overlayOutsideClick)="onOutside($event, origin.elementRef.nativeElement)"
      (overlayKeydown)="$event.key === 'Escape' && open.set(false)"
      (detach)="open.set(false)"
    >
      <div [id]="id" role="dialog" cdkTrapFocus cdkTrapFocusAutoCapture class="bg-popover text-popover-foreground w-72 rounded-md border p-4 shadow-md outline-none">
        <ng-content />
      </div>
    </ng-template>
  `,
})
export class PopoverComponent {
  readonly open = model(false)
  readonly side = input<PopoverSide>('bottom')
  readonly align = input<'start' | 'center' | 'end'>('center')
  protected readonly id = `app-popover-${++uid}`
  protected readonly positions = computed<ConnectedPosition[]>(() => {
    const top = this.side() === 'top'
    const a = this.align()
    const originX = a === 'center' ? 'center' : a
    return [{ originX, originY: top ? 'top' : 'bottom', overlayX: originX, overlayY: top ? 'bottom' : 'top', offsetY: top ? -8 : 8 }]
  })
  constructor() { ensureOverlayStyles() }
  protected onOutside(e: MouseEvent, origin: HTMLElement): void {
    if (!origin.contains(e.target as Node)) this.open.set(false)
  }
}
