import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import { i as input, b as inject, I as Input, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, l as lucideX } from './ng-icons-lucide-DF7QvMAc.js';
import { O as OverlayPanelBase } from './overlay.base-CXDwUkA0.js';
import { O as Overlay } from './_overlay-module-chunk-BeBLRxp0.js';
import './preload-helper-D5QYaGzd.js';
import './_a11y-module-chunk-9Cv_AWCC.js';
import './_focus-monitor-chunk-DzyvtaEj.js';

/** Side sheet. Usage: `<app-sheet heading="Filters" side="right" [(open)]="show">body <div sheetFooter>...</div></app-sheet>`. */
let SheetComponent = class SheetComponent extends OverlayPanelBase {
    side = input('right');
    overlay = inject(Overlay);
    config() {
        const g = this.overlay.position().global().top('0');
        return { width: '24rem', maxWidth: '90vw', height: '100%', positionStrategy: this.side() === 'right' ? g.right('0') : g.left('0') };
    }
    static propDecorators = {
        side: [{ type: Input, args: [{ isSignal: true, alias: "side", required: false, transform: undefined },] }]
    };
};
SheetComponent = __decorate([
    Component({
        selector: 'app-sheet',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideX })],
        host: { class: 'contents' },
        template: `
    <ng-template #tpl>
      <div
        class="bg-background text-foreground relative flex h-full w-full flex-col gap-4 p-6 shadow-lg"
        [class.border-l]="side() === 'right'"
        [class.border-r]="side() === 'left'"
      >
        <header class="flex flex-col gap-1.5">
          <h2 [id]="titleId" class="text-lg font-semibold">{{ heading() }}</h2>
          @if (description()) {
            <p [id]="descId" class="text-muted-foreground text-sm">{{ description() }}</p>
          }
        </header>
        <div class="min-h-0 flex-1 overflow-auto"><ng-content /></div>
        <footer class="flex flex-col gap-2"><ng-content select="[sheetFooter]" /></footer>
        <button
          type="button"
          aria-label="Close"
          (click)="close()"
          class="focus-visible:ring-ring/50 absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-[3px] focus-visible:outline-none"
        >
          <ng-icon name="lucideX" size="16" />
        </button>
      </div>
    </ng-template>
  `,
    })
], SheetComponent);

const meta = {
  title: 'Overlays/Sheet',
  component: SheetComponent,
  decorators: [moduleMetadata({
    imports: [SheetComponent, ButtonDirective]
  })],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    side: {
      control: 'select',
      options: ['right', 'left']
    },
    heading: {
      control: 'text'
    },
    description: {
      control: 'text'
    }
  },
  args: {
    side: 'right',
    heading: 'Filters',
    description: 'Narrow down the list of doctors.'
  },
  render: args => ({
    props: {
      ...args,
      open: args.open ?? false
    },
    template: `
      <button appButton variant="outline" (click)="open = true">Open sheet</button>
      <app-sheet [heading]="heading" [description]="description" [side]="side" [(open)]="open">
        <p class="text-sm">Sheet content goes here.</p>
        <div sheetFooter>
          <button appButton (click)="open = false">Apply filters</button>
        </div>
      </app-sheet>
    `
  })
};
const Right = {};
const Left = {
  args: {
    side: 'left',
    heading: 'Navigation',
    description: undefined
  }
};
const Open = {
  args: {
    open: true
  }
};
const __namedExportsOrder = ["Right", "Left", "Open"];
Right.parameters = {
  ...Right.parameters,
  docs: {
    ...Right.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Right.parameters?.docs?.source
    }
  }
};
Left.parameters = {
  ...Left.parameters,
  docs: {
    ...Left.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    side: 'left',\n    heading: 'Navigation',\n    description: undefined\n  }\n}",
      ...Left.parameters?.docs?.source
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

export { Left, Open, Right, __namedExportsOrder, meta as default };
