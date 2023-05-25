import React from 'react'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

import { getUserList } from '../services/UsersApi'

const ViewData = () => {
  const [userList, setUserList] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    ;(async function () {
      setUserList(await getUserList())
    })()
    setTimeout(() => {
      setloading(true)
    }, 500)
  }, [userList])

  const findDataById = id => {
    return userList.find(user => user.id === id)
  }
  const userData = findDataById(1)

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row '></div>
        {!loading ? (
          <ReactLoading
            className='d-flex justify-content-center'
            type='bars'
            color='blue'
            height={'20%'}
            width={'20%'}
          />
        ) : (
          <table className='table mt-4'>
            <thead className='mt-4'>
              <tr>
                <th scope='col'>Zipcode</th>
                <th scope='col'>city</th>
                <th scope='col'>suite</th>
                <th scope='col'>street</th>
              </tr>
            </thead>
            <tbody>
              {userData && (
                <tr key={userData.id}>
                  <td>{userData.address.zipcode}</td>
                  <td>{userData.address.city}</td>
                  <td>{userData.address.suite}</td>
                  <td>{userData.address.street}</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default ViewData
