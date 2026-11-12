import { NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { AvatarComponent } from './avatar.component'

/** Figma "Message & Bubble". Usage: `<app-message role="assistant" name="Care Navigator">text<div appMessageActions>...</div></app-message>`. */
@Component({
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
export class MessageComponent {
  readonly role = input<'user' | 'assistant'>('assistant')
  /** Sender name for the assistant avatar. */
  readonly name = input('Care Navigator')
}

/** Vertical conversation container; announces new messages to assistive tech. */
@Component({
  selector: 'app-chat-thread',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col gap-4', role: 'log', 'aria-live': 'polite', '[attr.aria-label]': 'label()' },
  template: '<ng-content />',
})
export class ChatThreadComponent {
  readonly label = input('Conversation')
}
