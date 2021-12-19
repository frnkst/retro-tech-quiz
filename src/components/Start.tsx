import React, { useState } from 'react'
import { Categories } from './Categories'
import { useHistory } from 'react-router-dom'
import { History } from 'history'
import { getAllTopicNames, prepareTopics } from '../services/question-service'

export function Start() {
  const [time, setTime] = useState<string>('00:00')
  const [name, setName] = useState<string>('')
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const history = useHistory<History>()

  return (
    <div className="mx-auto w-96 sm:w-screen font-retro md:text-2xl text-base">
      <div className="flex flex-col justify-center align-middle">
        <div className="md:py-10 py-5 text-center text-gray-500">
          Player name
        </div>
        <input
          name="player"
          type="text"
          aria-label="player name"
          autoFocus
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="self-center w-3/6 p-5 md:m-5 m-1 text-center border-2 shadow-lg cursor-pointer "
        />

        {getTimeSelection(time, setTime)}

        <div className="md:py-10 py-3 text-center text-gray-500">Topics</div>
        <Categories
          selectTopics={(topic: string[]) => setSelectedTopics([...topic])}
          selectedTopics={selectedTopics}
          allTopics={getAllTopicNames()}
        />
      </div>
      <div className="py-10 text-gray-500 cursor-pointer">
        <div
          className="text-center"
          onClick={() => startGame(history, selectedTopics, time)}
        >
          <button className="md:text-4xl text-base md:p-5 p-4 md:mt-14 m-4 text-gray-500 font-retro text-center cursor-pointer border-gray-500 border-2">
            next
          </button>
        </div>
      </div>
    </div>
  )
}

function getTimeSelection(time: string, setTime: (time: string) => void) {
  const timeOptions = ['05:00', '10:00', '15:00', '20:00']

  return (
    <>
      <div className="md:py-10 py-3 text-center text-gray-500">Time</div>
      <div className="flex flex-wrap justify-center">
        {timeOptions.map((option) => {
          return (
            <button
              key={option}
              className={`${
                option === time
                  ? 'shadow-inner text-blue-500'
                  : 'shadow-lg text-gray-500'
              } border-2 text-gray-500 p-5 md:m-5 m-2 text-center cursor-pointer w-2/6 self-center shadow-lg`}
              onClick={() => setTime(option)}
            >
              {option}
            </button>
          )
        })}
      </div>
    </>
  )
}

function startGame(history: History, selectedTopics: string[], time: string) {
  const preparedTopics = prepareTopics(selectedTopics)

  const timeInSecond = parseInt(time.split(':')[0]) * 60
  history.push('/questions', { topics: preparedTopics, time: timeInSecond })
}
