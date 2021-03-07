import { Question } from './Categories'
import React from 'react'

type QuestionProps = {
  question: Question
  correctAnswerSelected: any
}

type Option = {
  text: string
  correct: boolean
}

const isEqual = (prevProps: QuestionProps, nextProps: QuestionProps) =>
  prevProps.question === nextProps.question

export const AskQuestion = React.memo(function ({
  question,
  correctAnswerSelected,
}: QuestionProps) {
  const options: Option[] = shuffle([
    { text: question.correct, correct: true },
    ...question.wrong.map((wrong) => ({ text: wrong, correct: false })),
  ])

  return (
    <>
      <div className="md:text-4xl sm:text-3xl text-white m-10 retro-font">
        <div className="text-center m-5 p-5 text-blue-300">
          {question.question}
        </div>

        {options.map((option) => (
          <div
            key={option.text}
            className="border-2 p-5 m-5 text-center cursor-pointer"
            onClick={() => option.correct && correctAnswerSelected()}
          >
            {option.text}
          </div>
        ))}
      </div>
    </>
  )
},
isEqual)

// https://github.com/Daplie/knuth-shuffle
function shuffle(array: any[]) {
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
