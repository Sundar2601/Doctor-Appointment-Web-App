import { ChangeDetectionStrategy, Component, Directive, input, model } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideCircleX, lucideSearch } from '@ng-icons/lucide'

/** iOS rounded filled search field with a clear button. */
@Component({
  selector: 'app-ios-search-bar',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideSearch, lucideCircleX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'bg-muted text-muted-foreground focus-within:ring-ring/50 flex h-9 w-full items-center gap-1.5 rounded-[10px] px-2 focus-within:ring-[3px]',
    role: 'search',
  },
  template: `
    <ng-icon name="lucideSearch" size="16" aria-hidden="true" />
    <input
      type="search"
      class="text-foreground placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent text-[17px] outline-none [&::-webkit-search-cancel-button]:hidden"
      [placeholder]="placeholder()"
      [value]="value()"
      [attr.aria-label]="placeholder()"
      (input)="value.set($any($event.target).value)"
    />
    @if (value()) {
      <button type="button" aria-label="Clear" class="flex size-5 items-center justify-center" (click)="value.set('')">
        <ng-icon name="lucideCircleX" size="16" />
      </button>
    }
  `,
})
export class IosSearchBarComponent {
  readonly value = model('')
  readonly placeholder = input('Search')
}

/** iOS rounded filled text field: `<input appIosTextField placeholder="Email" />`. */
@Directive({
  selector: 'input[appIosTextField]',
  host: {
    class:
      'bg-muted text-foreground placeholder:text-muted-foreground focus-visible:ring-ring/50 h-11 w-full rounded-[10px] px-4 text-[17px] outline-none focus-visible:ring-[3px]',
  },
})
export class IosTextFieldDirective {}
