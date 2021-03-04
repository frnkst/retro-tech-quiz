import { Timer } from './Timer'
import { Score } from './Score'
import { Category, Question } from './Categories'
import { useRef } from 'react'

type QuestionProps = {
  categories: Category[]
}

let question: Question | undefined

export function Questions({ categories }: QuestionProps) {
  const questionNumber = useRef(0)

  if (!question) {
    question = getNextQuestion(categories, 0)
    return <></>
  } else {
    return (
      <>
        <Timer time={1000} />
        <Score />
        <div>{question.question}</div>
        <div>{question.correct}</div>
        <div>{question.wrong[0]}</div>
        <div>{question.wrong[1]}</div>

        <button
          onClick={() =>
            (question = getNextQuestion(
              categories,
              (questionNumber.current += 1)
            ))
          }
        >
          next
        </button>
      </>
    )
  }
}

function getNextQuestion(categories: Category[], questionNumber: number) {
  return categories[0].questions[questionNumber]
}
