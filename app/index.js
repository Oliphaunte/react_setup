import React                            from 'react'
import ReactDOM                         from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// Store
import { Provider }                     from 'react-redux'
import configureStore                   from './store'

import serviceWorkers from '~/app/assets/js/service_workers'

import App  from '~/app/views/app'

// Styles
import './assets/css/app.scss'

const store = configureStore()
const supportsHistory = 'pushState' in window.history

if (typeof window !== 'undefined') {
  ReactDOM.render (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL} forceRefresh={!supportsHistory}>
        <App />
      </BrowserRouter>
    </Provider>, 
    document.getElementById('app')
  )
}

if (process.env.NODE_ENV === 'production') {
  serviceWorkers.register()
}
