import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)

const Store = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)

export default Store
