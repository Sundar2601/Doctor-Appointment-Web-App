import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { lucideFile, lucideUpload, lucideX } from '@ng-icons/lucide'
import { eventFiles } from './dom-events'

/** Drag-and-drop / click file picker. Emits the chosen files. */
@Component({
  selector: 'app-file-upload',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideFile, lucideUpload, lucideX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <label
      class="focus-within:outline-ring flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-dashed p-8 text-center focus-within:outline-2"
      [class]="dragging() ? 'bg-accent' : 'bg-background hover:bg-accent/50'"
      (dragover)="$event.preventDefault(); dragging.set(true)"
      (dragleave)="dragging.set(false)"
      (drop)="$event.preventDefault(); dragging.set(false); take($event.dataTransfer?.files)"
    >
      <span class="bg-muted flex size-10 items-center justify-center rounded-full"><ng-icon name="lucideUpload" size="20" /></span>
      <span class="text-sm font-medium">{{ label() }}</span>
      <span class="text-muted-foreground text-xs">{{ hint() }}</span>
      <span class="border-input bg-background rounded-md border px-3 py-1.5 text-sm font-medium shadow-xs">Browse files</span>
      <input class="sr-only" type="file" [accept]="accept()" [multiple]="multiple()" (change)="take(eventFiles($event))" />
    </label>
    @if (files().length) {
      <ul class="mt-4 grid gap-2">
        @for (f of files(); track $index) {
          <li class="flex items-center gap-3 rounded-md border p-3">
            <ng-icon name="lucideFile" size="20" class="shrink-0" />
            <span class="min-w-0 flex-1 truncate text-sm font-medium">{{ f.name }}</span>
            <span class="text-muted-foreground text-xs">{{ size(f.size) }}</span>
            <button
              type="button"
              class="text-muted-foreground hover:text-foreground"
              [attr.aria-label]="'Remove ' + f.name"
              (click)="remove($index)"
            >
              <ng-icon name="lucideX" size="16" />
            </button>
          </li>
        }
      </ul>
    }
  `,
})
export class FileUploadComponent {
  protected readonly eventFiles = eventFiles
  readonly label = input('Drag and drop files here')
  readonly hint = input('')
  readonly accept = input('')
  readonly multiple = input(false)
  readonly filesChange = output<File[]>()
  protected readonly dragging = signal(false)
  protected readonly files = signal<File[]>([])
  protected take(list?: FileList | null) {
    this.set(Array.from(list ?? []))
  }
  protected remove(i: number) {
    this.set(this.files().filter((_, j) => j !== i))
  }
  protected size(b: number) {
    return b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB'
  }
  private set(files: File[]) {
    this.files.set(files)
    this.filesChange.emit(files)
  }
}
