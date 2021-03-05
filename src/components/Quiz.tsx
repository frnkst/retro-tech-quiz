import { Timer } from './Timer'
import { Score } from './Score'
import { useState } from 'react'
import { AskQuestion } from './AskQuestion'
import { Topic, Question } from './Categories'
import { Result } from './Result'

type QuizProps = {
  topics: Topic[]
}

export function Quiz({ topics }: QuizProps) {
  const [position, setPosition] = useState({
    topicNumber: 0,
    questionNumber: 0,
  })

  function getQuestion(): Question {
    const { topicNumber, questionNumber } = position
    const topic = topics[topicNumber]

    if (questionNumber >= topic.questions.length) {
      setPosition({ topicNumber: topicNumber + 1, questionNumber: 0 })
    }

    return topic.questions[questionNumber]
  }

  if (position.topicNumber === topics.length) {
    return <Result />
  }

  return (
    <>
      <div className="flex justify-between">
        <Timer time={1000} />
        <Score />
      </div>
      <div className="flex-row">
        <AskQuestion question={getQuestion()} />
        <button
          className="md:text-6xl sm:text-3xl text-white m-10 w-screen"
          onClick={() =>
            setPosition({
              topicNumber: position.topicNumber,
              questionNumber: position.questionNumber + 1,
            })
          }
        >
          Next
        </button>
      </div>
    </>
  )
}
