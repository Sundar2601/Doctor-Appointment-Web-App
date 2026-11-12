import { provideRouter } from '@angular/router'
import { applicationConfig, type Preview } from '@storybook/angular-vite'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
  },
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: { title: 'Theme', icon: 'circlehollow', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    applicationConfig({ providers: [provideRouter([])] }),
    (story, context) => {
      const dark = context.globals['theme'] === 'dark'
      document.documentElement.classList.toggle('dark', dark)
      document.body.style.background = 'var(--background)'
      document.body.style.color = 'var(--foreground)'
      return story()
    },
  ],
}
export default preview
