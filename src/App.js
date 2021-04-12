import { lazy, Suspense, useEffect } from 'react'
import Loader from './components/Loader'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { useLocalStorage } from './hooks/useLocalStorage'

const Join = lazy(() => import('./pages/Join'))
const Chat = lazy(() => import('./pages/Chat'))

function App() {
  const [color, setColor] = useLocalStorage('color', '#009e5a')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.style.setProperty('--main', color)
  }, [color])

  return (
    <div className="App">
      {location.pathname !== '/chat' && (
        <div className="colorChangeWrapper">
          <input
            className="changeColor"
            type="color"
            value={color}
            onChange={(evt) => {
              setColor(evt.target.value)
            }}
          />
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Join} />
          <Route path="/chat" component={Chat} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
