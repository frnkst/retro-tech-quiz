import { render, screen } from '@testing-library/react'
import { Results } from './Results'

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  window.ResizeObserver = ResizeObserver
})

test('result summary is shown', () => {
  render(<Results results={someResults()} />)
  expect(screen.getByText('You suck!')).toBeVisible()
})

const someResults = () => [{ name: 'Level 1', level: 1, correct: 5, wrong: 4 }]
