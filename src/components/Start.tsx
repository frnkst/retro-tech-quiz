import { Timer } from './Timer'
import { Categories, getAllQuestions } from './Categories'
import { useHistory } from 'react-router-dom'
import React from 'react'
import { Score } from './Score'

export function Start() {
  const history = useHistory()

  function startGame() {
    history.push('/questions', { topics: getAllQuestions() })
  }

  return (
    <>
      <div className="flex justify-between">
        <Timer time={1000} />
      </div>
      <Score score={'000000'} />
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
        <Categories />
      </div>
      <div className="retro-font text-yellow-300 md:text-3xl sm:text-2xl w-screen flex">
        <button className="text-center w-screen" onClick={() => startGame()}>
          Start
        </button>
      </div>
    </>
  )
}
