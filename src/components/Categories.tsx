import { webdevelopment } from '../questions/webdevelopment'
import { javascript } from '../questions/javascript'
import { kotlin } from '../questions/kotlin'
import { typescript } from '../questions/typescript'
import { cicd } from '../questions/cicd'
import { git } from '../questions/git'
import { java } from '../questions/java'
import { useState } from 'react'

export function Categories() {
  const [allCategories, setCategories] = useState(getAllCategories())

  return (
    <div className="w-5/6 self-center py-10">
      <span className="retro-font text-yellow-300 md:text-3xl sm:text-2xl">
        Choose your opponent
      </span>
      <div className="py-10 flex flex-wrap justify-center">
        {allCategories.map((category) => {
          return (
            <div
              key={category.name}
              data-testid="category"
              className={`${
                category.isSelected ? 'bg-yellow-300' : 'bg-transparent'
              } retro-font md:text-2xl sm:text-1xl h-20 m-5 text-white border-dashed border-white border-2 flex justify-center p-6`}
              onClick={() => {
                category.isSelected = !category.isSelected
                setCategories([...allCategories])
              }}
            >
              <span className="self-center">{category.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export type Category = {
  name: string
  isSelected?: boolean
  questions: [
    {
      level: 1 | 2 | 3 | 4 | 5
      question: string
      correct: string
      wrong: string[]
    }
  ]
}

export function getAllCategories() {
  return [javascript, webdevelopment, kotlin, java, typescript, git, cicd]
}
