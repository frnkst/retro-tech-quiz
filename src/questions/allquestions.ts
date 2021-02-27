import { javascript } from './javascript'
import { webdevelopment } from './webdevelopment'

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

export function getAllCategories() {
    return [javascript, webdevelopment]
}
