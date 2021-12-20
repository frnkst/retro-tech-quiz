import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import prettier from 'prettier/standalone'
import babylon from 'prettier/parser-babel'
import { Code, Option, Question } from '../services/question-service'

type QuestionProps = {
  topicName: string
  question: Question
  selectOption: (option: Option) => void
  showResult: boolean
}

export const MultipleChoiceQuestion = function ({
  topicName,
  question,
  selectOption,
  showResult,
}: QuestionProps) {
  return (
    <>
      <div className="flex flex-col md:m-10 m-2 md:text-4xl text-base font-other">
        <div className="self-center md:m-5 m-2 text-gray-500 border-gray-500 border-2 flex flex-col w-5/6">
          <div className="flex justify-between md:pt-2 pt-0 pr-2 pl-2 border-gray-500 border-dashed border-b md:text-2xl text-sm">
            <span>{topicName}</span>
            <span>{getLevel(question.level)}</span>
          </div>

          {typeof question.question === 'string' ? (
            <div className="p-5">{question.question}</div>
          ) : (
            <div className="items-start">
              <SyntaxHighlighter
                className="md:text-base text-xs"
                language={question.question.language}
                style={a11yDark}
                data-testid="code-block"
              >
                {formatCodeBlock(question.question)}
              </SyntaxHighlighter>
            </div>
          )}
        </div>

        {question.options?.map((option) => (
          <button
            key={option.text}
            className={`border-2 md:p-5 md:m-5 p-4 m-2 text-gray-500 text-center cursor-pointer md:w-4/6 w-5/6 self-center shadow-lg
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

function formatCodeBlock(code: Code) {
  if (code.language === 'javascript') {
    return prettier.format(code.code, {
      parser: 'babel',
      plugins: [babylon],
    })
  }

  return code.code
}
