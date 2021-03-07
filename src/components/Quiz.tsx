import { Timer } from './Timer'
import { Score } from './Score'
import { useState } from 'react'
import { AskQuestion } from './AskQuestion'
import { Question, Topic } from './Categories'
import { Result } from './Result'
import { useLocation } from 'react-router-dom'

type LocationState = {
  topics: Topic[]
}

export function Quiz() {
  let location = useLocation<LocationState>()
  const topics = location.state.topics

  const [position, setPosition] = useState({
    topicNumber: 0,
    questionNumber: 0,
    score: 0,
  })

  function getQuestion(): Question {
    const { topicNumber, questionNumber } = position
    const topic = topics[topicNumber]

    if (questionNumber >= topic.questions.length) {
      setPosition({
        ...position,
        topicNumber: topicNumber + 1,
        questionNumber: 0,
      })
    }

    return topic.questions[questionNumber]
  }

  function addToScore() {
    setPosition({ ...position, score: position.score + 100 })
  }

  if (position.topicNumber === topics.length) {
    return <Result />
  }

  return (
    <>
      <div className="flex justify-between">
        <Timer time={1000} />
        <Score score={position.score.toString()} />
      </div>
      <div className="flex-row">
        <AskQuestion
          question={getQuestion()}
          correctAnswerSelected={addToScore}
        />
        <button
          className="md:text-4xl sm:text-2xl text-yellow-300 w-screen retro-font outline-none"
          onClick={() =>
            setPosition({
              ...position,
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
