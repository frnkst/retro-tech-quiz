import { render, screen } from '@testing-library/react'
import React from 'react'
import { Categories } from './Categories'
import userEvent from '@testing-library/user-event'

test('show the categories', () => {
    render(<Categories />)
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Kotlin')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('CI/CD')).toBeInTheDocument()
    expect(screen.getByText('Git')).toBeInTheDocument()
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
