import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core'
import { AuthService } from '@/services/auth.service'
import { AppointmentStore } from '@/services/appointment.store'
import { addDays, money } from '@/data/data'
import {
  AlertComponent,
  ButtonDirective,
  CardComponent,
  DatePickerComponent,
  ControlDirective,
  FieldComponent,
  HeroComponent,
  ItemComponent,
  eventValue,
} from '@/ui'

@Component({
  selector: 'app-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AlertComponent,
    ButtonDirective,
    CardComponent,
    ControlDirective,
    DatePickerComponent,
    FieldComponent,
    HeroComponent,
    ItemComponent,
  ],
  template: `
    <app-hero
      title="Book an appointment"
      subtitle="Pick a doctor, a date and an available time."
      illustration="illustrations/hero-book.svg"
    />
    <div class="mt-6 flex flex-col items-start gap-6 lg:flex-row">
      <app-card class="w-full gap-4 p-6 shadow-sm lg:w-110 lg:shrink-0">
        <h2 class="font-medium">Appointment details</h2>
        <form class="grid gap-4" (submit)="$event.preventDefault(); submit()">
          <app-field label="Hospital" for="hosp">
            <select id="hosp" appControl (change)="hospital.set(eventValue($event)); pick(doctorOptions()[0]?.id ?? '')">
              <option value="">All hospitals</option>
              @for (h of store.hospitals; track h.id) {
                <option [value]="h.id" [selected]="h.id === hospital()">{{ h.name }} ({{ h.area }})</option>
              }
            </select>
          </app-field>
          <app-field label="Doctor" for="doc">
            <select #docSelect id="doc" appControl (change)="pick(eventValue($event))">
              @for (d of doctorOptions(); track d.id) {
                <option [value]="d.id" [selected]="d.id === doctorId()">{{ d.name }} — {{ d.specialty }}</option>
              }
            </select>
          </app-field>
          <app-field label="Date" for="date">
            <app-date-picker id="date" ariaLabel="Date" [min]="today" [value]="date()" (valueChange)="date.set($event); time.set('')" />
          </app-field>
          <app-field label="Patient name" for="name">
            <input id="name" appControl placeholder="Full name" [value]="patient()" (input)="patient.set(eventValue($event))" />
          </app-field>
          <app-field label="Reason for visit" for="reason">
            <input id="reason" appControl placeholder="e.g. Annual check-up" [value]="reason()" (input)="reason.set(eventValue($event))" />
          </app-field>
          <button appButton class="h-10 w-full" type="submit" [disabled]="!canSubmit()">Confirm booking</button>
          @if (error()) {
            <app-alert>{{ error() }}</app-alert>
          }
          @if (confirmed()) {
            <app-alert tone="success">Booked {{ confirmed() }}. See it under Appointments.</app-alert>
          }
        </form>
      </app-card>

      <app-card class="w-full min-w-0 flex-1 gap-4 p-6 shadow-sm">
        <app-item [heading]="selectedDoctor()?.name ?? ''" [description]="summary()">
          <button itemActions appButton variant="outline" size="sm" type="button" (click)="docSelect.focus()">Change</button>
        </app-item>
        <h2 class="font-medium">Available times</h2>
        @for (g of groups(); track g.label) {
          <div class="grid gap-2">
            <p class="text-sm font-medium">{{ g.label }}</p>
            <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
              @for (t of g.slots; track t) {
                <button
                  appButton
                  type="button"
                  [variant]="t === time() ? 'primary' : 'outline'"
                  [attr.aria-pressed]="t === time()"
                  (click)="time.set(t)"
                >
                  {{ t }}
                </button>
              }
            </div>
          </div>
        } @empty {
          <p class="text-muted-foreground text-sm">No free slots on this date. Try another day.</p>
        }
      </app-card>
    </div>
  `,
})
export class BookPage {
  protected readonly eventValue = eventValue
  protected readonly store = inject(AppointmentStore)
  protected readonly money = money
  /** Bound from the ?doctor= query param. */
  readonly doctor = input<string>()
  protected readonly today = addDays(0)
  protected readonly picked = signal('')
  protected readonly hospital = signal('')
  protected readonly doctorOptions = computed(() => this.store.doctors.filter((d) => !this.hospital() || d.hospitalId === this.hospital()))
  protected readonly doctorId = computed(() => {
    const opts = this.doctorOptions()
    const want = this.picked() || this.doctor()
    return opts.find((d) => d.id === want)?.id ?? opts[0]?.id ?? ''
  })
  protected readonly selectedDoctor = computed(() => this.store.doctor(this.doctorId()))
  protected readonly date = signal(addDays(1))
  protected readonly time = signal('')
  protected readonly patient = signal(inject(AuthService).user()?.name ?? '')
  protected readonly reason = signal('')
  protected readonly error = signal('')
  protected readonly confirmed = signal('')
  protected readonly summary = computed(
    () =>
      `${this.selectedDoctor()?.specialty ?? ''} · ${this.store.hospital(this.selectedDoctor()?.hospitalId ?? '')?.name ?? ''} · ${money(this.selectedDoctor()?.fee ?? 0)} / visit`,
  )
  protected readonly slots = computed(() => this.store.slots(this.doctorId(), this.date()))
  protected readonly groups = computed(() => {
    const all = this.slots()
    return [
      { label: 'Morning', slots: all.filter((t) => t < '12:00') },
      { label: 'Afternoon', slots: all.filter((t) => t >= '12:00') },
    ].filter((g) => g.slots.length)
  })
  protected readonly canSubmit = computed(() => !!this.time() && this.patient().trim().length > 1)

  protected pick(id: string) {
    this.picked.set(id)
    this.time.set('')
  }

  protected submit() {
    this.error.set('')
    this.confirmed.set('')
    const appt = this.store.book({
      patient: this.patient().trim(),
      doctorId: this.doctorId(),
      date: this.date(),
      time: this.time(),
      reason: this.reason().trim() || 'General consultation',
    })
    if (!appt) return this.error.set('That slot was just taken. Please choose another time.')
    this.confirmed.set(`${appt.id} on ${appt.date} at ${appt.time}`)
    this.time.set('')
    this.reason.set('')
  }
}
