import { ChangeDetectionStrategy, Component, computed, Directive, inject, input, model } from '@angular/core'

/**
 * Figma "Toggle Group". Usage:
 * `<app-toggle-group [(value)]="v"><button appToggleGroupItem value="bold">Bold</button>...</app-toggle-group>`.
 * `type="single"` keeps at most one value, `"multiple"` allows many.
 */
@Component({
  selector: 'app-toggle-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'group',
    class: 'border-input inline-flex items-start overflow-hidden rounded-md border',
  },
  template: '<ng-content />',
})
export class ToggleGroupComponent {
  readonly value = model<string[]>([])
  readonly type = input<'single' | 'multiple'>('multiple')
  readonly disabled = input(false)

  isOn(v: string) {
    return this.value().includes(v)
  }
  toggle(v: string) {
    const cur = this.value()
    if (cur.includes(v)) this.value.set(cur.filter((x) => x !== v))
    else this.value.set(this.type() === 'single' ? [v] : [...cur, v])
  }
}

@Directive({
  selector: 'button[appToggleGroupItem]',
  host: {
    type: 'button',
    '[class]': 'classes',
    '[attr.aria-pressed]': 'on()',
    '[disabled]': 'group.disabled() || null',
    '(click)': 'group.toggle(value())',
  },
})
export class ToggleGroupItemDirective {
  protected readonly group = inject(ToggleGroupComponent)
  readonly value = input.required<string>()
  protected readonly on = computed(() => this.group.isOn(this.value()))
  protected readonly classes =
    'inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md px-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-accent aria-pressed:text-accent-foreground'
}
