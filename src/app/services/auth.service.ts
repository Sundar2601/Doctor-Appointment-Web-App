import { Injectable, computed, signal } from '@angular/core'
import { DEMO_EMAIL } from '@/data/data'

export interface User {
  name: string
  email: string
}

interface StoredUser extends User {
  hash: string
}

export const DEMO_ACCOUNT = { name: 'Demo Patient', email: DEMO_EMAIL, password: 'Demo@1234' }

const USERS_KEY = 'pondy.users'
const SESSION_KEY = 'pondy.session'

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Demo-only auth: accounts live in this browser's localStorage and there is no server.
 * Replace with a real backend (and real session handling) before production use.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly user = signal<User | null>(this.readSession())
  readonly isLoggedIn = computed(() => this.user() !== null)

  async signUp(name: string, email: string, password: string): Promise<string | null> {
    const users = this.readUsers()
    const e = email.trim().toLowerCase()
    if (users.some((u) => u.email === e)) return 'An account with this email already exists.'
    users.push({ name: name.trim(), email: e, hash: await sha256(`${e}:${password}`) })
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    this.start({ name: name.trim(), email: e })
    return null
  }

  async signIn(email: string, password: string): Promise<string | null> {
    const e = email.trim().toLowerCase()
    const found = this.readUsers().find((u) => u.email === e)
    if (!found || found.hash !== (await sha256(`${e}:${password}`))) return 'Incorrect email or password.'
    this.start({ name: found.name, email: found.email })
    return null
  }

  /** Creates the demo account on first use, then signs in with it. */
  async signInDemo(): Promise<string | null> {
    const { name, email, password } = DEMO_ACCOUNT
    if (!this.readUsers().some((u) => u.email === email)) {
      const err = await this.signUp(name, email, password)
      if (err) return err
      return null
    }
    return this.signIn(email, password)
  }

  signOut() {
    localStorage.removeItem(SESSION_KEY)
    this.user.set(null)
  }

  private start(u: User) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(u))
    this.user.set(u)
  }

  private readUsers(): StoredUser[] {
    try { return JSON.parse(localStorage.getItem(USERS_KEY) ?? '[]') } catch { return [] }
  }

  private readSession(): User | null {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) ?? 'null') } catch { return null }
  }
}
