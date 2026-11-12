import { m as moduleMetadata } from './iframe-C24jBurn.js';
import { C as ChartLegendComponent } from './chart-legend.component-C8pYageL.js';
import './preload-helper-D5QYaGzd.js';
import './angular-platform-Dxt0cssM.js';

const meta = {
  title: 'Charts/Chart Legend',
  decorators: [moduleMetadata({
    imports: [ChartLegendComponent]
  })],
  args: {
    items: [{
      label: 'Desktop',
      color: 'var(--chart-1)'
    }, {
      label: 'Mobile',
      color: 'var(--chart-2)'
    }, {
      label: 'Tablet',
      color: 'var(--chart-3)'
    }]
  },
  render: args => ({
    props: args,
    template: `<app-chart-legend [items]="items" />`
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
