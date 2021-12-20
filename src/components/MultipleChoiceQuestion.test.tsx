import { render, screen } from '@testing-library/react'
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion'
import userEvent from '@testing-library/user-event'
import { Question } from '../services/question-service'

const selectOption = jest.fn()
let defaultQuestion: Question

beforeEach(() => {
  defaultQuestion = someQuestion()
})

it('show the first question and it\'s options', () => {
  setup()

  expect(screen.getByText(defaultQuestion.question as string)).toBeVisible()
  expect(screen.getByText(defaultQuestion.options[0].text)).toBeVisible()
  expect(screen.getByText(defaultQuestion.options[1].text)).toBeVisible()
  expect(screen.getByText(defaultQuestion.options[2].text)).toBeVisible()
})

it('should select an option on click', () => {
  setup()
  userEvent.click(screen.getByText(defaultQuestion.options[0].text))

  expect(selectOption).toHaveBeenCalled()
})

describe('show level', () => {
  it('show the level easy', () => {
    const easyQuestion: Question = { ...defaultQuestion, level: 2 }
    setup(easyQuestion)

    expect(screen.getByText('Easy')).toBeVisible()
  })

  it('show the level medium', () => {
    const mediumQuestion: Question = { ...defaultQuestion, level: 3 }
    setup(mediumQuestion)

    expect(screen.getByText('Medium')).toBeVisible()
  })

  it('show the level hard', () => {
    const mediumQuestion: Question = { ...defaultQuestion, level: 4 }
    setup(mediumQuestion)

    expect(screen.getByText('Hard')).toBeVisible()
  })
})

it("format the code with prettier if it's javascript", () => {
  const questionWithCode: Question = {
    ...defaultQuestion,
    question: { code: 'const a=5; const b=5', language: 'javascript' },
  }
  setup(questionWithCode)

  expect(screen.getByTestId('code-block')).toBeVisible()
})

function setup(question: Question = defaultQuestion) {
  render(
    <MultipleChoiceQuestion
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
