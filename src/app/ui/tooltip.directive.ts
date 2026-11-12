import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { DOCUMENT } from '@angular/common'
import { ChangeDetectionStrategy, Component, Directive, ElementRef, inject, input, OnDestroy, signal } from '@angular/core'
import { ensureOverlayStyles } from './overlay-styles'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'
let nextId = 0

@Component({
  selector: 'app-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-xs leading-4 shadow-md', role: 'tooltip', '[id]': 'id()' },
  template: '{{ text() }}',
})
export class TooltipComponent {
  readonly text = signal('')
  readonly id = signal('')
}

/** Figma "Tooltip". Usage: `<button appTooltip="Add to library" tooltipPosition="top">`. Shows on hover/focus, hides on leave/blur/Escape. */
@Directive({
  selector: '[appTooltip]',
  host: {
    '(mouseenter)': 'show()',
    '(mouseleave)': 'hide()',
    '(focusin)': 'show()',
    '(focusout)': 'hide()',
    '(keydown.escape)': 'hide()',
  },
})
export class TooltipDirective implements OnDestroy {
  readonly appTooltip = input.required<string>()
  readonly tooltipPosition = input<TooltipPosition>('top')

  private readonly overlay = inject(Overlay)
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef)
  private readonly doc = inject(DOCUMENT)
  private readonly id = `app-tooltip-${nextId++}`
  private ref?: OverlayRef

  protected show() {
    if (this.ref?.hasAttached() || !this.appTooltip()) return
    ensureOverlayStyles(this.doc)
    const pos = this.tooltipPosition()
    const positions = {
      top: { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -6 },
      bottom: { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 6 },
      left: { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -6 },
      right: { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: 6 },
    } as const
    this.ref ??= this.overlay.create({
      positionStrategy: this.overlay.position().flexibleConnectedTo(this.host).withPositions([positions[pos]]),
      scrollStrategy: this.overlay.scrollStrategies.close(),
    })
    const cmp = this.ref.attach(new ComponentPortal(TooltipComponent))
    cmp.instance.text.set(this.appTooltip())
    cmp.instance.id.set(this.id)
    this.host.nativeElement.setAttribute('aria-describedby', this.id)
  }

  protected hide() {
    this.ref?.detach()
    this.host.nativeElement.removeAttribute('aria-describedby')
  }

  ngOnDestroy() {
    this.ref?.dispose()
  }
}
