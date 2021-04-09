import { Result } from './Quiz'
import {
  BarChart,
  LineChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from 'recharts'

type ResultsProps = {
  results: Result[]
}

type LevelSummary = {
  name: string
  level: number
  correct: number
  wrong: number
}

export function Results({ results }: ResultsProps) {
  return (
    <div className="flex flex-col w-screen md:m-10 m-3">
      <div className="md:text-3xl self-center">
        <div className="font-retro text-center m-10">Summary</div>

        <div className="font-other m-10 self-center text-center">
          <div>{getTotalCorrect(results)} correct</div>
          <div>{results.length - getTotalCorrect(results)} wrong</div>
          <div>{results.length} questions answered</div>
        </div>
      </div>

      <div className="font-retro text-center m-10">
        Correct/wrong by difficulty
      </div>

      <div className="graph-container self-center md:w-5/6 w-screen">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={mapResultsToLevelSummary(results)}
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
            <Bar dataKey="correct" fill="#6EE7B7" />
            <Bar dataKey="wrong" fill="#FCA5A5" />
          </BarChart>
        </ResponsiveContainer>

        <div className="font-retro text-center m-10">
          Response time by question number
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={getResponseTimes(results)}>
            <XAxis dataKey="question" name="Question number" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line
              type="monotone"
              dataKey="responseTime"
              stroke="#8884d8"
              name="Response time in seconds"
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="font-retro text-center m-10">Breakdown</div>

        <div>
          {results.map((result, index) => {
            return (
              <div key={index}>
                <span>{index + 1} : </span>

                {typeof result.question.question === 'string' ? (
                  <span>{result.question.question} &nbsp;</span>
                ) : (
                  <span>code snippet</span>
                )}

                {result.correctAnswer ? (
                  <span className="font-icons text-green-300">done</span>
                ) : (
                  <span className="font-icons text-red-300">close</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function getTotalCorrect(results: Result[]) {
  const correct = results.filter((result) => result.correctAnswer)
  return correct.length
}

function getResponseTimes(results: Result[]) {
  return results.map((res, index) => ({
    question: index,
    responseTime: (res.responseTime / 1000).toFixed(1),
  }))
}

function mapResultsToLevelSummary(results: Result[]) {
  const levelSummaries: LevelSummary[] = []

  results.forEach((result) => {
    const levelSummary = levelSummaries.find(
      (summary) => summary.level === result.question.level
    )
    if (levelSummary) {
      if (result.correctAnswer) {
        levelSummary.correct = levelSummary.correct + 1
      } else {
        levelSummary.wrong = levelSummary.wrong + 1
      }
    } else {
      levelSummaries.push({
        name: `Level ${result.question.level}`,
        level: result.question.level,
        correct: result.correctAnswer ? 1 : 0,
        wrong: result.correctAnswer ? 0 : 1,
      })
    }
  })
  return levelSummaries.sort((a, b) => (a.level > b.level ? 1 : -1))
}
