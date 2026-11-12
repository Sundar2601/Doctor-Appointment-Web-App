import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideBell } from '@ng-icons/lucide'

/** One row in a notification list. Add `appNotificationAction` content for trailing actions. */
@Component({
  selector: 'app-notification-item',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideBell })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex items-start gap-3 rounded-lg border p-3', '[class.bg-muted]': 'unread()' },
  template: `
    <span class="bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-full border"><ng-icon name="lucideBell" size="16" /></span>
    <div class="grid min-w-0 flex-1 gap-0.5">
      <p class="text-sm font-medium">{{ title() }}</p>
      @if (description()) { <p class="text-muted-foreground text-sm">{{ description() }}</p> }
      @if (time()) { <p class="text-muted-foreground text-xs">{{ time() }}</p> }
    </div>
    @if (unread()) { <span class="bg-primary mt-1.5 size-2 shrink-0 rounded-full" aria-label="Unread"></span> }
  `,
})
export class NotificationItemComponent {
  readonly title = input.required<string>()
  readonly description = input<string>()
  readonly time = input<string>()
  readonly unread = input(false)
}
