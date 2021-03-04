import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Start } from './components/Start'
import { Questions } from './components/Questions'
import { getAllCategories } from './components/Categories'

export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/questions">
                        <Questions categories={getAllCategories()} />
                    </Route>
                    <Route exact path="/">
                        <Start />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
