import { render, screen } from '@testing-library/react'
import React from 'react'
import { SelectTopics } from './SelectTopics'
import userEvent from '@testing-library/user-event'

const selectTopicsMock = jest.fn()

it('show the categories', () => {
  render(
    <SelectTopics
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
    <SelectTopics
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
    <SelectTopics
      allTopics={['JavaScript', 'Kotlin']}
      selectedTopics={['Kotlin']}
      selectTopics={selectTopicsMock}
    />
  )

  const kotlin = screen.getByText('Kotlin')

  userEvent.click(kotlin)

  expect(selectTopicsMock).toHaveBeenCalledWith([])
})
