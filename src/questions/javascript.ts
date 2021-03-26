import { Topic } from '../components/Categories'

export const javascript: Topic = {
  name: 'JS',
  questions: [
    {
      level: 1,
      question: 'The "function" and "var" are known as:',
      options: [
        {
          text: 'Keywords',
          correct: true,
        },
        { text: 'Data types' },
        { text: 'Declaration statements' },
        { text: 'Prototypes' },
      ],
    },
    {
      level: 2,
      question:
        'Which of the following variables takes precedence over the others if the names are the same?',
      options: [
        {
          text: 'The local element',
          correct: true,
        },
        { text: 'Global variable' },
      ],
    },
    {
      level: 2,
      question:
        'Which of the following option is used as hexadecimal literal beginning?',
      options: [
        {
          text: 'Both 0x and 0X',
          correct: true,
        },
        { text: '00' },
        { text: '0x' },
        { text: '0X' },
      ],
    },
    {
      level: 2,
      question:
        'In JavaScript, which one of the following is not considered as an error:',
      options: [
        {
          text: 'Division by zero',
          correct: true,
        },
        { text: 'Syntax error' },
        { text: 'Missing of Bracket' },
      ],
    },
    {
      level: 2,
      question:
        'Which of the following given functions of the number object formats a number with a different number of digits to the right of the decimal?',
      options: [
        {
          text: 'toFixed()',
          correct: true,
        },
        { text: 'toExponential()' },
        { text: 'toPrecision()' },
        { text: 'toLocaleString()' },
      ],
    },
    {
      level: 1,
      question:
        'Which of the following number object function returns the value of the number?',
      options: [
        {
          text: 'valueOf()',
          correct: true,
        },
        { text: 'toString()' },
        { text: 'toLocaleString()' },
        { text: 'toPrecision()' },
      ],
    },
    {
      level: 1,
      question: 'In JavaScript the x===y statement implies that:',
      options: [
        {
          text: 'Both are equal in the value and data type.',
          correct: true,
        },
        { text: 'Both are x and y are equal in value only.' },
        { text: 'Both are not same at all.' },
      ],
    },
    {
      level: 1,
      question:
        'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
      options: [
        {
          text: 'if(a!==null)',
          correct: true,
        },
        { text: 'if (a!)' },
        { text: 'if(a!null)' },
        { text: 'if(a!=null)' },
      ],
    },
    {
      level: 2,
      question:
        'Which one of the following operator is used to check weather a specific property exists or not:',
      options: [
        {
          text: 'in',
          correct: true,
        },
        { text: 'exists' },
        { text: 'Exists' },
        { text: 'within' },
      ],
    },
    {
      level: 1,
      question: 'Which one of the following is an ternary operator?',
      options: [
        {
          text: '?',
          correct: true,
        },
        { text: ':' },
        { text: '%' },
        { text: '+' },
      ],
    },
    {
      level: 3,
      question:
        'In a case, where the value of the operator is NULL , the typeof returned by the unary operator is:',
      options: [
        {
          text: 'object',
          correct: true,
        },
        { text: 'undefined' },
        { text: 'string' },
        { text: 'boolean' },
        { text: 'null' },
      ],
    },
    {
      level: 3,
      question: {
        code: `
      // What's the output on the console?
      
      for (i=0; i<=3; i++) { setTimeout(() => console.log(i), 0)}
      `,
        language: 'javascript',
      },
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
