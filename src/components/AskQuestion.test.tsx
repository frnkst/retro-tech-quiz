import { render, screen } from '@testing-library/react'
import { AskQuestion } from './AskQuestion'
import { Question } from './Categories'
import userEvent from '@testing-library/user-event'

const correctAnswerSelected = jest.fn()
const question = someQuestion()

beforeEach(() => {
  render(
    <AskQuestion
      question={question}
      correctAnswerSelected={correctAnswerSelected}
    />
  )
})

test('show the first question and answers', () => {
  expect(screen.getByText(question.question)).toBeVisible()
  expect(screen.getByText(question.correct)).toBeVisible()
  expect(screen.getByText(question.wrong[0])).toBeVisible()
  expect(screen.getByText(question.wrong[1])).toBeVisible()
})

it('should call correctAnswerSelected when the correct answer is clicked', () => {
  userEvent.click(screen.getByText(question.correct))

  expect(correctAnswerSelected).toHaveBeenCalled()
})

it('should not call correctAnswerSelected when the wrong answer is clicked', () => {
  userEvent.click(screen.getByText(question.wrong[0]))

  expect(correctAnswerSelected).not.toHaveBeenCalled()
})

function someQuestion(): Question {
  return {
    level: 1,
    question: 'first question',
    correct: 'first correct answer',
    wrong: ['first wrong answer 1', 'first wrong answer 2'],
  }
}
