import { render, screen } from '@testing-library/react'
import React from 'react'
import { Quiz } from './Quiz'
import { Topic } from './Categories'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

beforeAll(() => {
  window.ResizeObserver = ResizeObserver
})

// https://github.com/recharts/recharts/issues/727
beforeEach(() => {
  jest.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100)
  jest.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100)
})

beforeEach(() => {
  const history = createMemoryHistory()
  history.push('/questions', { topics: someTopic(), time: 300 })

  render(
    <Router history={history}>
      <Quiz />
    </Router>
  )
})

test('show the timer', () => {
  expect(screen.getByText('05:00')).toBeVisible()
})

test('show the score', () => {
  expect(screen.getByText('0')).toBeVisible()
})

test('show a question', () => {
  expect(screen.getByText('question 1')).toBeVisible()
  expect(screen.getByText('correct 1')).toBeVisible()
  expect(screen.getByText('wrong 1a')).toBeVisible()
  expect(screen.getByText('wrong 1b')).toBeVisible()
})

test('show the next question when clicking next', () => {
  userEvent.click(screen.getByText('correct 1'))
  userEvent.click(screen.getByText('next'))

  expect(screen.getByText('question 2')).toBeVisible()
  expect(screen.getByText('correct 2')).toBeVisible()
  expect(screen.getByText('wrong 2a')).toBeVisible()
  expect(screen.getByText('wrong 2b')).toBeVisible()
})

test('show the next question when pressing the right arrow key', () => {
  userEvent.click(screen.getByText('correct 1'))
  userEvent.type(document.body, '{arrowright}')

  expect(screen.getByText('question 2')).toBeVisible()
})

test('show the results when there are no more questions', () => {
  userEvent.click(screen.getByText('correct 1'))
  userEvent.click(screen.getByText('next'))
  userEvent.click(screen.getByText('correct 2'))
  userEvent.click(screen.getByText('next'))

  expect(screen.getByText('Summary')).toBeVisible()
})

test('Add to the score when clicking on the correct answer', () => {
  userEvent.click(screen.getByText('correct 1'))
  expect(screen.getByText('100')).toBeVisible()

  userEvent.click(screen.getByText('next'))

  userEvent.click(screen.getByText('correct 2'))
  expect(screen.getByText('200')).toBeVisible()
})

test('Subtract from the score when clicking on the wrong answer', () => {
  userEvent.click(screen.getByText('wrong 1a'))
  expect(screen.getByText('0')).toBeVisible()

  userEvent.click(screen.getByText('next'))

  userEvent.click(screen.getByText('wrong 2a'))
  expect(screen.getByText('0')).toBeVisible()
})

function someTopic(): Topic[] {
  return [
    {
      name: 'test',
      questions: [
        {
          level: 1,
          question: 'question 1',
          options: [
            {
              text: 'correct 1',
              correct: true,
              selected: false,
            },
            {
              text: 'wrong 1a',
              selected: false,
            },
            {
              text: 'wrong 1b',
              selected: false,
            },
          ],
        },
        {
          level: 1,
          question: 'question 2',
          options: [
            {
              text: 'correct 2',
              correct: true,
              selected: false,
            },
            {
              text: 'wrong 2a',
              selected: false,
            },
            {
              text: 'wrong 2b',
              selected: false,
            },
          ],
        },
      ],
    },
  ]
}
