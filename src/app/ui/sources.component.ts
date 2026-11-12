import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideExternalLink } from '@ng-icons/lucide'

export interface Source {
  title: string
  host: string
  url?: string
}

/** "Used n sources" list of cited links. */
@Component({
  selector: 'app-sources',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideExternalLink })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <p class="text-muted-foreground mb-1 text-xs">Used {{ sources().length }} {{ sources().length === 1 ? 'source' : 'sources' }}</p>
    <ul class="flex flex-col items-start gap-2">
      @for (s of sources(); track s.title) {
        <li>
          <a
            class="bg-card hover:bg-accent focus-visible:ring-ring/50 flex items-center gap-3 rounded-lg border px-3 py-2 focus-visible:ring-[3px] focus-visible:outline-none"
            [href]="s.url ?? '#'"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ng-icon name="lucideExternalLink" size="16" aria-hidden="true" />
            <span class="grid text-sm leading-tight">
              <span class="font-medium">{{ s.title }}</span>
              <span class="text-muted-foreground text-xs">{{ s.host }}</span>
            </span>
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      }
    </ul>
  `,
})
export class SourcesComponent {
  readonly sources = input<Source[]>([])
}
