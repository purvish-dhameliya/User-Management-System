import React from 'react'

export const LocalStorageContext = React.createContext()

const LocalStorageContainer = ({ children }) => {
  
  const setLoginToken = _token => {
    localStorage.setItem('_token', _token)
  }

  const getLoginToken = _token => {
    return localStorage.getItem('_token')
  }

  const checkIsLogin = () => {
    const isLogin = localStorage.getItem('_token')
    if (isLogin) {
      return true
    }
    return false
  }

  return (
    <LocalStorageContext.Provider
      value={{
        setLoginToken,
        getLoginToken,
        checkIsLogin
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  )
}

export default LocalStorageContainer
