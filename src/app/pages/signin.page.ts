import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { AuthService, DEMO_ACCOUNT } from '@/services/auth.service'
import { AlertComponent, ButtonDirective, CardComponent, ControlDirective, FieldComponent } from '@/ui'

@Component({
  selector: 'app-signin-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AlertComponent, ButtonDirective, CardComponent, ControlDirective, FieldComponent],
  template: `
    <div class="bg-muted/40 flex min-h-svh items-center justify-center p-4">
      <app-card class="w-full max-w-md p-6 shadow-sm sm:p-8">
        <form class="grid gap-5" (submit)="$event.preventDefault(); submit()" novalidate>
          <div class="text-center">
            <span class="bg-primary text-primary-foreground mx-auto mb-3 flex size-10 items-center justify-center rounded-md font-semibold">D</span>
            <h1 class="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p class="text-muted-foreground text-sm">Sign in to book and manage appointments.</p>
          </div>
          <app-field label="Email" for="email">
            <input id="email" appControl type="email" autocomplete="email" placeholder="you@example.com" (input)="email.set($any($event.target).value)" />
          </app-field>
          <app-field label="Password" for="pw">
            <input id="pw" appControl [type]="show() ? 'text' : 'password'" autocomplete="current-password" (input)="password.set($any($event.target).value)" />
            <label class="text-muted-foreground mt-1 flex items-center gap-2 text-xs"><input type="checkbox" class="accent-primary" (change)="show.set($any($event.target).checked)" /> Show password</label>
          </app-field>
          @if (error()) { <app-alert>{{ error() }}</app-alert> }
          <button appButton type="submit" [disabled]="busy()">{{ busy() ? 'Signing in…' : 'Sign in' }}</button>
          <button appButton variant="outline" type="button" [disabled]="busy()" (click)="demo()">Use demo account</button>
          <p class="text-muted-foreground text-center text-xs">Demo: {{ demoEmail }} / {{ demoPassword }}</p>
          <p class="text-muted-foreground text-center text-sm">New here? <a appButton variant="link" routerLink="/signup" class="p-0">Create an account</a></p>
        </form>
      </app-card>
    </div>
  `,
})
export class SigninPage {
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
