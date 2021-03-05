import { render, screen } from '@testing-library/react'
import { AskQuestion } from './AskQuestion'
import { Question } from './Categories'

beforeEach(() => {
  render(<AskQuestion question={getSomeQuestion()} />)
})

test('show the first question and answers', () => {
  expect(screen.getByText('first question')).toBeVisible()
  expect(screen.getByText('first correct answer')).toBeVisible()
  expect(screen.getByText('first wrong answer 1')).toBeVisible()
  expect(screen.getByText('first wrong answer 2')).toBeVisible()
})

function getSomeQuestion(): Question {
  return {
    level: 1,
    question: 'first question',
    correct: 'first correct answer',
    wrong: ['first wrong answer 1', 'first wrong answer 2'],
  }
}
