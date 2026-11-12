import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { ANDROID_ICONS } from './android-icons'

/** Android 24dp status bar plus 24dp gesture navigation area, edge-to-edge. */
@Component({
  selector: 'app-android-status-bar',
  imports: [NgIcon],
  viewProviders: [provideIcons(ANDROID_ICONS)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-background text-foreground block w-full' },
  template: `
    <div class="flex h-6 items-center justify-between px-4">
      <span class="text-xs font-semibold">{{ time() }}</span>
      <span class="flex items-center gap-1" aria-hidden="true">
        <ng-icon name="lucideWifi" size="14" />
        <ng-icon name="lucideBatteryFull" size="16" />
      </span>
    </div>
    @if (gestureBar()) {
      <div class="flex h-6 items-center justify-center" aria-hidden="true">
        <span class="bg-foreground h-1 w-[108px] rounded-full"></span>
      </div>
    }
  `,
})
export class AndroidStatusBarComponent {
  readonly time = input('9:30')
  /** Shows the 24dp gesture navigation pill below the status bar. */
  readonly gestureBar = input(true)
}
