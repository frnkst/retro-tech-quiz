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
    <div className="w-5/6 self-center">
      <div className="flex flex-wrap justify-center cursor-pointer md:text-2xl">
        {allTopics.map((topic: string) => {
          return (
            <div
              key={topic}
              data-testid="category"
              className={`${
                selectedTopics.includes(topic)
                  ? 'shadow-inner text-blue-500'
                  : 'shadow-lg text-gray-500'
              } retro-font border-2 p-5 m-5 text-center cursor-pointer w-2/6 `}
              onClick={() => {
                if (selectedTopics.includes(topic)) {
                  selectTopics(selectedTopics.filter((e) => e !== topic))
                } else {
                  selectTopics([...selectedTopics, topic])
                }
              }}
            >
              <span className="self-center">{topic}</span>
            </div>
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
