import { Categories, getAllTopics } from './Categories'
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import { Score } from './Score'
import { History } from 'history'
import { prepareTopics } from '../services/question-service'

export function Start() {
  const [time, setTime] = useState<string>('00:00')

  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const history = useHistory<History>()

  const allTopics = getAllTopics().map((topic) => topic.name)

  return (
    <>
      <div className="flex justify-between">
        <div className="retro-font md:text-6xl sm:text-3xl text-gray-500 m-10">
          {time}
        </div>
        <Score score={'000000'} />
      </div>
      <div className="App flex-col flex align-middle w-screen justify-center md:text-2xl">
        <input
          name="player"
          placeholder="Player Name"
          type="text"
          onFocus={(event) => (event.target.placeholder = '')}
          onChange={(event) =>
            event.target.placeholder?.length === 0
              ? (event.target.placeholder = 'Player Name')
              : void 0
          }
          className="retro-font border-2 p-5 m-5 text-center cursor-pointer w-3/6 self-center shadow-lg"
        />

        {getTimeSelection(time, setTime)}

        <div className="retro-font text-gray-500 md:text-3xl py-10">Topics</div>
        <Categories
          selectTopics={(topic: string[]) => setSelectedTopics([...topic])}
          selectedTopics={selectedTopics}
          allTopics={allTopics}
        />
      </div>
      <div className="retro-font text-gray-500 py-10 md:text-3xl sm:text-2xl w-screen flex cursor-pointer">
        <div
          className="text-center w-screen"
          onClick={() => startGame(history, selectedTopics, time)}
        >
          --&gt;
        </div>
      </div>
    </>
  )
}

function getTimeSelection(time: string, setTime: (time: string) => void) {
  const timeOptions = ['05:00', '10:00', '15:00', '20:00']

  return (
    <>
      <div className="retro-font text-gray-500 md:text-3xl py-10">Time</div>
      <div className="retro-font md:text-2xl sm:text-1xl flex flex-wrap w-screen justify-center">
        {timeOptions.map((option) => {
          return (
            <div
              key={option}
              className={`${
                option === time
                  ? 'shadow-inner text-blue-500'
                  : 'shadow-lg text-gray-500'
              } border-2 text-gray-500 p-5 m-5 text-center cursor-pointer w-2/6 self-center shadow-lg`}
              onClick={() => setTime(option)}
            >
              {option}
            </div>
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
