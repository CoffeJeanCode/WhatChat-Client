import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import io from 'socket.io-client'

import Join from './pages/Join'
import Chat from './pages/Chat'
import { useStore } from './store'

// const ENDPOINTx = 'https://chattie-sockets.herokuapp.com/'
const ENDPOINT = 'http://localhost:4000/'

function App() {
  const [, dispatch] = useStore()

  React.useEffect(() => {
    dispatch({ type: 'SET_SOCKETS', payload: io(ENDPOINT) })
  }, [])
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  )
}

export default App
