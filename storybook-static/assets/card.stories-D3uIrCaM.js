import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

let CardComponent = class CardComponent {
    heading = input();
    description = input();
    static propDecorators = {
        heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }]
    };
};
CardComponent = __decorate([
    Component({
        selector: 'app-card',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm' },
        template: `
    @if (heading()) {
      <header class="flex items-start justify-between gap-2">
        <div class="flex flex-col gap-1.5">
          <h2 class="font-medium">{{ heading() }}</h2>
          @if (description()) {
            <p class="text-muted-foreground text-sm">{{ description() }}</p>
          }
        </div>
        <ng-content select="[cardAction]" />
      </header>
    }
    <ng-content />
    <footer class="flex items-center gap-2 empty:hidden"><ng-content select="[cardFooter]" /></footer>
  `,
    })
], CardComponent);

const meta = {
  title: 'Display/Card',
  decorators: [moduleMetadata({
    imports: [CardComponent, ButtonDirective]
  })],
  argTypes: {
    heading: {
      control: 'text'
    },
    description: {
      control: 'text'
    }
  },
  args: {
    heading: 'Upcoming appointment',
    description: 'Next visit with your doctor'
  },
  render: args => ({
    props: args,
    template: `<div class="w-96"><app-card [heading]="heading" [description]="description"><p class="text-sm">Tuesday, 10:30 AM with Dr. Jane Smith.</p></app-card></div>`
  })
};
const Default = {};
const WithAction = {
  render: args => ({
    props: args,
    template: `<div class="w-96"><app-card [heading]="heading" [description]="description"><button cardAction appButton variant="outline" size="sm">Reschedule</button><p class="text-sm">Tuesday, 10:30 AM with Dr. Jane Smith.</p></app-card></div>`
  })
};
const NoHeader = {
  args: {
    heading: undefined
  }
};
const WithFooter = {
  render: args => ({
    props: args,
    template: `<div class="w-96"><app-card heading="Card Title" description="Card description goes here."><p class="text-sm">Card content</p>
      <button cardFooter appButton variant="outline">Cancel</button><button cardFooter appButton>Save</button></app-card></div>`
  })
};
const __namedExportsOrder = ["Default", "WithAction", "NoHeader", "WithFooter"];
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
WithAction.parameters = {
  ...WithAction.parameters,
  docs: {
    ...WithAction.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: `<div class=\"w-96\"><app-card [heading]=\"heading\" [description]=\"description\"><button cardAction appButton variant=\"outline\" size=\"sm\">Reschedule</button><p class=\"text-sm\">Tuesday, 10:30 AM with Dr. Jane Smith.</p></app-card></div>`\n  })\n}",
      ...WithAction.parameters?.docs?.source
    }
  }
};
NoHeader.parameters = {
  ...NoHeader.parameters,
  docs: {
    ...NoHeader.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    heading: undefined\n  }\n}",
      ...NoHeader.parameters?.docs?.source
    }
  }
};
WithFooter.parameters = {
  ...WithFooter.parameters,
  docs: {
    ...WithFooter.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: `<div class=\"w-96\"><app-card heading=\"Card Title\" description=\"Card description goes here.\"><p class=\"text-sm\">Card content</p>\n      <button cardFooter appButton variant=\"outline\">Cancel</button><button cardFooter appButton>Save</button></app-card></div>`\n  })\n}",
      ...WithFooter.parameters?.docs?.source
    }
  }
};

export { Default, NoHeader, WithAction, WithFooter, __namedExportsOrder, meta as default };
