import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, o as output, s as signal, O as Output, I as Input } from './angular-platform-Dxt0cssM.js';
import { N as NgIcon, p as provideIcons, l as lucideX, I as lucideUpload, w as lucideFile } from './ng-icons-lucide-DF7QvMAc.js';
import { a as eventFiles } from './dom-events-CvB9dAwI.js';
import './preload-helper-D5QYaGzd.js';

/** Drag-and-drop / click file picker. Emits the chosen files. */
let FileUploadComponent = class FileUploadComponent {
    eventFiles = eventFiles;
    label = input('Drag and drop files here');
    hint = input('');
    accept = input('');
    multiple = input(false);
    progress = input();
    filesChange = output();
    dragging = signal(false);
    files = signal([]);
    take(list) {
        this.set(Array.from(list ?? []));
    }
    remove(i) {
        this.set(this.files().filter((_, j) => j !== i));
    }
    size(b) {
        return b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB';
    }
    set(files) {
        this.files.set(files);
        this.filesChange.emit(files);
    }
    static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false, transform: undefined },] }],
        hint: [{ type: Input, args: [{ isSignal: true, alias: "hint", required: false, transform: undefined },] }],
        accept: [{ type: Input, args: [{ isSignal: true, alias: "accept", required: false, transform: undefined },] }],
        multiple: [{ type: Input, args: [{ isSignal: true, alias: "multiple", required: false, transform: undefined },] }],
        progress: [{ type: Input, args: [{ isSignal: true, alias: "progress", required: false, transform: undefined },] }],
        filesChange: [{ type: Output, args: ["filesChange",] }]
    };
};
FileUploadComponent = __decorate([
    Component({
        selector: 'app-file-upload',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideFile, lucideUpload, lucideX })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'block' },
        template: `
    <label
      class="focus-within:ring-ring/50 focus-within:border-ring flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-dashed p-8 text-center focus-within:ring-[3px]"
      [class]="dragging() ? 'bg-accent' : 'bg-background hover:bg-accent/50'"
      (dragover)="$event.preventDefault(); dragging.set(true)"
      (dragleave)="dragging.set(false)"
      (drop)="$event.preventDefault(); dragging.set(false); take($event.dataTransfer?.files)"
    >
      <span class="bg-muted flex size-10 items-center justify-center rounded-full"><ng-icon name="lucideUpload" size="20" /></span>
      <span class="text-sm font-medium">{{ label() }}</span>
      @if (hint()) {
        <span class="text-muted-foreground text-xs">{{ hint() }}</span>
      }
      <span class="border-input bg-background rounded-md border px-3 py-1.5 text-sm font-medium shadow-xs">Browse files</span>
      <input class="sr-only" type="file" [accept]="accept()" [multiple]="multiple()" (change)="take(eventFiles($event))" />
    </label>
    @if (files().length) {
      <ul class="mt-4 grid gap-2">
        @for (f of files(); track $index) {
          <li class="flex items-center gap-3 rounded-md border p-3">
            <ng-icon name="lucideFile" size="20" class="shrink-0" />
            <span class="flex min-w-0 flex-1 flex-col gap-1.5">
              <span class="truncate text-sm font-medium">{{ f.name }}</span>
              @if (progress() !== undefined) {
                <span
                  class="bg-muted block h-1 overflow-hidden rounded-full"
                  role="progressbar"
                  aria-label="Upload progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  [attr.aria-valuenow]="progress()"
                >
                  <span class="bg-primary block h-full rounded-full" [style.width.%]="progress()"></span>
                </span>
              }
            </span>
            <span class="text-muted-foreground text-xs">{{ size(f.size) }}</span>
            <button
              type="button"
              class="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 rounded-xs focus-visible:ring-[3px] focus-visible:outline-none"
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
], FileUploadComponent);

const meta = {
  title: 'Forms/File Upload',
  decorators: [moduleMetadata({
    imports: [FileUploadComponent]
  })],
  argTypes: {
    label: {
      control: 'text'
    },
    hint: {
      control: 'text'
    },
    accept: {
      control: 'text'
    },
    multiple: {
      control: 'boolean'
    }
  },
  args: {
    label: 'Drag and drop files here',
    hint: 'PDF, PNG or JPG up to 10 MB',
    accept: '',
    multiple: false
  },
  render: args => ({
    props: args,
    template: `<div class="w-96"><app-file-upload [label]="label" [hint]="hint" [accept]="accept" [multiple]="multiple" /></div>`
  })
};
const Default = {};
const WithHint = {
  args: {
    hint: 'PNG or JPG up to 5MB',
    accept: 'image/png,image/jpeg'
  }
};
const Multiple = {
  args: {
    multiple: true,
    label: 'Drop your documents here'
  }
};
const __namedExportsOrder = ["Default", "WithHint", "Multiple"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
    }
  }
};
WithHint.parameters = {
  ...WithHint.parameters,
  docs: {
    ...WithHint.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    hint: 'PNG or JPG up to 5MB',\n    accept: 'image/png,image/jpeg'\n  }\n}",
      ...WithHint.parameters?.docs?.source
    }
  }
};
Multiple.parameters = {
  ...Multiple.parameters,
  docs: {
    ...Multiple.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    multiple: true,\n    label: 'Drop your documents here'\n  }\n}",
      ...Multiple.parameters?.docs?.source
    }
  }
};

export { Default, Multiple, WithHint, __namedExportsOrder, meta as default };
