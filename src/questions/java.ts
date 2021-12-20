import { Topic } from '../components/SelectTopics'

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
    {
      level: 2,
      question: 'This is being used to find and fix bugs in Java programs',
      options: [
        {
          text: 'JBD',
          correct: true,
        },
        { text: 'JVM' },
        { text: 'JRE' },
        { text: 'JDK' },
      ],
    },
    {
      level: 3,
      question: "What's the result of ++z + y - y + z + x++ ?",
      options: [
        {
          text: '24',
          correct: true,
        },
        { text: '23' },
        { text: '20' },
        { text: '25' },
      ],
    },
    {
      level: 3,
      question: 'Which of the following for loop declaration is not valid?',
      options: [
        {
          text: 'for ( int i = 99; i >= 0; i / 9 )',
          correct: true,
        },
        { text: 'for ( int i = 7; i <= 77; i += 7 )' },
        { text: 'for ( int i = 20; i >= 2; - -i )' },
        { text: 'for ( int i = 2; i <= 20; i = 2* i )' },
      ],
    },
    {
      level: 2,
      question:
        'Which method of the Class.class is used to determine the name of a class represented by the class object as a String?',
      options: [
        {
          text: 'getName()',
          correct: true,
        },
        { text: 'getClass()' },
        { text: 'intern()' },
        { text: 'toString()' },
      ],
    },
    {
      level: 1,
      question:
        'In which process, a local variable has the same name as one of the instance variables?',
      options: [
        {
          text: 'Variable Shadowing',
          correct: true,
        },
        { text: 'Serialization' },
        { text: 'Abstraction' },
        { text: 'Multi-threading' },
      ],
    },
    {
      level: 1,
      question:
        'Which of the following is true about the anonymous inner class?',
      options: [
        {
          text: 'It has no class name',
          correct: true,
        },
        { text: 'It has only methods' },
        { text: "Objects can't be created" },
        { text: 'It has a fixed class name' },
      ],
    },
    {
      level: 2,
      question: 'What is an interface with no fields or methods known as?',
      options: [
        {
          text: 'Marker Interface',
          correct: true,
        },
        { text: 'Runnable Interface' },
        { text: 'Abstract Interface' },
        { text: 'CharSequence Interface' },
      ],
    },
    {
      level: 3,
      question:
        'Which of these classes are the direct subclasses of the Throwable class?',
      options: [
        {
          text: 'Error and Exception class',
          correct: true,
        },
        { text: 'RuntimeException and Error class' },
        { text: 'Exception and VirtualMachineError class' },
        { text: 'IOException and VirtualMachineError class' },
      ],
    },
    {
      level: 2,
      question:
        'In which memory a String is stored, when we create a string using new operator?',
      options: [
        {
          text: 'Heap memory',
          correct: true,
        },
        { text: 'String memory' },
        { text: 'Stack' },
        { text: 'Random storage space' },
      ],
    },
    {
      level: 3,
      question:
        'What is the initial quantity of this ArrayList? ArrayList list = new ArrayList();',
      options: [
        {
          text: '10',
          correct: true,
        },
        { text: '5' },
        { text: '0' },
        { text: '100' },
      ],
    },
    {
      level: 4,
      question: 'What happens if a thread goes to sleep?',
      options: [
        {
          text: 'It does not release any locks.',
          correct: true,
        },
        { text: 'It releases all the locks it has.' },
        { text: 'It releases half of its locks.' },
        { text: 'It releases all of its lock except one.' },
      ],
    },
    {
      level: 5,
      question: {
        code: `
public static synchronized void main(String[] args) throws  InterruptedException {  
  Thread f = new Thread();  
  f.start();  
  System.out.print("A");  
  f.wait(1000);  
  System.out.print("B");  
}  
      `,
        language: 'java',
      },
      options: [
        {
          text: 'A will be printed, and then an exception is thrown.',
          correct: true,
        },
        { text: 'It prints A and B with a 1000 seconds delay between them' },
        { text: 'It only prints A and exits\n' },
        { text: 'It only prints B and exits' },
      ],
    },
  ],
}
