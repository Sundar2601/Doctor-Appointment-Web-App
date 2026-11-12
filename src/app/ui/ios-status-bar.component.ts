import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideBatteryFull, lucideWifi } from '@ng-icons/lucide'

/** iOS status bar (54pt) with clock, wifi and battery. */
@Component({
  selector: 'app-ios-status-bar',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideWifi, lucideBatteryFull })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-background text-foreground relative block h-[54px] w-full select-none' },
  template: `
    <span class="absolute top-[14px] left-8 text-[17px] leading-[22px] font-semibold">{{ time() }}</span>
    <span class="absolute top-[17px] right-8 flex items-center gap-1.5" aria-hidden="true">
      <ng-icon name="lucideWifi" size="16" />
      <ng-icon name="lucideBatteryFull" size="22" />
    </span>
  `,
})
export class IosStatusBarComponent {
  readonly time = input('9:41')
}

/** iOS home indicator (34pt) pinned to the bottom of a screen. */
@Component({
  selector: 'app-ios-home-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'relative block h-[34px] w-full', 'aria-hidden': 'true' },
  template: `<span class="bg-foreground absolute bottom-2 left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full"></span>`,
})
export class IosHomeIndicatorComponent {}
