import { Categories, getAllTopics } from './Categories'
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import { Score } from './Score'

export function Start() {
  const [time, setTime] = useState<string>('00:00')

  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const history = useHistory()

  function startGame() {
    const filteredTopics = getAllTopics().filter((topic) =>
      selectedTopics.includes(topic.name)
    )
    const timeInSecond = parseInt(time.split(':')[0]) * 60
    history.push('/questions', { topics: filteredTopics, time: timeInSecond })
  }

  const allTopics = getAllTopics().map((topic) => topic.name)

  return (
    <>
      <div className="flex justify-between">
        <div className="retro-font md:text-6xl sm:text-3xl text-yellow-300 m-10">
          {time}
        </div>
        <Score score={'000000'} />
      </div>
      <div className="App flex-col flex align-middle w-screen justify-center">
        <input
          placeholder="Player Name"
          type="text"
          onFocus={(event) => (event.target.placeholder = '')}
          onChange={(event) =>
            event.target.placeholder?.length === 0
              ? (event.target.placeholder = 'Player Name')
              : void 0
          }
          className="retro-font self-center w-5/6 text-white py-10 px-6 text-grey-darkest text-center md:text-3xl sm:text-2xl rounded-md bg-gray-800 border-dashed placeholder-white border-4"
        />

        {getTimeSelection(time, setTime)}

        <div className="retro-font text-yellow-300 md:text-3xl py-10">
          Topics
        </div>
        <Categories
          selectTopics={(topic: string[]) => setSelectedTopics([...topic])}
          selectedTopics={selectedTopics}
          allTopics={allTopics}
        />
      </div>
      <div className="retro-font text-yellow-300 md:text-3xl sm:text-2xl w-screen flex cursor-pointer">
        <div className="text-center w-screen" onClick={() => startGame()}>
          Start
        </div>
      </div>
    </>
  )
}

function getTimeSelection(time: string, setTime: (time: string) => void) {
  const timeOptions = ['05:00', '10:00', '15:00', '20:00']

  return (
    <>
      <div className="retro-font text-yellow-300 md:text-3xl py-10">Time</div>
      <div className="retro-font md:text-2xl sm:text-1xl flex">
        {timeOptions.map((option) => {
          return (
            <div
              key={option}
              className={`${
                option === time
                  ? 'text-blue-300 md:text-3xl'
                  : 'text-white md:text-2xl'
              } h-20 m-5 justify-center p-6 w-1/4`}
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
