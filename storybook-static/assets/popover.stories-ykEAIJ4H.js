import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import { m as model, i as input, c as computed, I as Input, O as Output, _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { j as CdkConnectedOverlay, k as CdkOverlayOrigin } from './_overlay-module-chunk-BeBLRxp0.js';
import { A as A11yModule } from './_a11y-module-chunk-9Cv_AWCC.js';
import './preload-helper-D5QYaGzd.js';
import './_focus-monitor-chunk-DzyvtaEj.js';

let uid = 0;
/** Usage: `<app-popover [(open)]="o"><button trigger appButton variant="outline">Open</button> content...</app-popover>`. */
let PopoverComponent = class PopoverComponent {
    open = model(false);
    side = input('bottom');
    align = input('center');
    id = `app-popover-${++uid}`;
    positions = computed(() => {
        const top = this.side() === 'top';
        const a = this.align();
        const originX = a === 'center' ? 'center' : a;
        return [{ originX, originY: top ? 'top' : 'bottom', overlayX: originX, overlayY: top ? 'bottom' : 'top', offsetY: top ? -8 : 8 }];
    });
    onOutside(e, origin) {
        if (!origin.contains(e.target))
            this.open.set(false);
    }
    static propDecorators = {
        open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false },] }, { type: Output, args: ["openChange",] }],
        side: [{ type: Input, args: [{ isSignal: true, alias: "side", required: false, transform: undefined },] }],
        align: [{ type: Input, args: [{ isSignal: true, alias: "align", required: false, transform: undefined },] }]
    };
};
PopoverComponent = __decorate([
    Component({
        selector: 'app-popover',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CdkConnectedOverlay, CdkOverlayOrigin, A11yModule],
        host: { class: 'inline-block', '(click)': 'open.set(!open())' },
        template: `
    <span
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      class="inline-flex"
      aria-haspopup="dialog"
      [attr.aria-expanded]="open()"
      [attr.aria-controls]="open() ? id : null"
    >
      <ng-content select="[trigger]" />
    </span>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="open()"
      [cdkConnectedOverlayPositions]="positions()"
      (overlayOutsideClick)="onOutside($event, origin.elementRef.nativeElement)"
      (overlayKeydown)="$event.key === 'Escape' && open.set(false)"
      (detach)="open.set(false)"
    >
      <div
        [id]="id"
        role="dialog"
        cdkTrapFocus
        cdkTrapFocusAutoCapture
        class="bg-popover text-popover-foreground w-80 rounded-md border p-4 shadow-md outline-none"
      >
        <ng-content />
      </div>
    </ng-template>
  `,
    })
], PopoverComponent);

const meta = {
  title: 'Overlays/Popover',
  component: PopoverComponent,
  decorators: [moduleMetadata({
    imports: [PopoverComponent, ButtonDirective]
  })],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    side: {
      control: 'select',
      options: ['bottom', 'top']
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end']
    }
  },
  args: {
    side: 'bottom',
    align: 'center'
  },
  render: args => ({
    props: {
      ...args,
      open: args.open ?? false
    },
    template: `
      <div style="padding: 6rem 8rem">
        <app-popover [side]="side" [align]="align" [(open)]="open">
          <button trigger appButton variant="outline" (click)="open = !open">Open popover</button>
          <div class="w-64 text-sm">
            <p class="font-medium">Dimensions</p>
            <p class="text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
        </app-popover>
      </div>
    `
  })
};
const Bottom = {};
const Top = {
  args: {
    side: 'top'
  }
};
const AlignStart = {
  args: {
    align: 'start'
  }
};
const Open = {
  args: {
    open: true
  }
};
const __namedExportsOrder = ["Bottom", "Top", "AlignStart", "Open"];
Bottom.parameters = {
  ...Bottom.parameters,
  docs: {
    ...Bottom.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Bottom.parameters?.docs?.source
    }
  }
};
Top.parameters = {
  ...Top.parameters,
  docs: {
    ...Top.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    side: 'top'\n  }\n}",
      ...Top.parameters?.docs?.source
    }
  }
};
AlignStart.parameters = {
  ...AlignStart.parameters,
  docs: {
    ...AlignStart.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    align: 'start'\n  }\n}",
      ...AlignStart.parameters?.docs?.source
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

export { AlignStart, Bottom, Open, Top, __namedExportsOrder, meta as default };
