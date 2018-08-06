import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Error404 = () => {
  return(
    <main className='t__error-page'>
      <section className='error-page error-page__container'>
        <div class='o__error-404'>
          <p> Sorry! There's nothing to see here!</p>
          <Link to='/'>Click here to go back to main page</Link>
        </div>
      </section>
    </main>
  )
}

export default Error404