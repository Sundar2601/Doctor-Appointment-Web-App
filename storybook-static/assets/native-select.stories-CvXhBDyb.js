import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, M as lucideChevronDown } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Native Select": wraps a real `<select>` and adds a chevron. Usage: `<app-native-select><select id="x">...</select></app-native-select>`. */
let NativeSelectComponent = class NativeSelectComponent {
};
NativeSelectComponent = __decorate([
    Component({
        selector: 'app-native-select',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideChevronDown })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'relative block w-full [&>select]:border-input [&>select]:bg-background [&>select]:h-9 [&>select]:w-full [&>select]:cursor-pointer [&>select]:appearance-none [&>select]:rounded-md [&>select]:border [&>select]:py-0 [&>select]:pr-9 [&>select]:pl-3 [&>select]:text-sm [&>select]:shadow-xs [&>select]:focus-visible:border-ring [&>select]:focus-visible:ring-[3px] [&>select]:focus-visible:ring-ring/50 [&>select]:focus-visible:outline-none [&>select[aria-invalid=true]]:ring-destructive/20 [&>select:disabled]:cursor-not-allowed [&>select:disabled]:opacity-50 [&>select[aria-invalid=true]]:border-destructive',
        },
        template: `
    <ng-content select="select" />
    <ng-icon name="lucideChevronDown" class="text-muted-foreground pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2" />
  `,
    })
], NativeSelectComponent);

const meta = {
  title: 'Forms/Native Select',
  decorators: [moduleMetadata({
    imports: [NativeSelectComponent]
  })],
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    }
  },
  args: {
    disabled: false,
    invalid: false
  },
  render: args => ({
    props: args,
    template: `
      <div class="w-64"><app-native-select>
        <select aria-label="Specialty" [disabled]="disabled" [attr.aria-invalid]="invalid ? 'true' : null">
          <option value="">Select a specialty</option>
          <option value="cardiology">Cardiology</option>
          <option value="dermatology">Dermatology</option>
          <option value="neurology">Neurology</option>
        </select>
      </app-native-select></div>`
  })
};
const Default = {};
const Invalid = {
  args: {
    invalid: true
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const __namedExportsOrder = ["Default", "Invalid", "Disabled"];
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
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...Invalid.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    invalid: true\n  }\n}",
      ...Invalid.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};

export { Default, Disabled, Invalid, __namedExportsOrder, meta as default };
