import * as React from 'react'
import Loader from './components/Loader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Join = React.lazy(() => import('./pages/Join'))
const Chat = React.lazy(() => import('./pages/Chat'))

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Join} />
            <Route path="/chat" component={Chat} />
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  )
}

export default App
