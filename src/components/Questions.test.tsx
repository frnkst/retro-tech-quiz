import React from 'react'
import { render, screen } from '@testing-library/react'
import { Questions } from './Questions'
import { Category } from './Categories'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  render(<Questions categories={getSomeCategories()} />)
})

test('show the timer', () => {
  expect(screen.getByText('16:40')).toBeVisible()
})

test('show the score', () => {
  expect(screen.getByText('000000')).toBeVisible()
})

test('show the first question and answers', () => {
  expect(screen.getByText('first question')).toBeVisible()
  expect(screen.getByText('first correct answer')).toBeVisible()
  expect(screen.getByText('first wrong answer 1')).toBeVisible()
  expect(screen.getByText('first wrong answer 2')).toBeVisible()
})

test('show the second question and answers when clicking next', () => {
  userEvent.click(screen.getByText('next'))

  expect(screen.getByText('second question')).toBeVisible()
  expect(screen.getByText('second correct answer')).toBeVisible()
  expect(screen.getByText('second wrong answer 1')).toBeVisible()
  expect(screen.getByText('second wrong answer 2')).toBeVisible()
})

function getSomeCategories(): Category[] {
  return [
    {
      name: 'test category',
      isSelected: true,
      questions: [
        {
          level: 1,
          question: 'first question',
          correct: 'first correct answer',
          wrong: ['first wrong answer 1', 'first wrong answer 2'],
        },
        {
          level: 1,
          question: 'second question',
          correct: 'second correct answer',
          wrong: ['second wrong answer 1', 'second wrong answer 2'],
        },
      ],
    },
  ]
}
