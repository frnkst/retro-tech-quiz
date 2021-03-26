import { Topic } from '../components/Categories'

export const kotlin: Topic = {
  name: 'Kotlin',
  questions: [
    {
      level: 3,
      question: {
        code: `
          // Does the following inheritance structure compile?
          class A{
          }

          class B : A(){
          }
      `,
        language: 'kotlin',
      },
      options: [
        {
          text: 'No',
          correct: true,
        },
        { text: 'Yes' },
      ],
    },
  ],
}
