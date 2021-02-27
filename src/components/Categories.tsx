import { webdevelopment } from '../questions/webdevelopment'
import { javascript } from '../questions/javascript'
import { kotlin } from '../questions/kotlin'
import { typescript } from '../questions/typescript'
import { cicd } from '../questions/cicd'
import { git } from '../questions/git'

export function Categories() {
    return (
        <div className="w-5/6 self-center py-10">
            <span className="retro-font text-yellow-300 text-3xl">
                Choose your opponent
            </span>
            <div className="py-10">
                {getAllCategories().map((category) => {
                    return (
                        <div
                            key={category.name}
                            className="retro-font text-3xl h-20 m-5 text-white border-dashed border-white border-4 flex justify-center"
                        >
                            <span className="self-center ">
                                {category.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export type Category = {
    name: string
    questions: [
        {
            level: 1 | 2 | 3 | 4 | 5
            question: string
            correct: string
            wrong: string[]
        }
    ]
}

function getAllCategories() {
    return [javascript, webdevelopment, kotlin, typescript, git, cicd]
}
