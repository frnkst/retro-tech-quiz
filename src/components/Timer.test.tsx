import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { Timer } from './Timer'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

it('show the correct time in minutes and seconds', () => {
  render(<Timer time={1000} />)

  expect(screen.getByText('16:40')).toBeVisible()
})

it('show leading zeros', () => {
  render(<Timer time={1} />)

  expect(screen.getByText('00:01')).toBeVisible()
})

it('count down the seconds', () => {
  render(<Timer time={5} />)

  expect(screen.getByText('00:05')).toBeVisible()

  act(() => {
    jest.advanceTimersByTime(3000)
  })

  expect(screen.getByText('00:02')).toBeVisible()
})

it('stop the timer at 00:00', () => {
  render(<Timer time={5} />)

  expect(screen.getByText('00:05')).toBeVisible()

  act(() => {
    jest.advanceTimersByTime(9000)
  })

  expect(screen.getByText('00:00')).toBeVisible()
})
