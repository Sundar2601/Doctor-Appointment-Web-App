import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Marker": inline status / separator with a centred label, e.g. `<app-marker label="Today" />`. */
let MarkerComponent = class MarkerComponent {
    label = input.required();
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true, transform: undefined },] }]
    };
};
MarkerComponent = __decorate([
    Component({
        selector: 'app-marker',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'text-muted-foreground flex items-center gap-4 text-sm', role: 'separator', '[attr.aria-label]': 'label()' },
        template: `
    <span class="bg-border h-px flex-1"></span>
    <span>{{ label() }}</span>
    <span class="bg-border h-px flex-1"></span>
  `,
    })
], MarkerComponent);

const meta = {
  title: 'AI/Marker',
  decorators: [moduleMetadata({
    imports: [MarkerComponent]
  })],
  render: args => ({
    props: args,
    template: `<app-marker label="Today" />`
  })
};
const Default = {};
const Status = {
  render: () => ({
    template: `<app-marker label="Appointment confirmed" />`
  })
};
const __namedExportsOrder = ["Default", "Status"];
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
Status.parameters = {
  ...Status.parameters,
  docs: {
    ...Status.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<app-marker label=\"Appointment confirmed\" />`\n  })\n}",
      ...Status.parameters?.docs?.source
    }
  }
};

export { Default, Status, __namedExportsOrder, meta as default };
