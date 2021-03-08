import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('show the timer', () => {
  render(<App />)

  expect(screen.getByText('00:00')).toBeVisible()
})

test('show the high score', () => {
  render(<App />)

  expect(screen.getByText('000000')).toBeVisible()
})

test('render the input box', () => {
  render(<App />)

  expect(screen.getByPlaceholderText('Player Name')).toBeVisible()
})

test('show let me in', () => {
  render(<App />)

  expect(screen.getByText('-->')).toBeVisible()
})
