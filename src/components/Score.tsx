import React from 'react'

type ScoreProps = {
  score: string
}

export function Score({ score }: ScoreProps) {
  return (
    <div className="retro-font md:text-6xl sm:text-3xl text-yellow-300 m-10">
      {score}
    </div>
  )
}
