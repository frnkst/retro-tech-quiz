import { render, screen } from '@testing-library/react'
import React from 'react'
import { Game } from './Game'

test('show the timer', () => {
  render(<Game />)

  expect(screen.getByText('16:40')).toBeVisible()
})

test('show the score', () => {
  render(<Game />)

  expect(screen.getByText('000000')).toBeVisible()
})
