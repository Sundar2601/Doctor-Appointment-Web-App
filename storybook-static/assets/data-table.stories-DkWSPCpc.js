import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, s as signal, c as computed, O as Output, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, F as lucideChevronsUpDown, G as lucideArrowUp, H as lucideArrowDown } from './ng-icons-lucide-DvOyu-Mi.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { C as CheckboxDirective } from './checkbox.directive-Cu2iCAqr.js';
import { C as ControlDirective } from './control.directive-B1rJ-pBE.js';
import { T as TableDirective } from './table.directive-x0tPQ923.js';
import './preload-helper-D5QYaGzd.js';

/** Sortable, filterable, selectable, paginated table. */
let DataTableComponent = class DataTableComponent {
    columns = input.required();
    rows = input.required();
    selectable = input(false);
    pageSize = input(10);
    filterKey = input();
    filterPlaceholder = input('Filter...');
    selectionChange = output();
    filter = signal('');
    page = signal(0);
    selected = signal(new Set());
    sort = signal(null);
    view = computed(() => {
        const key = this.filterKey();
        const q = this.filter().toLowerCase();
        let list = this.rows().map((row, index) => ({ row, index }));
        if (key && q)
            list = list.filter((r) => String(r.row[key] ?? '')
                .toLowerCase()
                .includes(q));
        const s = this.sort();
        if (s) {
            const m = s.dir === 'asc' ? 1 : -1;
            list = [...list].sort((a, b) => {
                const x = a.row[s.key], y = b.row[s.key];
                return ((typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y), undefined, { numeric: true })) * m);
            });
        }
        return list;
    });
    pageCount = computed(() => Math.max(1, Math.ceil(this.view().length / this.pageSize())));
    pageRows = computed(() => this.view().slice(this.page() * this.pageSize(), (this.page() + 1) * this.pageSize()));
    allSelected = computed(() => this.pageRows().length > 0 && this.pageRows().every((r) => this.selected().has(r.index)));
    setFilter(e) {
        this.filter.set(e.target.value);
        this.page.set(0);
    }
    sortBy(key) {
        const s = this.sort();
        this.sort.set(!s || s.key !== key ? { key, dir: 'asc' } : s.dir === 'asc' ? { key, dir: 'desc' } : null);
    }
    sortIcon(key) {
        const s = this.sort();
        return s?.key !== key ? 'lucideChevronsUpDown' : s.dir === 'asc' ? 'lucideArrowUp' : 'lucideArrowDown';
    }
    ariaSort(c) {
        const s = this.sort();
        return c.sortable ? (s?.key === c.key ? (s.dir === 'asc' ? 'ascending' : 'descending') : 'none') : null;
    }
    isSelected(i) {
        return this.selected().has(i);
    }
    toggle(i) {
        const next = new Set(this.selected());
        if (!next.delete(i))
            next.add(i);
        this.commit(next);
    }
    toggleAll() {
        const next = new Set(this.selected());
        const all = this.allSelected();
        for (const r of this.pageRows()) {
            if (all)
                next.delete(r.index);
            else
                next.add(r.index);
        }
        this.commit(next);
    }
    commit(next) {
        this.selected.set(next);
        this.selectionChange.emit(this.rows().filter((_, i) => next.has(i)));
    }
    static propDecorators = {
        columns: [{ type: Input, args: [{ isSignal: true, alias: "columns", required: true, transform: undefined },] }],
        rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: true, transform: undefined },] }],
        selectable: [{ type: Input, args: [{ isSignal: true, alias: "selectable", required: false, transform: undefined },] }],
        pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false, transform: undefined },] }],
        filterKey: [{ type: Input, args: [{ isSignal: true, alias: "filterKey", required: false, transform: undefined },] }],
        filterPlaceholder: [{ type: Input, args: [{ isSignal: true, alias: "filterPlaceholder", required: false, transform: undefined },] }],
        selectionChange: [{ type: Output, args: ["selectionChange",] }]
    };
};
DataTableComponent = __decorate([
    Component({
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
], DataTableComponent);

const columns = [{
  key: 'doctor',
  label: 'Doctor',
  sortable: true
}, {
  key: 'specialty',
  label: 'Specialty',
  sortable: true
}, {
  key: 'hospital',
  label: 'Hospital'
}, {
  key: 'fee',
  label: 'Fee (₹)',
  sortable: true,
  align: 'right'
}];
const rows = [{
  doctor: 'Dr. Anand Kumar',
  specialty: 'Cardiology',
  hospital: 'JIPMER',
  fee: 800
}, {
  doctor: 'Dr. Meera Nair',
  specialty: 'Pediatrics',
  hospital: 'Aravind Eye Hospital',
  fee: 500
}, {
  doctor: 'Dr. Suresh Babu',
  specialty: 'Orthopedics',
  hospital: 'Mahatma Gandhi Medical College',
  fee: 700
}, {
  doctor: 'Dr. Kavitha Rajan',
  specialty: 'Dermatology',
  hospital: 'Pondicherry Institute of Medical Sciences',
  fee: 600
}, {
  doctor: 'Dr. Vikram Iyer',
  specialty: 'Neurology',
  hospital: 'JIPMER',
  fee: 900
}, {
  doctor: 'Dr. Divya Lakshmanan',
  specialty: 'Gynecology',
  hospital: 'Aravind Eye Hospital',
  fee: 650
}, {
  doctor: 'Dr. Ramesh Chandran',
  specialty: 'ENT',
  hospital: 'Mahatma Gandhi Medical College',
  fee: 450
}, {
  doctor: 'Dr. Sangeetha Pillai',
  specialty: 'Cardiology',
  hospital: 'Pondicherry Institute of Medical Sciences',
  fee: 850
}];
const meta = {
  title: 'Data/Data Table',
  decorators: [moduleMetadata({
    imports: [DataTableComponent]
  })],
  argTypes: {
    selectable: {
      control: 'boolean'
    },
    pageSize: {
      control: 'number'
    },
    filterKey: {
      control: 'select',
      options: [undefined, 'doctor', 'specialty', 'hospital']
    },
    filterPlaceholder: {
      control: 'text'
    }
  },
  args: {
    columns,
    rows,
    selectable: false,
    pageSize: 5,
    filterKey: 'doctor',
    filterPlaceholder: 'Filter doctors...'
  },
  render: args => ({
    props: args,
    template: `<app-data-table [columns]="columns" [rows]="rows" [selectable]="selectable" [pageSize]="pageSize" [filterKey]="filterKey" [filterPlaceholder]="filterPlaceholder" />`
  })
};
const Default = {};
const Selectable = {
  args: {
    selectable: true
  }
};
const SmallPages = {
  args: {
    pageSize: 3,
    filterKey: undefined
  }
};
const Empty = {
  args: {
    rows: [],
    filterKey: undefined
  }
};
const __namedExportsOrder = ["Default", "Selectable", "SmallPages", "Empty"];
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
Selectable.parameters = {
  ...Selectable.parameters,
  docs: {
    ...Selectable.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    selectable: true\n  }\n}",
      ...Selectable.parameters?.docs?.source
    }
  }
};
SmallPages.parameters = {
  ...SmallPages.parameters,
  docs: {
    ...SmallPages.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    pageSize: 3,\n    filterKey: undefined\n  }\n}",
      ...SmallPages.parameters?.docs?.source
    }
  }
};
Empty.parameters = {
  ...Empty.parameters,
  docs: {
    ...Empty.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    rows: [],\n    filterKey: undefined\n  }\n}",
      ...Empty.parameters?.docs?.source
    }
  }
};

export { Default, Empty, Selectable, SmallPages, __namedExportsOrder, meta as default };
