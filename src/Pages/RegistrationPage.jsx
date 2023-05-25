import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-router-dom";

import { toast } from 'react-toastify'
import { authUser } from '../services/UsersApi'

const RegistrationPage = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  
 
  const onSubmit = async (_data) => {
        authUser({username: _data.username,password: _data.password})
       .then((res) => {
        if (res?.status === 200) {
          navigate('/dashboard');
          localStorage.setItem('_token', res.data.token)
          localStorage.setItem('loginUser', JSON.stringify(res.data))
          toast.success('You have successfully logged in')
        }
        else {
          toast.error('Incorrect username or password')
        }
      })
      .catch((err) => {
        console.log('login', err)
      })
  }

  return (
    <>
      <div className='mt-3'>
        <h2>Registration Page</h2>
        <div className='mt-3'>
          <form className='w-25' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
              <label htmlFor='exampleFormControlInput3' className='form-label'>
                Username
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleFormControlInput3'
                placeholder='Please enter password'
                {...register('username', { required: false })}
              />
              <span className='text-danger'>
                {errors.username && errors.username.type === 'required' && (
                  <>Please enter userName</>
                )}
              </span>
            </div>

            {/* <div className='mb-3'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Please enter your first name'
                {...register('email', { required: true })}
              />
              <span className='text-danger'>
                {errors.email && errors.email.type === 'required' && (
                  <>Please enter email</>
                )}
              </span>
            </div> */}
            <div className='mb-3'>
              <label htmlFor='exampleFormControlInput2' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleFormControlInput2'
                placeholder='Please enter password'
                {...register('password', { required: true })}
              />
              <span className='text-danger'>
                {errors.password && errors.password.type === 'required' && (
                  <>Please enter password</>
                )}
              </span>
            </div>
            <div className='mb-3'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegistrationPage
