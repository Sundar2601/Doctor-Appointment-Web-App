import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { ANDROID_ICONS } from './android-icons'

/** Bottom navigation bar (80dp). Place `app-android-nav-bar-item` children inside. */
@Component({
  selector: 'app-android-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-background flex h-20 w-full items-center justify-around gap-2 px-2',
    role: 'navigation',
    '[attr.aria-label]': 'label()',
  },
  template: `<ng-content />`,
})
export class AndroidNavBarComponent {
  readonly label = input('Primary')
}

/** One destination: icon in a 64x32 pill (filled when active) with a label underneath. */
@Component({
  selector: 'app-android-nav-bar-item',
  imports: [NgIcon],
  viewProviders: [provideIcons(ANDROID_ICONS)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-1 justify-center' },
  template: `
    <button
      type="button"
      class="group flex flex-col items-center gap-1"
      [attr.aria-current]="active() ? 'page' : null"
      (click)="pressed.emit()"
    >
      <span
        class="group-hover:bg-secondary flex h-8 w-16 items-center justify-center rounded-full"
        [class.bg-secondary]="active()"
        [class.text-foreground]="active()"
        [class.text-muted-foreground]="!active()"
      >
        <ng-icon [name]="icon()" size="24" />
      </span>
      <span class="text-xs font-medium" [class.text-foreground]="active()" [class.text-muted-foreground]="!active()">{{ label() }}</span>
    </button>
  `,
})
export class AndroidNavBarItemComponent {
  readonly icon = input.required<string>()
  readonly label = input.required<string>()
  readonly active = input(false)
  readonly pressed = output()
}
