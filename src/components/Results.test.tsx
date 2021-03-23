import { render, screen } from '@testing-library/react'
import { Results } from './Results'

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

const someResults = () => [{ name: 'Level 1', level: 1, correct: 5, wrong: 4 }]
