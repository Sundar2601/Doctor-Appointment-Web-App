import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { AuthService, DEMO_ACCOUNT } from '@/services/auth.service'
import {
  AlertComponent,
  AuthBrandPanelComponent,
  ButtonDirective,
  CheckboxDirective,
  ControlDirective,
  FieldComponent,
  eventValue,
  eventChecked,
} from '@/ui'

@Component({
  selector: 'app-signin-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AlertComponent, AuthBrandPanelComponent, ButtonDirective, CheckboxDirective, ControlDirective, FieldComponent],
  template: `
    <div class="grid min-h-svh lg:grid-cols-2">
      <app-auth-brand-panel class="hidden lg:flex" />
      <main class="flex items-center justify-center p-6 sm:p-10">
        <form class="grid w-full max-w-100 gap-5" (submit)="$event.preventDefault(); submit()" novalidate>
          <div class="grid gap-2">
            <h1 class="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p class="text-muted-foreground text-sm">Sign in to book and manage appointments.</p>
          </div>
          <app-field label="Email" for="email">
            <input
              id="email"
              appControl
              type="email"
              autocomplete="email"
              placeholder="you@example.com"
              (input)="email.set(eventValue($event))"
            />
          </app-field>
          <app-field label="Password" for="pw">
            <input
              id="pw"
              appControl
              [type]="show() ? 'text' : 'password'"
              autocomplete="current-password"
              (input)="password.set(eventValue($event))"
            />
          </app-field>
          <label class="flex items-center gap-2 text-sm"
            ><input type="checkbox" appCheckbox (change)="show.set(eventChecked($event))" /> Show password</label
          >
          @if (error()) {
            <app-alert>{{ error() }}</app-alert>
          }
          <div class="grid gap-2">
            <button appButton type="submit" class="w-full" [disabled]="busy()">{{ busy() ? 'Signing in…' : 'Sign in' }}</button>
            <button appButton variant="outline" type="button" class="w-full" [disabled]="busy()" (click)="demo()">Use demo account</button>
          </div>
          <p class="text-muted-foreground text-center text-xs">Demo: {{ demoEmail }} / {{ demoPassword }}</p>
          <p class="text-muted-foreground text-center text-sm">
            New here? <a routerLink="/signup" class="text-primary font-medium hover:underline">Create an account</a>
          </p>
        </form>
      </main>
    </div>
  `,
})
export class SigninPage {
  protected readonly eventValue = eventValue
  protected readonly eventChecked = eventChecked
  private readonly auth = inject(AuthService)
  private readonly router = inject(Router)
  readonly returnUrl = input<string>()
  protected readonly email = signal('')
  protected readonly password = signal('')
  protected readonly show = signal(false)
  protected readonly busy = signal(false)
  protected readonly error = signal('')

  protected readonly demoEmail = DEMO_ACCOUNT.email
  protected readonly demoPassword = DEMO_ACCOUNT.password

  protected async demo() {
    this.busy.set(true)
    const err = await this.auth.signInDemo()
    this.busy.set(false)
    if (err) return this.error.set(err)
    await this.router.navigateByUrl('/dashboard')
  }

  protected async submit() {
    if (!this.email().trim() || !this.password()) return this.error.set('Enter your email and password.')
    this.busy.set(true)
    const err = await this.auth.signIn(this.email(), this.password())
    this.busy.set(false)
    if (err) return this.error.set(err)
    const url = this.returnUrl()
    await this.router.navigateByUrl(url?.startsWith('/') && !url.startsWith('//') ? url : '/dashboard')
  }
}
