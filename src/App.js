import { lazy, Suspense } from 'react';
import Loader from './components/Loader'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

const Join = lazy(() => import('./pages/Join'))
const Chat = lazy(() => import('./pages/Chat'))

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Join} />
            <Route path="/chat" component={Chat} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App
