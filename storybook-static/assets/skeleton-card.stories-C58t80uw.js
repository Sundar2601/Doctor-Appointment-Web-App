import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-Dxt0cssM.js';
import { S as SkeletonDirective } from './skeleton.directive-BNHlaPrP.js';
import './preload-helper-D5QYaGzd.js';

/** Figma "Skeleton card" loading placeholder. Usage: `<app-skeleton-card class="max-w-sm" />`. */
let SkeletonCardComponent = class SkeletonCardComponent {
};
SkeletonCardComponent = __decorate([
    Component({
        selector: 'app-skeleton-card',
        imports: [SkeletonDirective],
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card flex flex-col gap-4 rounded-xl border p-3', role: 'status', 'aria-busy': 'true' },
        template: `
    <span class="sr-only">Loading</span>
    <div class="flex items-center gap-3">
      <div appSkeleton shape="circle" class="size-10 shrink-0"></div>
      <div class="flex flex-1 flex-col gap-2">
        <div appSkeleton class="h-3 w-4/5"></div>
        <div appSkeleton class="h-3 w-1/2"></div>
      </div>
    </div>
    <div appSkeleton class="h-30 w-full"></div>
    <div class="flex flex-col gap-3">
      <div appSkeleton class="h-3 w-full"></div>
      <div appSkeleton class="h-3 w-3/4"></div>
    </div>
  `,
    })
], SkeletonCardComponent);

const meta = {
  title: 'Patterns/Skeleton Card',
  decorators: [moduleMetadata({
    imports: [SkeletonCardComponent]
  })],
  render: () => ({
    template: `<app-skeleton-card class="max-w-sm" />`
  })
};
const Default = {};
const Grid = {
  render: () => ({
    template: `<div class="grid max-w-3xl grid-cols-3 gap-4"><app-skeleton-card /><app-skeleton-card /><app-skeleton-card /></div>`
  })
};
const __namedExportsOrder = ["Default", "Grid"];
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
Grid.parameters = {
  ...Grid.parameters,
  docs: {
    ...Grid.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<div class=\"grid max-w-3xl grid-cols-3 gap-4\"><app-skeleton-card /><app-skeleton-card /><app-skeleton-card /></div>`\n  })\n}",
      ...Grid.parameters?.docs?.source
    }
  }
};

export { Default, Grid, __namedExportsOrder, meta as default };
