import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { D as DialogComponent } from './dialog.component-DyUSG4oB.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';
import './ng-icons-lucide-DvOyu-Mi.js';
import './overlay.base-BJ4lg-z0.js';
import './_overlay-module-chunk-ZyiIU7hM.js';
import './_a11y-module-chunk-MHb0DQIo.js';
import './_focus-monitor-chunk-1TA7qkiM.js';

const meta = {
  title: 'Overlays/Dialog',
  component: DialogComponent,
  decorators: [moduleMetadata({
    imports: [DialogComponent, ButtonDirective]
  })],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    heading: {
      control: 'text'
    },
    description: {
      control: 'text'
    }
  },
  args: {
    heading: 'Edit profile',
    description: 'Make changes to your profile here. Click save when you are done.'
  },
  render: args => ({
    props: {
      ...args,
      open: args.open ?? false
    },
    template: `
      <button appButton (click)="open = true">Open dialog</button>
      <app-dialog [heading]="heading" [description]="description" [(open)]="open">
        <p class="text-sm">Dialog body content goes here.</p>
        <div dialogFooter>
          <button appButton variant="outline" (click)="open = false">Cancel</button>
          <button appButton (click)="open = false">Save changes</button>
        </div>
      </app-dialog>
    `
  })
};
const Default = {};
const WithoutDescription = {
  args: {
    heading: 'Quick note',
    description: undefined
  }
};
const Open = {
  args: {
    open: true
  }
};
const __namedExportsOrder = ["Default", "WithoutDescription", "Open"];
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
WithoutDescription.parameters = {
  ...WithoutDescription.parameters,
  docs: {
    ...WithoutDescription.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    heading: 'Quick note',\n    description: undefined\n  }\n}",
      ...WithoutDescription.parameters?.docs?.source
    }
  }
};
Open.parameters = {
  ...Open.parameters,
  docs: {
    ...Open.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    open: true\n  }\n}",
      ...Open.parameters?.docs?.source
    }
  }
};

export { Default, Open, WithoutDescription, __namedExportsOrder, meta as default };
