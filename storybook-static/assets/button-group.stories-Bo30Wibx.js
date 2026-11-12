import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Button Group": joins `button[appButton]` children into one bordered unit. Use `variant="ghost"`/`outline` buttons inside. */
let ButtonGroupComponent = class ButtonGroupComponent {
};
ButtonGroupComponent = __decorate([
    Component({
        selector: 'app-button-group',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            role: 'group',
            class: 'border-input inline-flex items-stretch overflow-hidden rounded-md border shadow-xs [&>*]:rounded-none [&>*]:border-0 [&>*]:bg-background',
        },
        template: '<ng-content />',
    })
], ButtonGroupComponent);

const meta = {
  title: 'Actions/Button Group',
  decorators: [moduleMetadata({
    imports: [ButtonGroupComponent, ButtonDirective]
  })],
  render: () => ({
    template: `<app-button-group><button appButton variant="ghost">Archive</button><button appButton variant="ghost">Report</button><button appButton variant="ghost">Snooze</button></app-button-group>`
  })
};
const Default = {};
const Outline = {
  render: () => ({
    template: `<app-button-group><button appButton variant="outline">Previous</button><button appButton variant="outline">Next</button></app-button-group>`
  })
};
const __namedExportsOrder = ["Default", "Outline"];
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
Outline.parameters = {
  ...Outline.parameters,
  docs: {
    ...Outline.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<app-button-group><button appButton variant=\"outline\">Previous</button><button appButton variant=\"outline\">Next</button></app-button-group>`\n  })\n}",
      ...Outline.parameters?.docs?.source
    }
  }
};

export { Default, Outline, __namedExportsOrder, meta as default };
