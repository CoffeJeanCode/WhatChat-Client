import * as React from 'react'

const intialState = {
  sockets: null,
  color: '',
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_SOCKETS':
      return { ...state, sockets: action.payload }
  }
}

const Store = React.createContext({})

export const useStore = () => React.useContext(Store)

export const StoreProvider = ({ children }) => {
  const store = React.useReducer(reducer, intialState)
  return <Store.Provider value={store}>{children}</Store.Provider>
}
