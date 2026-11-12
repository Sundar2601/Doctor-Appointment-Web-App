import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import { A as AndroidListItemComponent } from './android-list-item.component-DBpocZAH.js';
import './preload-helper-D5QYaGzd.js';
import './ng-icons-lucide-DvOyu-Mi.js';
import './android-icons-xicRbOlm.js';

/** Modal bottom sheet with a drag handle and 28dp top corners. Project any content. */
let AndroidBottomSheetComponent = class AndroidBottomSheetComponent {
};
AndroidBottomSheetComponent = __decorate([
    Component({
        selector: 'app-android-bottom-sheet',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground block w-full rounded-t-[28px] pb-4 shadow-lg', role: 'dialog', 'aria-modal': 'true' },
        template: `
    <div class="flex h-6 items-center justify-center" aria-hidden="true">
      <span class="bg-muted-foreground h-1 w-8 rounded-full"></span>
    </div>
    <ng-content />
  `,
    })
], AndroidBottomSheetComponent);

const meta = {
  title: 'Mobile/Android/Bottom Sheet',
  component: AndroidBottomSheetComponent,
  decorators: [moduleMetadata({
    imports: [AndroidBottomSheetComponent, AndroidListItemComponent]
  })],
  render: () => ({
    template: `
      <div class="w-[412px] p-4">
        <app-android-bottom-sheet>
          <div role="list">
            <app-android-list-item headline="Share" leadingIcon="lucideShare" />
            <app-android-list-item headline="Copy link" leadingIcon="lucideCopy" />
            <app-android-list-item headline="Delete" leadingIcon="lucideTrash2" [destructive]="true" />
          </div>
        </app-android-bottom-sheet>
      </div>`
  })
};
const Default = {};
const __namedExportsOrder = ["Default"];
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

export { Default, __namedExportsOrder, meta as default };
