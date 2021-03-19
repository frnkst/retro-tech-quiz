import { Result } from './Quiz'

type ResultsProps = {
  results: Result[]
}

export function Results({ results }: ResultsProps) {
  return (
    <div className="flex flex-col  w-screen">
      <span className="retro-font md:text-3xl self-center">You suck!</span>

      <div className="self-center w-1/4">
        Results: { JSON.stringify(results) }
      </div>
    </div>
  )
}
