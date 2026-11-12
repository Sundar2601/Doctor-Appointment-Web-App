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
    <div class="relative w-64">
      <ng-icon name="lucideSearch" size="16" class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
      <input class="border-input bg-background placeholder:text-muted-foreground focus-visible:outline-ring h-9 w-full rounded-md border pr-3 pl-9 text-sm focus-visible:outline-2 focus-visible:outline-offset-1" type="search" [placeholder]="placeholder()" [attr.aria-label]="placeholder()" [value]="search()" (input)="search.set($any($event.target).value)" />
    </div>
    @for (f of filters(); track f.value) {
      <button
        type="button"
        class="focus-visible:outline-ring inline-flex h-8 items-center rounded-full border px-3 text-sm font-medium focus-visible:outline-2"
        [class]="isOn(f.value) ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-accent'"
        [attr.aria-pressed]="isOn(f.value)"
        (click)="toggle(f.value)"
      >{{ f.label }}</button>
    }
    @if (dirty()) {
      <button type="button" class="text-muted-foreground hover:text-foreground inline-flex h-8 items-center gap-1 px-2 text-sm" (click)="clear()"><ng-icon name="lucideX" size="14" />Clear</button>
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
