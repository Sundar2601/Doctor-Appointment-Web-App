import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideSearch } from '@ng-icons/lucide'

export interface CommandItem { value: string; label: string; group?: string; shortcut?: string; disabled?: boolean }
let uid = 0

/** Command palette (combobox + listbox, filter, arrow/Enter keys). Usage: `<app-command [items]="items" (selected)="run($event)" />`. Place inside `app-dialog` for a modal palette. */
@Component({
  selector: 'app-command',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideSearch })],
  host: { class: 'bg-popover text-popover-foreground flex w-full flex-col overflow-hidden rounded-md border shadow-md' },
  template: `
    <div class="flex h-9 items-center gap-2 border-b px-3">
      <ng-icon name="lucideSearch" size="16" class="text-muted-foreground shrink-0" />
      <input
        type="text"
        role="combobox"
        aria-autocomplete="list"
        [attr.aria-expanded]="true"
        [attr.aria-controls]="listId"
        [attr.aria-activedescendant]="activeId()"
        [placeholder]="placeholder()"
        [value]="query()"
        (input)="onInput($any($event.target).value)"
        (keydown)="onKey($event)"
        class="placeholder:text-muted-foreground h-10 w-full bg-transparent text-sm outline-none"
      />
    </div>
    <div [id]="listId" role="listbox" class="max-h-72 overflow-auto p-1">
      @for (g of groups(); track g.name) {
        <div role="group" [attr.aria-label]="g.name || null">
          @if (g.name) { <div class="text-muted-foreground px-2 py-1.5 text-xs font-medium">{{ g.name }}</div> }
          @for (it of g.items; track it.value) {
            <div
              role="option"
              [id]="optId(it)"
              [attr.aria-selected]="isActive(it)"
              [attr.aria-disabled]="it.disabled || null"
              (click)="pick(it)"
              (mousemove)="activate(it)"
              class="flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm aria-disabled:opacity-50"
              [class.bg-accent]="isActive(it)"
              [class.text-accent-foreground]="isActive(it)"
            >
              <span class="flex-1">{{ it.label }}</span>
              @if (it.shortcut) { <span class="text-muted-foreground ml-auto text-xs tracking-widest">{{ it.shortcut }}</span> }
            </div>
          }
        </div>
      } @empty {
        <div class="text-muted-foreground py-6 text-center text-sm">{{ emptyText() }}</div>
      }
    </div>
  `,
})
export class CommandComponent {
  readonly items = input.required<CommandItem[]>()
  readonly placeholder = input('Type a command or search...')
  readonly emptyText = input('No results found.')
  readonly selected = output<CommandItem>()

  protected readonly listId = `app-command-${++uid}`
  protected readonly query = signal('')
  private readonly active = signal(0)

  private readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase()
    return this.items().filter((i) => !q || i.label.toLowerCase().includes(q))
  })
  protected readonly groups = computed(() => {
    const map = new Map<string, CommandItem[]>()
    for (const i of this.filtered()) map.set(i.group ?? '', [...(map.get(i.group ?? '') ?? []), i])
    return [...map].map(([name, items]) => ({ name, items }))
  })
  private readonly flat = computed(() => this.groups().flatMap((g) => g.items))

  protected optId(i: CommandItem): string { return `${this.listId}-${i.value}` }
  protected isActive(i: CommandItem): boolean { return this.flat()[this.active()] === i }
  protected readonly activeId = computed(() => {
    const i = this.flat()[this.active()]
    return i ? this.optId(i) : null
  })
  protected activate(i: CommandItem): void { if (!i.disabled) this.active.set(this.flat().indexOf(i)) }
  protected pick(i: CommandItem): void { if (!i.disabled) this.selected.emit(i) }
  protected onInput(v: string): void { this.query.set(v); this.active.set(0) }

  protected onKey(e: KeyboardEvent): void {
    const n = this.flat().length
    if (!n) return
    if (e.key === 'ArrowDown') this.active.set((this.active() + 1) % n)
    else if (e.key === 'ArrowUp') this.active.set((this.active() - 1 + n) % n)
    else if (e.key === 'Home') this.active.set(0)
    else if (e.key === 'End') this.active.set(n - 1)
    else if (e.key === 'Enter') { const i = this.flat()[this.active()]; if (i) this.pick(i) }
    else return
    e.preventDefault()
    queueMicrotask(() => document.getElementById(this.activeId() ?? '')?.scrollIntoView({ block: 'nearest' }))
  }
}
