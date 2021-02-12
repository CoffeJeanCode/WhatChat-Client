import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom'

import App from './App'

import { StoreProvider } from './store'

import './styles/index.css'

ReactDOM.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root'),
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
