import { Option, Question } from './Categories'
import React from 'react'

type QuestionProps = {
  question: Question
  selectOption: (option: Option) => void
  showResult: boolean
}

export const AskQuestion = function ({
  question,
  selectOption,
  showResult,
}: QuestionProps) {
  return (
    <>
      <div className="flex flex-col m-10 md:text-4xl sm:text-3xl font-other">
        <div className="self-center p-5 m-5 text-center text-gray-500">
          {question.question}
        </div>

        {question.options?.map((option) => (
          <button
            key={option.text}
            className={`border-2 p-5 m-5 text-gray-500 text-center cursor-pointer w-3/6 self-center shadow-lg
              ${showResult && option.correct ? 'bg-green-300' : ''}
              ${
                showResult && option.selected
                  ? 'shadow-inner text-blue-500'
                  : ''
              }
              ${showResult && !option.correct ? 'bg-red-300' : ''}
             `}
            onClick={() => !showResult && selectOption(option)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </>
  )
}
