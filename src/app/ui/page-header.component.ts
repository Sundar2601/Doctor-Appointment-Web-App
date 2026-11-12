import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'mb-6 block' },
  template: `
    <h1 class="text-2xl font-semibold tracking-tight">{{ title() }}</h1>
    @if (subtitle()) {
      <p class="text-muted-foreground text-sm">{{ subtitle() }}</p>
    }
  `,
})
export class PageHeaderComponent {
  readonly title = input.required<string>()
  readonly subtitle = input<string>()
}
