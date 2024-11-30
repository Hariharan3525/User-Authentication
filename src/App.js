import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<ProtectedRoute roles={['admin']}><AdminDashboard/></ProtectedRoute>}/>
        <Route path='/user' element={<ProtectedRoute roles={['user','admin']}><UserDashboard/></ProtectedRoute>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App