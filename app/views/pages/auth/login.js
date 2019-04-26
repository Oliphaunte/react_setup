import React, { useEffect } from 'react'
import { connect } from 'react-redux' 
import { fetchAuth } from '~/app/store/auth'

const LoginPage = (props) => {
  useEffect(() => {
    props.fetchAuth()
  })

  return (
    <section>
      <div>Login Page</div>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchAuth: () => dispatch(fetchAuth())
})

export default connect(null, mapDispatchToProps)(LoginPage)