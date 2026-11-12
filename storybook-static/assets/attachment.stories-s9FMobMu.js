import { m as moduleMetadata } from './iframe-RNC3uaTM.js';
import { A as AttachmentComponent } from './attachment.component-BM9RfuPo.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-DKqHXYyu.js';
import './ng-icons-lucide-DvOyu-Mi.js';

const meta = {
  title: 'AI/Attachment',
  decorators: [moduleMetadata({
    imports: [AttachmentComponent]
  })],
  render: args => ({
    props: args,
    template: `<div class="flex gap-3"><app-attachment name="referral-letter.pdf" size="2.4 MB" /><app-attachment name="ecg-report.png" size="880 KB" /></div>`
  })
};
const Default = {};
const NotRemovable = {
  render: () => ({
    template: `<app-attachment name="ecg-report.png" size="880 KB" [removable]="false" />`
  })
};
const __namedExportsOrder = ["Default", "NotRemovable"];
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
NotRemovable.parameters = {
  ...NotRemovable.parameters,
  docs: {
    ...NotRemovable.parameters?.docs,
    source: {
      originalSource: "{\n  render: () => ({\n    template: `<app-attachment name=\"ecg-report.png\" size=\"880 KB\" [removable]=\"false\" />`\n  })\n}",
      ...NotRemovable.parameters?.docs?.source
    }
  }
};

export { Default, NotRemovable, __namedExportsOrder, meta as default };
