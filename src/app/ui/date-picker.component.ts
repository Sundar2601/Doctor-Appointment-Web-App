import { CdkConnectedOverlay, CdkOverlayOrigin, type ConnectedPosition } from '@angular/cdk/overlay'
import { ChangeDetectionStrategy, Component, computed, input, model, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCalendar } from '@ng-icons/lucide'
import { CalendarComponent } from './calendar.component'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function ordinal(n: number) {
  const r = n % 100
  if (r >= 11 && r <= 13) return `${n}th`
  return `${n}${({ 1: 'st', 2: 'nd', 3: 'rd' } as Record<number, string>)[n % 10] ?? 'th'}`
}

function parseIso(v: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v)
  return m ? new Date(+(m[1] ?? 0), +(m[2] ?? 1) - 1, +(m[3] ?? 1)) : null
}

function toIso(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/**
 * Figma "Date Picker" trigger ("Pick a date" / "November 17th, 2026").
 * Opens the design-system Calendar in an overlay; value is `yyyy-MM-dd` or `''`.
 * Usage: `<app-date-picker [(value)]="date" min="2026-11-01" />`.
 */
@Component({
  selector: 'app-date-picker',
  imports: [NgIcon, CdkConnectedOverlay, CdkOverlayOrigin, CalendarComponent],
  viewProviders: [provideIcons({ lucideCalendar })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'relative block w-full', '[attr.id]': 'null' },
  template: `
    <button
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      type="button"
      [id]="id()"
      [disabled]="disabled()"
      [attr.aria-label]="ariaLabel()"
      aria-haspopup="dialog"
      [attr.aria-expanded]="open()"
      class="border-input bg-background flex h-9 w-full items-center gap-2 rounded-md border px-3 text-sm shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      [class.text-muted-foreground]="!label()"
      (click)="open.set(!open())"
    >
      <ng-icon name="lucideCalendar" class="size-4 shrink-0" />
      <span class="truncate">{{ label() || placeholder() }}</span>
    </button>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="open()"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onOutside($event, origin.elementRef.nativeElement)"
      (overlayKeydown)="$event.key === 'Escape' && open.set(false)"
      (detach)="open.set(false)"
    >
      <app-calendar class="shadow-md" [value]="selected()" [min]="minDate()" [max]="maxDate()" (valueChange)="pick($event)" />
    </ng-template>
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

  protected readonly open = signal(false)
  protected readonly positions: ConnectedPosition[] = [
    { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 8 },
    { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', offsetY: -8 },
  ]
  protected readonly selected = computed(() => parseIso(this.value()))
  protected readonly minDate = computed(() => parseIso(this.min()))
  protected readonly maxDate = computed(() => parseIso(this.max()))
  protected readonly label = computed(() => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(this.value())
    if (!m) return ''
    const [, year = '', month = '1', day = '1'] = m
    return `${MONTHS[+month - 1]} ${ordinal(+day)}, ${year}`
  })

  protected pick(d: Date | null) {
    if (!d) return
    this.value.set(toIso(d))
    this.open.set(false)
  }

  protected onOutside(e: MouseEvent, origin: HTMLElement) {
    if (!origin.contains(e.target as Node)) this.open.set(false)
  }
}
