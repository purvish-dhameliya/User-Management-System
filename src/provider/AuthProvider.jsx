import React, { useEffect, createContext } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthProviderContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const loginUser = JSON.parse(localStorage.getItem('loginUser'))
  useEffect(() => {
    if (loginUser) {
      setIsLogin(true)
      setUser(loginUser)
    }
    else {
      setIsLogin(false)
      navigate("/login");
    }
  }, [loginUser, isLogin, navigate])

  const value = useMemo(
    () => ({
      user,
      setUser,
      isLogin,
      setIsLogin,
    }),
    [user, isLogin]
  )
  return (
    <>
      <AuthProviderContext.Provider value={value}>
        {children}
      </AuthProviderContext.Provider>
    </>
  )
}

export default AuthProvider
