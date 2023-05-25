import { Button, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const LoggedInMenu = ({ handleLogout }) => {
  return (
    <>
        <Nav className='me-auto'>
          <NavLink className='nav-link' to='/dashboard'>
            Dashboard
          </NavLink>
          <NavLink className='nav-link' to='/userlist'>
            UserList
          </NavLink>
          <NavLink className='nav-link' to='/profile'>
            Profile
          </NavLink>
          <Button type='submit' onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
    </>
  )
}

export default LoggedInMenu
