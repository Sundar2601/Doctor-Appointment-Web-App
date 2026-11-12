import type { Meta, StoryObj } from '@storybook/angular-vite'
import { moduleMetadata } from '@storybook/angular-vite'
import { QuestionnaireComponent } from './questionnaire.component'

const questions = [
  { question: 'Which hospital do you prefer?', options: ['JIPMER', 'Aravind Eye Hospital', 'Mahatma Gandhi Medical College'] },
  { question: 'Preferred day?', options: ['Thursday', 'Friday', 'Saturday'] },
  { question: 'Visit type?', options: ['In person', 'Video consult'] },
]

const meta: Meta = {
  title: 'AI/Questionnaire',
  decorators: [moduleMetadata({ imports: [QuestionnaireComponent] })],
  render: (args) => ({ props: { ...args, questions }, template: `<app-questionnaire [questions]="questions" />` }),
}
export default meta
type Story = StoryObj

export const Default: Story = {}
