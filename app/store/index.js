import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = function(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    ),
  )
}

export default configureStore