import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/**
 * Figma "Item": media + title/description + actions.
 * Usage: `<app-item heading="Basic Item" description="..."><button itemActions appButton variant="outline" size="sm">Action</button></app-item>`.
 * Slots: `[itemMedia]` (defaults to a file icon), `[itemActions]`.
 */
let ItemComponent = class ItemComponent {
    heading = input.required();
    description = input();
    showMedia = input(true);
    static propDecorators = {
        heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        showMedia: [{ type: Input, args: [{ isSignal: true, alias: "showMedia", required: false, transform: undefined },] }]
    };
};
ItemComponent = __decorate([
    Component({
        selector: 'app-item',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex items-center gap-4 rounded-md border p-4' },
        template: `
    @if (showMedia()) {
      <div class="bg-muted flex size-10 shrink-0 items-center justify-center rounded-sm">
        <ng-content select="[itemMedia]">
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        </ng-content>
      </div>
    }
    <div class="flex min-w-0 flex-1 flex-col gap-0.5 text-sm">
      <p class="text-foreground font-medium">{{ heading() }}</p>
      @if (description()) {
        <p class="text-muted-foreground">{{ description() }}</p>
      }
      <ng-content />
    </div>
    <ng-content select="[itemActions]" />
  `,
    })
], ItemComponent);

const meta = {
  title: 'Display/Item',
  decorators: [moduleMetadata({
    imports: [ItemComponent, ButtonDirective]
  })],
  argTypes: {
    heading: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    showMedia: {
      control: 'boolean'
    }
  },
  args: {
    heading: 'Basic Item',
    description: 'A simple item with title and description.',
    showMedia: true
  },
  render: args => ({
    props: args,
    template: `
      <div class="w-[480px]">
        <app-item [heading]="heading" [description]="description" [showMedia]="showMedia">
          <button itemActions appButton variant="outline" size="sm">Action</button>
        </app-item>
      </div>`
  })
};
const Default = {};
const WithoutMedia = {
  args: {
    showMedia: false
  }
};
const NoActions = {
  render: args => ({
    props: args,
    template: `<div class="w-[480px]"><app-item [heading]="heading" [description]="description" /></div>`
  })
};
const __namedExportsOrder = ["Default", "WithoutMedia", "NoActions"];
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
WithoutMedia.parameters = {
  ...WithoutMedia.parameters,
  docs: {
    ...WithoutMedia.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    showMedia: false\n  }\n}",
      ...WithoutMedia.parameters?.docs?.source
    }
  }
};
NoActions.parameters = {
  ...NoActions.parameters,
  docs: {
    ...NoActions.parameters?.docs,
    source: {
      originalSource: "{\n  render: args => ({\n    props: args,\n    template: `<div class=\"w-[480px]\"><app-item [heading]=\"heading\" [description]=\"description\" /></div>`\n  })\n}",
      ...NoActions.parameters?.docs?.source
    }
  }
};

export { Default, NoActions, WithoutMedia, __namedExportsOrder, meta as default };
