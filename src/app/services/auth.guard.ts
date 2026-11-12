import { inject } from '@angular/core'
import { Router, type CanActivateFn } from '@angular/router'
import { AuthService } from './auth.service'

export const authGuard: CanActivateFn = (_route, state) => {
  const auth = inject(AuthService)
  return auth.isLoggedIn() ? true : inject(Router).createUrlTree(['/signin'], { queryParams: { returnUrl: state.url } })
}

export const guestGuard: CanActivateFn = () => {
  return inject(AuthService).isLoggedIn() ? inject(Router).createUrlTree(['/dashboard']) : true
}
