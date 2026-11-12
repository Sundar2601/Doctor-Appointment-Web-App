import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { HoverCardComponent, HoverCardDirective } from './hover-card.directive'

const meta: Meta<HoverCardDirective> = {
  title: 'Overlays/Hover Card',
  decorators: [moduleMetadata({ imports: [HoverCardDirective, HoverCardComponent] })],
  argTypes: {
    hoverCardPosition: { control: 'select', options: ['top', 'bottom'] },
    openDelay: { control: 'number' },
    closeDelay: { control: 'number' },
  },
  args: { hoverCardPosition: 'bottom', openDelay: 200, closeDelay: 150 },
  render: (args) => ({
    props: args,
    template: `
      <div class="p-24">
        <a href="#" class="font-medium underline" appHoverCard [hoverCardContent]="card" [hoverCardPosition]="hoverCardPosition" [openDelay]="openDelay" [closeDelay]="closeDelay">@nextjs</a>
        <ng-template #card>
          <app-hover-card>
            <p class="font-semibold">@nextjs</p>
            <p>The React Framework - created and maintained by @vercel.</p>
            <p class="text-muted-foreground mt-2 text-xs">Joined December 2021</p>
          </app-hover-card>
        </ng-template>
      </div>`,
  }),
}
export default meta
type Story = StoryObj<HoverCardDirective>

export const Bottom: Story = {}
export const Top: Story = { args: { hoverCardPosition: 'top' } }
