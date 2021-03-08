import { Timer } from './Timer'
import { Score } from './Score'
import React, { useState } from 'react'
import { AskQuestion } from './AskQuestion'
import { Option, Question, Topic } from './Categories'
import { Result } from './Result'
import { useLocation } from 'react-router-dom'

type LocationState = {
  topics: Topic[]
  time: number
}

export function Quiz() {
  let location = useLocation<LocationState>()
  const topics = location.state.topics
  const time = location.state.time

  const [quizState, setQuizState] = useState({
    topicNumber: 0,
    questionNumber: 0,
    score: 0,
    showResult: false
  })

  function getQuestion(): Question {
    const { topicNumber, questionNumber } = quizState
    const topic = topics[topicNumber]

    if (questionNumber >= topic.questions.length) {
      setQuizState({
        ...quizState,
        topicNumber: topicNumber + 1,
        questionNumber: 0,
        showResult: false
      })
    }

    return topic.questions[questionNumber]
  }

  let question = getQuestion()

  function selectOption(option: Option) {
    option.selected = true

    if (option.correct) {
      const score = quizState.score + (question.level * 100)
      setQuizState({ ...quizState, score: score, showResult: true })
    } else {
      const score = quizState.score - 100
      setQuizState({ ...quizState, score: score, showResult: true })
    }
  }

  if (quizState.topicNumber === topics.length) {
    return <Result />
  }

  const showNextQuestion = () => {
    setQuizState({
      ...quizState,
      topicNumber: quizState.topicNumber,
      questionNumber: quizState.questionNumber + 1,
      showResult: false
    })
  }

  document.onkeydown = (event) => event.key === 'ArrowRight' && showNextQuestion()

  return (
    <>
      <div className="flex justify-between">
        <Timer time={time} />
        <Score score={quizState.score.toString()} />
      </div>
      <div className="flex-row">
        <AskQuestion
          question={question}
          selectOption={selectOption}
          showResult={quizState.showResult}
        />
        <div
          className="md:text-4xl sm:text-2xl text-gray-500 w-screen retro-font text-center cursor-pointer"
          onClick={ showNextQuestion }
        >
          --&gt;
        </div>
      </div>
    </>
  )
}
