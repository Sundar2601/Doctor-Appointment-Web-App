import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

export interface TabItem {
  value: string
  label: string
  disabled?: boolean
}

/**
 * Tab list (role=tablist, arrow/Home/End keys). Usage:
 * `<app-tabs [tabs]="tabs" [(value)]="tab" /> @if (tab() === 'a') { ... }`. Panels: give yours `role="tabpanel"` and `[attr.aria-labelledby]="'app-tab-' + value"`.
 */
@Component({
  selector: 'app-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', '(keydown)': 'onKey($event)' },
  template: `
    <div
      role="tablist"
      [attr.aria-label]="label()"
      class="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]"
    >
      @for (t of tabs(); track t.value) {
        <button
          type="button"
          role="tab"
          [id]="'app-tab-' + t.value"
          [attr.aria-selected]="t.value === value()"
          [attr.tabindex]="t.value === value() ? 0 : -1"
          [disabled]="t.disabled"
          (click)="value.set(t.value)"
          class="focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none inline-flex h-[calc(100%-1px)] items-center justify-center rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50"
          [class]="t.value === value() ? 'bg-background text-foreground shadow-sm' : 'hover:text-foreground'"
        >
          {{ t.label }}
        </button>
      }
    </div>
  `,
})
export class TabsComponent {
  readonly tabs = input.required<TabItem[]>()
  readonly value = model<string>()
  readonly label = input<string>()

  protected onKey(e: KeyboardEvent): void {
    const enabled = this.tabs().filter((t) => !t.disabled)
    if (!enabled.length) return
    const i = enabled.findIndex((t) => t.value === this.value())
    let n = -1
    if (e.key === 'ArrowRight') n = (i + 1) % enabled.length
    else if (e.key === 'ArrowLeft') n = (i - 1 + enabled.length) % enabled.length
    else if (e.key === 'Home') n = 0
    else if (e.key === 'End') n = enabled.length - 1
    const target = enabled[n]
    if (n < 0 || !target) return
    e.preventDefault()
    this.value.set(target.value)
    ;(e.currentTarget as HTMLElement).querySelector<HTMLElement>(`#app-tab-${CSS.escape(target.value)}`)?.focus()
  }
}
