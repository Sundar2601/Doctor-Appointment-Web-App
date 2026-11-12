import { TestBed } from '@angular/core/testing'
import { AuthService, DEMO_ACCOUNT } from './auth.service'

describe('AuthService', () => {
  beforeEach(() => {
    localStorage.clear()
    TestBed.resetTestingModule()
  })

  const create = () => TestBed.inject(AuthService)

  it('starts signed out', () => {
    expect(create().isLoggedIn()).toBe(false)
  })

  it('signs up and signs the new user in', async () => {
    const auth = create()
    expect(await auth.signUp('Asha Menon', 'Asha@Example.com', 'secret1')).toBeNull()
    expect(auth.user()).toEqual({ name: 'Asha Menon', email: 'asha@example.com' })
  })

  it('rejects a duplicate email', async () => {
    const auth = create()
    await auth.signUp('A', 'a@example.com', 'pw')
    expect(await auth.signUp('B', 'A@example.com', 'pw')).toMatch(/already exists/)
  })

  it('signs in with the right password and rejects the wrong one', async () => {
    const auth = create()
    await auth.signUp('A', 'a@example.com', 'right')
    auth.signOut()
    expect(await auth.signIn('a@example.com', 'wrong')).toMatch(/Incorrect/)
    expect(auth.isLoggedIn()).toBe(false)
    expect(await auth.signIn('A@example.com', 'right')).toBeNull()
    expect(auth.isLoggedIn()).toBe(true)
  })

  it('creates and signs in the demo account', async () => {
    const auth = create()
    expect(await auth.signInDemo()).toBeNull()
    expect(auth.user()?.email).toBe(DEMO_ACCOUNT.email)
    auth.signOut()
    expect(await auth.signInDemo()).toBeNull()
    expect(auth.isLoggedIn()).toBe(true)
  })

  it('persists the session across instances', async () => {
    await create().signUp('A', 'a@example.com', 'pw')
    TestBed.resetTestingModule()
    expect(create().user()?.email).toBe('a@example.com')
  })

  it('ignores corrupted or malformed storage', () => {
    localStorage.setItem('pondy.session', '{not json')
    localStorage.setItem('pondy.users', JSON.stringify([{ name: 1 }, 'x']))
    const auth = create()
    expect(auth.isLoggedIn()).toBe(false)
  })

  it('clears the session on sign out', async () => {
    const auth = create()
    await auth.signUp('A', 'a@example.com', 'pw')
    auth.signOut()
    expect(auth.user()).toBeNull()
    expect(localStorage.getItem('pondy.session')).toBeNull()
  })
})
