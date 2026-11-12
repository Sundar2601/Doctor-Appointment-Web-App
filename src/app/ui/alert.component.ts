import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export type AlertTone = 'default' | 'danger' | 'success' | 'warning' | 'info'

const TONE: Record<AlertTone, { box: string; title: string; text: string; icon: string }> = {
  default: { box: 'border', title: 'text-card-foreground', text: 'text-muted-foreground', icon: 'text-card-foreground' },
  danger: { box: 'border', title: 'text-destructive', text: 'text-destructive', icon: 'text-destructive' },
  success: { box: 'border border-success', title: 'text-success', text: 'text-muted-foreground', icon: 'text-success' },
  warning: { box: 'border border-warning', title: 'text-warning', text: 'text-muted-foreground', icon: 'text-warning' },
  info: { box: 'border border-info', title: 'text-info', text: 'text-muted-foreground', icon: 'text-info' },
}

/** Figma "Alert". Optional `heading` renders the bold title line; projected content is the description. */
@Component({
  selector: 'app-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()', '[attr.role]': "tone() === 'danger' ? 'alert' : 'status'" },
  template: `
    <svg
      class="mt-0.5 size-4 shrink-0"
      [class]="t().icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      @switch (tone()) {
        @case ('success') {
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        }
        @case ('warning') {
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4M12 17h.01" />
        }
        @case ('danger') {
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        }
        @default {
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        }
      }
    </svg>
    <div class="flex min-w-0 flex-1 flex-col gap-0.5 text-sm" [class]="t().text">
      @if (heading()) {
        <p class="font-medium" [class]="t().title">{{ heading() }}</p>
      }
      <div><ng-content /></div>
    </div>
  `,
})
export class AlertComponent {
  readonly tone = input<AlertTone>('danger')
  readonly heading = input<string>()
  protected readonly t = computed(() => TONE[this.tone()])
  protected readonly classes = computed(() => `bg-card flex items-start gap-3 rounded-lg px-4 py-3 text-sm ${this.t().box}`)
}
