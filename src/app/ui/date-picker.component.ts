import { ChangeDetectionStrategy, Component, computed, type ElementRef, input, model, viewChild } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCalendar } from '@ng-icons/lucide'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function ordinal(n: number) {
  const r = n % 100
  if (r >= 11 && r <= 13) return `${n}th`
  return `${n}${({ 1: 'st', 2: 'nd', 3: 'rd' } as Record<number, string>)[n % 10] ?? 'th'}`
}

/**
 * Figma "Date Picker" trigger ("Pick a date" / "November 17th, 2026").
 * The calendar itself is the browser's native date picker (hidden `<input type=date>`), value is `yyyy-MM-dd` or `''`.
 * Usage: `<app-date-picker [(value)]="date" min="2026-11-01" />`.
 */
@Component({
  selector: 'app-date-picker',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCalendar })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'relative block w-full' },
  template: `
    <button
      type="button"
      [id]="id()"
      [disabled]="disabled()"
      [attr.aria-label]="ariaLabel()"
      class="border-input bg-background flex h-9 w-full items-center gap-2 rounded-md border px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      [class.text-muted-foreground]="!label()"
      (click)="openPicker()"
    >
      <ng-icon name="lucideCalendar" class="size-4 shrink-0" />
      <span class="truncate">{{ label() || placeholder() }}</span>
    </button>
    <input
      #native
      type="date"
      tabindex="-1"
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 h-0 opacity-0"
      [value]="value()"
      [min]="min()"
      [max]="max()"
      (change)="value.set(native.value)"
    />
  `,
})
export class DatePickerComponent {
  private static n = 0
  /** ISO date `yyyy-MM-dd`, empty when unset. */
  readonly value = model('')
  readonly placeholder = input('Pick a date')
  readonly min = input('')
  readonly max = input('')
  readonly disabled = input(false)
  readonly ariaLabel = input<string>()
  readonly id = input(`app-date-picker-${DatePickerComponent.n++}`)

  private readonly native = viewChild.required<ElementRef<HTMLInputElement>>('native')
  protected readonly label = computed(() => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(this.value())
    if (!m) return ''
    const [, year = '', month = '1', day = '1'] = m
    return `${MONTHS[+month - 1]} ${ordinal(+day)}, ${year}`
  })

  protected openPicker() {
    const el = this.native().nativeElement
    if (typeof el.showPicker === 'function') el.showPicker()
    else el.focus()
  }
}
