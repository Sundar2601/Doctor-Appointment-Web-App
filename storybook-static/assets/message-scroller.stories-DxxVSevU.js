import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { M as MessageComponent } from './message.component-C94u9h6z.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, z as viewChild, s as signal, n as afterNextRender, G as ViewChild } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, H as lucideArrowDown } from './ng-icons-lucide-DF7QvMAc.js';
import './preload-helper-D5QYaGzd.js';
import './avatar.component-BAaEfWKl.js';

/** Figma "Message Scroller": scroll area that sticks to the bottom while content streams in, with a jump-to-latest button. Give it a height. */
let MessageScrollerComponent = class MessageScrollerComponent {
    scroller = viewChild.required('scroller');
    content = viewChild.required('content');
    atBottom = signal(true);
    constructor() {
        afterNextRender(() => {
            const observer = new ResizeObserver(() => {
                if (this.atBottom())
                    this.jump();
                else
                    this.onScroll();
            });
            observer.observe(this.content().nativeElement);
            this.jump();
        });
    }
    onScroll() {
        const el = this.scroller().nativeElement;
        this.atBottom.set(el.scrollHeight - el.scrollTop - el.clientHeight < 8);
    }
    jump() {
        const el = this.scroller().nativeElement;
        el.scrollTop = el.scrollHeight;
        this.atBottom.set(true);
    }
    static ctorParameters = () => [];
    static propDecorators = {
        scroller: [{ type: ViewChild, args: ['scroller', { isSignal: true },] }],
        content: [{ type: ViewChild, args: ['content', { isSignal: true },] }]
    };
};
MessageScrollerComponent = __decorate([
    Component({
        selector: 'app-message-scroller',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideArrowDown })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-background relative block overflow-hidden rounded-lg border' },
        template: `
    <div #scroller class="h-full overflow-y-auto p-4" tabindex="0" (scroll)="onScroll()">
      <div #content><ng-content /></div>
    </div>
    @if (!atBottom()) {
      <button
        type="button"
        class="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring/50 absolute bottom-4 left-1/2 inline-flex h-9 -translate-x-1/2 items-center gap-2 rounded-full px-4 text-sm font-medium shadow-lg focus-visible:ring-[3px] focus-visible:outline-none"
        (click)="jump()"
      >
        <ng-icon name="lucideArrowDown" size="16" aria-hidden="true" />
        Jump to latest
      </button>
    }
  `,
    })
], MessageScrollerComponent);

const messages = Array.from({
  length: 12
}, (_, i) => i % 2 ? 'Dr. Raman is available on Thursday at 10:30 AM at JIPMER, Puducherry.' : 'Can you check another cardiologist near me?');
const meta = {
  title: 'AI/Message Scroller',
  decorators: [moduleMetadata({
    imports: [MessageScrollerComponent, MessageComponent]
  })],
  render: () => ({
    props: {
      messages
    },
    template: `<app-message-scroller class="h-72 w-[36rem] max-w-full">@for (m of messages; track $index) {<app-message [role]="$index % 2 ? \x27assistant\x27 : \x27user\x27" class="mb-4">{{ m }}</app-message>}</app-message-scroller>`
  })
};
const Default = {};
const __namedExportsOrder = ["Default"];
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

export { Default, __namedExportsOrder, meta as default };
