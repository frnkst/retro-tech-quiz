import { getAllTopics, Option, Topic } from '../components/Categories'

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
      shuffle(question.options)
    })
  )
}

// https://github.com/Daplie/knuth-shuffle
function shuffle(array: Option[]) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
