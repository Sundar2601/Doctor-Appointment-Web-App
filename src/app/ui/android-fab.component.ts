import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { ANDROID_ICONS } from './android-icons'

export type AndroidFabSize = 'standard' | 'small'

/** Floating action button: 56dp standard, 40dp small, or extended when a `label` is set. */
@Component({
  selector: 'app-android-fab',
  imports: [NgIcon],
  viewProviders: [provideIcons(ANDROID_ICONS)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-block' },
  template: `
    <button type="button" [class]="classes()" [attr.aria-label]="label() ? null : ariaLabel()" (click)="pressed.emit()">
      <ng-icon [name]="icon()" [size]="size() === 'small' ? '20' : '24'" />
      @if (label()) {
        <span class="text-sm font-medium">{{ label() }}</span>
      }
    </button>
  `,
})
export class AndroidFabComponent {
  readonly icon = input('lucidePlus')
  /** When set, renders the extended FAB with this text. */
  readonly label = input<string>()
  readonly size = input<AndroidFabSize>('standard')
  readonly ariaLabel = input('Add')
  readonly pressed = output()

  protected readonly classes = computed(() => {
    const base = 'bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center justify-center shadow-md'
    if (this.label()) return `${base} h-14 gap-2 rounded-2xl px-4`
    return this.size() === 'small' ? `${base} size-10 rounded-xl` : `${base} size-14 rounded-2xl`
  })
}
