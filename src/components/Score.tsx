import React from 'react'

type ScoreProps = {
  score: string
}

export function Score({ score }: ScoreProps) {
  return (
    <div className="text-gray-500 md:text-6xl text-3xl md:mt-10 m-5">
      {score}
    </div>
  )
}
