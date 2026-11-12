import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { CarouselComponent, CarouselSlideDirective } from './carousel.component'

const meta: Meta<CarouselComponent> = {
  title: 'Data/Carousel',
  decorators: [moduleMetadata({ imports: [CarouselComponent, CarouselSlideDirective] })],
}
export default meta
type Story = StoryObj<CarouselComponent>

export const Hospitals: Story = {
  render: () => ({
    template: `
      <app-carousel>
        <div appCarouselSlide><div class="p-4 text-center"><p class="font-semibold">JIPMER</p><p class="text-muted-foreground text-sm">Multi-specialty tertiary care</p></div></div>
        <div appCarouselSlide><div class="p-4 text-center"><p class="font-semibold">Aravind Eye Hospital</p><p class="text-muted-foreground text-sm">Ophthalmology and eye surgery</p></div></div>
        <div appCarouselSlide><div class="p-4 text-center"><p class="font-semibold">Mahatma Gandhi Medical College</p><p class="text-muted-foreground text-sm">General medicine and surgery</p></div></div>
      </app-carousel>`,
  }),
}

export const Doctors: Story = {
  render: () => ({
    props: { doctors: [
      { name: 'Dr. Anand Kumar', specialty: 'Cardiology' },
      { name: 'Dr. Meera Nair', specialty: 'Pediatrics' },
      { name: 'Dr. Suresh Babu', specialty: 'Orthopedics' },
      { name: 'Dr. Kavitha Rajan', specialty: 'Dermatology' },
    ] },
    template: `
      <app-carousel>
        @for (d of doctors; track d.name) {
          <div appCarouselSlide><div class="text-center"><p class="font-semibold">{{ d.name }}</p><p class="text-muted-foreground text-sm">{{ d.specialty }}</p></div></div>
        }
      </app-carousel>`,
  }),
}
