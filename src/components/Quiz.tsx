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
  name: string
  level: number
  correct: number
  wrong: number
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

  const [results, setResults] = useState<any>([])

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

  function selectOption(option: Option) {
    option.selected = true

    if (option.correct) {
      const score = quizState.score + question.level * 100
      updateResult(results, question, 'correct')
      setResults([...results])
      setQuizState({ ...quizState, score: score, showResult: true })
    } else {
      const score = quizState.score - 100
      updateResult(results, question, 'wrong')
      setResults([...results])
      setQuizState({ ...quizState, score: score, showResult: true })
    }
  }

  const showNextQuestion = (eventTarget: HTMLButtonElement) => {
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

        <div className="w-screen flex justify-center">
          <button
            className="md:text-4xl text-base md:p-5 p-4 mt-14 text-gray-500 font-retro text-center cursor-pointer border-gray-500 border-2"
            onClick={(event) =>
              showNextQuestion(event.target as HTMLButtonElement)
            }
          >
            next
          </button>
        </div>
      </div>
    </>
  )
}

// Sorry this function is horrible ;(. Please refactor
function updateResult(
  results: Result[],
  question: Question,
  type: 'correct' | 'wrong'
) {
  const levelResult = results.find((res) => res.level === question.level)
  if (type === 'correct') {
    if (levelResult) {
      levelResult.correct += 1
    } else {
      results.push({
        name: `Level ${question.level}`,
        level: question.level,
        correct: 1,
        wrong: 0,
      })
    }
  } else {
    if (levelResult) {
      levelResult.wrong += 1
    } else {
      results.push({
        name: `Level ${question.level}`,
        level: question.level,
        correct: 0,
        wrong: 1,
      })
    }
  }
}
