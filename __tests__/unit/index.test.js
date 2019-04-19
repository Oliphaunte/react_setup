import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import App from '~./app/views/app'
import store from '~./app/store'

const supportsHistory = 'pushState' in window.history

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL} forceRefresh={!supportsHistory}>
          <App />
      </BrowserRouter>
    </Provider>, div
  )

  ReactDOM.unmountComponentAtNode(div)
})