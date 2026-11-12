import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog'
import { Directive, effect, inject, DestroyRef, input, model, TemplateRef, untracked, viewChild, ViewContainerRef } from '@angular/core'
import { filter } from 'rxjs'



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
