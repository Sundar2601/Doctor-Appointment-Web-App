import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { ANDROID_ICONS } from './android-icons'

export type AndroidTopAppBarVariant = 'small' | 'center-aligned'

/** Material 3 top app bar (64dp). `actions` are icon names; extra content goes in the `[actions]` slot. */
@Component({
  selector: 'app-android-top-app-bar',
  imports: [NgIcon],
  viewProviders: [provideIcons(ANDROID_ICONS)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-background text-foreground relative flex h-16 w-full items-center gap-1 px-1' },
  template: `
    @if (navIcon()) {
      <button
        type="button"
        class="hover:bg-secondary flex size-12 shrink-0 items-center justify-center rounded-full"
        [attr.aria-label]="navLabel()"
        (click)="navClick.emit()"
      >
        <ng-icon [name]="navIcon()!" size="24" />
      </button>
    }
    <h1
      class="min-w-0 flex-1 truncate text-[22px] leading-7"
      [class.px-3]="variant() === 'small' && !navIcon()"
      [class.text-center]="variant() === 'center-aligned'"
    >
      {{ title() }}
    </h1>
    <div class="flex shrink-0 items-center">
      @for (action of actions(); track action) {
        <button
          type="button"
          class="text-muted-foreground hover:bg-secondary flex size-12 items-center justify-center rounded-full"
          [attr.aria-label]="action"
          (click)="actionClick.emit(action)"
        >
          <ng-icon [name]="action" size="24" />
        </button>
      }
      <ng-content select="[actions]" />
    </div>
  `,
})
export class AndroidTopAppBarComponent {
  readonly variant = input<AndroidTopAppBarVariant>('small')
  readonly title = input.required<string>()
  /** Icon name for the navigation button; empty hides it. */
  readonly navIcon = input<string | undefined>('lucideMenu')
  readonly navLabel = input('Navigation menu')
  /** Icon names for trailing action buttons (use names from android-icons). */
  readonly actions = input<string[]>([])
  readonly navClick = output()
  readonly actionClick = output<string>()
}
