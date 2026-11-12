import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, N as NgTemplateOutlet, i as input, I as Input } from './angular-platform-DKqHXYyu.js';
import { A as AvatarComponent } from './avatar.component-ttD-G_1Z.js';

/** Figma "Message & Bubble". Usage: `<app-message role="assistant" name="Care Navigator">text<div appMessageActions>...</div></app-message>`. */
let MessageComponent = class MessageComponent {
    role = input('assistant');
    name = input('Care Navigator');
    static propDecorators = {
        role: [{ type: Input, args: [{ isSignal: true, alias: "role", required: false, transform: undefined },] }],
        name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false, transform: undefined },] }]
    };
};
MessageComponent = __decorate([
    Component({
        selector: 'app-message',
        imports: [AvatarComponent, NgTemplateOutlet],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { '[class]': 'role() === "user" ? "flex justify-end" : "flex items-start gap-3"', '[attr.data-role]': 'role()' },
        template: `
    <ng-template #body><ng-content /></ng-template>
    @if (role() === 'user') {
      <div class="bg-primary text-primary-foreground max-w-[80%] rounded-2xl px-4 py-2 text-sm">
        <ng-container [ngTemplateOutlet]="body" />
      </div>
    } @else {
      <app-avatar [name]="name()" />
      <div class="grid min-w-0 flex-1 gap-2 pt-1">
        <div class="text-sm"><ng-container [ngTemplateOutlet]="body" /></div>
        <div class="text-muted-foreground flex items-center gap-1 empty:hidden"><ng-content select="[appMessageActions]" /></div>
      </div>
    }
  `,
    })
], MessageComponent);
/** Vertical conversation container; announces new messages to assistive tech. */
let ChatThreadComponent = class ChatThreadComponent {
    label = input('Conversation');
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }]
    };
};
ChatThreadComponent = __decorate([
    Component({
        selector: 'app-chat-thread',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'flex flex-col gap-4', role: 'log', 'aria-live': 'polite', '[attr.aria-label]': 'label()' },
        template: '<ng-content />',
    })
], ChatThreadComponent);

export { ChatThreadComponent as C, MessageComponent as M };
