import { render, screen } from '@testing-library/react'
import React from 'react'
import { Categories } from './Categories'

test('show the categories', () => {
    render(<Categories />)
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Kotlin')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('CI/CD')).toBeInTheDocument()
    expect(screen.getByText('Tools')).toBeInTheDocument()
    expect(screen.getByText('Git')).toBeInTheDocument()
})
