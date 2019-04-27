import React, { useEffect } from 'react'
import { connect } from 'react-redux' 
import { fetchAuth } from '~/app/store/auth/actions'

const LoginPage = (props) => {
  useEffect(() => {
    props.fetchAuth()
  })

  return (
    <main>
      <section>
        <div>Login Page</div>
      </section>
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchAuth: () => dispatch(fetchAuth())
})

export default connect(null, mapDispatchToProps)(LoginPage)