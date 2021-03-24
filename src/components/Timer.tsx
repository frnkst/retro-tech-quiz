import React, { useState } from 'react'
import { useInterval } from '../custom-hooks/use-interval'

type TimerState = {
  time: number
}

type TimerProps = TimerState

export function Timer({ time }: TimerProps) {
  const [currentTime, setTime] = useState(time)

  useInterval(
    () => {
      setTime(currentTime - 1)
    },
    currentTime > 0 ? 1000 : null
  )

  return (
    <>
      <div className="md:text-6xl text-3xl text-gray-500 md:mt-10 m-5">
        {formatTime(currentTime)}
      </div>
    </>
  )
}

function formatTime(timeInSeconds: number) {
  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = timeInSeconds % 60
  return `${minutes < 10 ? '0' + minutes : minutes}:${
    seconds < 10 ? '0' + seconds : seconds
  }`
}
