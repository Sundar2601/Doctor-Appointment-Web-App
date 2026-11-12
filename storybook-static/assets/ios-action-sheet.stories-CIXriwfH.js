import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Bottom iOS action sheet: a grouped list of actions plus a separate Cancel group. */
let IosActionSheetComponent = class IosActionSheetComponent {
    title = input('');
    actions = input.required();
    cancelLabel = input('Cancel');
    actionClick = output();
    dismissed = output();
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        actions: [{ type: Input, args: [{ isSignal: true, alias: "actions", required: true, transform: undefined },] }],
        cancelLabel: [{ type: Input, args: [{ isSignal: true, alias: "cancelLabel", required: false, transform: undefined },] }],
        actionClick: [{ type: Output, args: ["actionClick",] }],
        dismissed: [{ type: Output, args: ["dismissed",] }]
    };
};
IosActionSheetComponent = __decorate([
    Component({
        selector: 'app-ios-action-sheet',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex w-full max-w-[360px] flex-col gap-2 text-center', role: 'dialog', '[attr.aria-label]': 'title() || "Actions"' },
        template: `
    <div class="bg-background border-border overflow-hidden rounded-[14px] border">
      @if (title()) {
        <p class="text-muted-foreground border-border border-b px-4 py-3.5 text-[13px]">{{ title() }}</p>
      }
      @for (action of actions(); track action.label) {
        <button
          type="button"
          class="hover:bg-muted/60 focus-visible:ring-ring/50 border-border h-14 w-full text-[20px] font-semibold focus-visible:ring-[3px] focus-visible:outline-none focus-visible:ring-inset not-first:border-t"
          [class.text-primary]="!action.destructive"
          [class.text-destructive]="action.destructive"
          (click)="actionClick.emit(action)"
        >
          {{ action.label }}
        </button>
      }
    </div>
    <button
      type="button"
      class="bg-background border-border text-primary hover:bg-muted/60 focus-visible:ring-ring/50 h-14 w-full rounded-[14px] border text-[20px] font-semibold focus-visible:ring-[3px] focus-visible:outline-none"
      (click)="dismissed.emit()"
    >
      {{ cancelLabel() }}
    </button>
  `,
    })
], IosActionSheetComponent);

const meta = {
  title: 'Mobile/iOS/Action Sheet',
  decorators: [moduleMetadata({
    imports: [IosActionSheetComponent]
  })],
  args: {
    title: 'Choose an option',
    actions: [{
      label: 'Share'
    }, {
      label: 'Duplicate'
    }, {
      label: 'Delete',
      destructive: true
    }],
    cancelLabel: 'Cancel'
  },
  render: args => ({
    props: args,
    template: `<app-ios-action-sheet [title]="title" [actions]="actions" [cancelLabel]="cancelLabel" />`
  })
};
const Default = {};
const WithoutTitle = {
  args: {
    title: ''
  }
};
const __namedExportsOrder = ["Default", "WithoutTitle"];
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
WithoutTitle.parameters = {
  ...WithoutTitle.parameters,
  docs: {
    ...WithoutTitle.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: ''\n  }\n}",
      ...WithoutTitle.parameters?.docs?.source
    }
  }
};

export { Default, WithoutTitle, __namedExportsOrder, meta as default };
