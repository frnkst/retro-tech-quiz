import { Topic } from '../components/Categories'

export const git: Topic = {
  name: 'Git',
  questions: [
    {
      level: 1,
      question:
        'Which of these Git client commands creates a copy of the repository and a working directory in the\n' +
        'client’s workspace?',
      options: [
        {
          text: 'clone',
          correct: true,
        },
        { text: 'update' },
        { text: 'import' },
        { text: 'checkout' },
      ],
    },
    {
      level: 1,
      question:
        'If you want to make radical changes to your team’s project and don’t want to impact the rest of the\n' +
        'team, you should implement your changes in...?',
      options: [
        {
          text: 'a branch',
          correct: true,
        },
        { text: 'the trunk' },
        { text: 'the root' },
        { text: 'a tag' },
      ],
    },
    {
      level: 1,
      question: 'Which command is used to show a limited number of commits',
      options: [
        {
          text: 'git log -n',
          correct: true,
        },
        { text: 'git fetch --short' },
        { text: 'git config' },
        { text: 'git status -n' },
      ],
    },
    {
      level: 1,
      question:
        'Which command defines the author email to be used for all commits by the current user',
      options: [
        {
          text: 'git config -global user.email',
          correct: true,
        },
        { text: 'git clean -f email' },
        { text: 'git merge --no-ff email' },
        { text: 'git email-amend' },
      ],
    },
    {
      level: 2,
      question:
        'Which Git command changes where the HEAD pointer points and modifies the contents of the working directory?',
      options: [
        {
          text: 'pull',
          correct: true,
        },
        { text: 'checkout' },
        { text: 'merge' },
        { text: 'mv' },
      ],
    },
    {
      level: 2,
      question:
        'Which command removes untracked files from your working directory?',
      options: [
        {
          text: 'git clean',
          correct: true,
        },
        { text: 'git clean -f' },
        { text: 'git reset' },
        { text: 'git commit' },
      ],
    },
    {
      level: 2,
      question:
        'Which command creates an empty git repository in the specified directory?',
      options: [
        {
          text: 'git init',
          correct: true,
        },
        { text: 'git init -bare' },
        { text: 'git start -init' },
        { text: 'git create-new' },
      ],
    },
    {
      level: 3,
      question: 'Which command renames the current branch?',
      options: [
        {
          text: 'git branch -m',
          correct: true,
        },
        { text: 'git branch -rename' },
        { text: 'git branch -move' },
        { text: 'git rebase -m' },
      ],
    },
    {
      level: 3,
      question: 'Which language is git written in?',
      options: [
        {
          text: 'C',
          correct: true,
        },
        { text: 'Rust' },
        { text: 'Elm' },
        { text: 'Scala' },
        { text: 'C++' },
      ],
    },
    {
      level: 5,
      question: 'To which generation of version control tools belongs git?',
      options: [
        {
          text: '3rd',
          correct: true,
        },
        { text: '2nd' },
        { text: '4th' },
        { text: '5th' },
      ],
    },
  ],
}
