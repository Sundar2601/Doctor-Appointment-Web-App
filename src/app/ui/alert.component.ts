import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

@Component({
  selector: 'app-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()', '[attr.role]': "tone() === 'danger' ? 'alert' : 'status'" },
  template: '<ng-content />',
})
export class AlertComponent {
  readonly tone = input<'danger' | 'success'>('danger')
  protected readonly classes = computed(
    () => `rounded-md border px-3 py-2 text-sm ${this.tone() === 'danger' ? 'border-foreground bg-background text-foreground' : 'bg-muted text-foreground'}`,
  )
}
