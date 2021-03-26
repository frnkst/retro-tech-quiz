import { Topic } from '../components/Categories'

export const java: Topic = {
  name: 'Java',
  questions: [
    {
      level: 3,
      question: {
        code: `
          class Super {
            public int index = 1;
          }
    
          class App extends Super {
    
            public App(int index) {
              index = index;
            }
    
            public static void main(String args[]) {
              App myApp = new App(10);
              System.out.println(myApp.index);
            }
          }
      `,
        language: 'java',
      },
      options: [
        {
          text: '1',
          correct: true,
        },
        { text: '10' },
        { text: '0' },
        { text: 'Compilation error' },
      ],
    },
    {
      level: 2,
      question: {
        code: `
          class TestApp {
            protected int x, y;
          }

          class Main {
              public static void main(String args[]) {
                  TestApp app = new TestApp();
                  System.out.println(app.x + " " + app.y);
              }
          }
      `,
        language: 'java',
      },
      options: [
        {
          text: '0 0',
          correct: true,
        },
        { text: 'null null' },
        { text: 'undefined undefined' },
        { text: 'x y' },
      ],
    },
    {
      level: 2,
      question: {
        code: `
          class TestApp {
            public static void main(String[] args) {
              for (int index = 0; 1; index++) {
                System.out.println("Welcome");
                break;
              }
            }
          }
      `,
        language: 'java',
      },
      options: [
        {
          text: 'Type mismatch error',
          correct: true,
        },
        { text: 'Welcome' },
        { text: 'Welcome Welcome' },
        { text: 'Infinite loop' },
      ],
    },
    {
      level: 1,
      question: {
        code: `
          class TestApp {
            public static void main(String[] args) {
              for (int index = 0; true; index++) {
                System.out.println("Welcome");
                break;
                }
            }
          }
      `,
        language: 'java',
      },
      options: [
        {
          text: 'Welcome',
          correct: true,
        },
        { text: 'None' },
        { text: 'Type mismatch error' },
        { text: 'Infinite loop' },
      ],
    },
    {
      level: 2,
      question: {
        code: `
          class TestApp {
            int i[] = { 0 };

            public static void main(String args[]) {
              int i[] = { 1 };
              alter(i);
              System.out.println(i[0]);
            }

            public static void alter(int i[]) {
              int j[] = { 2 };
              i = j;
            }
          }
      `,
        language: 'java',
      },
      options: [
        {
          text: '1',
          correct: true,
        },
        { text: '2' },
        { text: '0' },
        { text: 'Compilation error' },
      ],
    },
    {
      level: 2,
      question: {
        code: `
          class TestApp {
            String args[] = { "1", "2" };

            public static void main(String args[]) {
                if (args.length > 0)
                    System.out.println(args.length);
            }
          }
      `,
        language: 'java',
      },
      options: [
        {
          text: 'The program compiles but prints nothing.',
          correct: true,
        },
        { text: 'The program fails to compile.' },
        { text: 'The program compiles and prints 2.' },
        { text: 'The program compiles and prints 0.' },
      ],
    },
    {
      level: 2,
      question: {
        code: `
          class TestApp {
            public static void main() {
                int odd = 1;
                if (odd) {
                    System.out.println("odd");
                } else {
                    System.out.println("even");
                }
            }
          }
      `,
        language: 'java',
      },
      options: [
        {
          text: 'Type mismatch error',
          correct: true,
        },
        { text: 'odd' },
        { text: 'even' },
        { text: 'Run-time exception' },
      ],
    },
  ],
}
