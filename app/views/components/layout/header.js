import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>This is the header</nav>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/private'>Private</NavLink>
    </header>
  )
}

export default Header