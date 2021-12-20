import { shuffle } from 'lodash'
import { javascript } from '../questions/javascript'
import { webdevelopment } from '../questions/webdevelopment'
import { kotlin } from '../questions/kotlin'
import { java } from '../questions/java'
import { typescript } from '../questions/typescript'
import { git } from '../questions/git'

export type Topic = {
  name: string
  isSelected?: boolean
  questions: Question[]
}

export type Code = {
  code: string
  language: string
}

export type Question = {
  level: 1 | 2 | 3 | 4 | 5
  question: string | Code
  codeSnippet?: true
  options: Option[]
}

export type Option = {
  text: string
  correct?: boolean
  selected?: boolean
}

export function prepareTopics(selectedTopics: string[]): Topic[] {
  const filteredTopics = getAllTopicNames().filter((topicName) =>
    selectedTopics.includes(topicName)
  )

  const topics = getTopicsByName(filteredTopics)

  shuffleQuestionsAndOptions(topics)
  return topics
}

function shuffleQuestionsAndOptions(topics: Topic[]) {
  topics.forEach((topic) => {
    const questions = getQuestionsForTopic(topic.name)

    questions.forEach((question) => {
      question.options = shuffle(question.options)
    })

    shuffle(questions)
  })
}

export function getAllTopics(): Topic[] {
  return [javascript, webdevelopment, kotlin, java, typescript, git];
}

export function getTopicsByName(topicNames: string []): Topic[] {
  return [javascript, webdevelopment, kotlin, java, typescript, git].filter(topic => topicNames.includes(topic.name));
}

export function getAllTopicNames(): string[] {
  return getAllTopics().map(topic => topic.name)
}

export function getQuestionsForTopic(topicName: string) {
  const topic = getAllTopics().find((topic: Topic) => topic.name === topicName)
  return topic!!.questions;
}
