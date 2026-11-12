import { ChangeDetectionStrategy, Component, ElementRef, inject, input, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideChevronDown } from '@ng-icons/lucide'

export interface NavMenuLink { label: string; href: string; description?: string }
export interface NavMenuItem { label: string; href?: string; children?: NavMenuLink[] }

/** Usage: `<app-navigation-menu [items]="items" />`. Items with `children` open a panel of links; Esc / outside click closes. */
@Component({
  selector: 'app-navigation-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgIcon],
  viewProviders: [provideIcons({ lucideChevronDown })],
  host: { class: 'block', '(document:click)': 'onDocClick($event)', '(keydown.escape)': 'openIndex.set(-1)' },
  template: `
    <nav aria-label="Main">
      <ul class="flex items-center gap-1">
        @for (item of items(); track item.label; let i = $index) {
          <li class="relative">
            @if (item.children) {
              <button
                type="button"
                [attr.aria-expanded]="openIndex() === i"
                [attr.aria-controls]="'app-navmenu-' + i"
                (click)="openIndex.set(openIndex() === i ? -1 : i)"
                class="hover:bg-accent hover:text-accent-foreground focus-visible:outline-ring data-[open=true]:bg-accent/50 inline-flex h-9 items-center justify-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2"
                [attr.data-open]="openIndex() === i"
              >{{ item.label }}<ng-icon name="lucideChevronDown" size="12" /></button>
              @if (openIndex() === i) {
                <ul [id]="'app-navmenu-' + i" class="bg-popover text-popover-foreground absolute top-full left-0 z-50 mt-1.5 grid w-96 gap-1 rounded-md border p-2 shadow-md">
                  @for (c of item.children; track c.href) {
                    <li>
                      <a [routerLink]="c.href" (click)="openIndex.set(-1)" class="hover:bg-accent hover:text-accent-foreground focus-visible:outline-ring block rounded-sm p-3 text-sm focus-visible:outline-2">
                        <div class="font-medium">{{ c.label }}</div>
                        @if (c.description) { <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">{{ c.description }}</p> }
                      </a>
                    </li>
                  }
                </ul>
              }
            } @else {
              <a [routerLink]="item.href" class="hover:bg-accent hover:text-accent-foreground focus-visible:outline-ring inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2">{{ item.label }}</a>
            }
          </li>
        }
      </ul>
    </nav>
  `,
})
export class NavigationMenuComponent {
  readonly items = input.required<NavMenuItem[]>()
  protected readonly openIndex = signal(-1)
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef)
  protected onDocClick(e: Event): void {
    if (!this.el.nativeElement.contains(e.target as Node)) this.openIndex.set(-1)
  }
}
