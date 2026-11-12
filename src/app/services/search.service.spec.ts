import { SearchService } from './search.service'

describe('SearchService', () => {
  it('knows which pages are searchable', () => {
    const s = new SearchService()
    expect(s.isSearchable('doctors')).toBe(true)
    expect(s.isSearchable('hospitals')).toBe(true)
    expect(s.isSearchable('dashboard')).toBe(false)
  })

  it('clears the query', () => {
    const s = new SearchService()
    s.query.set('cardio')
    s.clear()
    expect(s.query()).toBe('')
  })
})
