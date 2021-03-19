import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Start } from './components/Start'
import { Quiz } from './components/Quiz'

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/questions">
            <Quiz />
          </Route>
          <Route exact path="/">
            <Start />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
