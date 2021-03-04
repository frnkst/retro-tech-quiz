import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('show the countdown', () => {
    render(<App />)

    expect(screen.getByText('16:40')).toBeVisible()
})

test('show the high score', () => {
    render(<App />)

    expect(screen.getByText('000000')).toBeVisible()
})

test('show the title', () => {
    render(<App />)

    expect(screen.getByText('Are you ready?')).toBeVisible()
})

test('render the input box', () => {
    render(<App />)

    expect(screen.getByPlaceholderText('enter your name')).toBeVisible()
})

test('show let me in', () => {
    render(<App />)

    expect(screen.getByText('Start')).toBeVisible()
})
