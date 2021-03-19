import React from 'react'

type ScoreProps = {
  score: string
}

export function Score({ score }: ScoreProps) {
  return (
    <div className="m-10 text-gray-500 retro-font lg:text-4xl md:text-3xl sm:text-2xl">
      {score}
    </div>
  )
}
