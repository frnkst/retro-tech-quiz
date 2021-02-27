import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('show the countdown', () => {
    render(<App />)

    expect(screen.getByText('16:40')).toBeInTheDocument()
})

test('show the high score', () => {
    render(<App />)

    expect(screen.getByText('000000')).toBeInTheDocument()
})

test('show the title', () => {
    render(<App />)

    expect(screen.getByText('Are you ready?')).toBeInTheDocument()
})

test('render the input box', () => {
    render(<App />)

    expect(screen.getByPlaceholderText('enter your name')).toBeInTheDocument()
})

test('clear the placeholder on focus', () => {
    render(<App />)
    const inputField = screen.getByPlaceholderText('Name')

    expect(inputField).toBeInTheDocument()
    inputField.focus()
    expect(screen.queryByPlaceholderText('Name')).not.toBeInTheDocument()
})

test('show let me in', () => {
    render(<App />)

    expect(screen.getByText('Let me in')).toBeInTheDocument()
})
