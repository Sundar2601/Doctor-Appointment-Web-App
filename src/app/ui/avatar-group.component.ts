import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { AvatarComponent } from './avatar.component'

/** Overlapping avatars with a "+N" overflow chip. */
@Component({
  selector: 'app-avatar-group',
  imports: [AvatarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex items-center -space-x-2', role: 'group' },
  template: `
    @for (n of shown(); track $index) {
      <app-avatar class="ring-background ring-2" [name]="n" [size]="size()" />
    }
    @if (extra() > 0) {
      <span
        class="bg-muted text-muted-foreground ring-background inline-flex size-8 items-center justify-center rounded-full text-xs font-medium ring-2"
        [attr.aria-label]="extra() + ' more'"
        >+{{ extra() }}</span
      >
    }
  `,
})
export class AvatarGroupComponent {
  readonly names = input.required<string[]>()
  readonly max = input(4)
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  protected readonly shown = computed(() => this.names().slice(0, this.max()))
  protected readonly extra = computed(() => Math.max(0, this.names().length - this.max()))
}
