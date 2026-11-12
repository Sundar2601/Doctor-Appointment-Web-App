import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideUpload } from '@ng-icons/lucide'

/** Drag-and-drop / click file picker. Emits the chosen files. */
@Component({
  selector: 'app-file-upload',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideUpload })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <label
      class="focus-within:outline-ring flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed p-8 text-center focus-within:outline-2"
      [class]="dragging() ? 'bg-accent' : 'bg-background hover:bg-accent/50'"
      (dragover)="$event.preventDefault(); dragging.set(true)"
      (dragleave)="dragging.set(false)"
      (drop)="$event.preventDefault(); dragging.set(false); take($event.dataTransfer?.files)"
    >
      <ng-icon name="lucideUpload" size="24" class="text-muted-foreground" />
      <span class="text-sm font-medium">{{ label() }}</span>
      <span class="text-muted-foreground text-xs">{{ hint() }}</span>
      <input class="sr-only" type="file" [accept]="accept()" [multiple]="multiple()" (change)="take($any($event.target).files)" />
    </label>
    @if (names().length) {
      <ul class="mt-2 grid gap-1 text-sm">
        @for (n of names(); track $index) { <li class="text-muted-foreground truncate">{{ n }}</li> }
      </ul>
    }
  `,
})
export class FileUploadComponent {
  readonly label = input('Click to upload or drag and drop')
  readonly hint = input('')
  readonly accept = input('')
  readonly multiple = input(false)
  readonly filesChange = output<File[]>()
  protected readonly dragging = signal(false)
  protected readonly names = signal<string[]>([])
  protected take(list?: FileList | null) {
    const files = Array.from(list ?? [])
    this.names.set(files.map((f) => f.name))
    this.filesChange.emit(files)
  }
}
