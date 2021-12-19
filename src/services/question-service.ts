import { Topic } from '../components/Categories'
import { shuffle } from 'lodash'
import { javascript } from '../questions/javascript'
import { webdevelopment } from '../questions/webdevelopment'
import { kotlin } from '../questions/kotlin'
import { java } from '../questions/java'
import { typescript } from '../questions/typescript'
import { git } from '../questions/git'

export function prepareTopics(selectedTopics: string[]) {
  const filteredTopics = getAllTopicNames().filter((topicName) =>
    selectedTopics.includes(topicName)
  )

  shuffleQuestionsAndOptions(filteredTopics)
  return filteredTopics
}

function shuffleQuestionsAndOptions(topicNames: string[]) {
  topicNames.forEach((topicName) => {
    const questions = getQuestionsForTopic(topicName)

    questions.forEach((question) => {
      question.options = shuffle(question.options)
    })

    shuffle(questions)
  })
}

export function getAllTopics(): Topic[] {
  return [javascript, webdevelopment, kotlin, java, typescript, git];
}

export function getAllTopicNames(): string[] {
  return getAllTopics().map(topic => topic.name)
}

export function getQuestionsForTopic(topicName: string) {
  const topic = getAllTopics().find((topic: Topic) => topic.name === topicName)
  return topic!!.questions;
}
