import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import myFirstReducer from './Reducer/reducer.jsx'
import mySecondReducer from './Reducer/reducer1.jsx'
import mySaga from '../src/Saga/saga.jsx'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({myFirstReducer, mySecondReducer})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
