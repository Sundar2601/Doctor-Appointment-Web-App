import { initialsOf } from './avatar.component'
import { eventChecked, eventFiles, eventNumber, eventValue } from './dom-events'

describe('initialsOf', () => {
  it('uses the first letters of the first two words', () => {
    expect(initialsOf('Olivia Brown')).toBe('OB')
    expect(initialsOf('  maya  thompson  smith ')).toBe('MT')
  })

  it('drops a leading Dr.', () => {
    expect(initialsOf('Dr. Priya Nair')).toBe('PN')
    expect(initialsOf('Dr Liam Carter')).toBe('LC')
  })

  it('handles empty names', () => {
    expect(initialsOf('')).toBe('')
  })
})

describe('DOM event helpers', () => {
  const eventFrom = (target: object) => ({ target }) as unknown as Event

  it('reads values, checked state and numbers', () => {
    expect(eventValue(eventFrom({ value: 'abc' }))).toBe('abc')
    expect(eventChecked(eventFrom({ checked: true }))).toBe(true)
    expect(eventNumber(eventFrom({ valueAsNumber: 7 }))).toBe(7)
  })

  it('returns files or null', () => {
    expect(eventFiles(eventFrom({ files: null }))).toBeNull()
  })
})
