import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { Timer } from './Timer'

beforeEach(() => {
    jest.useFakeTimers()
})

afterEach(() => {
    jest.useRealTimers()
})

test('show the correct time in minutes and seconds', () => {
    render(<Timer time={1000} />)

    expect(screen.getByText('16:40')).toBeInTheDocument()
})

test('show leading zeros', () => {
    render(<Timer time={1} />)

    expect(screen.getByText('00:01')).toBeInTheDocument()
})

test('count down the seconds', () => {
    render(<Timer time={5} />)

    expect(screen.getByText('00:05')).toBeInTheDocument()

    act(() => {
        jest.advanceTimersByTime(3000)
    })

    expect(screen.getByText('00:02')).toBeInTheDocument()
})

test('stop the timer at 00:00', () => {
    render(<Timer time={5} />)

    expect(screen.getByText('00:05')).toBeInTheDocument()

    act(() => {
        jest.advanceTimersByTime(9000)
    })

    expect(screen.getByText('00:00')).toBeInTheDocument()
})
