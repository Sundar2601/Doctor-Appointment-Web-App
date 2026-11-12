import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, m as model, i as input, I as Input, O as Output } from './angular-platform-DKqHXYyu.js';
import { N as NgIcon, p as provideIcons, l as lucideX } from './ng-icons-lucide-DvOyu-Mi.js';
import './preload-helper-D5QYaGzd.js';

/** Type and press Enter or comma to add a tag; Backspace removes the last. Two-way: `[(tags)]`. */
let TagInputComponent = class TagInputComponent {
    tags = model([]);
    placeholder = input('Add tag...');
    key(e, el) {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            this.add(el.value);
            el.value = '';
        }
        else if (e.key === 'Backspace' && !el.value && this.tags().length) {
            this.tags.update((t) => t.slice(0, -1));
        }
    }
    add(v) {
        const t = v.trim();
        if (t && !this.tags().includes(t))
            this.tags.update((a) => [...a, t]);
    }
    remove(t) {
        this.tags.update((a) => a.filter((x) => x !== t));
    }
    static propDecorators = {
        tags: [{ type: Input, args: [{ isSignal: true, alias: "tags", required: false },] }, { type: Output, args: ["tagsChange",] }],
        placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false, transform: undefined },] }]
    };
};
TagInputComponent = __decorate([
    Component({
        selector: 'app-tag-input',
        imports: [NgIcon],
        viewProviders: [provideIcons({ lucideX })],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'border-input bg-background focus-within:ring-ring/50 focus-within:border-ring flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border p-1.5 shadow-xs focus-within:ring-[3px]',
        },
        template: `
    @for (t of tags(); track t) {
      <span class="bg-secondary text-secondary-foreground inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium">
        {{ t }}
        <button
          type="button"
          class="text-secondary-foreground hover:text-foreground focus-visible:ring-ring/50 rounded-xs focus-visible:ring-[3px] focus-visible:outline-none"
          [attr.aria-label]="'Remove ' + t"
          (click)="remove(t)"
        >
          <ng-icon name="lucideX" size="12" strokeWidth="2.5" />
        </button>
      </span>
    }
    <input
      #i
      class="placeholder:text-muted-foreground min-w-24 flex-1 bg-transparent text-sm outline-none"
      [placeholder]="tags().length ? '' : placeholder()"
      [attr.aria-label]="placeholder()"
      (keydown)="key($event, i)"
      (blur)="add(i.value); i.value = ''"
    />
  `,
    })
], TagInputComponent);

const meta = {
  title: 'Forms/Tag Input',
  decorators: [moduleMetadata({
    imports: [TagInputComponent]
  })],
  argTypes: {
    tags: {
      control: 'object'
    },
    placeholder: {
      control: 'text'
    }
  },
  args: {
    tags: [],
    placeholder: 'Add tag...'
  },
  render: args => ({
    props: args,
    template: `<div class="w-80"><app-tag-input [(tags)]="tags" [placeholder]="placeholder" /></div>`
  })
};
const Empty = {};
const WithTags = {
  args: {
    tags: ['angular', 'tailwind', 'storybook']
  }
};
const __namedExportsOrder = ["Empty", "WithTags"];
Empty.parameters = {
  ...Empty.parameters,
  docs: {
    ...Empty.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Empty.parameters?.docs?.source
    }
  }
};
WithTags.parameters = {
  ...WithTags.parameters,
  docs: {
    ...WithTags.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    tags: ['angular', 'tailwind', 'storybook']\n  }\n}",
      ...WithTags.parameters?.docs?.source
    }
  }
};

export { Empty, WithTags, __namedExportsOrder, meta as default };
