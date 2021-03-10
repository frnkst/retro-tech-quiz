import { Start } from './Start'
import { render, screen } from '@testing-library/react'

test('show the time selection', () => {
  render(<Start />)
  expect(screen.getByText('Time')).toBeVisible()
})

test('show the topics', () => {
  render(<Start />)
  expect(screen.getByText('Topics')).toBeVisible()
})

test('show the player name input box', () => {
  render(<Start />)
  expect(screen.getByPlaceholderText('Player Name')).toBeVisible()
})

test('clear the placeholder text on focus', () => {
  render(<Start />)
  const input = screen.getByPlaceholderText('Player Name')
  expect(input).toBeVisible()
  input.focus()
  expect(screen.queryByPlaceholderText('Player Name')).toBeNull()
})
