import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCheck } from '@ng-icons/lucide'

export interface ModelOption {
  value: string
  label: string
  description?: string
}

/** Listbox for picking a model. `[(value)]` holds the selected model value. Arrow keys move, Enter/Space select. */
@Component({
  selector: 'app-model-selector',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCheck })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-popover text-popover-foreground block w-72 rounded-lg border p-1 shadow-md' },
  template: `
    <div role="listbox" [attr.aria-label]="ariaLabel()">
      @for (o of options(); track o.value) {
        <div
          role="option"
          class="hover:bg-accent focus-visible:bg-accent flex cursor-pointer items-center justify-between rounded-md px-2 py-2 outline-none"
          [class.bg-accent]="o.value === value()"
          [attr.aria-selected]="o.value === value()"
          [tabindex]="o.value === value() || (!value() && $first) ? 0 : -1"
          (click)="value.set(o.value)"
          (keydown)="onKey($event)"
        >
          <span class="grid text-sm leading-tight">
            <span class="font-medium">{{ o.label }}</span>
            @if (o.description) {
              <span class="text-muted-foreground text-xs">{{ o.description }}</span>
            }
          </span>
          @if (o.value === value()) {
            <ng-icon name="lucideCheck" size="16" aria-hidden="true" />
          }
        </div>
      }
    </div>
  `,
})
export class ModelSelectorComponent {
  readonly options = input<ModelOption[]>([])
  readonly value = model<string | null>(null)
  readonly ariaLabel = input('Model')

  protected onKey(e: KeyboardEvent) {
    const items = Array.from((e.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLElement>('[role=option]') ?? [])
    const i = items.indexOf(e.currentTarget as HTMLElement)
    if (i < 0) return
    const go = (n: number) => {
      e.preventDefault()
      const t = items[(n + items.length) % items.length]
      t?.focus()
    }
    if (e.key === 'ArrowDown') go(i + 1)
    else if (e.key === 'ArrowUp') go(i - 1)
    else if (e.key === 'Home') go(0)
    else if (e.key === 'End') go(items.length - 1)
    else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this.value.set(this.options()[i]?.value ?? null)
    }
  }
}
