import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { i as input, m as model, o as output, c as computed, O as Output, I as Input$1, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons } from './ng-icons-lucide-DF7QvMAc.js';
import { A as ANDROID_ICONS } from './android-icons-D68AZP6J.js';
import './preload-helper-D5QYaGzd.js';

/** Material 3 chip (32dp). Filter chips toggle `selected` and show a check; input chips can be removed. */
let AndroidChipComponent = class AndroidChipComponent {
    kind = input('assist');
    label = input.required();
    icon = input();
    selected = model(false);
    removed = output();
    classes = computed(() => {
        const base = 'text-foreground flex h-8 items-center rounded-lg';
        return this.selected() ? `${base} bg-secondary` : `${base} bg-background border-border border`;
    });
    toggle() {
        if (this.kind() === 'filter')
            this.selected.set(!this.selected());
    }
    static propDecorators = {
        kind: [{ type: Input$1, args: [{ isSignal: true, alias: "kind", required: false, transform: undefined },] }],
        label: [{ type: Input$1, args: [{ isSignal: true, alias: "label", required: true, transform: undefined },] }],
        icon: [{ type: Input$1, args: [{ isSignal: true, alias: "icon", required: false, transform: undefined },] }],
        selected: [{ type: Input$1, args: [{ isSignal: true, alias: "selected", required: false },] }, { type: Output, args: ["selectedChange",] }],
        removed: [{ type: Output, args: ["removed",] }]
    };
};
AndroidChipComponent = __decorate([
    Component({
        selector: 'app-android-chip',
        imports: [NgIcon],
        viewProviders: [provideIcons(ANDROID_ICONS)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'inline-flex' },
        template: `
    <span [class]="classes()">
      <button
        type="button"
        class="flex h-full items-center gap-2 pl-3 text-sm font-medium"
        [class.pr-3]="kind() !== 'input'"
        [attr.aria-pressed]="kind() === 'filter' ? selected() : null"
        (click)="toggle()"
      >
        @if (kind() === 'filter' && selected()) {
          <ng-icon name="lucideCheck" size="18" />
        } @else if (icon()) {
          <ng-icon [name]="icon()!" size="18" />
        }
        {{ label() }}
      </button>
      @if (kind() === 'input') {
        <button
          type="button"
          class="flex size-8 items-center justify-center"
          [attr.aria-label]="'Remove ' + label()"
          (click)="removed.emit()"
        >
          <ng-icon name="lucideX" size="16" />
        </button>
      }
    </span>
  `,
    })
], AndroidChipComponent);

const meta = {
  title: 'Mobile/Android/Chips',
  component: AndroidChipComponent,
  decorators: [moduleMetadata({
    imports: [AndroidChipComponent]
  })],
  argTypes: {
    kind: {
      control: 'select',
      options: ['assist', 'filter', 'input']
    }
  },
  args: {
    kind: 'assist',
    label: 'Assist',
    selected: false
  },
  render: args => ({
    props: args,
    template: `<div class="p-4"><app-android-chip [kind]="kind" [label]="label" [icon]="icon" [(selected)]="selected" /></div>`
  })
};
const Assist = {};
const Filter = {
  args: {
    kind: 'filter',
    label: 'Filter'
  }
};
const FilterSelected = {
  args: {
    kind: 'filter',
    label: 'Filter',
    selected: true
  }
};
const Input = {
  args: {
    kind: 'input',
    label: 'Input'
  }
};
const AssistWithIcon = {
  args: {
    icon: 'lucideCalendar',
    label: 'Add to calendar'
  }
};
const Overview = {
  render: () => ({
    template: `
      <div class="flex gap-2 p-4">
        <app-android-chip label="Assist" />
        <app-android-chip kind="filter" label="Filter" [selected]="true" />
        <app-android-chip kind="input" label="Input" />
      </div>`
  })
};
const __namedExportsOrder = ["Assist", "Filter", "FilterSelected", "Input", "AssistWithIcon", "Overview"];
Assist.parameters = {
  ...Assist.parameters,
  docs: {
    ...Assist.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Assist.parameters?.docs?.source
    }
  }
};
Filter.parameters = {
  ...Filter.parameters,
  docs: {
    ...Filter.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    kind: 'filter',\n    label: 'Filter'\n  }\n}",
      ...Filter.parameters?.docs?.source
    }
  }
};
FilterSelected.parameters = {
  ...FilterSelected.parameters,
  docs: {
    ...FilterSelected.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    kind: 'filter',\n    label: 'Filter',\n    selected: true\n  }\n}",
      ...FilterSelected.parameters?.docs?.source
    }
  }
};
Input.parameters = {
  ...Input.parameters,
  docs: {
    ...Input.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    kind: 'input',\n    label: 'Input'\n  }\n}",
      ...Input.parameters?.docs?.source
    }
  }
};
AssistWithIcon.parameters = {
  ...AssistWithIcon.parameters,
  docs: {
    ...AssistWithIcon.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    icon: 'lucideCalendar',\n    label: 'Add to calendar'\n  }\n}",
      ...AssistWithIcon.parameters?.docs?.source
    }
  }
};
Overview.parameters = {
  ...Overview.parameters,
  docs: {
    ...Overview.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `\n      <div class=\"flex gap-2 p-4\">\n        <app-android-chip label=\"Assist\" />\n        <app-android-chip kind=\"filter\" label=\"Filter\" [selected]=\"true\" />\n        <app-android-chip kind=\"input\" label=\"Input\" />\n      </div>`\n  })\n}",
      ...Overview.parameters?.docs?.source
    }
  }
};

export { Assist, AssistWithIcon, Filter, FilterSelected, Input, Overview, __namedExportsOrder, meta as default };
