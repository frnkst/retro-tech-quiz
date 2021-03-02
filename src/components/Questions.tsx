import { Timer } from './Timer'
import { Score } from './Score'
import { Category, getAllCategories } from './Categories'

export function Questions() {
    const selectedCategories = getAllSelectedCategories()
    const question = getRandomQuestion(selectedCategories[0])

    return (
        <>
            <Timer time={1000} />
            <Score />
            <div>{question.question}</div>
            <div>{question.correct}</div>
            <div>{question.wrong[0]}</div>
            <div>{question.wrong[1]}</div>
        </>
    )
}

function getAllSelectedCategories() {
    return getAllCategories().filter((category) => category.isSelected)
}

function getRandomQuestion(category: Category) {
    const randomIndex = randomIntFromInterval(0, category.questions.length - 1)
    return category.questions[randomIndex]
}

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
