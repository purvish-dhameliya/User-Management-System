import React from 'react'
import ReactDOM from 'react-dom/client'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';

import 'tui-image-editor/dist/tui-image-editor.css'
import 'tui-color-picker/dist/tui-color-picker.css'

import NotFound from './Pages/NotFound'
import Layout from './layout/Layout'
import RegistrationPage from './Pages/RegistrationPage'
import LocalStorageProvider from './provider/LocalStorageContainer'
import AuthProvider from './provider/AuthProvider'
import Dashboard from './Pages/Dashboard'
import ProfileCard from './Pages/ProfileCard'
import UserList from './Pages/UserList'
import ViewData from './Pages/ViewData'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LocalStorageProvider>
          <Container>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='/login' element={<RegistrationPage />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/userlist' element={<UserList />} />
                  <Route path='/profile' element={<ProfileCard />} />
                  <Route path='/view' element={<ViewData />} />
                  <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </Container>
          <ToastContainer />
        </LocalStorageProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
