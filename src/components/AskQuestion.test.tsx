import { render, screen } from '@testing-library/react'
import { AskQuestion } from './AskQuestion'
import userEvent from '@testing-library/user-event'
import { Question } from './Categories'

const selectOption = jest.fn()
let defaultQuestion: Question

beforeEach(() => {
  defaultQuestion = someQuestion()
})

test('show the first question and answers', () => {
  setup()

  expect(screen.getByText(defaultQuestion.question)).toBeVisible()
  expect(screen.getByText(defaultQuestion.options[0].text)).toBeVisible()
  expect(screen.getByText(defaultQuestion.options[1].text)).toBeVisible()
  expect(screen.getByText(defaultQuestion.options[2].text)).toBeVisible()
})

test('should call selectOption on click', () => {
  setup()
  userEvent.click(screen.getByText(defaultQuestion.options[0].text))

  expect(selectOption).toHaveBeenCalled()
})

describe('show level', () => {
  test('show the level easy', () => {
    const easyQuestion: Question = { ...defaultQuestion, level: 2 }
    setup(easyQuestion)

    expect(screen.getByText('Easy')).toBeVisible()
  })

  test('show the level medium', () => {
    const mediumQuestion: Question = { ...defaultQuestion, level: 3 }
    setup(mediumQuestion)

    expect(screen.getByText('Medium')).toBeVisible()
  })

  test('show the level hard', () => {
    const mediumQuestion: Question = { ...defaultQuestion, level: 4 }
    setup(mediumQuestion)

    expect(screen.getByText('Hard')).toBeVisible()
  })
})

test('format the code with prettier', () => {
  const questionWithCodeSnippet: Question = {
    ...defaultQuestion,
    question: 'const a=5; const b=5',
    codeSnippet: true,
  }
  setup(questionWithCodeSnippet)

  expect(screen.getByTestId('code-block')).toBeVisible()
})

function setup(question: Question = defaultQuestion) {
  render(
    <AskQuestion
      topicName={'JS'}
      question={question}
      selectOption={selectOption}
      showResult={false}
    />
  )
}

function someQuestion(): Question {
  return {
    level: 1,
    question: 'first question',
    options: [
      {
        text: 'correct 1',
        correct: true,
        selected: false,
      },
      {
        text: 'wrong 1a',
        correct: false,
        selected: false,
      },
      {
        text: 'wrong 1b',
        correct: false,
        selected: false,
      },
    ],
  }
}
