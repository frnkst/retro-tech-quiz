import { getAllTopics, Topic } from '../components/Categories'
import { shuffle } from 'lodash'

export function prepareTopics(selectedTopics: string[]) {
  const filteredTopics = getAllTopics().filter((topic) =>
    selectedTopics.includes(topic.name)
  )

  shuffleQuestionsAndOptions(filteredTopics)
  return filteredTopics
}

function shuffleQuestionsAndOptions(topics: Topic[]) {
  topics.forEach((topic) => {
    topic.questions.forEach((question) => {
      question.options = shuffle(question.options)
    })

    topic.questions = shuffle(topic.questions)
  })
}
