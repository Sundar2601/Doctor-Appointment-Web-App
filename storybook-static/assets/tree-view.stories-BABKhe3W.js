import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, N as NgTemplateOutlet, i as input, m as model, s as signal, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, a2 as lucideFolder, w as lucideFile, C as lucideChevronRight, M as lucideChevronDown } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Expandable tree. `[(selected)]` holds the selected node id. */
let TreeViewComponent = class TreeViewComponent {
    nodes = input.required();
    selected = model(null);
    open = signal(new Set());
    isOpen(id) {
        return this.open().has(id);
    }
    activate(n) {
        this.selected.set(n.id);
        if (!n.children)
            return;
        const next = new Set(this.open());
        if (!next.delete(n.id))
            next.add(n.id);
        this.open.set(next);
    }
    static propDecorators = {
        nodes: [{ type: Input, args: [{ isSignal: true, alias: "nodes", required: true, transform: undefined },] }],
        selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false },] }, { type: Output, args: ["selectedChange",] }]
    };
};
TreeViewComponent = __decorate([
    Component({
        selector: 'app-tree-view',
        imports: [NgIcon, NgTemplateOutlet],
        viewProviders: [provideIcons({ lucideChevronDown, lucideChevronRight, lucideFile, lucideFolder })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block text-sm' },
        template: `
    <ng-template #branch let-nodes let-level="level">
      <ul [attr.role]="level === 0 ? 'tree' : 'group'" class="grid gap-0.5">
        @for (n of nodes; track n.id) {
          <li role="treeitem" [attr.aria-expanded]="n.children ? isOpen(n.id) : null" [attr.aria-selected]="selected() === n.id">
            <button
              type="button"
              class="hover:bg-accent focus-visible:ring-ring/50 flex h-7 w-full items-center gap-1.5 rounded-md pr-2 text-left focus-visible:ring-[3px] focus-visible:outline-none"
              [class.bg-accent]="selected() === n.id"
              [style.padding-left.px]="8 + level * 16"
              (click)="activate(n)"
            >
              @if (n.children) {
                <ng-icon [name]="isOpen(n.id) ? 'lucideChevronDown' : 'lucideChevronRight'" size="16" />
              } @else {
                <span class="size-4 shrink-0"></span>
              }
              <ng-icon [name]="n.children ? 'lucideFolder' : 'lucideFile'" size="16" />
              <span class="truncate">{{ n.label }}</span>
            </button>
            @if (n.children && isOpen(n.id)) {
              <ng-container [ngTemplateOutlet]="branch" [ngTemplateOutletContext]="{ $implicit: n.children, level: level + 1 }" />
            }
          </li>
        }
      </ul>
    </ng-template>
    <ng-container [ngTemplateOutlet]="branch" [ngTemplateOutletContext]="{ $implicit: nodes(), level: 0 }" />
  `,
    })
], TreeViewComponent);

const nodes = [{
  id: 'jipmer',
  label: 'JIPMER',
  children: [{
    id: 'jipmer-cardio',
    label: 'Cardiology',
    children: [{
      id: 'anand',
      label: 'Dr. Anand Kumar'
    }, {
      id: 'sangeetha',
      label: 'Dr. Sangeetha Pillai'
    }]
  }, {
    id: 'jipmer-neuro',
    label: 'Neurology',
    children: [{
      id: 'vikram',
      label: 'Dr. Vikram Iyer'
    }]
  }]
}, {
  id: 'aravind',
  label: 'Aravind Eye Hospital',
  children: [{
    id: 'aravind-peds',
    label: 'Pediatrics',
    children: [{
      id: 'meera',
      label: 'Dr. Meera Nair'
    }]
  }]
}, {
  id: 'mgmc',
  label: 'Mahatma Gandhi Medical College',
  children: [{
    id: 'suresh',
    label: 'Dr. Suresh Babu'
  }]
}];
const meta = {
  title: 'Navigation/Tree View',
  decorators: [moduleMetadata({
    imports: [TreeViewComponent]
  })],
  args: {
    nodes,
    selected: null
  },
  render: args => ({
    props: args,
    template: `
      <div class="w-72">
        <app-tree-view [nodes]="nodes" [(selected)]="selected" />
        <p class="text-muted-foreground mt-3 text-xs">Selected: {{ selected ?? 'none' }}</p>
      </div>`
  })
};
const Default = {};
const PreselectedDoctor = {
  args: {
    selected: 'anand'
  }
};
const FlatList = {
  args: {
    nodes: [{
      id: 'a',
      label: 'Appointments'
    }, {
      id: 'b',
      label: 'Prescriptions'
    }, {
      id: 'c',
      label: 'Reports'
    }]
  }
};
const __namedExportsOrder = ["Default", "PreselectedDoctor", "FlatList"];
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
PreselectedDoctor.parameters = {
  ...PreselectedDoctor.parameters,
  docs: {
    ...PreselectedDoctor.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    selected: 'anand'\n  }\n}",
      ...PreselectedDoctor.parameters?.docs?.source
    }
  }
};
FlatList.parameters = {
  ...FlatList.parameters,
  docs: {
    ...FlatList.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    nodes: [{\n      id: 'a',\n      label: 'Appointments'\n    }, {\n      id: 'b',\n      label: 'Prescriptions'\n    }, {\n      id: 'c',\n      label: 'Reports'\n    }]\n  }\n}",
      ...FlatList.parameters?.docs?.source
    }
  }
};

export { Default, FlatList, PreselectedDoctor, __namedExportsOrder, meta as default };
