import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [hamburgerActive, toggleHamburger] = useState(false)

  return (
    <header className='t__project-header'>
      <h1 className='project-header-logo'>project</h1>
      <form className='project-header-search'>
        <input type='text' />
        {/* <input type='submit' /> */}
      </form>

      <article className='project-header-hamburger'>
        <button 
          type='button'
          className={`button__hamburger ${hamburgerActive ? 'button__hamburger--active' : ''}`} 
          onClick={() => toggleHamburger(!hamburgerActive)}>

          <span />
          <span />
          <span />
        </button>
      </article>

      <CSSTransition 
        in={hamburgerActive} 
        timeout={200}
        unmountOnExit
        classNames='project-header-fade'>
        
        <span className='project-header-fade' onClick={() => toggleHamburger(false)}/>
      </CSSTransition>

      <CSSTransition 
        in={hamburgerActive} 
        timeout={200}
        unmountOnExit
        classNames='project-header-links'>

        <nav className='project-header-links'>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/private'>Private</NavLink>
        </nav>
      </CSSTransition>
    </header>
  )
}

export default Header