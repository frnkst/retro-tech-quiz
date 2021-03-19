import { Result } from './Quiz'

type ResultsProps = {
  results: Result[]
}

export function Results({ results }: ResultsProps) {
  return (
    <div className="flex flex-col  w-screen">
      <span className="font-retro md:text-3xl self-center">You rock!</span>

      <div className="self-center w-1/4">
        Results: { JSON.stringify(results) }
      </div>
    </div>
  )
}
