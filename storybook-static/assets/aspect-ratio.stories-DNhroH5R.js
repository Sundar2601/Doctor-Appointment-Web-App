import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Aspect Ratio". Usage: `<app-aspect-ratio [ratio]="16 / 9"><img class="size-full object-cover" ...></app-aspect-ratio>`. */
let AspectRatioComponent = class AspectRatioComponent {
    ratio = input(16 / 9);
    static propDecorators = {
        ratio: [{ type: Input, args: [{ isSignal: true, alias: "ratio", required: false, transform: undefined },] }]
    };
};
AspectRatioComponent = __decorate([
    Component({
        selector: 'app-aspect-ratio',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'bg-muted relative flex w-full items-center justify-center overflow-hidden rounded-lg',
            '[style.aspect-ratio]': 'ratio()',
        },
        template: '<ng-content />',
    })
], AspectRatioComponent);

const meta = {
  title: 'Display/Aspect Ratio',
  decorators: [moduleMetadata({
    imports: [AspectRatioComponent]
  })],
  argTypes: {
    ratio: {
      control: 'number'
    }
  },
  args: {
    ratio: 16 / 9
  },
  render: args => ({
    props: args,
    template: `<div class="w-96"><app-aspect-ratio [ratio]="ratio"><svg class="text-muted-foreground size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Ratio {{ ratio.toFixed(2) }}" role="img"><rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg></app-aspect-ratio></div>`
  })
};
const Widescreen = {};
const Square = {
  args: {
    ratio: 1
  }
};
const Portrait = {
  args: {
    ratio: 3 / 4
  }
};
const __namedExportsOrder = ["Widescreen", "Square", "Portrait"];
Widescreen.parameters = {
  ...Widescreen.parameters,
  docs: {
    ...Widescreen.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Widescreen.parameters?.docs?.source
    }
  }
};
Square.parameters = {
  ...Square.parameters,
  docs: {
    ...Square.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    ratio: 1\n  }\n}",
      ...Square.parameters?.docs?.source
    }
  }
};
Portrait.parameters = {
  ...Portrait.parameters,
  docs: {
    ...Portrait.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    ratio: 3 / 4\n  }\n}",
      ...Portrait.parameters?.docs?.source
    }
  }
};

export { Portrait, Square, Widescreen, __namedExportsOrder, meta as default };
