import React from 'react'
import { render, screen } from '@testing-library/react'
import { Questions } from './Questions'

test('show the timer', () => {
    render(<Questions />)

    expect(screen.getByText('16:40')).toBeInTheDocument()
})

test('show the score', () => {
    render(<Questions />)

    expect(screen.getByText('000000')).toBeInTheDocument()
})

test('show the question', () => {
    // How to mock getAllSelectedCategories()? I could pass them as props
    // but then how would I mock getRandomQuestion() for example?
})
