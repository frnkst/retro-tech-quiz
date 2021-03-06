import { render, screen } from '@testing-library/react'
import React from 'react'
import { Categories } from './Categories'
import userEvent from '@testing-library/user-event'

test.only('show the categories', () => {
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
  let selectedTopics = ['JavaScript']

  render(
    <Categories
      allTopics={['JavaScript, Kotlin']}
      selectedTopics={selectedTopics}
      selectTopics={(topics) => (selectedTopics = topics)}
    />
  )
  const javaScript = screen.getByText('JavaScript')

  expect(javaScript).not.toHaveClass('bg-yellow-300')
  userEvent.click(javaScript)
  expect(javaScript).toHaveClass('bg-yellow-300')
  userEvent.click(javaScript)
  expect(javaScript).not.toHaveClass('bg-yellow-300')
})
