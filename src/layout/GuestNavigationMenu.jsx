import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const GuestNavigationMenu = () => {
  return (
    <Nav className='me-auto'>
      <NavLink className='nav-link' to='/'>
        Home
      </NavLink>
      <NavLink className='nav-link' to='/about-us'>
        About Us
      </NavLink>
      <NavLink className='nav-link' to='/login'>
        Login
      </NavLink>
    </Nav>
  )
}

export default GuestNavigationMenu
