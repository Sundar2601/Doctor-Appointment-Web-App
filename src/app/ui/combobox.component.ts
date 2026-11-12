import { CdkTrapFocus } from '@angular/cdk/a11y'
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, computed, ElementRef, input, model, signal, viewChild } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCheck, lucideChevronsUpDown, lucideSearch } from '@ng-icons/lucide'

export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

/**
 * Figma "Combobox": trigger button + popover with search field and filtered list (CDK overlay).
 * Usage: `<app-combobox [options]="opts" [(value)]="v" placeholder="Select framework..." searchPlaceholder="Search framework..." />`.
 */
@Component({
  selector: 'app-combobox',
  imports: [CdkConnectedOverlay, CdkOverlayOrigin, CdkTrapFocus, NgIcon],
  viewProviders: [provideIcons({ lucideCheck, lucideChevronsUpDown, lucideSearch })],
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
      [attr.aria-label]="ariaLabel()"
      class="border-input bg-background focus-visible:outline-ring flex h-9 w-full items-center justify-between gap-2 rounded-md border px-3 text-sm shadow-xs focus-visible:outline-2 focus-visible:outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      (click)="open() ? close() : show()"
    >
      <span class="truncate" [class.text-muted-foreground]="!selected()">{{ selected()?.label ?? placeholder() }}</span>
      <ng-icon name="lucideChevronsUpDown" class="text-muted-foreground size-4 shrink-0" />
    </button>
    <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="origin" [cdkConnectedOverlayOpen]="open()" [cdkConnectedOverlayMinWidth]="width()" (overlayOutsideClick)="close()" (detach)="open.set(false)">
      <div cdkTrapFocus cdkTrapFocusAutoCapture class="bg-popover text-popover-foreground mt-1 overflow-hidden rounded-md border shadow-md">
        <div class="flex h-10 items-center gap-2 px-3">
          <ng-icon name="lucideSearch" class="text-muted-foreground size-4 shrink-0" />
          <input
            type="text"
            class="placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent text-sm outline-none"
            [placeholder]="searchPlaceholder()"
            [attr.aria-controls]="id() + '-list'"
            [attr.aria-activedescendant]="active() >= 0 ? id() + '-opt-' + active() : null"
            [value]="query()"
            (input)="onQuery($event)"
            (keydown)="onKey($event)"
          />
        </div>
        <div class="bg-border h-px"></div>
        <div role="listbox" [id]="id() + '-list'" class="max-h-60 overflow-auto p-1">
          @for (o of filtered(); track o.value; let i = $index) {
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
          } @empty {
            <p class="text-muted-foreground px-2 py-1.5 text-sm">{{ emptyText() }}</p>
          }
        </div>
      </div>
    </ng-template>
  `,
})
export class ComboboxComponent {
  private static n = 0
  readonly options = input<ComboboxOption[]>([])
  readonly value = model<string | null>(null)
  readonly placeholder = input('Select...')
  readonly searchPlaceholder = input('Search...')
  readonly emptyText = input('No results found.')
  readonly disabled = input(false)
  readonly ariaLabel = input<string>()
  readonly id = input(`app-combobox-${ComboboxComponent.n++}`)

  protected readonly open = signal(false)
  protected readonly query = signal('')
  protected readonly active = signal(0)
  protected readonly width = signal(0)
  private readonly trigger = viewChild.required<ElementRef<HTMLElement>>('trigger')
  protected readonly selected = computed(() => this.options().find((o) => o.value === this.value()))
  protected readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase()
    return q ? this.options().filter((o) => o.label.toLowerCase().includes(q)) : this.options()
  })

  protected show() {
    this.width.set(this.trigger().nativeElement.offsetWidth)
    this.query.set('')
    this.active.set(Math.max(0, this.options().findIndex((o) => o.value === this.value())))
    this.open.set(true)
  }
  protected close() {
    this.open.set(false)
  }
  protected onQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value)
    this.active.set(0)
  }
  protected pick(o: ComboboxOption) {
    if (o.disabled) return
    this.value.set(o.value)
    this.close()
    this.trigger().nativeElement.focus()
  }
  protected onKey(e: KeyboardEvent) {
    const n = this.filtered().length
    if (e.key === 'ArrowDown') { e.preventDefault(); this.active.set(n ? (this.active() + 1) % n : 0) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); this.active.set(n ? (this.active() - 1 + n) % n : 0) }
    else if (e.key === 'Enter') {
      e.preventDefault()
      const o = this.filtered()[this.active()]
      if (o) this.pick(o)
    } else if (e.key === 'Escape') { this.close(); this.trigger().nativeElement.focus() }
  }
}
