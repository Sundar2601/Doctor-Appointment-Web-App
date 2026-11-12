import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, c as computed, s as signal, b as inject, g as ElementRef, I as Input } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, U as lucideGripVertical } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Two resizable panes. Usage: `<app-resizable><div pane1>..</div><div pane2>..</div></app-resizable>`; nest for more. */
let ResizableComponent = class ResizableComponent {
    direction = input('horizontal');
    initialSize = input(40);
    horizontal = computed(() => this.direction() === 'horizontal');
    classes = computed(() => `flex overflow-hidden rounded-lg border ${this.horizontal() ? 'h-50 flex-row' : 'flex-col'}`);
    custom = signal(null);
    size = computed(() => this.custom() ?? this.initialSize());
    dragging = false;
    el = inject(ElementRef).nativeElement;
    start(e) {
        this.dragging = true;
        e.currentTarget.setPointerCapture(e.pointerId);
    }
    move(e) {
        if (!this.dragging)
            return;
        const r = this.el.getBoundingClientRect();
        const pct = this.horizontal() ? ((e.clientX - r.left) / r.width) * 100 : ((e.clientY - r.top) / r.height) * 100;
        this.custom.set(Math.min(90, Math.max(10, Math.round(pct))));
    }
    key(e) {
        const [dec, inc] = this.horizontal() ? ['ArrowLeft', 'ArrowRight'] : ['ArrowUp', 'ArrowDown'];
        if (e.key !== dec && e.key !== inc)
            return;
        e.preventDefault();
        this.custom.set(Math.min(90, Math.max(10, this.size() + (e.key === inc ? 5 : -5))));
    }
    static propDecorators = {
        direction: [{ type: Input, args: [{ isSignal: true, alias: "direction", required: false, transform: undefined },] }],
        initialSize: [{ type: Input, args: [{ isSignal: true, alias: "initialSize", required: false, transform: undefined },] }]
    };
};
ResizableComponent = __decorate([
    Component({
        selector: 'app-resizable',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideGripVertical })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': 'classes()' },
        template: `
    <div class="min-h-0 min-w-0 overflow-auto" [style.flex]="'0 0 ' + size() + '%'"><ng-content select="[pane1]" /></div>
    <div
      class="bg-border focus-visible:ring-ring/50 relative flex shrink-0 items-center justify-center focus-visible:ring-[3px] focus-visible:outline-none"
      [class]="horizontal() ? 'w-2 cursor-col-resize' : 'h-2 cursor-row-resize'"
      role="separator"
      tabindex="0"
      [attr.aria-orientation]="horizontal() ? 'vertical' : 'horizontal'"
      [attr.aria-valuenow]="size()"
      aria-valuemin="10"
      aria-valuemax="90"
      (pointerdown)="start($event)"
      (pointermove)="move($event)"
      (pointerup)="dragging = false"
      (keydown)="key($event)"
    >
      <span class="bg-border flex h-4 w-3 items-center justify-center rounded-xs border" [class.rotate-90]="!horizontal()"
        ><ng-icon name="lucideGripVertical" size="10"
      /></span>
    </div>
    <div class="min-h-0 min-w-0 flex-1 overflow-auto"><ng-content select="[pane2]" /></div>
  `,
    })
], ResizableComponent);

const meta = {
  title: 'Layout/Resizable',
  decorators: [moduleMetadata({
    imports: [ResizableComponent]
  })],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical']
    },
    initialSize: {
      control: {
        type: 'range',
        min: 10,
        max: 90,
        step: 5
      }
    }
  },
  args: {
    direction: 'horizontal',
    initialSize: 40
  },
  render: args => ({
    props: args,
    template: `
      <div class="w-[560px]" [class.h-72]="direction === 'vertical'">
        <app-resizable [direction]="direction" [initialSize]="initialSize" [class.h-full]="direction === 'vertical'">
          <div pane1 class="p-4"><p class="font-semibold">Hospitals</p><p class="text-muted-foreground text-sm">JIPMER, Aravind Eye Hospital, Mahatma Gandhi Medical College</p></div>
          <div pane2 class="p-4"><p class="font-semibold">Dr. Anand Kumar</p><p class="text-muted-foreground text-sm">Cardiology, available 09:30 AM - 01:00 PM</p></div>
        </app-resizable>
      </div>`
  })
};
const Horizontal = {};
const Vertical = {
  args: {
    direction: 'vertical',
    initialSize: 50
  }
};
const __namedExportsOrder = ["Horizontal", "Vertical"];
Horizontal.parameters = {
  ...Horizontal.parameters,
  docs: {
    ...Horizontal.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Horizontal.parameters?.docs?.source
    }
  }
};
Vertical.parameters = {
  ...Vertical.parameters,
  docs: {
    ...Vertical.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'vertical',\n    initialSize: 50\n  }\n}",
      ...Vertical.parameters?.docs?.source
    }
  }
};

export { Horizontal, Vertical, __namedExportsOrder, meta as default };
