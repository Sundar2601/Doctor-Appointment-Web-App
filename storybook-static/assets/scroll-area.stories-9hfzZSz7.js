import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { _ as __decorate, C as Component, a as ChangeDetectionStrategy } from './angular-platform-DKqHXYyu.js';
import './preload-helper-D5QYaGzd.js';

/** Scrollable region with a thin themed scrollbar. Set the size from outside, e.g. `class="h-56 w-48"`. */
let ScrollAreaComponent = class ScrollAreaComponent {
};
ScrollAreaComponent = __decorate([
    Component({
        selector: 'app-scroll-area',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: {
            class: 'block overflow-auto rounded-md border p-4 [scrollbar-color:var(--border)_transparent] [scrollbar-width:thin]',
            tabindex: '0',
        },
        template: '<ng-content />',
    })
], ScrollAreaComponent);

const meta = {
  title: 'Layout/Scroll Area',
  decorators: [moduleMetadata({
    imports: [ScrollAreaComponent]
  })]
};
const doctors = ['Dr. Anand Kumar', 'Dr. Meera Nair', 'Dr. Suresh Babu', 'Dr. Kavitha Rajan', 'Dr. Vikram Iyer', 'Dr. Divya Lakshmanan', 'Dr. Ramesh Chandran', 'Dr. Sangeetha Pillai', 'Dr. Arjun Menon', 'Dr. Nandini Rao'];
const DoctorList = {
  render: () => ({
    props: {
      doctors
    },
    template: `
      <app-scroll-area class="h-56 w-64">
        <h4 class="mb-3 text-sm font-medium">Available doctors</h4>
        @for (d of doctors; track d) {
          <div class="py-2 text-sm">{{ d }}</div>
          <hr />
        }
      </app-scroll-area>`
  })
};
const WideContent = {
  render: () => ({
    template: `
      <app-scroll-area class="h-24 w-72">
        <p class="w-[600px] text-sm">Pondicherry Institute of Medical Sciences, Kalapet, Puducherry - outpatient registration opens at 08:00 AM daily.</p>
      </app-scroll-area>`
  })
};
const __namedExportsOrder = ["DoctorList", "WideContent"];
DoctorList.parameters = {
  ...DoctorList.parameters,
  docs: {
    ...DoctorList.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    props: {\n      doctors\n    },\n    template: `\n      <app-scroll-area class=\"h-56 w-64\">\n        <h4 class=\"mb-3 text-sm font-medium\">Available doctors</h4>\n        @for (d of doctors; track d) {\n          <div class=\"py-2 text-sm\">{{ d }}</div>\n          <hr />\n        }\n      </app-scroll-area>`\n  })\n}",
      ...DoctorList.parameters?.docs?.source
    }
  }
};
WideContent.parameters = {
  ...WideContent.parameters,
  docs: {
    ...WideContent.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `\n      <app-scroll-area class=\"h-24 w-72\">\n        <p class=\"w-[600px] text-sm\">Pondicherry Institute of Medical Sciences, Kalapet, Puducherry - outpatient registration opens at 08:00 AM daily.</p>\n      </app-scroll-area>`\n  })\n}",
      ...WideContent.parameters?.docs?.source
    }
  }
};

export { DoctorList, WideContent, __namedExportsOrder, meta as default };
