import { NgTemplateOutlet } from '@angular/common'
import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideBell, lucideChevronRight, lucideSlidersHorizontal, lucideUser } from '@ng-icons/lucide'
import { IosSwitchComponent } from './ios-switch.component'

export type IosListRowVariant = 'default' | 'value' | 'toggle'

/** Inset grouped iOS list container. */
@Component({
  selector: 'app-ios-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-background block w-full overflow-hidden rounded-[10px]', role: 'list' },
  template: `<ng-content />`,
})
export class IosListComponent {}

/** A 44pt list row: `default` (disclosure chevron), `value` (trailing value + chevron) or `toggle` (switch). */
@Component({
  selector: 'app-ios-list-row',
  imports: [NgIcon, NgTemplateOutlet, IosSwitchComponent],
  viewProviders: [provideIcons({ lucideChevronRight, lucideSlidersHorizontal, lucideBell, lucideUser })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'relative block min-h-[44px] [&:last-child_.ios-divider]:hidden', role: 'listitem' },
  template: `
    @if (variant() === 'toggle') {
      <div class="flex min-h-[44px] items-center gap-3 px-4 py-1.5">
        <ng-container [ngTemplateOutlet]="content" />
        <app-ios-switch [(checked)]="checked" [label]="label()" />
      </div>
    } @else {
      <button type="button" class="hover:bg-muted/60 flex min-h-[44px] w-full items-center gap-3 px-4 text-left" (click)="activate.emit()">
        <ng-container [ngTemplateOutlet]="content" />
        @if (variant() === 'value') {
          <span class="text-muted-foreground text-[17px]">{{ value() }}</span>
        }
        <ng-icon name="lucideChevronRight" size="18" class="text-muted-foreground" aria-hidden="true" />
      </button>
    }
    <ng-template #content>
      @if (icon()) {
        <span class="bg-primary text-primary-foreground flex size-7 shrink-0 items-center justify-center rounded-md" aria-hidden="true">
          <ng-icon [name]="icon()" size="16" />
        </span>
      }
      <span class="text-foreground flex-1 text-[17px]">{{ label() }}</span>
    </ng-template>
    <span class="ios-divider bg-border absolute right-0 bottom-0 h-px" [class.left-14]="icon()" [class.left-4]="!icon()"></span>
  `,
})
export class IosListRowComponent {
  readonly label = input.required<string>()
  readonly variant = input<IosListRowVariant>('default')
  /** Trailing value text for the `value` variant. */
  readonly value = input('')
  /** Leading icon tile (lucide icon name). */
  readonly icon = input('')
  /** Switch state for the `toggle` variant. */
  readonly checked = model(false)
  readonly activate = output()
}
