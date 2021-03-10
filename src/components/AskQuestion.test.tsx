import { render, screen } from '@testing-library/react'
import { AskQuestion } from './AskQuestion'
import userEvent from '@testing-library/user-event'
import { Question } from './Categories'

const selectOption = jest.fn()
const question = someQuestion()

beforeEach(() => {
  render(
    <AskQuestion
      question={question}
      selectOption={selectOption}
      showResult={false}
    />
  )
})

test('show the first question and answers', () => {
  expect(screen.getByText(question.question)).toBeVisible()
  expect(screen.getByText(question.options[0].text)).toBeVisible()
  expect(screen.getByText(question.options[1].text)).toBeVisible()
  expect(screen.getByText(question.options[2].text)).toBeVisible()
})

test('should call selectOption on click', () => {
  userEvent.click(screen.getByText(question.options[0].text))

  expect(selectOption).toHaveBeenCalled()
})

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
