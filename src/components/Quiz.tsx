import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Timer } from './Timer'
import { Score } from './Score'
import { AskQuestion } from './AskQuestion'
import { Option, Question, Topic } from './Categories'
import { Results } from './Results'

type LocationState = {
  topics: Topic[]
  time: number
}

export type Result = {
  question: Question
  correctAnswer: boolean
  responseTime: number
}

export function Quiz() {
  let location = useLocation<LocationState>()
  const topics = location.state.topics
  const time = location.state.time

  const [quizState, setQuizState] = useState({
    topicNumber: 0,
    questionNumber: 0,
    score: 0,
    showResult: false,
  })

  const [results, setResults] = useState<Result[]>([])

  function getQuestion(): Question {
    const { topicNumber, questionNumber } = quizState
    const topic = topics[topicNumber]

    if (questionNumber >= topic.questions.length) {
      setQuizState({
        ...quizState,
        topicNumber: topicNumber + 1,
        questionNumber: 0,
        showResult: false,
      })
    }

    return topic.questions[questionNumber]
  }

  function updateLiveScore(option: Option) {
    let score: number
    if (option.correct) {
      score = quizState.score + question.level * 100
    } else {
      score = quizState.score - (600 - question.level * 100) / 4
      score = score > 0 ? score : 0
    }

    setQuizState({ ...quizState, score: score, showResult: true })
  }

  function selectOption(option: Option) {
    option.selected = true

    setResults([
      ...results,
      {
        question: question,
        correctAnswer: !!option.correct,
        responseTime: Date.now() - startTime,
      },
    ])
    updateLiveScore(option)
  }

  const showNextQuestion = (
    eventTarget: HTMLButtonElement | undefined = undefined
  ) => {
    if (eventTarget) {
      eventTarget.blur()
    }

    setQuizState({
      ...quizState,
      topicNumber: quizState.topicNumber,
      questionNumber: quizState.questionNumber + 1,
      showResult: false,
    })
  }

  if (quizState.topicNumber === topics.length) {
    return <Results results={results} />
  }

  let question = getQuestion()

  document.onkeydown = (event) => {
    if (event.key === 'ArrowRight') {
      showNextQuestion()
    }
  }

  const startTime = Date.now()

  return (
    <>
      <div className="flex justify-between font-retro">
        <Timer time={time} />
        <Score score={quizState.score.toString()} />
      </div>
      <div>
        <AskQuestion
          topicName={topics[quizState.topicNumber].name}
          question={question}
          selectOption={selectOption}
          showResult={quizState.showResult}
        />

        {quizState.showResult && (
          <div className="w-screen flex justify-center">
            <button
              className="md:text-4xl text-base md:p-5 p-4 md:mt-14 m-4 text-gray-500 font-retro text-center cursor-pointer border-gray-500 border-2"
              onClick={(event) =>
                showNextQuestion(event.target as HTMLButtonElement)
              }
            >
              next
            </button>
          </div>
        )}
      </div>
    </>
  )
}
