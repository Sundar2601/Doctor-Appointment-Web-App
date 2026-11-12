import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog'
import { Directive, effect, inject, DestroyRef, input, model, TemplateRef, untracked, viewChild, ViewContainerRef } from '@angular/core'
import { filter } from 'rxjs'

const OVERLAY_CSS = `
.cdk-overlay-container{position:fixed;inset:0;z-index:1000;pointer-events:none}
.cdk-overlay-container:empty{display:none}
.cdk-global-overlay-wrapper,.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}
.cdk-global-overlay-wrapper{inset:0;pointer-events:none}
.cdk-overlay-pane{position:absolute;z-index:1000;display:flex;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto}
.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;opacity:0;transition:opacity .15s ease}
.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}
.cdk-overlay-transparent-backdrop{background:transparent}
.cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit;outline:0}
.cdk-visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
`

/** Injects the minimal CDK overlay structural CSS once (the app does not import the prebuilt CDK stylesheet). */
export function ensureOverlayStyles(): void {
  if (typeof document === 'undefined' || document.getElementById('app-cdk-overlay-styles')) return
  const el = document.createElement('style')
  el.id = 'app-cdk-overlay-styles'
  el.textContent = OVERLAY_CSS
  document.head.appendChild(el)
}

let uid = 0

/** Shared base for Dialog / Alert Dialog / Sheet / Drawer: opens the component's `#tpl` template in a CDK Dialog (focus trap, Esc, backdrop). */
@Directive()
export abstract class OverlayPanelBase {
  readonly open = model(false)
  readonly heading = input<string>()
  readonly description = input<string>()

  protected readonly titleId = `app-overlay-title-${++uid}`
  protected readonly descId = `app-overlay-desc-${uid}`
  protected readonly role: 'dialog' | 'alertdialog' = 'dialog'
  protected readonly tpl = viewChild<TemplateRef<unknown>>('tpl')
  private readonly dialog = inject(Dialog)
  private readonly vcr = inject(ViewContainerRef)
  private ref: DialogRef<unknown, unknown> | null = null

  protected abstract config(): DialogConfig

  constructor() {
    ensureOverlayStyles()
    effect(() => {
      const open = this.open()
      const tpl = this.tpl()
      untracked(() => {
        if (open && tpl) this.show(tpl)
        else if (!open) this.ref?.close()
      })
    })
    inject(DestroyRef).onDestroy(() => this.ref?.close())
  }

  close(): void {
    this.open.set(false)
  }

  private show(tpl: TemplateRef<unknown>): void {
    if (this.ref) return
    const alert = this.role === 'alertdialog'
    const cfg = {
      hasBackdrop: true,
      backdropClass: 'bg-black/50',
      role: this.role,
      ariaLabelledBy: this.titleId,
      ariaDescribedBy: this.description() ? this.descId : null,
      autoFocus: 'first-tabbable',
      disableClose: alert,
      viewContainerRef: this.vcr,
      ...this.config(),
    } as DialogConfig<unknown, DialogRef<unknown, unknown>>
    const ref = this.dialog.open(tpl, cfg)
    if (alert) ref.keydownEvents.pipe(filter((e) => e.key === 'Escape')).subscribe(() => ref.close())
    ref.closed.subscribe(() => {
      this.ref = null
      this.open.set(false)
    })
    this.ref = ref
  }
}
