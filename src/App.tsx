import React from 'react'
import './App.css'
import { Timer } from './components/Timer'
import { Categories } from './components/Categories'

export default function App() {
    return (
        <>
            <div className="flex justify-between">
                <Timer time={1000} />
                <div className="retro-font text-6xl text-yellow-300 m-10 ">
                    000000
                </div>
            </div>
            <div className="App flex-col flex m-8 align-middle w-screen h-screen justify-center">
                <input
                    placeholder="enter your name"
                    type="text"
                    onFocus={(event) => (event.target.placeholder = '')}
                    onChange={(event) =>
                        event.target.placeholder?.length === 0
                            ? (event.target.placeholder = 'enter your name')
                            : void 0
                    }
                    className="retro-font self-center w-5/6 text-white border-gray-50 border-4 py-10 px-6 text-grey-darkest text-center text-5xl rounded-md bg-gray-800 border-dashed"
                />
                <Categories />
            </div>
        </>
    )
}
