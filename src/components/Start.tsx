import { Timer } from './Timer'
import { Categories, getAllTopics } from './Categories'
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import { Score } from './Score'

export function Start() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const history = useHistory()

  function startGame() {
    const filteredTopics = getAllTopics().filter((topic) =>
      selectedTopics.includes(topic.name)
    )
    history.push('/questions', { topics: filteredTopics })
  }

  const allTopics = getAllTopics().map((topic) => topic.name)

  return (
    <>
      <div className="flex justify-between">
        <Timer time={1000} />
        <Score score={'000000'} />
      </div>
      <div className="retro-font text-yellow-300 md:text-6xl sm:text-3xl w-screen flex py-10">
        <div className="text-center w-screen">Are you ready?</div>
      </div>
      <div className="App flex-col flex align-middle w-screen justify-center">
        <input
          placeholder="enter your name"
          type="text"
          onChange={(event) =>
            event.target.placeholder?.length === 0
              ? (event.target.placeholder = 'enter your name')
              : void 0
          }
          className="retro-font self-center w-5/6 text-white py-10 px-6 text-grey-darkest text-center md:text-3xl sm:text-2xl rounded-md bg-gray-800 border-dashed placeholder-white border-4"
        />
        <Categories
          selectTopics={(topic: string[]) => setSelectedTopics([...topic])}
          selectedTopics={selectedTopics}
          allTopics={allTopics}
        />
      </div>
      <div className="retro-font text-yellow-300 md:text-3xl sm:text-2xl w-screen flex">
        <button className="text-center w-screen" onClick={() => startGame()}>
          Start
        </button>
      </div>
    </>
  )
}
