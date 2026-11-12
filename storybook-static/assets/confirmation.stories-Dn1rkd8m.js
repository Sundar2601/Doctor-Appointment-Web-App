import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, A as lucideTriangleAlert } from './ng-icons-lucide-DF7QvMAc.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import './preload-helper-D5QYaGzd.js';

/** Asks the user to approve or deny a tool call before it runs. */
let ConfirmationComponent = class ConfirmationComponent {
    title = input.required();
    description = input();
    approveLabel = input('Approve');
    denyLabel = input('Deny');
    approved = output();
    denied = output();
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        approveLabel: [{ type: Input, args: [{ isSignal: true, alias: "approveLabel", required: false, transform: undefined },] }],
        denyLabel: [{ type: Input, args: [{ isSignal: true, alias: "denyLabel", required: false, transform: undefined },] }],
        approved: [{ type: Output, args: ["approved",] }],
        denied: [{ type: Output, args: ["denied",] }]
    };
};
ConfirmationComponent = __decorate([
    Component({
        selector: 'app-confirmation',
        imports: [NgIcon, ButtonDirective],
        viewProviders: [provideIcons({ lucideTriangleAlert })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground block rounded-lg border p-4', role: 'group', '[attr.aria-label]': 'title()' },
        template: `
    <p class="flex items-center gap-2 text-sm font-semibold">
      <span class="text-warning inline-flex"><ng-icon name="lucideTriangleAlert" size="16" aria-hidden="true" /></span>{{ title() }}
    </p>
    @if (description()) {
      <p class="text-muted-foreground mt-2 text-sm">{{ description() }}</p>
    }
    <div class="mt-3 flex justify-end gap-2">
      <button appButton variant="outline" type="button" (click)="denied.emit()">{{ denyLabel() }}</button>
      <button appButton type="button" (click)="approved.emit()">{{ approveLabel() }}</button>
    </div>
  `,
    })
], ConfirmationComponent);

const meta = {
  title: 'AI/Confirmation',
  decorators: [moduleMetadata({
    imports: [ConfirmationComponent]
  })],
  args: {
    title: 'Book Dr. Anand Kumar on 20 Nov at 09:30?',
    description: 'The agent wants to confirm this appointment and notify the patient by SMS.',
    approveLabel: 'Approve',
    denyLabel: 'Deny'
  },
  render: args => ({
    props: args,
    template: `<div class="w-[560px]"><app-confirmation [title]="title" [description]="description" [approveLabel]="approveLabel" [denyLabel]="denyLabel" /></div>`
  })
};
const Default = {};
const CustomLabels = {
  args: {
    title: 'Cancel appointment APT-1001?',
    approveLabel: 'Cancel it',
    denyLabel: 'Keep'
  }
};
const __namedExportsOrder = ["Default", "CustomLabels"];
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
CustomLabels.parameters = {
  ...CustomLabels.parameters,
  docs: {
    ...CustomLabels.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Cancel appointment APT-1001?',\n    approveLabel: 'Cancel it',\n    denyLabel: 'Keep'\n  }\n}",
      ...CustomLabels.parameters?.docs?.source
    }
  }
};

export { CustomLabels, Default, __namedExportsOrder, meta as default };
