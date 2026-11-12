import { type ElementRef, ChangeDetectionStrategy, Component, afterNextRender, signal, viewChild } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideArrowDown } from '@ng-icons/lucide'

/** Figma "Message Scroller": scroll area that sticks to the bottom while content streams in, with a jump-to-latest button. Give it a height. */
@Component({
  selector: 'app-message-scroller',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideArrowDown })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-background relative block overflow-hidden rounded-lg border' },
  template: `
    <div #scroller class="h-full overflow-y-auto p-4" tabindex="0" (scroll)="onScroll()">
      <div #content><ng-content /></div>
    </div>
    @if (!atBottom()) {
      <button
        type="button"
        class="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring/50 absolute bottom-4 left-1/2 inline-flex h-9 -translate-x-1/2 items-center gap-2 rounded-full px-4 text-sm font-medium shadow-lg focus-visible:ring-[3px] focus-visible:outline-none"
        (click)="jump()"
      >
        <ng-icon name="lucideArrowDown" size="16" aria-hidden="true" />
        Jump to latest
      </button>
    }
  `,
})
export class MessageScrollerComponent {
  private readonly scroller = viewChild.required<ElementRef<HTMLElement>>('scroller')
  private readonly content = viewChild.required<ElementRef<HTMLElement>>('content')
  protected readonly atBottom = signal(true)

  constructor() {
    afterNextRender(() => {
      const observer = new ResizeObserver(() => {
        if (this.atBottom()) this.jump()
        else this.onScroll()
      })
      observer.observe(this.content().nativeElement)
      this.jump()
    })
  }

  protected onScroll() {
    const el = this.scroller().nativeElement
    this.atBottom.set(el.scrollHeight - el.scrollTop - el.clientHeight < 8)
  }

  protected jump() {
    const el = this.scroller().nativeElement
    el.scrollTop = el.scrollHeight
    this.atBottom.set(true)
  }
}
