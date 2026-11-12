import { Injectable, computed, inject, signal } from '@angular/core'
import { AuthService } from '@/services/auth.service'
import { DOCTORS, HOSPITALS, SEED_APPOINTMENTS, toIsoDate, type Appointment } from '@/data/data'

@Injectable({ providedIn: 'root' })
export class AppointmentStore {
  readonly doctors = DOCTORS
  readonly hospitals = HOSPITALS
  private readonly auth = inject(AuthService)
  /** Every booking, used only to compute doctor availability. Pages must read `mine`. */
  private readonly all = signal<Appointment[]>(SEED_APPOINTMENTS)
  private nextId = 1008

  /** The signed-in patient's own appointments. */
  readonly mine = computed(() => {
    const email = this.auth.user()?.email
    return email ? this.all().filter((a) => a.owner === email) : []
  })

  readonly upcoming = computed(() => {
    const today = toIsoDate(new Date())
    return this.mine()
      .filter((a) => a.status === 'Scheduled' && a.date >= today)
      .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
  })

  hospital(id: string) {
    return this.hospitals.find((h) => h.id === id)
  }

  hospitalOfDoctor(doctorId: string) {
    return this.hospital(this.doctor(doctorId)?.hospitalId ?? '')
  }

  doctor(id: string) {
    return this.doctors.find((d) => d.id === id)
  }

  /** Free 30-minute slots for a doctor on a date (YYYY-MM-DD). Past times are excluded. */
  slots(doctorId: string, date: string): string[] {
    const doc = this.doctor(doctorId)
    if (!doc || !date) return []
    const [y, m, d] = date.split('-').map(Number)
    const day = new Date(y, m - 1, d)
    if (!doc.days.includes(day.getDay())) return []
    const taken = new Set(
      this.all().filter((a) => a.doctorId === doctorId && a.date === date && a.status !== 'Cancelled').map((a) => a.time),
    )
    const now = new Date()
    const out: string[] = []
    for (let h = doc.startHour; h < doc.endHour; h++) {
      for (const min of [0, 30]) {
        const t = `${String(h).padStart(2, '0')}:${min === 0 ? '00' : '30'}`
        const at = new Date(y, m - 1, d, h, min)
        if (!taken.has(t) && at > now) out.push(t)
      }
    }
    return out
  }

  book(input: Omit<Appointment, 'id' | 'status' | 'owner'>): Appointment | null {
    const owner = this.auth.user()?.email
    if (!owner || !this.slots(input.doctorId, input.date).includes(input.time)) return null
    const appt: Appointment = { ...input, owner, id: `A-${this.nextId++}`, status: 'Scheduled' }
    this.all.update((l) => [appt, ...l])
    return appt
  }

  cancel(id: string) {
    const email = this.auth.user()?.email
    this.all.update((l) => l.map((a) => (a.id === id && a.owner === email && a.status === 'Scheduled' ? { ...a, status: 'Cancelled' } : a)))
  }
}
