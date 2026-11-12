import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { AuthService } from '@/services/auth.service'
import { AlertComponent, ButtonDirective, CardComponent, ControlDirective, FieldComponent } from '@/ui'

@Component({
  selector: 'app-signup-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AlertComponent, ButtonDirective, CardComponent, ControlDirective, FieldComponent],
  template: `
    <div class="bg-muted/40 flex min-h-svh items-center justify-center p-4">
      <app-card class="w-full max-w-md p-6 shadow-sm sm:p-8">
        <form class="grid gap-4" (submit)="$event.preventDefault(); submit()" novalidate>
          <div class="text-center">
            <span class="bg-primary text-primary-foreground mx-auto mb-3 flex size-10 items-center justify-center rounded-md font-semibold">D</span>
            <h1 class="text-2xl font-semibold tracking-tight">Create your account</h1>
            <p class="text-muted-foreground text-sm">Book hospital appointments across Puducherry.</p>
          </div>
          <app-field label="Full name" for="name">
            <input id="name" appControl autocomplete="name" (input)="name.set($any($event.target).value)" />
          </app-field>
          <app-field label="Email" for="email">
            <input id="email" appControl type="email" autocomplete="email" placeholder="you@example.com" (input)="email.set($any($event.target).value)" />
          </app-field>
          <app-field label="Password" for="pw" hint="At least 8 characters." [error]="password() && password().length < 8 ? 'At least 8 characters.' : ''">
            <input id="pw" appControl type="password" autocomplete="new-password" (input)="password.set($any($event.target).value)" />
          </app-field>
          <app-field label="Confirm password" for="pw2" [error]="confirm() && confirm() !== password() ? 'Passwords do not match.' : ''">
            <input id="pw2" appControl type="password" autocomplete="new-password" (input)="confirm.set($any($event.target).value)" />
          </app-field>
          @if (error()) { <app-alert>{{ error() }}</app-alert> }
          <button appButton type="submit" [disabled]="!valid() || busy()">{{ busy() ? 'Creating…' : 'Create account' }}</button>
          <p class="text-muted-foreground text-center text-sm">Already registered? <a appButton variant="link" routerLink="/signin" class="p-0">Sign in</a></p>
        </form>
      </app-card>
    </div>
  `,
})
export class SignupPage {
  private readonly auth = inject(AuthService)
  private readonly router = inject(Router)
  protected readonly name = signal('')
  protected readonly email = signal('')
  protected readonly password = signal('')
  protected readonly confirm = signal('')
  protected readonly busy = signal(false)
  protected readonly error = signal('')
  protected readonly valid = computed(
    () => this.name().trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email().trim()) && this.password().length >= 8 && this.password() === this.confirm(),
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
