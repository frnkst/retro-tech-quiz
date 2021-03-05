import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Start } from './components/Start'
import { Quiz } from './components/Quiz'
import { getAllQuestions } from './components/Categories'

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/questions">
            <Quiz allQuestions={getAllQuestions()} />
          </Route>
          <Route exact path="/">
            <Start />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
