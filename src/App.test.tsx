import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('show the countdown', () => {
    render(<App />)

    expect(screen.getByText('16:40')).toBeInTheDocument()
})

test('should show the high score', () => {
    render(<App />)

    expect(screen.getByText('000000')).toBeInTheDocument()
})

test('render the input box', () => {
    render(<App />)

    expect(screen.getByPlaceholderText('enter your name')).toBeInTheDocument()
})

test('clear the placeholder on focus', () => {
    render(<App />)
    const inputField = screen.getByPlaceholderText('enter your name')

    expect(screen.getByPlaceholderText('enter your name')).toBeInTheDocument()
    inputField.focus()
    expect(
        screen.queryByPlaceholderText('enter your name')
    ).not.toBeInTheDocument()
})
