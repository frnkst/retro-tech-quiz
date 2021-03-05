import { Timer } from './Timer'
import { Score } from './Score'
import { useState } from 'react'
import { AskQuestion } from './AskQuestion'
import { Topic, Question } from './Categories'

type GameProps = {
  allQuestions: Topic[]
}

export function Quiz({ allQuestions }: GameProps) {
  const [position, setPosition] = useState({
    topicNumber: 0,
    questionNumber: 0,
  })

  function getQuestion(): Question {
    const { topicNumber, questionNumber } = position
    const topic = allQuestions[topicNumber]

    if (questionNumber >= topic.questions.length) {
      setPosition({ topicNumber: topicNumber + 1, questionNumber: 0 })
    }

    return topic.questions[questionNumber]
  }

  return (
    <>
      <Timer time={1000} />
      <Score />
      <AskQuestion question={getQuestion()} />
      <button
        onClick={() =>
          setPosition({
            topicNumber: position.topicNumber,
            questionNumber: position.questionNumber + 1,
          })
        }
      >
        Next
      </button>
    </>
  )
}
