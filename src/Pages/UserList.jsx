import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteUserApi, editUserApi, getUserList } from '../services/UsersApi'
import ReactLoading from 'react-loading'
import { toast } from 'react-toastify'

const UserList = () => {
  const [loading, setLoading] = useState(false)
  const [userList, setUserList] = useState([])
  const [editUser, setEditUser] = useState({})
  const [userDetail, setUserDetail] = useState({})
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true)
      const data = await getUserList();
      setUserList(data.users);
      setLoading(false)
    })()
  }, [])
  const handleDelete = (id) => {
    deleteUserApi(id)
      .then((res) => {
        console.log('Delete', res)
        setUserList(userList.filter((user) => user.id !== id));
      }).catch((error) => {
        toast.error("error deleting", error)
      })
  }
  const onChangeInput = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value })
  }
  const onUpdateUser = (e) => {
    e.preventDefault()
    editUserApi(editUser)
      .then((res) => {
        setUserList(userList.map((user) => {
          if (user.id === editUser.id) {
            return editUser
          } else {
            return user
          }
        }))
        setShow(false)
      }).catch((error) => {
        toast.error("error deleting", error)
      })
  }

  return (
    <>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          {loading ? (
            <ReactLoading
              className='d-flex justify-content-center ms-5'
              type='bars'
              color='blue'
              height={'20%'}
              width={'20%'}
            />
          ) : (
            <table className='table mt-4'>
              <thead className='mt-4'>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>firstName</th>
                  <th scope='col'>age</th>
                  <th scope='col'>username</th>
                  <th scope='col'>University</th>
                  <th scope='col'>Handle</th>
                </tr>
              </thead>
              <tbody>
                {userList?.length > 0 &&
                  userList.map(list => (
                    <tr key={list.id}>
                      <td>{list.id}</td>
                      <td>{list.firstName}</td>
                      <td>{list.age}</td>
                      <td>{list.username}</td>
                      <td>{list.university}</td>
                      <td>
                        <Link to='#'>
                          <Button onClick={() => {
                            setEditUser(list)
                            setShow(true)
                          }} className='m-1'>
                            Edit
                          </Button>
                        </Link>
                        <Link to='#'>
                          <Button
                            onClick={() => {
                              setUserDetail(list)
                              setShow1(true)
                            }
                            }
                            className='m-1'
                          >
                            View
                          </Button>
                        </Link>
                        <Link to='#'>
                          <Button onClick={() => handleDelete(list?.id)} className='m-1'>
                            Delete
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onUpdateUser}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" name='firstName' defaultValue={editUser?.firstName} onChange={onChangeInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Age" name='age' defaultValue={editUser?.age} onChange={onChangeInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="User Name" name='username' defaultValue={editUser?.username} onChange={onChangeInput} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>University</Form.Label>
              <Form.Control type="text" placeholder="University" name='university' defaultValue={editUser?.university} onChange={onChangeInput} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={show1} onHide={() => setShow1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>UserDetails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span><b> Name :</b> {userDetail?.firstName} </span><br/>
          <span><b> Age :</b> {userDetail?.age} </span><br/>
          <span><b> UserName :</b> {userDetail?.username} </span><br/>
          <span><b> UniverSity :</b> {userDetail?.university} </span><br/>
          <span><b> Height :</b> {userDetail?.height} </span><br/>
          <span><b> Width :</b> {userDetail?.weight} </span><br/>
          <span><b> bloodGroup :</b> {userDetail?.bloodGroup} </span><br/>
          <span><b> Email :</b> {userDetail?.email} </span><br/>
          <span><b> Phone No :</b> {userDetail?.phone} </span><br/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default UserList
