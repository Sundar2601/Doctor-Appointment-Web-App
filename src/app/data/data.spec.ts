import { addDays, money, toIsoDate } from './data'

describe('data helpers', () => {
  it('formats local dates as YYYY-MM-DD', () => {
    expect(toIsoDate(new Date(2026, 0, 5))).toBe('2026-01-05')
    expect(toIsoDate(new Date(2026, 10, 12))).toBe('2026-11-12')
  })

  it('offsets dates from today', () => {
    expect(addDays(0)).toBe(toIsoDate(new Date()))
    expect(addDays(1) > addDays(0)).toBe(true)
  })

  it('formats fees', () => {
    expect(money(0)).toBe('Free / govt. rate')
    expect(money(400)).toContain('400')
  })
})
