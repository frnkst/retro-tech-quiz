import { webdevelopment } from '../questions/webdevelopment'
import { javascript } from '../questions/javascript'
import { kotlin } from '../questions/kotlin'
import { typescript } from '../questions/typescript'
import { cicd } from '../questions/cicd'
import { git } from '../questions/git'
import { java } from '../questions/java'

type TopicsProps = {
  selectTopics: (topic: string[]) => void
  selectedTopics: string[]
  allTopics: string[]
}

export function Categories({
  selectTopics,
  selectedTopics,
  allTopics,
}: TopicsProps) {
  return (
    <div className="self-center w-5/6">
      <div className="flex flex-wrap justify-center cursor-pointer">
        {allTopics.map((topic: string) => {
          return (
            <button
              key={topic}
              data-testid="category"
              className={`${
                selectedTopics.includes(topic)
                  ? 'shadow-inner text-blue-500'
                  : 'shadow-lg text-gray-500'
              } border-2 p-5 m-5 cursor-pointer w-2/6 text-center flex flex-col justify-center`}
              onClick={() => {
                if (selectedTopics.includes(topic)) {
                  selectTopics(selectedTopics.filter((e) => e !== topic))
                } else {
                  selectTopics([...selectedTopics, topic])
                }
              }}
            >
              <span className="self-center text-sm md:text-2xl">{topic}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export type Topic = {
  name: string
  isSelected?: boolean
  questions: Question[]
}

export type Question = {
  level: 1 | 2 | 3 | 4 | 5
  question: string
  options: Option[]
}

export type Option = {
  text: string
  correct?: boolean
  selected?: boolean
}

export function getAllTopics() {
  return [javascript, webdevelopment, kotlin, java, typescript, git, cicd]
}
