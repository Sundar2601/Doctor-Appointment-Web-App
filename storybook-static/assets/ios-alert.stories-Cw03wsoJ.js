import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

let nextId = 0;
/** Centered 270pt iOS alert. Two actions sit side by side; more stack vertically. */
let IosAlertComponent = class IosAlertComponent {
    id = `ios-alert-${nextId++}`;
    title = input.required();
    message = input('');
    actions = input([{ label: 'OK' }]);
    actionClick = output();
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true, transform: undefined },] }],
        message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: false, transform: undefined },] }],
        actions: [{ type: Input, args: [{ isSignal: true, alias: "actions", required: false, transform: undefined },] }],
        actionClick: [{ type: Output, args: ["actionClick",] }]
    };
};
IosAlertComponent = __decorate([
    Component({
        selector: 'app-ios-alert',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'bg-background text-foreground block w-[270px] overflow-hidden rounded-[14px] text-center shadow-[0_8px_24px_rgb(0_0_0/0.12)]',
            role: 'alertdialog',
            '[attr.aria-labelledby]': 'id',
        },
        template: `
    <div class="px-4 pt-5 pb-4">
      <h2 [id]="id" class="text-[17px] leading-[22px] font-semibold">{{ title() }}</h2>
      @if (message()) {
        <p class="mt-0.5 text-[13px] leading-[18px]">{{ message() }}</p>
      }
    </div>
    <div class="border-border grid border-t" [class.grid-flow-col]="actions().length === 2" [class.auto-cols-fr]="actions().length === 2">
      @for (action of actions(); track action.label) {
        <button
          type="button"
          class="border-border hover:bg-muted/60 focus-visible:ring-ring/50 h-11 text-[17px] focus-visible:ring-[3px] focus-visible:outline-none focus-visible:ring-inset not-first:border-l"
          [class.text-primary]="!action.destructive"
          [class.text-destructive]="action.destructive"
          [class.font-semibold]="action.destructive"
          [class.border-l-0]="actions().length !== 2"
          [class.border-t]="actions().length !== 2"
          (click)="actionClick.emit(action)"
        >
          {{ action.label }}
        </button>
      }
    </div>
  `,
    })
], IosAlertComponent);

const meta = {
  title: 'Mobile/iOS/Alert',
  decorators: [moduleMetadata({
    imports: [IosAlertComponent]
  })],
  args: {
    title: 'Delete this item?',
    message: 'This action cannot be undone.',
    actions: [{
      label: 'Cancel'
    }, {
      label: 'Delete',
      destructive: true
    }]
  },
  render: args => ({
    props: args,
    template: `<app-ios-alert [title]="title" [message]="message" [actions]="actions" />`
  })
};
const Destructive = {};
const SingleAction = {
  args: {
    title: 'Saved',
    message: 'Your changes were saved.',
    actions: [{
      label: 'OK'
    }]
  }
};
const ThreeActions = {
  args: {
    actions: [{
      label: 'Delete',
      destructive: true
    }, {
      label: 'Archive'
    }, {
      label: 'Cancel'
    }]
  }
};
const __namedExportsOrder = ["Destructive", "SingleAction", "ThreeActions"];
Destructive.parameters = {
  ...Destructive.parameters,
  docs: {
    ...Destructive.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Destructive.parameters?.docs?.source
    }
  }
};
SingleAction.parameters = {
  ...SingleAction.parameters,
  docs: {
    ...SingleAction.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Saved',\n    message: 'Your changes were saved.',\n    actions: [{\n      label: 'OK'\n    }]\n  }\n}",
      ...SingleAction.parameters?.docs?.source
    }
  }
};
ThreeActions.parameters = {
  ...ThreeActions.parameters,
  docs: {
    ...ThreeActions.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    actions: [{\n      label: 'Delete',\n      destructive: true\n    }, {\n      label: 'Archive'\n    }, {\n      label: 'Cancel'\n    }]\n  }\n}",
      ...ThreeActions.parameters?.docs?.source
    }
  }
};

export { Destructive, SingleAction, ThreeActions, __namedExportsOrder, meta as default };
