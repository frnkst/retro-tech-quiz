import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Start } from './components/Start'
import { Questions } from './components/Questions'

export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/questions">
                        <Questions />
                    </Route>
                    <Route exact path="/">
                        <Start />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
