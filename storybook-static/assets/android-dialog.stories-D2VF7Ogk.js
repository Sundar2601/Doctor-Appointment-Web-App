import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { i as input, o as output, O as Output, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

let nextId = 0;
/** Material 3 basic dialog (312dp, 28dp radius) with text-button actions right-aligned. */
let AndroidDialogComponent = class AndroidDialogComponent {
    id = `app-android-dialog-${nextId++}`;
    title = input.required();
    text = input('');
    actions = input(['Cancel', 'OK']);
    actionClick = output();
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true, transform: undefined },] }],
        text: [{ type: Input, args: [{ isSignal: true, alias: "text", required: false, transform: undefined },] }],
        actions: [{ type: Input, args: [{ isSignal: true, alias: "actions", required: false, transform: undefined },] }],
        actionClick: [{ type: Output, args: ["actionClick",] }]
    };
};
AndroidDialogComponent = __decorate([
    Component({
        selector: 'app-android-dialog',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'bg-card text-card-foreground block w-[312px] rounded-[28px] p-6 shadow-lg',
            role: 'dialog',
            'aria-modal': 'true',
            '[attr.aria-labelledby]': 'id + "-title"',
            '[attr.aria-describedby]': 'id + "-text"',
        },
        template: `
    <h2 [id]="id + '-title'" class="text-2xl leading-8">{{ title() }}</h2>
    <p [id]="id + '-text'" class="text-muted-foreground mt-4 text-sm">{{ text() }}</p>
    <ng-content />
    <div class="mt-6 flex justify-end gap-2">
      @for (action of actions(); track action) {
        <button
          type="button"
          class="text-primary hover:bg-accent h-10 rounded-full px-3 text-sm font-medium"
          (click)="actionClick.emit(action)"
        >
          {{ action }}
        </button>
      }
    </div>
  `,
    })
], AndroidDialogComponent);

const meta = {
  title: 'Mobile/Android/Dialog',
  component: AndroidDialogComponent,
  decorators: [moduleMetadata({
    imports: [AndroidDialogComponent]
  })],
  args: {
    title: 'Discard draft?',
    text: 'Your unsaved changes will be lost.',
    actions: ['Cancel', 'Discard']
  },
  render: args => ({
    props: args,
    template: `<div class="p-4"><app-android-dialog [title]="title" [text]="text" [actions]="actions" /></div>`
  })
};
const Default = {};
const SingleAction = {
  args: {
    title: 'Update available',
    text: 'A new version is ready to install.',
    actions: ['OK']
  }
};
const __namedExportsOrder = ["Default", "SingleAction"];
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
SingleAction.parameters = {
  ...SingleAction.parameters,
  docs: {
    ...SingleAction.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Update available',\n    text: 'A new version is ready to install.',\n    actions: ['OK']\n  }\n}",
      ...SingleAction.parameters?.docs?.source
    }
  }
};

export { Default, SingleAction, __namedExportsOrder, meta as default };
