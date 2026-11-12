import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, N as NgTemplateOutlet, i as input, m as model, o as output, O as Output, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, b as lucideUser, t as lucideBell, J as lucideSlidersHorizontal, C as lucideChevronRight } from './ng-icons-lucide-DvOyu-Mi.js';
import { I as IosSwitchComponent } from './ios-switch.component-DP2YxGDU.js';
import './preload-helper-D5QYaGzd.js';

/** Inset grouped iOS list container. */
let IosListComponent = class IosListComponent {
};
IosListComponent = __decorate([
    Component({
        selector: 'app-ios-list',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-background block w-full overflow-hidden rounded-[10px]', role: 'list' },
        template: `<ng-content />`,
    })
], IosListComponent);
/** A 44pt list row: `default` (disclosure chevron), `value` (trailing value + chevron) or `toggle` (switch). */
let IosListRowComponent = class IosListRowComponent {
    label = input.required();
    variant = input('default');
    value = input('');
    icon = input('');
    checked = model(false);
    activate = output();
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true, transform: undefined },] }],
        variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false, transform: undefined },] }],
        value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false, transform: undefined },] }],
        icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false, transform: undefined },] }],
        checked: [{ type: Input, args: [{ isSignal: true, alias: "checked", required: false },] }, { type: Output, args: ["checkedChange",] }],
        activate: [{ type: Output, args: ["activate",] }]
    };
};
IosListRowComponent = __decorate([
    Component({
        selector: 'app-ios-list-row',
        imports: [NgIcon, NgTemplateOutlet, IosSwitchComponent],
        viewProviders: [provideIcons({ lucideChevronRight, lucideSlidersHorizontal, lucideBell, lucideUser })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'relative block min-h-[44px] [&:last-child_.ios-divider]:hidden', role: 'listitem' },
        template: `
    @if (variant() === 'toggle') {
      <div class="flex min-h-[44px] items-center gap-3 px-4 py-1.5">
        <ng-container [ngTemplateOutlet]="content" />
        <app-ios-switch [(checked)]="checked" [label]="label()" />
      </div>
    } @else {
      <button type="button" class="hover:bg-muted/60 flex min-h-[44px] w-full items-center gap-3 px-4 text-left" (click)="activate.emit()">
        <ng-container [ngTemplateOutlet]="content" />
        @if (variant() === 'value') {
          <span class="text-muted-foreground text-[17px]">{{ value() }}</span>
        }
        <ng-icon name="lucideChevronRight" size="18" class="text-muted-foreground" aria-hidden="true" />
      </button>
    }
    <ng-template #content>
      @if (icon()) {
        <span class="bg-primary text-primary-foreground flex size-7 shrink-0 items-center justify-center rounded-md" aria-hidden="true">
          <ng-icon [name]="icon()" size="16" />
        </span>
      }
      <span class="text-foreground flex-1 text-[17px]">{{ label() }}</span>
    </ng-template>
    <span class="ios-divider bg-border absolute right-0 bottom-0 h-px" [class.left-14]="icon()" [class.left-4]="!icon()"></span>
  `,
    })
], IosListRowComponent);

const meta = {
  title: 'Mobile/iOS/List',
  decorators: [moduleMetadata({
    imports: [IosListComponent, IosListRowComponent]
  })],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'value', 'toggle']
    }
  },
  args: {
    label: 'Notifications',
    variant: 'default',
    value: 'On',
    icon: 'lucideSlidersHorizontal',
    checked: true
  },
  render: args => ({
    props: args,
    template: `<div class="w-[343px]"><app-ios-list>
      <app-ios-list-row [label]="label" [variant]="variant" [value]="value" [icon]="icon" [(checked)]="checked" />
    </app-ios-list></div>`
  })
};
const RowDefault = {};
const RowValue = {
  args: {
    label: 'Sounds',
    variant: 'value'
  }
};
const RowToggle = {
  args: {
    label: 'Airplane Mode',
    variant: 'toggle'
  }
};
const Grouped = {
  render: () => ({
    props: {
      on: true
    },
    template: `<div class="w-[343px]"><app-ios-list>
      <app-ios-list-row label="Notifications" icon="lucideSlidersHorizontal" />
      <app-ios-list-row label="Sounds" variant="value" value="On" icon="lucideSlidersHorizontal" />
      <app-ios-list-row label="Focus" icon="lucideSlidersHorizontal" />
      <app-ios-list-row label="Airplane Mode" variant="toggle" icon="lucideSlidersHorizontal" [(checked)]="on" />
    </app-ios-list></div>`
  })
};
const __namedExportsOrder = ["RowDefault", "RowValue", "RowToggle", "Grouped"];
RowDefault.parameters = {
  ...RowDefault.parameters,
  docs: {
    ...RowDefault.parameters?.docs,
    source: {
      originalSource: "{}",
      ...RowDefault.parameters?.docs?.source
    }
  }
};
RowValue.parameters = {
  ...RowValue.parameters,
  docs: {
    ...RowValue.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Sounds',\n    variant: 'value'\n  }\n}",
      ...RowValue.parameters?.docs?.source
    }
  }
};
RowToggle.parameters = {
  ...RowToggle.parameters,
  docs: {
    ...RowToggle.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Airplane Mode',\n    variant: 'toggle'\n  }\n}",
      ...RowToggle.parameters?.docs?.source
    }
  }
};
Grouped.parameters = {
  ...Grouped.parameters,
  docs: {
    ...Grouped.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {\n      on: true\n    },\n    template: `<div class=\"w-[343px]\"><app-ios-list>\n      <app-ios-list-row label=\"Notifications\" icon=\"lucideSlidersHorizontal\" />\n      <app-ios-list-row label=\"Sounds\" variant=\"value\" value=\"On\" icon=\"lucideSlidersHorizontal\" />\n      <app-ios-list-row label=\"Focus\" icon=\"lucideSlidersHorizontal\" />\n      <app-ios-list-row label=\"Airplane Mode\" variant=\"toggle\" icon=\"lucideSlidersHorizontal\" [(checked)]=\"on\" />\n    </app-ios-list></div>`\n  })\n}",
      ...Grouped.parameters?.docs?.source
    }
  }
};

export { Grouped, RowDefault, RowToggle, RowValue, __namedExportsOrder, meta as default };
