import { Question } from './Categories'

type QuestionProps = {
  question: Question
}

export function AskQuestion({ question }: QuestionProps) {
  return (
    <>
      <div>{question.question}</div>
      <div>{question.correct}</div>
      <div>{question.wrong[0]}</div>
      <div>{question.wrong[1]}</div>
    </>
  )
}
