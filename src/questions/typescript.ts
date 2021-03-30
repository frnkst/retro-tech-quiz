import { Topic } from '../components/Categories'

export const typescript: Topic = {
  name: 'TS',
  questions: [
    {
      level: 1,
      question: 'TypeScript is a typed superset of ...',
      options: [
        {
          text: 'JavaScript',
          correct: true,
        },
        { text: 'Java' },
        { text: 'React' },
        { text: 'HTML' },
      ],
    },
    {
      level: 1,
      question:
        'Which command is used to generate a JavaScript file from a TypeScript file?',
      options: [
        {
          text: 'tsc fileName.ts',
          correct: true,
        },
        { text: 'npm filename.ts' },
        { text: 'tsc -js fileName.ts' },
        { text: 'typescript-compile filename.ts' },
      ],
    },
    {
      level: 1,
      question:
        'Which of the following statement declares a variable in TypeScript?',
      options: [
        {
          text: 'const myVar:number = 123',
          correct: true,
        },
        { text: "const myVar:number = '123'" },
        { text: 'const myVar:Number = 123' },
        { text: 'const number myVar = 123' },
      ],
    },
  ],
}
