import React from 'react'
import './App.css'
import { Timer } from './components/Timer'
import { Categories } from './components/Categories'

export default function App() {
    return (
        <>
            <div className="flex justify-between">
                <Timer time={1000} />
                <div className="retro-font text-6xl text-yellow-300 m-10">
                    000000
                </div>
            </div>
            <div className="retro-font text-yellow-300 text-6xl w-screen flex py-10">
                <div className="text-center w-screen">Are you ready?</div>
            </div>
            <div className="App flex-col flex align-middle w-screen justify-center">
                <input
                    placeholder="Name"
                    type="text"
                    onFocus={(event) => (event.target.placeholder = '')}
                    onChange={(event) =>
                        event.target.placeholder?.length === 0
                            ? (event.target.placeholder = 'Name')
                            : void 0
                    }
                    className="retro-font self-center w-5/6 text-white py-10 px-6 text-grey-darkest text-center text-3xl rounded-md bg-gray-800 border-dashed placeholder-white"
                />
                <Categories />
            </div>
            <div className="retro-font text-yellow-300 text-3xl w-screen flex">
                <div className="text-center w-screen">Let me in</div>
            </div>
        </>
    )
}
