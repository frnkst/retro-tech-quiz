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
  Line,
} from 'recharts'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import { maxBy, meanBy, minBy } from 'lodash'

type ResultsProps = {
  results: Result[]
}

type LevelSummary = {
  name: string
  level: number
  correct: number
  wrong: number
}

type sumByTopic = {
  topic: string
  absoluteCorrect: number
  total: number
  percentage?: number
  fullMark: 100
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
          <div>
            average response time{' '}
            {(meanBy(results, 'responseTime') / 1000).toFixed(0)} seconds
          </div>
          <div>fastest response was {getMinResponseTime(results)} seconds</div>
          <div>slowest response was {getMaxResponseTime(results)} seconds</div>
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
      </div>

      {mapToStrengths(results).length >= 3 && (
        <>
          <div className="font-retro text-center m-10">Strengths</div>

          <div className="graph-container self-center md:w-5/6 w-screen">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={mapToStrengths(results)}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="topic" />
                <PolarRadiusAxis />
                <Radar
                  name="Mike"
                  dataKey="percentage"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      <div className="font-retro text-center m-10">Response times</div>

      <div className="graph-container self-center md:w-5/6 w-screen">
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
      </div>

      <div className="font-retro text-center m-10">All questions</div>

      <div className="graph-container self-center md:w-5/6 w-screen">
        {results.map((result, index) => {
          return (
            <div key={index}>
              <span>{index} : </span>

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

function getMinResponseTime(results: Result[]) {
  const min = minBy(results, 'responseTime')
  return min ? (min.responseTime / 1000).toFixed(0) : ''
}

function getMaxResponseTime(results: Result[]) {
  const max = maxBy(results, 'responseTime')
  return max ? (max.responseTime / 1000).toFixed(0) : ''
}

function mapToStrengths(results: Result[]) {
  const sumByTopics: sumByTopic[] = []

  results.forEach((result) => {
    const sumByTopic = sumByTopics.find(
      (sumByTopic) => sumByTopic.topic === result.topic
    )
    if (sumByTopic) {
      if (result.correctAnswer) {
        sumByTopic.absoluteCorrect = sumByTopic.absoluteCorrect + 1
      }
      sumByTopic.total = sumByTopic.total + 1
    } else {
      sumByTopics.push({
        topic: result.topic,
        absoluteCorrect: 1,
        total: 1,
        fullMark: 100,
      })
    }
  })

  sumByTopics.forEach((sumByTopic) => {
    sumByTopic.percentage =
      (sumByTopic.fullMark / sumByTopic.total) * sumByTopic.absoluteCorrect
  })

  return sumByTopics
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
