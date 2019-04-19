import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

const
  initialState = {},
  loggerMiddleware = createLogger(),
  middleware = [
    ...getDefaultMiddleware(),
    loggerMiddleware
  ]

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState 
})

export default store