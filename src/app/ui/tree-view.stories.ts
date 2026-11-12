import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { type TreeNode, TreeViewComponent } from './tree-view.component'

const nodes: TreeNode[] = [
  {
    id: 'jipmer',
    label: 'JIPMER',
    children: [
      {
        id: 'jipmer-cardio',
        label: 'Cardiology',
        children: [
          { id: 'anand', label: 'Dr. Anand Kumar' },
          { id: 'sangeetha', label: 'Dr. Sangeetha Pillai' },
        ],
      },
      { id: 'jipmer-neuro', label: 'Neurology', children: [{ id: 'vikram', label: 'Dr. Vikram Iyer' }] },
    ],
  },
  {
    id: 'aravind',
    label: 'Aravind Eye Hospital',
    children: [{ id: 'aravind-peds', label: 'Pediatrics', children: [{ id: 'meera', label: 'Dr. Meera Nair' }] }],
  },
  { id: 'mgmc', label: 'Mahatma Gandhi Medical College', children: [{ id: 'suresh', label: 'Dr. Suresh Babu' }] },
]

const meta: Meta<TreeViewComponent> = {
  title: 'Navigation/Tree View',
  decorators: [moduleMetadata({ imports: [TreeViewComponent] })],
  args: { nodes, selected: null },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-72">
        <app-tree-view [nodes]="nodes" [(selected)]="selected" />
        <p class="text-muted-foreground mt-3 text-xs">Selected: {{ selected ?? 'none' }}</p>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<TreeViewComponent>

export const Default: Story = {}
export const PreselectedDoctor: Story = { args: { selected: 'anand' } }
export const FlatList: Story = {
  args: {
    nodes: [
      { id: 'a', label: 'Appointments' },
      { id: 'b', label: 'Prescriptions' },
      { id: 'c', label: 'Reports' },
    ],
  },
}
