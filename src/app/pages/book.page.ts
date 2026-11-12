import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core'
import { AuthService } from '@/services/auth.service'
import { AppointmentStore } from '@/services/appointment.store'
import { addDays, money } from '@/data/data'
import { AlertComponent, ButtonDirective, CardComponent, ControlDirective, FieldComponent, PageHeaderComponent } from '@/ui'

@Component({
  selector: 'app-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AlertComponent, ButtonDirective, CardComponent, ControlDirective, FieldComponent, PageHeaderComponent],
  template: `
    <app-page-header title="Book an appointment" subtitle="Pick a doctor, a date and an available time." />
    <div class="grid gap-6 lg:grid-cols-5">
      <app-card class="lg:col-span-2">
        <form class="grid gap-4" (submit)="$event.preventDefault(); submit()">
          <app-field label="Hospital" for="hosp">
            <select id="hosp" appControl (change)="hospital.set($any($event.target).value); pick(doctorOptions()[0]?.id ?? '')">
              <option value="">All hospitals</option>
              @for (h of store.hospitals; track h.id) { <option [value]="h.id" [selected]="h.id === hospital()">{{ h.name }} ({{ h.area }})</option> }
            </select>
          </app-field>
          <app-field label="Doctor" for="doc">
            <select id="doc" appControl (change)="pick($any($event.target).value)">
              @for (d of doctorOptions(); track d.id) { <option [value]="d.id" [selected]="d.id === doctorId()">{{ d.name }} — {{ d.specialty }}</option> }
            </select>
          </app-field>
          <app-field label="Date" for="date">
            <input id="date" appControl type="date" [min]="today" [value]="date()" (input)="date.set($any($event.target).value); time.set('')" />
          </app-field>
          <app-field label="Patient name" for="name">
            <input id="name" appControl placeholder="Full name" [value]="patient()" (input)="patient.set($any($event.target).value)" />
          </app-field>
          <app-field label="Reason for visit" for="reason">
            <input id="reason" appControl placeholder="e.g. Annual check-up" [value]="reason()" (input)="reason.set($any($event.target).value)" />
          </app-field>
          <button appButton class="w-full" type="submit" [disabled]="!canSubmit()">Confirm booking</button>
          @if (error()) { <app-alert>{{ error() }}</app-alert> }
          @if (confirmed()) { <app-alert tone="success">Booked {{ confirmed() }}. See it under Appointments.</app-alert> }
        </form>
      </app-card>

      <app-card class="lg:col-span-3" heading="Available times" [description]="summary()">
        <div class="grid grid-cols-3 gap-2 sm:grid-cols-4">
          @for (t of slots(); track t) {
            <button appButton type="button" [variant]="t === time() ? 'primary' : 'outline'" [attr.aria-pressed]="t === time()" (click)="time.set(t)">{{ t }}</button>
          } @empty {
            <p class="text-muted-foreground col-span-full text-sm">No free slots on this date. Try another day.</p>
          }
        </div>
      </app-card>
    </div>
  `,
})
export class BookPage {
  protected readonly store = inject(AppointmentStore)
  protected readonly money = money
  /** Bound from the ?doctor= query param. */
  readonly doctor_ = input<string>(undefined, { alias: 'doctor' })
  protected readonly today = addDays(0)
  protected readonly picked = signal('')
  protected readonly hospital = signal('')
  protected readonly doctorOptions = computed(() => this.store.doctors.filter((d) => !this.hospital() || d.hospitalId === this.hospital()))
  protected readonly doctorId = computed(() => {
    const opts = this.doctorOptions()
    const want = this.picked() || this.doctor_()
    return opts.find((d) => d.id === want)?.id ?? opts[0]?.id ?? ''
  })
  protected readonly doctor = computed(() => this.store.doctor(this.doctorId()))
  protected readonly date = signal(addDays(1))
  protected readonly time = signal('')
  protected readonly patient = signal(inject(AuthService).user()?.name ?? '')
  protected readonly reason = signal('')
  protected readonly error = signal('')
  protected readonly confirmed = signal('')
  protected readonly summary = computed(() => `${this.doctor()?.name ?? ''} · ${this.store.hospital(this.doctor()?.hospitalId ?? '')?.name ?? ''} · ${money(this.doctor()?.fee ?? 0)} / visit`)
  protected readonly slots = computed(() => this.store.slots(this.doctorId(), this.date()))
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
