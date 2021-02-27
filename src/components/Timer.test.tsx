import React from 'react'
import { render, screen } from '@testing-library/react'
import { Timer } from './Timer'

test('show the correct time in minutes and seconds', () => {
    render(<Timer time={1000} />)

    expect(screen.getByText('16:40')).toBeInTheDocument()
})

test('show leading zeros', () => {
    render(<Timer time={1} />)

    expect(screen.getByText('00:01')).toBeInTheDocument()
})

test('count down the seconds', () => {
    jest.useFakeTimers()
    render(<Timer time={5} />)

    expect(screen.getByText('00:05')).toBeInTheDocument()
    jest.advanceTimersByTime(3000)
    expect(screen.getByText('00:02')).toBeInTheDocument()
})

test('timer stops at zero', () => {
    jest.useFakeTimers()
    render(<Timer time={5} />)

    expect(screen.getByText('00:05')).toBeInTheDocument()
    jest.advanceTimersByTime(9000)
    expect(screen.getByText('00:00')).toBeInTheDocument()
})
