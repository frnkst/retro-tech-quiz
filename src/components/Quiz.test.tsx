import { render, screen } from '@testing-library/react'
import React from 'react'
import { Quiz } from './Quiz'
import { Topic } from './Categories'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  render(<Quiz topics={getSomeQuestions()} />)
})

test('show the timer', () => {
  expect(screen.getByText('16:40')).toBeVisible()
})

test('show the score', () => {
  expect(screen.getByText('000000')).toBeVisible()
})

test('show a question', () => {
  expect(screen.getByText('question 1')).toBeVisible()
  expect(screen.getByText('correct 1')).toBeVisible()
  expect(screen.getByText('wrong 1a')).toBeVisible()
  expect(screen.getByText('wrong 1b')).toBeVisible()
})

test('show the next question when clicking next', () => {
  userEvent.click(screen.getByText('Next'))

  expect(screen.getByText('question 2')).toBeVisible()
  expect(screen.getByText('correct 2')).toBeVisible()
  expect(screen.getByText('wrong 2a')).toBeVisible()
  expect(screen.getByText('wrong 2b')).toBeVisible()
})

test('show the the result after the last question', () => {
  userEvent.click(screen.getByText('Next'))
  userEvent.click(screen.getByText('Next'))

  expect(screen.getByText('Show the result')).toBeVisible()
})

function getSomeQuestions(): Topic[] {
  return [
    {
      name: 'test',
      questions: [
        {
          level: 1,
          question: 'question 1',
          correct: 'correct 1',
          wrong: ['wrong 1a', 'wrong 1b'],
        },
        {
          level: 1,
          question: 'question 2',
          correct: 'correct 2',
          wrong: ['wrong 2a', 'wrong 2b'],
        },
      ],
    },
  ]
}
