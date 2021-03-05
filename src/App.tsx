import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Start } from './components/Start'
import { Game } from './components/Game'

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/questions">
            <Game />
          </Route>
          <Route exact path="/">
            <Start />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
