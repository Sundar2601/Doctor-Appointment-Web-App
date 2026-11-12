import { TestBed } from '@angular/core/testing'
import { provideRouter, Router, type ActivatedRouteSnapshot, type RouterStateSnapshot, type UrlTree } from '@angular/router'
import { authGuard, guestGuard } from './auth.guard'
import { AuthService } from './auth.service'

const run = (guard: typeof authGuard, url = '/doctors') =>
  TestBed.runInInjectionContext(() => guard({} as ActivatedRouteSnapshot, { url } as RouterStateSnapshot))

describe('route guards', () => {
  beforeEach(() => {
    localStorage.clear()
    TestBed.configureTestingModule({ providers: [provideRouter([])] })
  })

  it('redirects signed-out users to sign in, keeping the return URL', () => {
    const result = run(authGuard, '/book?doctor=d1') as UrlTree
    expect(TestBed.inject(Router).serializeUrl(result)).toBe('/signin?returnUrl=%2Fbook%3Fdoctor%3Dd1')
  })

  it('lets signed-in users through and bounces them off guest pages', async () => {
    await TestBed.inject(AuthService).signInDemo()
    expect(run(authGuard)).toBe(true)
    const result = run(guestGuard) as UrlTree
    expect(TestBed.inject(Router).serializeUrl(result)).toBe('/dashboard')
  })

  it('lets signed-out users see guest pages', () => {
    expect(run(guestGuard)).toBe(true)
  })
})
