import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

import LoggedInMenu from './LoggedInMenu'
import GuestNavigationMenu from './GuestNavigationMenu'
import { AuthProviderContext } from '../provider/AuthProvider'
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
  let navigate = useNavigate()
  const { user, isLogin, setUser, setIsLogin } = useContext(AuthProviderContext);
  
  const handleLogout = (e) => {
    e.preventDefault()
    setIsLogin(false)
    setUser({})
    localStorage.clear()
    navigate('/login')
  }

   return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container className='m-1'>
          <Navbar.Brand>
            {user ? user.username : 'Navbar'}
          </Navbar.Brand>
          {console.log('isLogin',isLogin)}
          {isLogin && <LoggedInMenu handleLogout={handleLogout} />}
          {!isLogin && <GuestNavigationMenu />}
        </Container>
      </Navbar>
      {<Outlet />}
      {children}
    </>
  )
}

export default Layout
