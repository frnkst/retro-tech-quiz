import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Result } from './Quiz'

type ResultsProps = {
  results: Result[]
}

export function Results({ results }: ResultsProps) {

  return (
    <div className="flex flex-col  w-screen">
      <span className="retro-font md:text-3xl self-center">You suck!</span>

      <div className="bg-gray-800 graph-container self-center">
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
            <Bar dataKey="correct" stackId="a" fill="#72d64b" />
            <Bar dataKey="wrong" stackId="a" fill="#fc5f53" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}
