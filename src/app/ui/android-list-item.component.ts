import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { ANDROID_ICONS } from './android-icons'

/** Material 3 list item. Leading can be initials, an icon name, or projected `[leading]` content; trailing is text or `[trailing]`. */
@Component({
  selector: 'app-android-list-item',
  imports: [NgIcon],
  viewProviders: [provideIcons(ANDROID_ICONS)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex w-full items-center gap-4 px-4',
    '[class.min-h-14]': '!supporting()',
    '[class.min-h-[72px]]': '!!supporting()',
    role: 'listitem',
  },
  template: `
    @if (leadingIcon()) {
      <ng-icon [name]="leadingIcon()!" size="24" [class.text-destructive]="destructive()" />
    } @else if (leading()) {
      <span class="bg-secondary flex size-10 shrink-0 items-center justify-center rounded-full text-base">{{ leading() }}</span>
    }
    <ng-content select="[leading]" />
    <div class="min-w-0 flex-1" [class.text-destructive]="destructive()">
      <p class="truncate text-base">{{ headline() }}</p>
      @if (supporting()) {
        <p class="text-muted-foreground truncate text-sm">{{ supporting() }}</p>
      }
    </div>
    @if (trailing()) {
      <span class="text-muted-foreground shrink-0 text-xs font-medium">{{ trailing() }}</span>
    }
    <ng-content select="[trailing]" />
  `,
})
export class AndroidListItemComponent {
  readonly headline = input.required<string>()
  readonly supporting = input<string>()
  /** Initials shown in a circular avatar. */
  readonly leading = input<string>()
  /** Icon name shown instead of the avatar. */
  readonly leadingIcon = input<string>()
  readonly trailing = input<string>()
  readonly destructive = input(false)
}
