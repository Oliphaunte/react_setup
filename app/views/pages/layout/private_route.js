import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (  
  <Route {...rest} render={props => (
    auth.isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
        }}
      />
    )
  )} />
)

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))