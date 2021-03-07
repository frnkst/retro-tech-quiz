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
      <div className="flex flex-wrap justify-center cursor-pointer">
        {allTopics.map((topic: string) => {
          return (
            <div
              key={topic}
              data-testid="category"
              className={`${
                selectedTopics.includes(topic)
                  ? 'text-blue-300 md:text-3xl'
                  : 'text-white md:text-2xl'
              } retro-font sm:text-1xl h-20 m-5 flex justify-center p-6`}
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
  correct: string
  wrong: string[]
}

export function getAllTopics() {
  return [javascript, webdevelopment, kotlin, java, typescript, git, cicd]
}
