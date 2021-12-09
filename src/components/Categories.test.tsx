import { render, screen } from '@testing-library/react'
import React from 'react'
import { Categories } from './Categories'
import userEvent from '@testing-library/user-event'

const selectTopicsMock = jest.fn()

it('show the categories', () => {
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

it('select a category on click', () => {
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

it('when an already selected item is selected again it should remove it', () => {
  render(
    <Categories
      allTopics={['JavaScript', 'Kotlin']}
      selectedTopics={['Kotlin']}
      selectTopics={selectTopicsMock}
    />
  )

  const kotlin = screen.getByText('Kotlin')

  userEvent.click(kotlin)

  expect(selectTopicsMock).toHaveBeenCalledWith([])
})
