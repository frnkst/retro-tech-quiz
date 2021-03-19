import { Start } from './Start'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

beforeEach(() => {
  render(<Start />)
})

test('show the timer', () => {
  expect(screen.getByText('00:00')).toBeVisible()
})

test('show the high score', () => {
  expect(screen.getByText('000000')).toBeVisible()
})

test('show the time selection', () => {
  expect(screen.getByText('Time')).toBeVisible()
})

test('show the topics', () => {
  expect(screen.getByText('Topics')).toBeVisible()
})

test('show the player name input box', () => {
  expect(screen.getByRole('textbox')).toBeVisible()
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

test('show let me in', () => {
  expect(screen.getByText('-->')).toBeVisible()
})
