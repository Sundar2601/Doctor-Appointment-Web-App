import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideArrowDown, lucideArrowUp, lucideChevronsUpDown } from '@ng-icons/lucide'
import { ButtonDirective } from './button.directive'
import { CheckboxDirective } from './checkbox.directive'
import { ControlDirective } from './control.directive'
import { TableDirective } from './table.directive'

export interface DataTableColumn {
  key: string
  label: string
  sortable?: boolean
  align?: 'left' | 'right'
}
export type DataTableRow = Record<string, string | number>

/** Sortable, filterable, selectable, paginated table. */
@Component({
  selector: 'app-data-table',
  imports: [ButtonDirective, CheckboxDirective, ControlDirective, TableDirective, NgIcon],
  viewProviders: [provideIcons({ lucideArrowDown, lucideArrowUp, lucideChevronsUpDown })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col gap-4' },
  template: `
    @if (filterKey()) {
      <input
        appControl
        class="max-w-[280px]"
        type="search"
        [placeholder]="filterPlaceholder()"
        [attr.aria-label]="filterPlaceholder()"
        [value]="filter()"
        (input)="setFilter($event)"
      />
    }
    <div class="overflow-hidden rounded-md border [&_tbody_tr:last-child]:border-b-0">
      <table appTable>
        <thead>
          <tr>
            @if (selectable()) {
              <th class="w-11 !px-0 !text-center">
                <input type="checkbox" appCheckbox aria-label="Select all" [checked]="allSelected()" (change)="toggleAll()" />
              </th>
            }
            @for (c of columns(); track c.key) {
              <th [class.num]="c.align === 'right'" [attr.aria-sort]="ariaSort(c)">
                @if (c.sortable) {
                  <button type="button" class="inline-flex items-center gap-1 font-medium" (click)="sortBy(c.key)">
                    {{ c.label }}
                    <ng-icon [name]="sortIcon(c.key)" size="14" />
                  </button>
                } @else {
                  {{ c.label }}
                }
              </th>
            }
          </tr>
        </thead>
        <tbody>
          @for (r of pageRows(); track r.index) {
            <tr [attr.aria-selected]="selectable() ? isSelected(r.index) : null">
              @if (selectable()) {
                <td class="w-11 !px-0 text-center">
                  <input type="checkbox" appCheckbox aria-label="Select row" [checked]="isSelected(r.index)" (change)="toggle(r.index)" />
                </td>
              }
              @for (c of columns(); track c.key) {
                <td [class.num]="c.align === 'right'">{{ r.row[c.key] }}</td>
              }
            </tr>
          } @empty {
            <tr>
              <td class="text-muted-foreground text-center" [attr.colspan]="columns().length + (selectable() ? 1 : 0)">No results.</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <div class="flex items-center justify-between">
      <p class="text-muted-foreground text-sm">
        @if (selectable()) {
          {{ selected().size }} of {{ rows().length }} row(s) selected.
        } @else {
          {{ view().length }} row(s).
        }
      </p>
      <div class="flex gap-2">
        <button appButton variant="outline" size="sm" type="button" [disabled]="page() === 0" (click)="page.set(page() - 1)">
          Previous
        </button>
        <button appButton variant="outline" size="sm" type="button" [disabled]="page() >= pageCount() - 1" (click)="page.set(page() + 1)">
          Next
        </button>
      </div>
    </div>
  `,
})
export class DataTableComponent {
  readonly columns = input.required<DataTableColumn[]>()
  readonly rows = input.required<DataTableRow[]>()
  readonly selectable = input(false)
  readonly pageSize = input(10)
  /** Column key searched by the filter box; omit to hide the filter. */
  readonly filterKey = input<string>()
  readonly filterPlaceholder = input('Filter...')
  /** Emits the selected rows. */
  readonly selectionChange = output<DataTableRow[]>()

  protected readonly filter = signal('')
  protected readonly page = signal(0)
  protected readonly selected = signal<ReadonlySet<number>>(new Set())
  private readonly sort = signal<{ key: string; dir: 'asc' | 'desc' } | null>(null)

  protected readonly view = computed(() => {
    const key = this.filterKey()
    const q = this.filter().toLowerCase()
    let list = this.rows().map((row, index) => ({ row, index }))
    if (key && q)
      list = list.filter((r) =>
        String(r.row[key] ?? '')
          .toLowerCase()
          .includes(q),
      )
    const s = this.sort()
    if (s) {
      const m = s.dir === 'asc' ? 1 : -1
      list = [...list].sort((a, b) => {
        const x = a.row[s.key],
          y = b.row[s.key]
        return (
          (typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y), undefined, { numeric: true })) * m
        )
      })
    }
    return list
  })
  protected readonly pageCount = computed(() => Math.max(1, Math.ceil(this.view().length / this.pageSize())))
  protected readonly pageRows = computed(() => this.view().slice(this.page() * this.pageSize(), (this.page() + 1) * this.pageSize()))
  protected readonly allSelected = computed(() => this.pageRows().length > 0 && this.pageRows().every((r) => this.selected().has(r.index)))

  protected setFilter(e: Event) {
    this.filter.set((e.target as HTMLInputElement).value)
    this.page.set(0)
  }
  protected sortBy(key: string) {
    const s = this.sort()
    this.sort.set(!s || s.key !== key ? { key, dir: 'asc' } : s.dir === 'asc' ? { key, dir: 'desc' } : null)
  }
  protected sortIcon(key: string) {
    const s = this.sort()
    return s?.key !== key ? 'lucideChevronsUpDown' : s.dir === 'asc' ? 'lucideArrowUp' : 'lucideArrowDown'
  }
  protected ariaSort(c: DataTableColumn) {
    const s = this.sort()
    return c.sortable ? (s?.key === c.key ? (s.dir === 'asc' ? 'ascending' : 'descending') : 'none') : null
  }
  protected isSelected(i: number) {
    return this.selected().has(i)
  }
  protected toggle(i: number) {
    const next = new Set(this.selected())
    if (!next.delete(i)) next.add(i)
    this.commit(next)
  }
  protected toggleAll() {
    const next = new Set(this.selected())
    const all = this.allSelected()
    for (const r of this.pageRows()) {
      if (all) next.delete(r.index)
      else next.add(r.index)
    }
    this.commit(next)
  }
  private commit(next: Set<number>) {
    this.selected.set(next)
    this.selectionChange.emit(this.rows().filter((_, i) => next.has(i)))
  }
}
