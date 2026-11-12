import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import {
  lucideBell,
  lucideCalendar,
  lucideHeart,
  lucideHouse,
  lucideMessageCircle,
  lucideSearch,
  lucideSlidersHorizontal,
  lucideUser,
} from '@ng-icons/lucide'
import { IosHomeIndicatorComponent } from './ios-status-bar.component'

/** One destination in an iOS tab bar. `icon` is a lucide icon name such as `lucideHouse`. */
@Component({
  selector: 'app-ios-tab-bar-item',
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      lucideHouse,
      lucideSearch,
      lucideBell,
      lucideUser,
      lucideSlidersHorizontal,
      lucideCalendar,
      lucideHeart,
      lucideMessageCircle,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-1' },
  template: `
    <button
      type="button"
      role="tab"
      class="focus-visible:ring-ring/50 flex h-[49px] flex-1 flex-col items-center justify-center gap-0.5 rounded-md text-[10px] leading-3 focus-visible:ring-[3px] focus-visible:outline-none"
      [class.text-primary]="selected()"
      [class.text-foreground]="!selected()"
      [attr.aria-selected]="selected()"
      (click)="tabSelect.emit()"
    >
      <ng-icon [name]="icon()" size="24" />
      {{ label() }}
    </button>
  `,
})
export class IosTabBarItemComponent {
  readonly label = input.required<string>()
  readonly icon = input.required<string>()
  readonly selected = input(false)
  readonly tabSelect = output()
}

/** Bottom iOS tab bar (49pt + home indicator). */
@Component({
  selector: 'app-ios-tab-bar',
  imports: [IosHomeIndicatorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-background border-border block w-full border-t' },
  template: `
    <div role="tablist" class="flex px-2"><ng-content /></div>
    @if (homeIndicator()) {
      <app-ios-home-indicator />
    }
  `,
})
export class IosTabBarComponent {
  readonly homeIndicator = input(true)
}
