import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronLeft } from '@ng-icons/lucide'

export type IosNavBarVariant = 'inline' | 'large'

/** iOS navigation bar. Project a text action into `[slot=trailing]`; `large` shows the title below the bar. */
@Component({
  selector: 'app-ios-nav-bar',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideChevronLeft })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-background text-foreground block w-full' },
  template: `
    <div class="relative flex h-11 items-center justify-between px-2 text-[17px]">
      @if (backLabel()) {
        <button type="button" class="text-primary flex h-11 items-center gap-0.5 px-1" (click)="back.emit()">
          <ng-icon name="lucideChevronLeft" size="22" strokeWidth="2.5" />{{ backLabel() }}
        </button>
      } @else {
        <span></span>
      }
      @if (variant() === 'inline') {
        <h1 class="absolute left-1/2 -translate-x-1/2 text-[17px] font-semibold">{{ title() }}</h1>
      }
      <span class="text-primary flex items-center px-2"><ng-content select="[slot=trailing]" /></span>
    </div>
    @if (variant() === 'large') {
      <h1 class="px-4 pt-1 pb-2 text-[34px] leading-[41px] font-bold tracking-tight">{{ title() }}</h1>
    }
  `,
})
export class IosNavBarComponent {
  readonly title = input.required<string>()
  readonly variant = input<IosNavBarVariant>('inline')
  /** Back button label; empty string hides the back button. */
  readonly backLabel = input('Back')
  readonly back = output()
}
