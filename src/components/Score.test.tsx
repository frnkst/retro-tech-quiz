import { Score } from './Score'
import { render, screen } from '@testing-library/react'

beforeEach(() => {
  render(<Score score="500"/>)
})

it('should show the score', () => {
  expect(screen.getByText('500')).toBeVisible()
})
