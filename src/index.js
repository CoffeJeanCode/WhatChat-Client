import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'

import { StoreProvider } from './store'

import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
