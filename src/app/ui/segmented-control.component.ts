import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

export interface SegmentOption {
  value: string
  label: string
  disabled?: boolean
}

/** Single-choice pill toggle group. Two-way: `[(value)]`. */
@Component({
  selector: 'app-segmented-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-muted text-muted-foreground inline-flex h-9 items-center rounded-lg p-0.75',
    role: 'radiogroup',
    '[attr.aria-label]': 'label()',
  },
  template: `
    @for (o of options(); track o.value) {
      <button
        type="button"
        role="radio"
        class="focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none inline-flex h-full items-center justify-center rounded-md px-3 text-sm font-medium whitespace-nowrap transition-colors disabled:opacity-50"
        [class]="o.value === value() ? 'bg-background text-foreground shadow-xs' : 'hover:text-foreground'"
        [attr.aria-checked]="o.value === value()"
        [tabindex]="o.value === value() ? 0 : -1"
        [disabled]="o.disabled"
        (click)="value.set(o.value)"
        (keydown)="key($event, $index)"
      >
        {{ o.label }}
      </button>
    }
  `,
})
export class SegmentedControlComponent {
  readonly options = input.required<SegmentOption[]>()
  readonly value = model<string>('')
  readonly label = input('Options')
  protected key(e: KeyboardEvent, i: number) {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    e.preventDefault()
    const o = this.options()
    for (let n = 1; n <= o.length; n++) {
      const t = o[(i + d * n + o.length * n) % o.length]
      if (t && !t.disabled) {
        this.value.set(t.value)
        ;((e.currentTarget as HTMLElement).parentElement?.children[o.indexOf(t)] as HTMLElement | undefined)?.focus()
        return
      }
    }
  }
}
