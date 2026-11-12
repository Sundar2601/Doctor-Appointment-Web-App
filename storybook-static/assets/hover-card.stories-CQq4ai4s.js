import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, D as Directive, i as input, b as inject, g as ElementRef, V as ViewContainerRef, I as Input } from './angular-platform-DKqHXYyu.js';
import { O as Overlay, T as TemplatePortal } from './_overlay-module-chunk-ZyiIU7hM.js';
import './preload-helper-D5QYaGzd.js';

/** The card surface (Figma "Hover Card"): popover bg, border, shadow, 320px wide. Put it inside the `ng-template` given to `appHoverCard`. */
let HoverCardComponent = class HoverCardComponent {
};
HoverCardComponent = __decorate([
    Component({
        selector: 'app-hover-card',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-popover text-popover-foreground block w-80 rounded-md border p-4 text-sm shadow-md' },
        template: '<ng-content />',
    })
], HoverCardComponent);
/**
 * Usage:
 * `<a appHoverCard [hoverCardContent]="card">@nextjs</a>
 *  <ng-template #card><app-hover-card>...</app-hover-card></ng-template>`
 */
let HoverCardDirective = class HoverCardDirective {
    hoverCardContent = input.required();
    hoverCardPosition = input('bottom');
    openDelay = input(200);
    closeDelay = input(150);
    overlay = inject(Overlay);
    host = inject(ElementRef);
    vcr = inject(ViewContainerRef);
    ref;
    timer;
    schedule(open) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => (open ? this.open() : this.close()), open ? this.openDelay() : this.closeDelay());
    }
    open() {
        if (this.ref?.hasAttached())
            return;
        if (!this.ref) {
            const below = this.hoverCardPosition() === 'bottom';
            this.ref = this.overlay.create({
                positionStrategy: this.overlay
                    .position()
                    .flexibleConnectedTo(this.host)
                    .withPositions([
                    {
                        originX: 'center',
                        originY: below ? 'bottom' : 'top',
                        overlayX: 'center',
                        overlayY: below ? 'top' : 'bottom',
                        offsetY: below ? 8 : -8,
                    },
                    {
                        originX: 'center',
                        originY: below ? 'top' : 'bottom',
                        overlayX: 'center',
                        overlayY: below ? 'bottom' : 'top',
                        offsetY: below ? -8 : 8,
                    },
                ]),
                scrollStrategy: this.overlay.scrollStrategies.close(),
            });
            // Keep the card open while the pointer is over it.
            this.ref.overlayElement.addEventListener('mouseenter', () => clearTimeout(this.timer));
            this.ref.overlayElement.addEventListener('mouseleave', () => this.schedule(false));
        }
        this.ref.attach(new TemplatePortal(this.hoverCardContent(), this.vcr));
    }
    close() {
        clearTimeout(this.timer);
        this.ref?.detach();
    }
    ngOnDestroy() {
        clearTimeout(this.timer);
        this.ref?.dispose();
    }
    static propDecorators = {
        hoverCardContent: [{ type: Input, args: [{ isSignal: true, alias: "hoverCardContent", required: true, transform: undefined },] }],
        hoverCardPosition: [{ type: Input, args: [{ isSignal: true, alias: "hoverCardPosition", required: false, transform: undefined },] }],
        openDelay: [{ type: Input, args: [{ isSignal: true, alias: "openDelay", required: false, transform: undefined },] }],
        closeDelay: [{ type: Input, args: [{ isSignal: true, alias: "closeDelay", required: false, transform: undefined },] }]
    };
};
HoverCardDirective = __decorate([
    Directive({
        selector: '[appHoverCard]',
        host: {
            '(mouseenter)': 'schedule(true)',
            '(mouseleave)': 'schedule(false)',
            '(focusin)': 'schedule(true)',
            '(focusout)': 'schedule(false)',
            '(keydown.escape)': 'close()',
        },
    })
], HoverCardDirective);

const meta = {
  title: 'Overlays/Hover Card',
  decorators: [moduleMetadata({
    imports: [HoverCardDirective, HoverCardComponent]
  })],
  argTypes: {
    hoverCardPosition: {
      control: 'select',
      options: ['top', 'bottom']
    },
    openDelay: {
      control: 'number'
    },
    closeDelay: {
      control: 'number'
    }
  },
  args: {
    hoverCardPosition: 'bottom',
    openDelay: 200,
    closeDelay: 150
  },
  render: args => ({
    props: args,
    template: `
      <div class="p-24">
        <a href="#" class="font-medium underline" appHoverCard [hoverCardContent]="card" [hoverCardPosition]="hoverCardPosition" [openDelay]="openDelay" [closeDelay]="closeDelay">@nextjs</a>
        <ng-template #card>
          <app-hover-card>
            <div class="flex gap-4">
              <span class="bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-full" aria-hidden="true">
                <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></svg>
              </span>
              <div class="flex flex-col gap-1">
                <p class="font-semibold">@nextjs</p>
                <p>The React Framework - created and maintained by @vercel.</p>
                <p class="text-muted-foreground text-xs">Joined December 2021</p>
              </div>
            </div>
          </app-hover-card>
        </ng-template>
      </div>`
  })
};
const Bottom = {};
const Top = {
  args: {
    hoverCardPosition: 'top'
  }
};
const CardSurface = {
  render: () => ({
    template: `
      <app-hover-card>
        <div class="flex gap-4">
          <span class="bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-full" aria-hidden="true">
            <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></svg>
          </span>
          <div class="flex flex-col gap-1">
            <p class="font-semibold">@nextjs</p>
            <p>The React Framework - created and maintained by @vercel.</p>
            <p class="text-muted-foreground text-xs">Joined December 2021</p>
          </div>
        </div>
      </app-hover-card>`
  })
};
const __namedExportsOrder = ["Bottom", "Top", "CardSurface"];
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
      originalSource: "{\n  args: {\n    hoverCardPosition: 'top'\n  }\n}",
      ...Top.parameters?.docs?.source
    }
  }
};
CardSurface.parameters = {
  ...CardSurface.parameters,
  docs: {
    ...CardSurface.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `\n      <app-hover-card>\n        <div class=\"flex gap-4\">\n          <span class=\"bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-full\" aria-hidden=\"true\">\n            <svg class=\"size-5\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"8\" r=\"4\" /><path d=\"M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1\" /></svg>\n          </span>\n          <div class=\"flex flex-col gap-1\">\n            <p class=\"font-semibold\">@nextjs</p>\n            <p>The React Framework - created and maintained by @vercel.</p>\n            <p class=\"text-muted-foreground text-xs\">Joined December 2021</p>\n          </div>\n        </div>\n      </app-hover-card>`\n  })\n}",
      ...CardSurface.parameters?.docs?.source
    }
  }
};

export { Bottom, CardSurface, Top, __namedExportsOrder, meta as default };
