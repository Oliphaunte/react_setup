import React  from 'react'
import { 
  Route, 
  Switch 
} from 'react-router-dom'

import Header       from '~/app/views/components/layout/header'
import Footer       from '~/app/views/components/layout/footer'
import Home         from '~/app/views/pages/layout/home'
import Private      from '~/app/views/pages/private'
import PrivateRoute from '~/app/views/pages/layout/private_route'
import Error404     from '~/app/views/pages/errors/404'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
          
          <Switch>
            <Route exact path='/' component={Home}  />
            <PrivateRoute path='/private' component={Private} />
            <Route path='' component={Error404} />
          </Switch>
        
        <Footer />
      </React.Fragment>
    )
  }
}

export default App