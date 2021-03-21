import { Result } from './Quiz'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

type ResultsProps = {
  results: Result[]
}

export function Results({ results }: ResultsProps) {

  const stats = getStats(results)

  return (
    <div className="flex flex-col w-screen m-10">
      <div className="md:text-3xl self-center">
        <div className="font-retro text-center">
          Well done!
        </div>

        <div className="font-other m-10 self-center">
          <div>You answered {stats.totalCorrect} questions correct</div>
          <div>You answered {stats.totalWrong} questions wrong</div>
          <div>You answered {stats.total} questions in total</div>
        </div>

      </div>

      <div className="graph-container self-center w-5/6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={results}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="correct" fill="#72d64b" />
            <Bar dataKey="wrong" fill="#fc5f53" />
          </BarChart>
        </ResponsiveContainer>
    </div>
    </div>
  )
}

type Stats = {
  total: number,
  totalCorrect: number,
  totalWrong: number
}

function getStats(results: Result[]) {
  return results.reduce((acc: Stats, val: Result): Stats => {
    return {
      total: acc.total + val.correct + val.wrong,
      totalCorrect: acc.totalCorrect + val.correct,
      totalWrong: acc.totalWrong + val.wrong
    }
  }, { total: 0, totalCorrect: 0, totalWrong: 0 })
}
