import React from 'react'
import { render, screen } from '@testing-library/react'
import { Questions } from './Questions'
import { Category } from './Categories'

beforeEach(() => {
    render(<Questions categories={getSomeCategories()} />)
})

test('show the timer', () => {
    expect(screen.getByText('16:40')).toBeVisible()
})

test('show the score', () => {
    expect(screen.getByText('000000')).toBeVisible()
})

test('show the question', () => {
    expect(screen.getByText('question')).toBeVisible()
})

test('show the correct answer', () => {
    expect(screen.getByText('correct answer')).toBeVisible()
})

test('show the wrong answer 1', () => {
    expect(screen.getByText('wrong answer 1')).toBeVisible()
})

test('show the wrong answer 2', () => {
    expect(screen.getByText('wrong answer 2')).toBeVisible()
})

function getSomeCategories(): Category[] {
    return [
        {
            name: 'test category',
            isSelected: true,
            questions: [
                {
                    level: 1,
                    question: 'question',
                    correct: 'correct answer',
                    wrong: ['wrong answer 1', 'wrong answer 2'],
                },
            ],
        },
    ]
}
