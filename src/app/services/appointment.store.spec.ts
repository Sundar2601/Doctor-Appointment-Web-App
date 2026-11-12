import { TestBed } from '@angular/core/testing'
import { addDays, DEMO_EMAIL, DOCTORS } from '@/data/data'
import { AppointmentStore } from './appointment.store'
import { AuthService } from './auth.service'

/** First doctor and the next date they work on (so slot tests do not depend on today's weekday). */
function nextWorkingDay() {
  const doctor = DOCTORS[0]!
  for (let i = 1; i < 14; i++) {
    const date = addDays(i)
    const [y = 0, m = 1, d = 1] = date.split('-').map(Number)
    if (doctor.days.includes(new Date(y, m - 1, d).getDay())) return { doctor, date }
  }
  throw new Error('no working day found')
}

describe('AppointmentStore', () => {
  let store: AppointmentStore

  beforeEach(async () => {
    localStorage.clear()
    TestBed.resetTestingModule()
    await TestBed.inject(AuthService).signInDemo()
    store = TestBed.inject(AppointmentStore)
  })

  it('only exposes the signed-in user’s appointments', () => {
    expect(store.mine().length).toBeGreaterThan(0)
    expect(store.mine().every((a) => a.owner === DEMO_EMAIL)).toBe(true)
  })

  it('lists upcoming appointments soonest first, scheduled only', () => {
    const upcoming = store.upcoming()
    expect(upcoming.every((a) => a.status === 'Scheduled')).toBe(true)
    const keys = upcoming.map((a) => a.date + a.time)
    expect(keys).toEqual([...keys].sort())
  })

  it('offers no slots on a day the doctor does not work', () => {
    const { doctor } = nextWorkingDay()
    for (let i = 1; i < 14; i++) {
      const date = addDays(i)
      const [y = 0, m = 1, d = 1] = date.split('-').map(Number)
      if (!doctor.days.includes(new Date(y, m - 1, d).getDay())) {
        expect(store.slots(doctor.id, date)).toEqual([])
        return
      }
    }
  })

  it('generates 30-minute slots inside working hours', () => {
    const { doctor, date } = nextWorkingDay()
    const slots = store.slots(doctor.id, date)
    expect(slots).toHaveLength((doctor.endHour - doctor.startHour) * 2)
    expect(slots[0]).toBe(`${String(doctor.startHour).padStart(2, '0')}:00`)
  })

  it('books a free slot, then removes it from availability', () => {
    const { doctor, date } = nextWorkingDay()
    const time = store.slots(doctor.id, date)[0]!
    const appt = store.book({ patient: 'Test', doctorId: doctor.id, date, time, reason: 'Check-up' })
    expect(appt?.status).toBe('Scheduled')
    expect(appt?.owner).toBe(DEMO_EMAIL)
    expect(store.slots(doctor.id, date)).not.toContain(time)
  })

  it('refuses to double-book a slot', () => {
    const { doctor, date } = nextWorkingDay()
    const time = store.slots(doctor.id, date)[0]!
    const input = { patient: 'Test', doctorId: doctor.id, date, time, reason: 'x' }
    expect(store.book(input)).not.toBeNull()
    expect(store.book(input)).toBeNull()
  })

  it('frees the slot again when the appointment is cancelled', () => {
    const { doctor, date } = nextWorkingDay()
    const time = store.slots(doctor.id, date)[0]!
    const appt = store.book({ patient: 'Test', doctorId: doctor.id, date, time, reason: 'x' })!
    store.cancel(appt.id)
    expect(store.mine().find((a) => a.id === appt.id)?.status).toBe('Cancelled')
    expect(store.slots(doctor.id, date)).toContain(time)
  })

  it('cannot book when signed out', () => {
    TestBed.inject(AuthService).signOut()
    const { doctor, date } = nextWorkingDay()
    expect(store.book({ patient: 'x', doctorId: doctor.id, date, time: '10:00', reason: 'x' })).toBeNull()
  })
})
