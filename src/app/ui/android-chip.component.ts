import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { ANDROID_ICONS } from './android-icons'

export type AndroidChipKind = 'assist' | 'filter' | 'input'

/** Material 3 chip (32dp). Filter chips toggle `selected` and show a check; input chips can be removed. */
@Component({
  selector: 'app-android-chip',
  imports: [NgIcon],
  viewProviders: [provideIcons(ANDROID_ICONS)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex' },
  template: `
    <span [class]="classes()">
      <button
        type="button"
        class="flex h-full items-center gap-2 pl-3 text-sm font-medium"
        [class.pr-3]="kind() !== 'input'"
        [attr.aria-pressed]="kind() === 'filter' ? selected() : null"
        (click)="toggle()"
      >
        @if (kind() === 'filter' && selected()) {
          <ng-icon name="lucideCheck" size="18" />
        } @else if (icon()) {
          <ng-icon [name]="icon()!" size="18" />
        }
        {{ label() }}
      </button>
      @if (kind() === 'input') {
        <button
          type="button"
          class="flex size-8 items-center justify-center"
          [attr.aria-label]="'Remove ' + label()"
          (click)="removed.emit()"
        >
          <ng-icon name="lucideX" size="16" />
        </button>
      }
    </span>
  `,
})
export class AndroidChipComponent {
  readonly kind = input<AndroidChipKind>('assist')
  readonly label = input.required<string>()
  /** Optional leading icon name. */
  readonly icon = input<string>()
  readonly selected = model(false)
  readonly removed = output()

  protected readonly classes = computed(() => {
    const base = 'text-foreground flex h-8 items-center rounded-lg'
    return this.selected() ? `${base} bg-secondary` : `${base} bg-background border-border border`
  })

  protected toggle() {
    if (this.kind() === 'filter') this.selected.set(!this.selected())
  }
}
