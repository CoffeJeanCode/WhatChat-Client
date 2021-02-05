import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import io from 'socket.io-client'

import Join from './pages/Join'
import Chat from './pages/Chat'
import { useStore } from './store'

const ENDPOINT = 'https://chattie-sockets.herokuapp.com/'

function App() {
  const [, dispatch] = useStore()

  React.useEffect(() => {
    const socket = io(ENDPOINT)
    dispatch({ type: 'SET_SOCKETS', payload: socket })
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Join} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
