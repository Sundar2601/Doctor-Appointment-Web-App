import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { B as ButtonDirective } from './button.directive-Ck-qz8dl.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, D as Directive, s as signal, i as input, b as inject, h as ElementRef, I as Input } from './angular-platform-Dxt0cssM.js';
import { O as Overlay, C as ComponentPortal } from './_overlay-module-chunk-BeBLRxp0.js';
import './preload-helper-D5QYaGzd.js';

let nextId = 0;
let TooltipComponent = class TooltipComponent {
    text = signal('');
    id = signal('');
};
TooltipComponent = __decorate([
    Component({
        selector: 'app-tooltip',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-xs leading-4 shadow-md', role: 'tooltip', '[id]': 'id()' },
        template: '{{ text() }}',
    })
], TooltipComponent);
/** Figma "Tooltip". Usage: `<button appTooltip="Add to library" tooltipPosition="top">`. Shows on hover/focus, hides on leave/blur/Escape. */
let TooltipDirective = class TooltipDirective {
    appTooltip = input.required();
    tooltipPosition = input('top');
    overlay = inject(Overlay);
    host = inject(ElementRef);
    id = `app-tooltip-${nextId++}`;
    ref;
    show() {
        if (this.ref?.hasAttached() || !this.appTooltip())
            return;
        const pos = this.tooltipPosition();
        const positions = {
            top: { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -6 },
            bottom: { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 6 },
            left: { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -6 },
            right: { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: 6 },
        };
        this.ref ??= this.overlay.create({
            positionStrategy: this.overlay.position().flexibleConnectedTo(this.host).withPositions([positions[pos]]),
            scrollStrategy: this.overlay.scrollStrategies.close(),
        });
        const cmp = this.ref.attach(new ComponentPortal(TooltipComponent));
        cmp.instance.text.set(this.appTooltip());
        cmp.instance.id.set(this.id);
        this.host.nativeElement.setAttribute('aria-describedby', this.id);
    }
    hide() {
        this.ref?.detach();
        this.host.nativeElement.removeAttribute('aria-describedby');
    }
    ngOnDestroy() {
        this.ref?.dispose();
    }
    static propDecorators = {
        appTooltip: [{ type: Input, args: [{ isSignal: true, alias: "appTooltip", required: true, transform: undefined },] }],
        tooltipPosition: [{ type: Input, args: [{ isSignal: true, alias: "tooltipPosition", required: false, transform: undefined },] }]
    };
};
TooltipDirective = __decorate([
    Directive({
        selector: '[appTooltip]',
        host: {
            '(mouseenter)': 'show()',
            '(mouseleave)': 'hide()',
            '(focusin)': 'show()',
            '(focusout)': 'hide()',
            '(keydown.escape)': 'hide()',
        },
    })
], TooltipDirective);

const meta = {
  title: 'Overlays/Tooltip',
  decorators: [moduleMetadata({
    imports: [TooltipDirective, ButtonDirective]
  })],
  argTypes: {
    appTooltip: {
      control: 'text'
    },
    tooltipPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    }
  },
  args: {
    appTooltip: 'Add to library',
    tooltipPosition: 'top'
  },
  render: args => ({
    props: args,
    template: `<div class="p-16"><button appButton variant="outline" [appTooltip]="appTooltip" [tooltipPosition]="tooltipPosition">Hover me</button></div>`
  })
};
const Top = {};
const Bottom = {
  args: {
    tooltipPosition: 'bottom'
  }
};
const Left = {
  args: {
    tooltipPosition: 'left'
  }
};
const Right = {
  args: {
    tooltipPosition: 'right'
  }
};
const __namedExportsOrder = ["Top", "Bottom", "Left", "Right"];
Top.parameters = {
  ...Top.parameters,
  docs: {
    ...Top.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Top.parameters?.docs?.source
    }
  }
};
Bottom.parameters = {
  ...Bottom.parameters,
  docs: {
    ...Bottom.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tooltipPosition: 'bottom'\n  }\n}",
      ...Bottom.parameters?.docs?.source
    }
  }
};
Left.parameters = {
  ...Left.parameters,
  docs: {
    ...Left.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tooltipPosition: 'left'\n  }\n}",
      ...Left.parameters?.docs?.source
    }
  }
};
Right.parameters = {
  ...Right.parameters,
  docs: {
    ...Right.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tooltipPosition: 'right'\n  }\n}",
      ...Right.parameters?.docs?.source
    }
  }
};

export { Bottom, Left, Right, Top, __namedExportsOrder, meta as default };
