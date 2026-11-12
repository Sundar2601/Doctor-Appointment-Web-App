import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideSearch, lucideX } from '@ng-icons/lucide'

export interface FilterOption {
  value: string
  label: string
}

/** Search box + toggleable filter chips + clear. Two-way: `[(search)]`, `[(active)]`. */
@Component({
  selector: 'app-filter-bar',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideSearch, lucideX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-wrap items-center gap-2', role: 'search' },
  template: `
    <div class="relative w-60">
      <ng-icon name="lucideSearch" size="16" class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
      <input class="border-input bg-background placeholder:text-muted-foreground focus-visible:outline-ring h-9 w-full rounded-md border pr-3 pl-9 text-sm focus-visible:outline-2 focus-visible:outline-offset-1" type="search" [placeholder]="placeholder()" [attr.aria-label]="placeholder()" [value]="search()" (input)="search.set($any($event.target).value)" />
    </div>
    @for (f of filters(); track f.value) {
      <button
        type="button"
        class="focus-visible:outline-ring border-input inline-flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-sm focus-visible:outline-2"
        [class]="isOn(f.value) ? 'text-foreground' : 'text-muted-foreground hover:bg-accent'"
        [attr.aria-pressed]="isOn(f.value)"
        (click)="toggle(f.value)"
      >{{ f.label }}@if (isOn(f.value)) { <ng-icon name="lucideX" size="12" /> }</button>
    }
    <ng-content />
    @if (dirty()) {
      <button type="button" class="hover:bg-accent text-foreground ml-auto inline-flex h-8 items-center rounded-md px-3 text-sm font-medium" (click)="clear()">Clear all</button>
    }
  `,
})
export class FilterBarComponent {
  readonly filters = input<FilterOption[]>([])
  readonly placeholder = input('Search...')
  readonly search = model('')
  readonly active = model<string[]>([])
  protected readonly dirty = computed(() => !!this.search() || this.active().length > 0)
  protected isOn(v: string) {
    return this.active().includes(v)
  }
  protected toggle(v: string) {
    this.active.update((a) => (a.includes(v) ? a.filter((x) => x !== v) : [...a, v]))
  }
  protected clear() {
    this.search.set('')
    this.active.set([])
  }
}
