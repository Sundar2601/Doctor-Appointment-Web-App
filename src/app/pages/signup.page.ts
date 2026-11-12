import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { AuthService } from '@/services/auth.service'
import { AlertComponent, AuthBrandPanelComponent, ButtonDirective, ControlDirective, FieldComponent, eventValue } from '@/ui'

@Component({
  selector: 'app-signup-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AlertComponent, AuthBrandPanelComponent, ButtonDirective, ControlDirective, FieldComponent],
  template: `
    <div class="grid min-h-svh lg:grid-cols-2">
      <app-auth-brand-panel class="hidden lg:flex" />
      <main class="flex items-center justify-center p-6 sm:p-10">
        <form class="grid w-full max-w-100 gap-5" (submit)="$event.preventDefault(); submit()" novalidate>
          <div class="grid gap-2">
            <h1 class="text-3xl font-bold tracking-tight">Create your account</h1>
            <p class="text-muted-foreground text-sm">Book hospital appointments across Puducherry.</p>
          </div>
          <app-field label="Full name" for="name">
            <input id="name" appControl autocomplete="name" placeholder="Your full name" (input)="name.set(eventValue($event))" />
          </app-field>
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
          <app-field
            label="Password"
            for="pw"
            hint="At least 8 characters."
            [error]="password() && password().length < 8 ? 'At least 8 characters.' : ''"
          >
            <input id="pw" appControl type="password" autocomplete="new-password" (input)="password.set(eventValue($event))" />
          </app-field>
          <app-field label="Confirm password" for="pw2" [error]="confirm() && confirm() !== password() ? 'Passwords do not match.' : ''">
            <input id="pw2" appControl type="password" autocomplete="new-password" (input)="confirm.set(eventValue($event))" />
          </app-field>
          @if (error()) {
            <app-alert>{{ error() }}</app-alert>
          }
          <button appButton type="submit" class="w-full" [disabled]="!valid() || busy()">
            {{ busy() ? 'Creating…' : 'Create account' }}
          </button>
          <p class="text-muted-foreground text-center text-sm">
            Already registered? <a routerLink="/signin" class="text-primary font-medium hover:underline">Sign in</a>
          </p>
        </form>
      </main>
    </div>
  `,
})
export class SignupPage {
  protected readonly eventValue = eventValue
  private readonly auth = inject(AuthService)
  private readonly router = inject(Router)
  protected readonly name = signal('')
  protected readonly email = signal('')
  protected readonly password = signal('')
  protected readonly confirm = signal('')
  protected readonly busy = signal(false)
  protected readonly error = signal('')
  protected readonly valid = computed(
    () =>
      this.name().trim().length > 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email().trim()) &&
      this.password().length >= 8 &&
      this.password() === this.confirm(),
  )

  protected async submit() {
    if (!this.valid()) return
    this.busy.set(true)
    const err = await this.auth.signUp(this.name(), this.email(), this.password())
    this.busy.set(false)
    if (err) return this.error.set(err)
    await this.router.navigateByUrl('/dashboard')
  }
}
