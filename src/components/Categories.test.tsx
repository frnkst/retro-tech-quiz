import { render, screen } from '@testing-library/react'
import React from 'react'
import { Categories } from './Categories'
import userEvent from '@testing-library/user-event'

test('show the categories', () => {
  render(
    <Categories
      allTopics={['JavaScript', 'Kotlin']}
      selectedTopics={[]}
      selectTopics={() => void 0}
    />
  )
  expect(screen.getByText('JavaScript')).toBeVisible()
  expect(screen.getByText('Kotlin')).toBeVisible()
})

test('select a category on click', () => {
  const selectTopicsMock = jest.fn()

  render(
    <Categories
      allTopics={['JavaScript', 'Kotlin']}
      selectedTopics={[]}
      selectTopics={selectTopicsMock}
    />
  )
  const kotlin = screen.getByText('Kotlin')

  userEvent.click(kotlin)
  expect(selectTopicsMock).toHaveBeenCalledWith(['Kotlin'])
})
