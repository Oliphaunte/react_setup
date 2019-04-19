import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Header = React.lazy(() => import('~/app/views/components/layout/header'))
const Footer = React.lazy(() => import('~/app/views/components/layout/footer'))
const Home = React.lazy(() => import('~/app/views/pages/layout/home'))
const Private = React.lazy(() => import('~/app/views/pages/private'))
const PrivateRoute = React.lazy(() => import('~/app/views/pages/layout/private_route'))
const Error404 = React.lazy(() => import('~/app/views/pages/errors/404'))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/private' component={Private} />
          <Route path='' component={Error404} />
        </Switch>

        <Footer />
      </Suspense>
    )
  }
}

export default App
