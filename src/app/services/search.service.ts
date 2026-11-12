import { Injectable, signal } from '@angular/core'

/** Pages whose content the header search box filters. Elsewhere Enter jumps to the first of these. */
export const SEARCHABLE_PAGES = ['doctors', 'hospitals', 'appointments'] as const

/** The header search text, shared with the pages it filters. */
@Injectable({ providedIn: 'root' })
export class SearchService {
  readonly query = signal('')
  /** Set when the next navigation was caused by a search, so the text survives it. */
  keepOnNextNavigation = false

  isSearchable(segment: string): boolean {
    return (SEARCHABLE_PAGES as readonly string[]).includes(segment)
  }

  clear(): void {
    this.query.set('')
  }
}
