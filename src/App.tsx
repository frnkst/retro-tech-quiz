import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Start } from './components/Start'
import { Game } from './components/Game'
import { getAllQuestions } from './components/Categories'

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/questions">
            <Game allQuestions={getAllQuestions()} />
          </Route>
          <Route exact path="/">
            <Start />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
