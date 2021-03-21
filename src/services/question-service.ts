import { getAllTopics, Topic } from '../components/Categories'
import { shuffle } from 'lodash'

export function prepareTopics(selectedTopics: string[]) {
  const filteredTopics = getAllTopics().filter((topic) =>
    selectedTopics.includes(topic.name)
  )

  shuffleOptions(filteredTopics)
  return filteredTopics
}

function shuffleOptions(filteredTopics: Topic[]) {
  filteredTopics.forEach((topic) =>
    topic.questions.forEach((question) => {
      question.options = shuffle(question.options)
    })
  )
}
