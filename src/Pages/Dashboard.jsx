import React, { useEffect, useState } from 'react'
import { getUserList } from '../services/UsersApi'
import { Card } from 'react-bootstrap'


const Dashboard = () => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    (async function () {
      const userData = await getUserList()
      setUserList(userData)
    })()
  }, [])

  return (
    <>
      <div className='container'>
        <div>
          <div className='pt-4'>
            <h2>User Management System</h2>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <Card>
                  <Card.Body>
                    <h4>Total User</h4>
                    <h5>{userList?.total}</h5>
                  </Card.Body>
                </Card>
              </div>
              <div className='col-12 col-md-6'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
