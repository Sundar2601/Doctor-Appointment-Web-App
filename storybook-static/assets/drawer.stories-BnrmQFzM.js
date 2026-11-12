import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { B as ButtonDirective } from './button.directive-CqXcBwKl.js';
import { b as inject, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import { O as OverlayPanelBase } from './overlay.base-BJ4lg-z0.js';
import { O as Overlay } from './_overlay-module-chunk-ZyiIU7hM.js';
import './preload-helper-D5QYaGzd.js';
import './_a11y-module-chunk-MHb0DQIo.js';
import './_focus-monitor-chunk-1TA7qkiM.js';

/** Bottom drawer with grab handle. Usage: `<app-drawer heading="Move goal" [(open)]="show">body <div drawerFooter>...</div></app-drawer>`. */
let DrawerComponent = class DrawerComponent extends OverlayPanelBase {
    overlay = inject(Overlay);
    config() {
        return { width: '100%', maxHeight: '85vh', positionStrategy: this.overlay.position().global().bottom('0').centerHorizontally() };
    }
};
DrawerComponent = __decorate([
    Component({
        selector: 'app-drawer',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'contents' },
        template: `
    <ng-template #tpl>
      <div class="bg-background text-foreground mx-auto flex w-full max-w-md flex-col gap-4 rounded-t-xl border border-b-0 p-4 shadow-lg">
        <div class="bg-muted mx-auto h-2 w-24 shrink-0 rounded-full" aria-hidden="true"></div>
        <header class="flex flex-col gap-1.5 text-center">
          <h2 [id]="titleId" class="text-lg font-semibold">{{ heading() }}</h2>
          @if (description()) {
            <p [id]="descId" class="text-muted-foreground text-sm">{{ description() }}</p>
          }
        </header>
        <div class="min-h-0 overflow-auto"><ng-content /></div>
        <footer class="flex flex-col gap-2 [&>*]:contents"><ng-content select="[drawerFooter]" /></footer>
      </div>
    </ng-template>
  `,
    })
], DrawerComponent);

const meta = {
  title: 'Overlays/Drawer',
  component: DrawerComponent,
  decorators: [moduleMetadata({
    imports: [DrawerComponent, ButtonDirective]
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
    heading: 'Reschedule appointment',
    description: 'Pick a new time that works for you.'
  },
  render: args => ({
    props: {
      ...args,
      open: args.open ?? false
    },
    template: `
      <button appButton variant="outline" (click)="open = true">Open drawer</button>
      <app-drawer [heading]="heading" [description]="description" [(open)]="open">
        <p class="text-sm">Drawer content goes here.</p>
        <div drawerFooter>
          <button appButton (click)="open = false">Confirm</button>
          <button appButton variant="outline" (click)="open = false">Cancel</button>
        </div>
      </app-drawer>
    `
  })
};
const Default = {};
const WithoutDescription = {
  args: {
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
      originalSource: "{\n  args: {\n    description: undefined\n  }\n}",
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
