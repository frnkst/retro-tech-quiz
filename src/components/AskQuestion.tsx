import { Question } from './Categories'

type QuestionProps = {
  question: Question
  updateScore: any
}

export function AskQuestion({ question, updateScore }: QuestionProps) {
  return (
    <>
      <div className="md:text-4xl sm:text-3xl text-white m-10 retro-font">
        <div className="text-center m-5 p-5 text-blue-300">
          {question.question}
        </div>
        <div
          className="border-2 p-5 m-5 text-center"
          onClick={() => updateScore()}
        >
          {question.correct}
        </div>
        <div className="border-2 p-5 m-5 text-center">{question.wrong[0]}</div>
        <div className="border-2 p-5 m-5 text-center">{question.wrong[1]}</div>
      </div>
    </>
  )
}
