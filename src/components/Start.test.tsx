import { Start } from './Start'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  render(<Start />)
})

test('show the time selection', () => {
  expect(screen.getByText('Time')).toBeVisible()
})

test('show the topics', () => {
  expect(screen.getByText('Topics')).toBeVisible()
})

test('show the player name input box', () => {
  expect(screen.getByPlaceholderText('Player Name')).toBeVisible()
})

test('clear the placeholder text on focus', () => {
  const input = screen.getByPlaceholderText('Player Name')
  expect(input).toBeVisible()
  input.focus()
  expect(screen.queryByPlaceholderText('Player Name')).toBeNull()
})

test('select a time', () => {
  const fiveMinutes = screen.getByText('05:00')
  userEvent.click(fiveMinutes)
  expect(fiveMinutes).toHaveClass('text-blue-500')
})

test('should only select one time', () => {
  const fiveMinutes = screen.getByText('05:00')
  const tenMinutes = screen.getByText('10:00')

  userEvent.click(fiveMinutes)
  expect(fiveMinutes).toHaveClass('text-blue-500')
  userEvent.click(tenMinutes)
  expect(tenMinutes).toHaveClass('text-blue-500')
  expect(fiveMinutes).not.toHaveClass('text-blue-500')
})

test('select some topics', () => {
  const kotlin = screen.getByText('Kotlin')
  userEvent.click(kotlin)
  expect(kotlin.parentElement).toHaveClass('text-blue-500')

  const git = screen.getByText('Git')
  userEvent.click(git)
  expect(git.parentElement).toHaveClass('text-blue-500')
})
