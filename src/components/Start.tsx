import React, { useState } from 'react'
import { Categories, getAllTopics } from './Categories'
import { useHistory } from 'react-router-dom'
import { Score } from './Score'
import { History } from 'history'
import { prepareTopics } from '../services/question-service'

export function Start() {
  const [time, setTime] = useState<string>('00:00')
  const [name, setName] = useState<string>('')
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const history = useHistory<History>()

  const allTopics = getAllTopics().map((topic) => topic.name)

  return (
    <div className="mx-auto w-96 sm:w-screen font-retro">
      <div className="flex justify-between">
        <div className="m-10 text-gray-500 lg:text-4xl md:text-3xl sm:text-2xl">
          {time}
        </div>
        <Score score={'000000'} />
      </div>
      <div className="flex flex-col justify-center align-middle md:text-2xl">
        <div className="py-10 text-center text-gray-500 sm:text-2xl md:text-3xl">
          Player name
        </div>
        <input
          name="player"
          type="text"
          autoFocus
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="self-center w-3/6 p-5 m-5 text-center border-2 shadow-lg cursor-pointer "
        />

        {getTimeSelection(time, setTime)}

        <div className="py-10 text-center text-gray-500 sm:text-2xl md:text-3xl">
          Topics
        </div>
        <Categories
          selectTopics={(topic: string[]) => setSelectedTopics([...topic])}
          selectedTopics={selectedTopics}
          allTopics={allTopics}
        />
      </div>
      <div className="py-10 text-gray-500 cursor-pointer md:text-3xl sm:text-2xl">
        <div
          className="text-center"
          onClick={() => startGame(history, selectedTopics, time)}
        >
          <button className="p-3">--&gt;</button>
        </div>
      </div>
    </div>
  )
}

function getTimeSelection(time: string, setTime: (time: string) => void) {
  const timeOptions = ['05:00', '10:00', '15:00', '20:00']

  return (
    <>
      <div className="py-10 text-center text-gray-500 sm:text-2xl md:text-3xl">
        Time
      </div>
      <div className="flex flex-wrap justify-center md:text-2xl sm:text-1xl">
        {timeOptions.map((option) => {
          return (
            <button
              key={option}
              className={`${
                option === time
                  ? 'shadow-inner text-blue-500'
                  : 'shadow-lg text-gray-500'
              } border-2 text-gray-500 p-5 m-5 text-center cursor-pointer w-2/6 self-center shadow-lg`}
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
