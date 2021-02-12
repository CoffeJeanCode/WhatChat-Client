import { createContext, useContext, useReducer } from 'react';

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

const Store = createContext({})

export const useStore = () => useContext(Store)

export const StoreProvider = ({ children }) => {
  const store = useReducer(reducer, intialState)
  return <Store.Provider value={store}>{children}</Store.Provider>
}
