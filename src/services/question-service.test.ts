import { prepareTopics } from './question-service'

test('return empty array if no topic is selected', () => {
  const filteredTopics = prepareTopics([])
  expect(filteredTopics.length).toBe(0)
})

test('return only filtered topics', () => {
  const filteredTopics = prepareTopics(['Git', 'Kotlin'])
  expect(filteredTopics.length).toBe(2)
})
