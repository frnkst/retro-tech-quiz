import { Topic } from '../components/Categories'

export const typescript: Topic = {
  name: 'TS',
  questions: [
    {
      level: 3,
      question: `
      // What's the output on the console?
      
      for (i=0; i<=3; i++) { setTimeout(() => console.log(i), 0)}
      `,
      codeSnippet: true,
      options: [
        {
          text: '4 4 4 4',
          correct: true,
        },
        { text: '1 2 3' },
        { text: '1 2 3 4' },
        { text: '1 1 1' },
      ],
    },
  ],
}
