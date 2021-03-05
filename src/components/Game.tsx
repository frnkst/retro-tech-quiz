import { Timer } from './Timer'
import { Score } from './Score'
import { useRef, useState } from 'react'
import { AskQuestion } from './AskQuestion'
import { getAllCategories, Question } from './Categories'

export function Game() {
  const allQuestions = getAllCategories()

  const [questionNumber, setQuestionNumber] = useState(0)

  const categoryNumber = useRef(0)

  function getQuestion(): Question {
    const category = allQuestions[categoryNumber.current]

    if (questionNumber >= category.questions.length) {
      categoryNumber.current += 1
      setQuestionNumber(0)
    }

    return category.questions[questionNumber]
  }

  return (
    <>
      <Timer time={1000} />
      <Score />
      <AskQuestion question={getQuestion()} />
      <button onClick={() => setQuestionNumber(questionNumber + 1)}>
        Next
      </button>
    </>
  )
}
