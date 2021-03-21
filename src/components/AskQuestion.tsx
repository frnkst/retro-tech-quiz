import { Option, Question } from './Categories'
import React from 'react'

type QuestionProps = {
  topicName: string
  question: Question
  selectOption: (option: Option) => void
  showResult: boolean
}

export const AskQuestion = function ({
  topicName,
  question,
  selectOption,
  showResult,
}: QuestionProps) {
  return (
    <>
      <div className="flex flex-col m-10 md:text-4xl sm:text-3xl font-other">
        <div className="self-center m-5 text-center text-gray-500 border-gray-500 border-2 flex flex-col">
          <div className="flex justify-between pt-2 pr-2 pl-2 border-gray-500 border-dashed border-b">
            <span className="md:text-lg">{topicName}</span>
            <span className="md:text-lg">{getLevel(question.level)}</span>
          </div>
          <div className="p-5">{question.question}</div>
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

function getLevel(level: number): string {
  if (level <= 2) {
    return 'Easy'
  }
  if (level === 3) {
    return 'Medium'
  }
  return 'Hard'
}
