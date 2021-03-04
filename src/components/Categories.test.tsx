import { render, screen } from '@testing-library/react'
import React from 'react'
import { Categories } from './Categories'
import userEvent from '@testing-library/user-event'

test('show the categories', () => {
  render(<Categories />)
  expect(screen.getByText('JavaScript')).toBeVisible()
  expect(screen.getByText('Web Development')).toBeVisible()
  expect(screen.getByText('Kotlin')).toBeVisible()
  expect(screen.getByText('TypeScript')).toBeVisible()
  expect(screen.getByText('Java')).toBeVisible()
  expect(screen.getByText('CI/CD')).toBeVisible()
  expect(screen.getByText('Git')).toBeVisible()
})

test('select a category on click', () => {
  render(<Categories />)
  const kotlin = screen.getAllByTestId('category')[0]

  expect(kotlin).not.toHaveClass('bg-yellow-300')
  userEvent.click(kotlin)
  expect(kotlin).toHaveClass('bg-yellow-300')
  userEvent.click(kotlin)
  expect(kotlin).not.toHaveClass('bg-yellow-300')
})
