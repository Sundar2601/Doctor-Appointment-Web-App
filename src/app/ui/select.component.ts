import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, computed, ElementRef, input, model, signal, viewChild } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCheck, lucideChevronDown } from '@ng-icons/lucide'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

/**
 * Figma "Select": custom listbox on a CDK overlay.
 * Usage: `<app-select [options]="opts" [(value)]="v" placeholder="Pick one" />`.
 * Keys: Arrow Up/Down, Home/End, Enter/Space, Escape.
 */
@Component({
  selector: 'app-select',
  imports: [CdkConnectedOverlay, CdkOverlayOrigin, NgIcon],
  viewProviders: [provideIcons({ lucideCheck, lucideChevronDown })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full' },
  template: `
    <button
      #trigger
      type="button"
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      role="combobox"
      aria-haspopup="listbox"
      [id]="id()"
      [disabled]="disabled()"
      [attr.aria-expanded]="open()"
      [attr.aria-invalid]="invalid() || null"
      [attr.aria-label]="ariaLabel()"
      [attr.aria-activedescendant]="open() && active() >= 0 ? id() + '-opt-' + active() : null"
      class="border-input bg-background focus-visible:outline-ring aria-[invalid=true]:border-destructive flex h-9 w-full items-center justify-between gap-2 rounded-md border px-3 text-sm shadow-xs focus-visible:outline-2 focus-visible:outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      (click)="toggle()"
      (keydown)="onKey($event)"
    >
      <span class="truncate" [class.text-muted-foreground]="!selected()">{{ selected()?.label ?? placeholder() }}</span>
      <ng-icon name="lucideChevronDown" class="text-muted-foreground size-4 shrink-0" />
    </button>
    <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="origin" [cdkConnectedOverlayOpen]="open()" [cdkConnectedOverlayMinWidth]="width()" (overlayOutsideClick)="close()" (detach)="open.set(false)">
      <div role="listbox" [attr.aria-labelledby]="id()" class="bg-popover text-popover-foreground mt-1 max-h-60 overflow-auto rounded-md border p-1 shadow-md">
        @for (o of options(); track o.value; let i = $index) {
          <div
            role="option"
            [id]="id() + '-opt-' + i"
            [attr.aria-selected]="o.value === value()"
            [attr.aria-disabled]="o.disabled || null"
            class="flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 text-sm aria-disabled:pointer-events-none aria-disabled:opacity-50"
            [class.bg-accent]="i === active()"
            [class.text-accent-foreground]="i === active()"
            (mouseenter)="active.set(i)"
            (click)="pick(o)"
          >
            {{ o.label }}
            @if (o.value === value()) { <ng-icon name="lucideCheck" class="size-4" /> }
          </div>
        }
      </div>
    </ng-template>
  `,
})
export class SelectComponent {
  private static n = 0
  readonly options = input<SelectOption[]>([])
  readonly value = model<string | null>(null)
  readonly placeholder = input('Select...')
  readonly disabled = input(false)
  readonly invalid = input(false)
  readonly ariaLabel = input<string>()
  readonly id = input(`app-select-${SelectComponent.n++}`)

  protected readonly open = signal(false)
  protected readonly active = signal(-1)
  protected readonly width = signal(0)
  private readonly trigger = viewChild.required<ElementRef<HTMLElement>>('trigger')
  protected readonly selected = computed(() => this.options().find((o) => o.value === this.value()))

  protected toggle() {
    this.open() ? this.close() : this.show()
  }
  private show() {
    this.width.set(this.trigger().nativeElement.offsetWidth)
    this.active.set(Math.max(0, this.options().findIndex((o) => o.value === this.value())))
    this.open.set(true)
  }
  protected close() {
    this.open.set(false)
  }
  protected pick(o: SelectOption) {
    if (o.disabled) return
    this.value.set(o.value)
    this.close()
    this.trigger().nativeElement.focus()
  }
  private move(dir: 1 | -1, from = this.active()) {
    const opts = this.options()
    for (let i = from + dir; i >= 0 && i < opts.length; i += dir) {
      if (!opts[i].disabled) return this.active.set(i)
    }
  }
  protected onKey(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault()
        if (!this.open()) this.show()
        else this.move(e.key === 'ArrowDown' ? 1 : -1)
        break
      case 'Home':
        if (this.open()) { e.preventDefault(); this.move(1, -1) }
        break
      case 'End':
        if (this.open()) { e.preventDefault(); this.move(-1, this.options().length) }
        break
      case 'Enter':
      case ' ':
        if (this.open()) {
          e.preventDefault()
          const o = this.options()[this.active()]
          if (o) this.pick(o)
        }
        break
      case 'Escape':
        this.close()
        break
      case 'Tab':
        this.close()
        break
    }
  }
}
