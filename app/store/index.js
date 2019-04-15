import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const 
  loggerMiddleware = createLogger(),
  middlewares = [
    thunkMiddleware,
    loggerMiddleware
  ]

const configureStore = (initialState) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )

export default configureStore