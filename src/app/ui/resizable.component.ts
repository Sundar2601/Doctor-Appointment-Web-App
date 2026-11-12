import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideGripVertical } from '@ng-icons/lucide'

/** Two resizable panes. Usage: `<app-resizable><div pane1>..</div><div pane2>..</div></app-resizable>`; nest for more. */
@Component({
  selector: 'app-resizable',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideGripVertical })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: `
    <div class="min-h-0 min-w-0 overflow-auto" [style.flex]="'0 0 ' + size() + '%'"><ng-content select="[pane1]" /></div>
    <div
      class="bg-border focus-visible:ring-ring/50 relative flex shrink-0 items-center justify-center focus-visible:ring-[3px] focus-visible:outline-none"
      [class]="horizontal() ? 'w-2 cursor-col-resize' : 'h-2 cursor-row-resize'"
      role="separator"
      tabindex="0"
      [attr.aria-orientation]="horizontal() ? 'vertical' : 'horizontal'"
      [attr.aria-valuenow]="size()"
      aria-valuemin="10"
      aria-valuemax="90"
      (pointerdown)="start($event)"
      (pointermove)="move($event)"
      (pointerup)="dragging = false"
      (keydown)="key($event)"
    >
      <span class="bg-border flex h-4 w-3 items-center justify-center rounded-xs border" [class.rotate-90]="!horizontal()"
        ><ng-icon name="lucideGripVertical" size="10"
      /></span>
    </div>
    <div class="min-h-0 min-w-0 flex-1 overflow-auto"><ng-content select="[pane2]" /></div>
  `,
})
export class ResizableComponent {
  /** 'horizontal' places panes side by side. */
  readonly direction = input<'horizontal' | 'vertical'>('horizontal')
  /** Initial size of the first pane, in percent. */
  readonly initialSize = input(40)
  protected readonly horizontal = computed(() => this.direction() === 'horizontal')
  protected readonly classes = computed(() => `flex overflow-hidden rounded-lg border ${this.horizontal() ? 'h-50 flex-row' : 'flex-col'}`)
  private readonly custom = signal<number | null>(null)
  protected readonly size = computed(() => this.custom() ?? this.initialSize())
  protected dragging = false
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement

  protected start(e: PointerEvent) {
    this.dragging = true
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  protected move(e: PointerEvent) {
    if (!this.dragging) return
    const r = this.el.getBoundingClientRect()
    const pct = this.horizontal() ? ((e.clientX - r.left) / r.width) * 100 : ((e.clientY - r.top) / r.height) * 100
    this.custom.set(Math.min(90, Math.max(10, Math.round(pct))))
  }
  protected key(e: KeyboardEvent) {
    const [dec, inc] = this.horizontal() ? ['ArrowLeft', 'ArrowRight'] : ['ArrowUp', 'ArrowDown']
    if (e.key !== dec && e.key !== inc) return
    e.preventDefault()
    this.custom.set(Math.min(90, Math.max(10, this.size() + (e.key === inc ? 5 : -5))))
  }
}
