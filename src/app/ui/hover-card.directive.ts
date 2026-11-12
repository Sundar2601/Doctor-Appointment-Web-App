import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { TemplatePortal } from '@angular/cdk/portal'
import { ChangeDetectionStrategy, Component, Directive, ElementRef, inject, input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core'

/** The card surface (Figma "Hover Card"): popover bg, border, shadow, 320px wide. Put it inside the `ng-template` given to `appHoverCard`. */
@Component({
  selector: 'app-hover-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-popover text-popover-foreground block w-80 rounded-md border p-4 text-sm shadow-md' },
  template: '<ng-content />',
})
export class HoverCardComponent {}

/**
 * Usage:
 * `<a appHoverCard [hoverCardContent]="card">@nextjs</a>
 *  <ng-template #card><app-hover-card>...</app-hover-card></ng-template>`
 */
@Directive({
  selector: '[appHoverCard]',
  host: { '(mouseenter)': 'schedule(true)', '(mouseleave)': 'schedule(false)', '(focusin)': 'schedule(true)', '(focusout)': 'schedule(false)', '(keydown.escape)': 'close()' },
})
export class HoverCardDirective implements OnDestroy {
  readonly hoverCardContent = input.required<TemplateRef<unknown>>()
  readonly hoverCardPosition = input<'top' | 'bottom'>('bottom')
  readonly openDelay = input(200)
  readonly closeDelay = input(150)

  private readonly overlay = inject(Overlay)
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef)
  private readonly vcr = inject(ViewContainerRef)
  private ref?: OverlayRef
  private timer?: ReturnType<typeof setTimeout>

  protected schedule(open: boolean) {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => (open ? this.open() : this.close()), open ? this.openDelay() : this.closeDelay())
  }

  private open() {
    if (this.ref?.hasAttached()) return
    if (!this.ref) {
      const below = this.hoverCardPosition() === 'bottom'
      this.ref = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .flexibleConnectedTo(this.host)
          .withPositions([
            { originX: 'center', originY: below ? 'bottom' : 'top', overlayX: 'center', overlayY: below ? 'top' : 'bottom', offsetY: below ? 8 : -8 },
            { originX: 'center', originY: below ? 'top' : 'bottom', overlayX: 'center', overlayY: below ? 'bottom' : 'top', offsetY: below ? -8 : 8 },
          ]),
        scrollStrategy: this.overlay.scrollStrategies.close(),
      })
      // Keep the card open while the pointer is over it.
      this.ref.overlayElement.addEventListener('mouseenter', () => clearTimeout(this.timer))
      this.ref.overlayElement.addEventListener('mouseleave', () => this.schedule(false))
    }
    this.ref.attach(new TemplatePortal(this.hoverCardContent(), this.vcr))
  }

  protected close() {
    clearTimeout(this.timer)
    this.ref?.detach()
  }

  ngOnDestroy() {
    clearTimeout(this.timer)
    this.ref?.dispose()
  }
}
