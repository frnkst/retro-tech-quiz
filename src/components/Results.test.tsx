import { render, screen } from '@testing-library/react'
import { Results } from './Results'
import { Result } from './Quiz'

beforeAll(() => {
  window.ResizeObserver = ResizeObserver
})

// https://github.com/recharts/recharts/issues/727
beforeEach(() => {
  jest.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100)
  jest.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100)
})

test('result summary is shown', () => {
  render(<Results results={someResults()} />)
  expect(screen.getByText('Well done!')).toBeVisible()
})

function someResults(): Result[] {
  return [
    {
      question: { level: 5, question: 'bla', options: [{ text: 'test' }] },
      correctAnswer: true,
    },
  ]
}
