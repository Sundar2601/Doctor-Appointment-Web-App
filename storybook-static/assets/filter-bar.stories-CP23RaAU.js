import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, m as model, c as computed, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, l as lucideX, g as lucideSearch } from './ng-icons-lucide-DvOyu-Mi.js';
import { e as eventValue } from './dom-events-CvB9dAwI.js';
import './preload-helper-D5QYaGzd.js';

/** Search box + toggleable filter chips + clear. Two-way: `[(search)]`, `[(active)]`. */
let FilterBarComponent = class FilterBarComponent {
    eventValue = eventValue;
    filters = input([]);
    placeholder = input('Search...');
    search = model('');
    active = model([]);
    dirty = computed(() => !!this.search() || this.active().length > 0);
    isOn(v) {
        return this.active().includes(v);
    }
    toggle(v) {
        this.active.update((a) => (a.includes(v) ? a.filter((x) => x !== v) : [...a, v]));
    }
    clear() {
        this.search.set('');
        this.active.set([]);
    }
    static propDecorators = {
        filters: [{ type: Input, args: [{ isSignal: true, alias: "filters", required: false, transform: undefined },] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }],
        search: [{ type: Input, args: [{ isSignal: true, alias: "search", required: false },] }, { type: Output, args: ["searchChange",] }],
        active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false },] }, { type: Output, args: ["activeChange",] }]
    };
};
FilterBarComponent = __decorate([
    Component({
        selector: 'app-filter-bar',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideSearch, lucideX })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex flex-wrap items-center gap-2', role: 'search' },
        template: `
    <div class="relative w-60">
      <ng-icon name="lucideSearch" size="16" class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
      <input
        class="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring/50 focus-visible:border-ring h-9 w-full rounded-md border pr-3 pl-9 text-sm shadow-xs focus-visible:ring-[3px] focus-visible:outline-none"
        type="search"
        [placeholder]="placeholder()"
        [attr.aria-label]="placeholder()"
        [value]="search()"
        (input)="search.set(eventValue($event))"
      />
    </div>
    @for (f of filters(); track f.value) {
      <button
        type="button"
        class="border-input focus-visible:ring-ring/50 inline-flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-sm shadow-xs focus-visible:ring-[3px] focus-visible:outline-none"
        [class]="isOn(f.value) ? 'text-foreground' : 'text-muted-foreground hover:bg-accent'"
        [attr.aria-pressed]="isOn(f.value)"
        (click)="toggle(f.value)"
      >
        {{ f.label }}
        @if (isOn(f.value)) {
          <ng-icon name="lucideX" size="12" strokeWidth="2.5" />
        }
      </button>
    }
    <ng-content />
    @if (dirty()) {
      <button
        type="button"
        class="hover:bg-accent text-foreground focus-visible:ring-ring/50 ml-auto inline-flex h-8 items-center rounded-md px-3 text-sm font-medium focus-visible:ring-[3px] focus-visible:outline-none"
        (click)="clear()"
      >
        Clear all
      </button>
    }
  `,
    })
], FilterBarComponent);

const filters = [{
  value: 'cardiology',
  label: 'Cardiology'
}, {
  value: 'pediatrics',
  label: 'Pediatrics'
}, {
  value: 'orthopedics',
  label: 'Orthopedics'
}, {
  value: 'available',
  label: 'Available today'
}];
const meta = {
  title: 'Forms/Filter Bar',
  decorators: [moduleMetadata({
    imports: [FilterBarComponent]
  })],
  argTypes: {
    placeholder: {
      control: 'text'
    },
    search: {
      control: 'text'
    }
  },
  args: {
    filters,
    placeholder: 'Search doctors...',
    search: '',
    active: []
  },
  render: args => ({
    props: args,
    template: `
      <div class="flex flex-col gap-3">
        <app-filter-bar [filters]="filters" [placeholder]="placeholder" [(search)]="search" [(active)]="active" />
        <p class="text-muted-foreground text-xs">search: "{{ search }}" | active: {{ active.join(', ') || 'none' }}</p>
      </div>`
  })
};
const Default = {};
const WithActiveFilters = {
  args: {
    search: 'Kumar',
    active: ['cardiology', 'available']
  }
};
const SearchOnly = {
  args: {
    filters: [],
    placeholder: 'Search hospitals...'
  }
};
const __namedExportsOrder = ["Default", "WithActiveFilters", "SearchOnly"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
    }
  }
};
WithActiveFilters.parameters = {
  ...WithActiveFilters.parameters,
  docs: {
    ...WithActiveFilters.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    search: 'Kumar',\n    active: ['cardiology', 'available']\n  }\n}",
      ...WithActiveFilters.parameters?.docs?.source
    }
  }
};
SearchOnly.parameters = {
  ...SearchOnly.parameters,
  docs: {
    ...SearchOnly.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    filters: [],\n    placeholder: 'Search hospitals...'\n  }\n}",
      ...SearchOnly.parameters?.docs?.source
    }
  }
};

export { Default, SearchOnly, WithActiveFilters, __namedExportsOrder, meta as default };
